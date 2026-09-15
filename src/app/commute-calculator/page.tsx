"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";

type CompareResponse = {
  requestId: string;
  origin: string;
  locations: Array<{
    id: string;
    name: string;
    status: string;
    address: string | null;
    calculationStatus: string;
    outbound?: { durationSeconds: number };
    return?: { durationSeconds: number };
    totalMinutes?: number;
    actions: Array<{ label: string; url: string }>;
  }>;
};

export default function CommuteCalculator() {
  const [zip, setZip] = useState("");
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [outboundLocalTime, setOutboundLocalTime] = useState("15:30");
  const [returnLocalTime, setReturnLocalTime] = useState("18:30");
  const [preferredLimit, setPreferredLimit] = useState("30");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<CompareResponse | null>(null);

  const formatTime = (time24: string) => {
    const [h, m] = time24.split(":");
    const hours = parseInt(h);
    const suffix = hours >= 12 ? "PM" : "AM";
    const hours12 = hours % 12 || 12;
    return `${hours12}:${m} ${suffix}`;
  };

  const handleCompare = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let normalizedZip = zip.trim();
    if (/^\d{5}-\d{4}$/.test(normalizedZip)) {
      normalizedZip = normalizedZip.slice(0, 5);
      setZip(normalizedZip);
    }
    
    if (!/^\d{5}$/.test(normalizedZip)) {
      setError("Enter a valid 5-digit US ZIP code.");
      return;
    }
    
    setError("");
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/commute/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ zip: normalizedZip, date, outboundLocalTime, returnLocalTime }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Drive-time estimates are temporarily unavailable. Please try again.");
      }
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const limitMinutes = parseInt(preferredLimit);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 text-bravo-dark font-sans">
      <header className="w-full py-6 px-8 border-b bg-white border-bravo-purple/20">
        <h1 className="text-2xl font-bold tracking-tight text-bravo-purple">Bravo Rhythmic</h1>
      </header>

      <main className="flex-1 w-full max-w-5xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-4">Compare Your Drive to Bravo</h1>
        <p className="text-lg text-bravo-dark/70 mb-8 max-w-2xl">
          Enter your ZIP code to estimate the drive to Bravo Redwood City and our Santa Clara location. Compare your trip to class with the evening drive back.
        </p>

        <form onSubmit={handleCompare} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 bg-white p-6 rounded-2xl shadow-sm border border-zinc-100">
          <div className="space-y-2">
            <Label htmlFor="zip">Your ZIP code</Label>
            <Input id="zip" value={zip} onChange={(e) => setZip(e.target.value)} placeholder="94025" inputMode="numeric" maxLength={10} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="outbound">Leave for class</Label>
            <Input id="outbound" type="time" value={outboundLocalTime} onChange={(e) => setOutboundLocalTime(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="return">Leave the gym</Label>
            <Input id="return" type="time" value={returnLocalTime} onChange={(e) => setReturnLocalTime(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Preferred maximum</Label>
            <Select value={preferredLimit} onValueChange={setPreferredLimit}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="20">20 minutes each way</SelectItem>
                <SelectItem value="30">30 minutes each way</SelectItem>
                <SelectItem value="45">45 minutes each way</SelectItem>
                <SelectItem value="60">60 minutes each way</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="lg:col-span-4 pt-2">
            <Button type="submit" disabled={loading} className="w-full md:w-auto bg-bravo-purple hover:bg-bravo-purple/90 text-white rounded-full px-8">
              {loading ? "Calculating drive times..." : "Compare drive times"}
            </Button>
            {error && <p className="text-red-500 text-sm mt-3">{error}</p>}
          </div>
        </form>

        <p className="text-sm text-zinc-500 mb-8">
          Times are shown in Pacific Time. Choose a date and departure times that match your family&apos;s plans.
        </p>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-50">
            <Card className="h-64 animate-pulse bg-zinc-200 border-none"></Card>
            <Card className="h-64 animate-pulse bg-zinc-200 border-none"></Card>
          </div>
        )}

        {result && (
          <div className="space-y-6">
            <div className="text-sm text-zinc-600 font-medium">
              Starting area: <span className="font-semibold text-black">{result.origin}</span> · Estimates start from a representative point in your ZIP area, not your exact home or school.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {result.locations.map((loc) => {
                const isPending = loc.calculationStatus === "address_pending";
                
                let outMins = 0;
                let retMins = 0;
                let exceedsOut = false;
                let exceedsRet = false;

                if (loc.outbound && loc.return) {
                  outMins = Math.max(1, Math.ceil(loc.outbound.durationSeconds / 60));
                  retMins = Math.max(1, Math.ceil(loc.return.durationSeconds / 60));
                  exceedsOut = outMins > limitMinutes;
                  exceedsRet = retMins > limitMinutes;
                }

                return (
                  <Card key={loc.id} className="flex flex-col border-zinc-200 shadow-sm overflow-hidden">
                    <CardHeader className={`border-b ${isPending ? 'bg-zinc-50' : 'bg-bravo-light/30'} pb-4`}>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-bravo-dark">{loc.name}</CardTitle>
                          <p className="text-sm text-zinc-500 mt-1">{loc.address || "Address to be confirmed"}</p>
                        </div>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${isPending ? 'bg-amber-100 text-amber-800' : 'bg-green-100 text-green-800'}`}>
                          {loc.status === "reopening" ? "Reopening soon" : "Open"}
                        </span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-1 pt-6">
                      {isPending ? (
                        <p className="text-zinc-500 italic py-8 text-center">
                          Drive-time estimates will appear once the address is confirmed.
                        </p>
                      ) : (
                        <div className="space-y-6">
                          <div>
                            <p className="text-sm font-semibold text-bravo-dark mb-1">To the gym <span className="text-zinc-400 font-normal ml-2">Leave at {formatTime(outboundLocalTime)}</span></p>
                            <p className="text-2xl font-bold text-bravo-purple">About {outMins} min</p>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-bravo-dark mb-1">Back to your ZIP area <span className="text-zinc-400 font-normal ml-2">Leave at {formatTime(returnLocalTime)}</span></p>
                            <p className="text-2xl font-bold text-bravo-purple">About {retMins} min</p>
                          </div>
                          
                          <div className="pt-4 border-t border-zinc-100">
                            <p className="font-semibold text-bravo-dark mb-1">Total driving: about {loc.totalMinutes} min</p>
                            
                            {(exceedsOut || exceedsRet) ? (
                              <p className="text-sm text-amber-600 font-medium">
                                {exceedsOut && exceedsRet ? "Both trips exceed your preferred limit." : (exceedsOut ? "The trip to the gym exceeds your preferred limit." : "The return trip exceeds your preferred limit.")}
                              </p>
                            ) : (
                              <p className="text-sm text-green-600 font-medium">Within your preferred limit</p>
                            )}

                            {(outMins > 120 || retMins > 120) && (
                              <p className="text-sm text-amber-600 font-medium mt-1">This is a long drive for a regular class. Check your exact route before planning a visit.</p>
                            )}
                          </div>
                        </div>
                      )}
                    </CardContent>
                    
                    <CardFooter className="bg-zinc-50 border-t p-4">
                      {loc.actions.map(action => (
                        <Button key={action.label} asChild variant={isPending ? "outline" : "default"} className="w-full">
                          <a href={action.url} target="_blank" rel="noopener noreferrer">{action.label}</a>
                        </Button>
                      ))}
                    </CardFooter>
                  </Card>
                );
              })}
            </div>

            <p className="text-xs text-zinc-400 text-center max-w-3xl mx-auto mt-8">
              Traffic estimates can change. Your exact starting address may change the drive. Parking, walking, and class time are not included. This tool does not confirm class availability.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
