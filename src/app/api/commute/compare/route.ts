import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { zip, date, outboundLocalTime, returnLocalTime } = body;

    if (!zip || !/^\d{5}$/.test(zip)) {
      return NextResponse.json({ error: 'Invalid ZIP code' }, { status: 400 });
    }

    // Mock API response based on the specification requirements
    // This serves as the server adapter for the MVP
    
    // Validate time
    const outboundMinutes = parseInt(outboundLocalTime.split(':')[0]) * 60 + parseInt(outboundLocalTime.split(':')[1]);
    const returnMinutes = parseInt(returnLocalTime.split(':')[0]) * 60 + parseInt(returnLocalTime.split(':')[1]);

    if (returnMinutes <= outboundMinutes) {
      return NextResponse.json({
        error: 'Choose a later time to leave the gym'
      }, { status: 400 });
    }

    // Generate mock durations based on the zip code for some variety
    const baseDuration = (parseInt(zip.slice(3, 5)) || 25) * 60; // 15 to 99 mins in seconds
    const returnTrafficFactor = 1.3; 

    const outboundSeconds = baseDuration;
    const returnSeconds = Math.floor(baseDuration * returnTrafficFactor);
    
    const redwoodOutboundMinutes = Math.max(1, Math.ceil(outboundSeconds / 60));
    const redwoodReturnMinutes = Math.max(1, Math.ceil(returnSeconds / 60));
    const redwoodTotal = redwoodOutboundMinutes + redwoodReturnMinutes;

    const mockCities: Record<string, string> = {
      "94025": "Menlo Park",
      "94040": "Mountain View",
      "94041": "Mountain View",
      "94063": "Redwood City",
      "94087": "Sunnyvale",
      "95014": "Cupertino",
      "95050": "Santa Clara",
    };
    const locality = mockCities[zip] || "CA";

    const response = {
      requestId: crypto.randomUUID(),
      computedAt: new Date().toISOString(),
      input: { zip, date, outboundLocalTime, returnLocalTime, timeZone: "America/Los_Angeles" },
      origin: `ZIP ${zip} · ${locality}`,
      locations: [
        {
          id: 'redwood_city',
          name: 'Bravo Redwood City',
          status: 'open',
          address: '2575 E Bayshore Rd, Redwood City, CA 94063',
          calculationStatus: 'ok',
          outbound: {
            status: 'ok',
            durationSeconds: outboundSeconds,
            distanceMeters: 8400,
            departureAt: `${date}T${outboundLocalTime}:00-07:00`
          },
          return: {
            status: 'ok',
            durationSeconds: returnSeconds,
            distanceMeters: 8600,
            departureAt: `${date}T${returnLocalTime}:00-07:00`
          },
          totalMinutes: redwoodTotal,
          actions: [
            { label: 'View classes', url: 'https://bravorhythmic.com/schedulerwc' }
          ]
        },
        {
          id: 'santa_clara',
          name: 'Bravo Santa Clara',
          status: 'reopening',
          address: null,
          calculationStatus: 'address_pending',
          actions: [
            { label: 'Contact us about reopening', url: 'https://bravorhythmic.com/contact' }
          ]
        }
      ],
      attribution: {
        provider: "Mock Routes API",
        logo: null
      }
    };

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
