import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { CtaBlock } from "@/components/CtaBlock";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Meet Bravo’s Coaches: Our Approach to Rhythmic Gymnastics",
  description: "Choosing a rhythmic gymnastics club in the Bay Area? Meet Bravo’s coaches, learn what to look for, and find out how to start with a free trial.",
  path: "/articles/how-to-choose-rhythmic-gymnastics-club"
});

function QuoteBlock({ 
  name, 
  title, 
  text, 
  image 
}: { 
  name: string; 
  title: string; 
  text: string; 
  image: string;
}) {
  return (
    <figure className="not-prose my-10 border-l-4 border-bravo-purple bg-zinc-50 p-6 md:p-8 rounded-r-2xl shadow-sm">
      <blockquote className="text-lg md:text-xl text-zinc-700 italic leading-relaxed mb-6">
        {text}
      </blockquote>
      <figcaption className="flex items-center">
        <div className="w-14 h-14 rounded-full overflow-hidden relative mr-4 shrink-0 bg-zinc-200">
          <Image src={image} alt={name} fill className="object-cover object-top" />
        </div>
        <div className="flex flex-col">
          <a href="https://bravorhythmic.com/about" target="_blank" rel="noopener noreferrer" className="font-semibold text-bravo-purple hover:text-bravo-purple/80 transition-colors">
            {name}
          </a>
          <span className="text-sm text-zinc-500">{title}</span>
        </div>
      </figcaption>
    </figure>
  );
}

export default function ArticlePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-bravo-dark font-sans selection:bg-bravo-purple/20">
      
      {/* Header */}
      <header className="pt-24 pb-12 md:pt-32 md:pb-16 px-6 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="text-bravo-purple hover:underline font-medium text-sm flex items-center mb-8 inline-flex">
            &larr; Back to all articles
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-bravo-purple/10 text-bravo-purple px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              Guides
            </span>
            <span className="text-zinc-500 text-sm">8 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Meet Bravo’s Coaches: Our Approach to Rhythmic Gymnastics
          </h1>
          <div className="flex items-center gap-4 text-zinc-600">
            <div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden relative">
              <Image src="/images/coaches/katya2.jpg" alt="Katya Konovalova" fill className="object-cover object-top" />
            </div>
            <div>
              <p className="font-semibold text-bravo-dark">Katya Konovalova</p>
              <p className="text-sm">September 30, 2026</p>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-3xl mx-auto px-6 py-12 md:py-20 prose prose-lg prose-headings:text-bravo-dark prose-a:text-bravo-purple hover:prose-a:text-bravo-purple/80">
        
        <p className="lead text-xl text-zinc-600 mb-8">
          Choosing a rhythmic gymnastics club means choosing the people who will teach your child, the way they will learn, and the place this activity will have in your family’s week.
        </p>

        <p>
          A convenient location helps. So does a strong competitive record. But the most useful question is personal: <strong>Will this club help my child enjoy learning, build skills step by step, and feel comfortable asking for help?</strong>
        </p>
        <p>
          For parents comparing rhythmic gymnastics clubs in the Bay Area, Bravo deserves a closer look. Here is how to assess a club—and what to explore when you visit ours.
        </p>

        <h2>Start with the experience you want for your child</h2>
        <p>
          Before comparing clubs, think about what brought your child to rhythmic gymnastics. Do they love moving to music? Are they fascinated by ribbons and hoops? Are they looking for a new activity, or do they already want to compete?
        </p>
        <p>
          You do not need a long-term answer before the first lesson. You do need a club that can explain what the first stage of learning will look like.
        </p>
        <p>When visiting any Bay Area club, ask:</p>
        <ul>
          <li>Who will teach my child’s actual class?</li>
          <li>How do you place a beginner in the right group?</li>
          <li>What will they work on during the first few months?</li>
          <li>How do you respond when a child is nervous or finds a skill difficult?</li>
          <li>What changes if they want to train more seriously later?</li>
        </ul>
        <p>
          Listen for clear explanations and realistic expectations. A useful answer describes how a child learns, not simply what the club has won.
        </p>

        <h2>Look for a starting point that matches your child</h2>
        <p>
          At Bravo, beginners start with a trial, and coaches recommend a group based on age, experience, and evaluation. Beginner groups serve ages <strong>4–6 and 6–12</strong>; an intermediate option serves ages <strong>7–12</strong>. Further pathways include invitation-based Pre-Team and Xcel groups with different levels of commitment. <a href="https://bravorhythmic.com/rhythmic-programs" target="_blank" rel="noopener noreferrer">Explore Bravo’s program guidance</a>.
        </p>
        <p>
          That gives a parent something concrete to discuss: what fits now, what progress might look like, and how the schedule could change. Starting an activity should not require deciding a child’s entire sporting future.
        </p>
        <p>
          During a trial, look at whether your child understands the task, gets opportunities to practice, and leaves with a sense of what they have learned. Enjoyment and effort can exist together; the important question is how the coach supports both.
        </p>

        <QuoteBlock 
          name="Olga Kofman" 
          title="Director and head coach"
          image="/images/coaches/olga.jpg"
          text="It is important for us to engage the girl in what we are doing, to show her the possibilities for growth and some interesting tricks with the apparatus—to catch her attention and spark her interest. Yes, from the very first classes, we put rhythmic gymnastics apparatus in their hands and begin learning simple elements with them. The best result for us is when a child asks her parents, 'When are we going back to Bravo for gymnastics?'" 
        />

        <h2>Get to know the people behind the coaching</h2>
        <p>
          Bravo’s <a href="https://bravorhythmic.com/about" target="_blank" rel="noopener noreferrer">coaching biographies</a> give families specific experience to explore:
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-left text-sm md:text-base border-collapse">
            <thead>
              <tr className="bg-zinc-100">
                <th className="p-4 border-b border-zinc-200 font-semibold w-1/3">Team member</th>
                <th className="p-4 border-b border-zinc-200 font-semibold">Background</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-100"><td className="p-4 font-medium">Olga Kofman</td><td className="p-4">Director and head coach; coaching since 2011; six Region 1 Coach of the Year awards.</td></tr>
              <tr className="border-b border-zinc-100 bg-zinc-50"><td className="p-4 font-medium">Katya Konovalova</td><td className="p-4">Santa Clara head coach; former Russian national-team gymnast; three-time Moscow champion; degree specializing in rhythmic gymnastics coaching.</td></tr>
              <tr className="border-b border-zinc-100"><td className="p-4 font-medium">Anastasiya Kornyenko</td><td className="p-4">Former director of Gold Star’s rhythmic program; six Region 1 Coach of the Year awards. Over 20 years of coaching experience.</td></tr>
              <tr className="border-b border-zinc-100 bg-zinc-50"><td className="p-4 font-medium">Marina Kozlova</td><td className="p-4">Former Russian national-team gymnast; 2019 World University Games and European Games gold medalist.</td></tr>
              <tr className="border-b border-zinc-100"><td className="p-4 font-medium">Aksana Laziuk</td><td className="p-4">Coach and ballet instructor with a degree in choreography.</td></tr>
              <tr className="border-b border-zinc-100 bg-zinc-50"><td className="p-4 font-medium">Anastasiia Diakova</td><td className="p-4">Coach and choreographer; Region 6 Coach of the Year in 2025 and 2026. Over 15 years of coaching experience.</td></tr>
              <tr className="border-b border-zinc-100"><td className="p-4 font-medium">Belén Pérez</td><td className="p-4">Over 30 years of dance experience, with a background in rhythmic gymnastics, classical ballet, and choreography.</td></tr>
              <tr className="border-b border-zinc-100 bg-zinc-50"><td className="p-4 font-medium">Anfisa Kupriyanova</td><td className="p-4">Operations manager, former 2016 USA Senior Group National Team member, and Xcel judge.</td></tr>
              <tr className="border-b border-zinc-100"><td className="p-4 font-medium">Kimi Iwasaki</td><td className="p-4">Junior coach; Ranked among the top 25 gymnasts on the U.S. National Team. Coaching since 2022.</td></tr>
              <tr className="border-b border-zinc-100 bg-zinc-50"><td className="p-4 font-medium">Alina Krayzbukh</td><td className="p-4">Junior coach; former Bravo gymnast with state and regional titles. Coaching since 2021.</td></tr>
              <tr className="border-b border-zinc-100"><td className="p-4 font-medium">Leah Terry</td><td className="p-4">Junior coach; Former Level 10 gymnast, Regional Champion, and Gymnast of the Year.</td></tr>
            </tbody>
          </table>
        </div>

        <p>
          Achievements give you a reason to ask more questions. The next step is to meet the coach for the group you are considering and see how that experience translates into instruction your child can understand.
        </p>
        <p>
          Ask for an example: How would the coach introduce a new skill? How would they adapt it if a child were struggling? How would they explain a correction? Those conversations connect a biography to the everyday experience of a class.
        </p>

        <QuoteBlock 
          name="Katya Konovalova" 
          title="Santa Clara head coach"
          image="/images/coaches/katya2.jpg"
          text="From the very early years, we used music in our training. For example, when we learn ball rolls, we choose slow music that works well with smooth movements. When we learn ball bounces and throws, we use stronger music with clear accents and a faster rhythm. This helps girls from the beginning to feel the character of the music and express it through their body and apparatus." 
        />

        <h2>Ask how technique and expression are taught together</h2>
        <p>
          For a child drawn to rhythmic gymnastics, making a movement feel connected to the music can be as exciting as mastering the movement itself.
        </p>
        <p>
          When comparing classes, ask what children learn about rhythm, movement quality, and expression alongside physical skills. Look for explanations suited to their age: a young beginner needs an understandable task, not simply an instruction to “be more artistic.”
        </p>
        <p>
          At a Bravo trial, make this part of the conversation. Ask the coach to explain an exercise you observed and what it is intended to teach. That is a practical way to understand the training approach before committing.
        </p>

        <QuoteBlock 
          name="Aksana Laziuk" 
          title="Coach and ballet instructor"
          image="/images/coaches/aksana.jpg"
          text="Ballet elements are always part of the training for young gymnasts. We like to use both classical and modern music to develop their musical experience. For example, for girls who do not have experience moving to music, we can offer floor exercises with lyrical music, where they can feel the character of the music and show it through smooth movements of the arms, legs, and body." 
        />

        <h2>Understand what happens when a child wants to compete</h2>
        <p>
          If your child becomes interested in competition, ask about readiness before asking about the next level. What skills need to be consistent? How will training frequency change? What should the family expect from the first competition season?
        </p>
        <p>
          A good discussion includes the child’s motivation and the family’s schedule. Progress is easier to support when everyone understands the commitment.
        </p>
        <p>
          Bravo also offers private and semi-private lessons for enrolled gymnasts, subject to coach availability and rates. Ask whether additional instruction would serve a specific learning need, rather than assuming that more lessons are always necessary. <a href="https://bravorhythmic.com/faq" target="_blank" rel="noopener noreferrer">Read about individual instruction</a>.
        </p>

        <QuoteBlock 
          name="Anastasiya Kornyenko" 
          title="Coach"
          image="/images/coaches/anastasiya.jpg"
          text="A gymnast can join a serious competitive training group by invitation from a coach. During regular practices, the coach always notices small individual qualities of each child that can help us consider moving her to the next level. It is important that a gymnast can feel her body, has good potential for flexibility and coordination, and shows independence and strong concentration. Most importantly, we want to see her genuine interest and enjoyment in what she is doing in the gym. Of course, the family’s readiness is also very important, because it is a big responsibility and commitment. As a team—coach and family—we try to make a thoughtful decision together." 
        />

        <h2>What should you compare between Bravo and other Bay Area clubs?</h2>
        <p>
          The useful comparison is the fit between a program and your child. Use the same questions at every club so you can compare specific answers.
        </p>

        <div className="overflow-x-auto my-8">
          <table className="min-w-full text-left text-sm md:text-base border-collapse">
            <thead>
              <tr className="bg-zinc-100">
                <th className="p-4 border-b border-zinc-200 font-semibold w-1/3">What matters</th>
                <th className="p-4 border-b border-zinc-200 font-semibold">What to examine at Bravo and every club you visit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-100"><td className="p-4 font-medium">Teaching</td><td className="p-4">Meet the assigned coach and observe how instructions and corrections are delivered.</td></tr>
              <tr className="border-b border-zinc-100 bg-zinc-50"><td className="p-4 font-medium">Placement</td><td className="p-4">Ask why the recommended group fits your child’s present needs.</td></tr>
              <tr className="border-b border-zinc-100"><td className="p-4 font-medium">Training approach</td><td className="p-4">Ask how a typical class divides its time and why.</td></tr>
              <tr className="border-b border-zinc-100 bg-zinc-50"><td className="p-4 font-medium">Progression</td><td className="p-4">Understand what changes in expectations, cost, and attendance at the next stage.</td></tr>
              <tr className="border-b border-zinc-100"><td className="p-4 font-medium">Communication</td><td className="p-4">Find out whom to contact and how questions or concerns are handled.</td></tr>
              <tr className="border-b border-zinc-100 bg-zinc-50"><td className="p-4 font-medium">Family routine</td><td className="p-4">Test the complete visit, including the return journey, dinner, and homework.</td></tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>The case for choosing Bravo is the combination you can investigate:</strong> the people on the team, the available starting points, and the opportunity to discuss a child’s development before taking on a larger commitment. Use the trial to see whether those strengths translate into the right experience for your family.
        </p>
        <p>
          There is no need to assume that every child wants the same style of instruction or the same sporting future. A thoughtful choice begins with your child’s response to the actual class.
        </p>

        <h2>Make sure the practical details work for your family</h2>
        <p>
          Read the policies before enrolling. Ask about tuition, extra program expenses, missed classes, school breaks, and cancellation. Write down anything that affects your family’s routine and clarify it with the club.
        </p>
        <p>
          Bravo publishes answers to common enrollment questions and uses a parent portal for registration. Its FAQ also explains that cancellations require an email at least two weeks in advance to avoid the following month’s charge. <a href="https://bravorhythmic.com/faq" target="_blank" rel="noopener noreferrer">Review the current FAQ</a>.
        </p>
        <p>
          For families traveling from elsewhere in the Bay Area, test the journey at the time you expect to attend. The nearest club on a map is not automatically the best fit, but the best-looking program on paper still needs a sustainable place in your week.
        </p>
        <p>
          Bravo’s Redwood City location is at <strong>2575 E Bayshore Rd</strong>. <strong>Santa Clara is marked “Coming soon”</strong>; check reopening details before planning a visit there. <a href="https://bravorhythmic.com/about" target="_blank" rel="noopener noreferrer">Check the current location information</a>.
        </p>

        <QuoteBlock 
          name="Anfisa Kupriyanova" 
          title="Operations manager"
          image="/images/coaches/anfisa.jpg"
          text="Before the first visit, it is important to tell us the child’s age and any previous experience in gymnastics or other sports. This helps us choose the right level for the trial class. After the trial, the coach usually gives feedback to the parents and confirms the selected group or recommends another level. Also, any questions or concerns can always be discussed by contacting Bravo by email." 
        />

        <h2>Try a class before you decide</h2>
        <p>
          Bravo offers a <strong>free beginner trial</strong> through its parent portal. Comfortable athletic clothes and a water bottle are recommended; socks are acceptable for the trial. <a href="https://bravorhythmic.com/schedulerwc" target="_blank" rel="noopener noreferrer">See how to book your first class</a>.
        </p>
        <p>
          Use that visit to notice more than whether your child completes every exercise. Do they listen with interest? Do they feel able to ask a question? Can the coach explain what they are working on? Does your child want to return?
        </p>
        <p>
          <strong>Come meet the Bravo team and see how the class feels.</strong> A first visit can turn a list of programs and achievements into something much more useful: a clear sense of whether this is a place where your child can learn and enjoy rhythmic gymnastics.
        </p>
      </main>

      <CtaBlock />

      <section className="bg-zinc-50 py-16 border-t border-zinc-200">
        <div className="max-w-4xl mx-auto px-6">
          <ContactForm />
        </div>
      </section>

    </div>
  );
}
