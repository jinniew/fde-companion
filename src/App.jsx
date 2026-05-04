import { useState, useRef } from "react";

// ─── LIBRARY DATA ─────────────────────────────────────────────────────────────

const LIBRARY = [
  {
    id: "tis", title: "Thinking in Systems", author: "Donella Meadows",
    phase: 1, type: "book", color: "#c8f135", emoji: "📗",
    tagline: "The bible of systems thinking. Read this slowly.",
    chapters: [
      {
        id: "tis-1", num: "Ch. 1", title: "The Basics: Stocks, Flows & Feedback", readTime: "6 min",
        content: `A system is a set of things interconnected in such a way that they produce their own pattern of behavior over time.

**Stocks** are the elements you can see, feel, count, or measure at any given time — water in a bathtub, money in a bank account, trust between people, trees in a forest.

**Flows** are the rates of change: filling and draining, births and deaths, purchasing and selling, growing and decaying. Stocks change only when flows change.

**The key insight:** You can't directly control a stock. You can only influence it by changing its flows. This is why quick fixes often fail — they address symptoms (the stock level) rather than the underlying flows.

**In practice:** Before you try to fix anything, map it. What are the stocks? What are the flows feeding or draining them? Draw it out, even crudely. This one habit will make you a better problem-solver than 90% of people in any room.

**Example at work:** Your team's "technical debt" is a stock. It's fed by flows of rushed code, poor documentation, and skipped reviews. It's drained by refactoring sprints. Most managers try to reduce the stock directly (mandate clean-up weeks) without changing the flows (incentive structures, deadlines) that created it.`
      },
      {
        id: "tis-2", num: "Ch. 2", title: "Feedback: How Systems Self-Correct (or Don't)", readTime: "7 min",
        content: `Feedback loops are the mechanism by which a system regulates itself. There are two types, and understanding them is everything.

**Reinforcing loops (R)** amplify whatever is happening. Growth feeds more growth. Decline accelerates decline. Examples: compound interest, viral spread, panic selling, reputation (good or bad). Reinforcing loops are why small advantages compound and small problems snowball.

**Balancing loops (B)** push back against change and seek a goal or equilibrium. Examples: a thermostat, hunger/eating, market prices finding supply-demand balance, your body temperature. They're stabilizing — but they can also cause frustrating resistance when you're trying to change something.

**Most systems have both.** A company grows (reinforcing loop: revenue → investment → better product → more revenue) until competition or costs push back (balancing loops). The system's behavior emerges from how these loops interact.

**The diagnostic question:** When a system isn't behaving the way you want, ask: what reinforcing loops are making the problem worse? What balancing loops are resisting the fix? Is the goal of the balancing loop set correctly?

**FDE application:** When a customer's system is broken, find the loops. Which feedback is missing? Which balancing loop has the wrong goal? Often the "bug" is a feedback gap — someone added a process but removed the mechanism that told people when it was working.`
      },
      {
        id: "tis-3", num: "Ch. 3", title: "Delays: The Cause of Oscillation", readTime: "5 min",
        content: `Delays between cause and effect are one of the most underappreciated sources of system dysfunction. They cause oscillation, overshoot, and collapse.

**The classic example:** You step into a shower. The water is cold, so you turn up the heat. Nothing happens immediately (delay), so you turn it up more. Then scalding water arrives. You overcorrect the other way. This is oscillation caused by delay.

**In business:** You hire aggressively because work is piling up. But it takes 3–6 months to hire and onboard. By the time new people are productive, the work crunch may have passed — now you're overstaffed. The delay made you overshoot.

**Three types of delays that matter:**

**Information delays** — the gap between something happening and you knowing about it.

**Response delays** — the gap between knowing and acting.

**Effect delays** — the gap between acting and seeing the result.

**The discipline:** When designing systems or interventions, ask: what are the delays? Where might I overshoot because I don't account for lag? The answer is almost always: slow down, act smaller, wait for feedback before the next move.

**FDE lens:** Customer problems are often delay problems. They added a new tool, didn't see results for 60 days, added another tool, still no results, added a third. Now they have three tools and all the problems. The delay masked the signal.`
      },
      {
        id: "tis-4", num: "Ch. 4", title: "System Traps & Archetypes", readTime: "8 min",
        content: `Systems fall into recurring patterns of dysfunction. Meadows calls them "traps." Recognizing the archetype is the first step to escaping it.

**Trap 1: Policy Resistance ("Fixes that Fail")**
Different actors in a system all push to meet their own goals. When goals conflict, each fix creates a counter-reaction. Drug enforcement increases drug prices, which increases crime to pay for drugs, which increases enforcement demand. The system resists change.
Fix: Find and align goals, not just behaviors.

**Trap 2: Tragedy of the Commons**
A shared resource gets overused because each individual benefits from using it but shares the cost of its depletion. Office supplies, shared infrastructure, team energy.
Fix: Regulate access or make depletion visible and personal.

**Trap 3: Drift to Low Performance**
When performance standards are allowed to erode. Bad results lower the perceived standard. "This is just how it is here."
Fix: Anchor standards to an absolute goal, not to recent performance.

**Trap 4: Escalation**
Two actors each responding to the other's growth/threat. Arms races. Price wars.
Fix: Unilaterally disarm, or negotiate to change the structure.

**Trap 5: Success to the Successful**
Two players compete for the same resource. The one ahead gets more access. The gap widens. Winner-take-all dynamics.
Fix: Diversity, fairness in resource distribution.

**Your exercise:** Identify which trap your team or organization is currently in. Name it. That clarity alone is half the solution.`
      },
      {
        id: "tis-5", num: "Ch. 5", title: "Leverage Points: Where to Intervene", readTime: "7 min",
        content: `This is Meadows' most famous contribution. Not all interventions are equal. Some places in a system give you enormous leverage; others are nearly useless.

**Meadows' hierarchy from least to most powerful:**

**12. Numbers** — constants, parameters like tax rates. Almost never change system behavior meaningfully. Everyone fights over these in politics. It's mostly a distraction.

**11. Buffers** — the size of stabilizing stocks. Powerful but hard to change. You can't easily build a new reservoir.

**10–8. Stock-and-flow structures** — physical infrastructure. Hard and slow to change.

**7. Information delays** — fixing these can be very powerful. Make the feedback faster.

**6. Structure of information flows** — who gets what data when. Hugely important. Systems change when information reaches actors who previously didn't have it.

**5. Rules** — incentives, constraints, laws. Very powerful. Changing the rules changes everything.

**4. Power to change rules** — even more powerful. Who controls the rules?

**3. Goals** — what is the system optimizing for? If the goal is wrong, all optimization makes things worse.

**2. Mindset / paradigm** — the shared ideas from which the system arises. Incredibly powerful and incredibly hard to change.

**1. Power to change paradigms** — the rarest and most powerful leverage of all.

**FDE takeaway:** Most people intervene at levels 12–10 (change the numbers, move resources). Great problem-solvers intervene at 7–5 (change information flows, change rules). Ask yourself: am I fighting over the numbers, or am I changing the structure?`
      },
      {
        id: "tis-6", num: "Ch. 6", title: "Living in a World of Systems", readTime: "5 min",
        content: `Meadows closes with principles for navigating a world that is fundamentally complex, non-linear, and resistant to simple fixes.

**Get the information.** Before acting, understand the real flows of information in the system. Most bad decisions come from acting on incomplete or delayed data.

**Expose your mental models.** Every intervention assumes a model of how the system works. Make that model explicit. Then test it. Most models are wrong in important ways.

**Use delays wisely.** Recognize them. Don't overreact to slow feedback. Give interventions time to work before concluding they failed.

**Don't erode goals.** Keep standards anchored to what you actually want, not what you've been getting.

**Expand time horizons.** Short-term optimization routinely creates long-term catastrophe. Ask: what happens in 5 years if this works exactly as planned?

**Identify yourself as part of the system.** You are not an outside observer. You are inside it. Your interventions change the system — including the part that includes you.

**Stay humble.** Complexity defeats certainty. The best systems thinkers are comfortable with not knowing, patient with emergence, and quick to update when reality surprises them.`
      },
    ]
  },
  {
    id: "gmm", title: "The Great Mental Models Vol. 1", author: "Farnam Street",
    phase: 1, type: "book", color: "#c8f135", emoji: "🧠",
    tagline: "The operating system for clear thinking.",
    chapters: [
      {
        id: "gmm-1", num: "Model 1", title: "The Map Is Not the Territory", readTime: "4 min",
        content: `Maps are simplifications of reality. Useful simplifications — but simplifications nonetheless. The moment you confuse your map for the territory, you're in trouble.

**What this means:** Every model, framework, process, org chart, or strategy is a map. It captures something true about reality but omits an enormous amount. The danger is optimizing the map instead of navigating the actual terrain.

**Common failure mode:** A company's org chart says who reports to whom. But the actual flow of information, trust, and decisions looks completely different. Managers who navigate by the org chart alone miss what's actually happening.

**In engineering:** Your architecture diagram is a map. Your system metrics are a map. Your mental model of how the codebase works is a map. All useful. None of them are the system.

**The discipline:** When things stop working, ask: where is my map wrong? What am I not seeing because my model doesn't include it? Get closer to the territory — talk to real users, instrument real systems, walk the actual process.

**For FDEs specifically:** You will arrive at a customer site with a map (their documentation, their sales story, what your team told you). Assume it's wrong in at least one important way. Find that way before you start building.`
      },
      {
        id: "gmm-2", num: "Model 2", title: "First Principles Thinking", readTime: "5 min",
        content: `First principles thinking means breaking a problem down to its fundamental truths and reasoning up from there, rather than reasoning by analogy ("this worked before, so let's do it again").

**Elon Musk's example:** When building rockets, the conventional wisdom was "rockets are expensive." Musk asked: what are rockets made of? Aerospace-grade aluminum, titanium, copper, carbon fiber. What do those materials cost on the commodity market? A fraction of rocket prices. So why are rockets so expensive? Legacy manufacturing processes, risk-aversion, supply chain markups. Conclusion: manufacture them differently. SpaceX cut costs by 10x.

**The method:**
1. Identify your assumptions about the problem
2. Break them down to their fundamentals
3. Ask: what do I know is actually true here?
4. Reconstruct your solution from those truths

**Where it's hard:** It's cognitively expensive. Analogy is faster and usually good enough. First principles is a tool for high-stakes problems where the conventional answer has stopped working.

**The question:** When you're stuck on a problem, ask: "What am I assuming here that I've never actually verified?" That unexamined assumption is usually where the leverage is.`
      },
      {
        id: "gmm-3", num: "Model 3", title: "Inversion", readTime: "4 min",
        content: `Inversion means thinking about problems backwards. Instead of asking "how do I succeed?" ask "what would guarantee failure?" Then avoid those things.

**Why it works:** Our brains are better at spotting failure conditions than constructing success conditions. Forward thinking is optimistic and often misses obvious risks. Backward thinking is skeptical and surfaces what can go wrong.

**Charlie Munger:** "Invert, always invert." He attributed much of his success to thinking about what not to do rather than what to do.

**In practice:**
"How do I build a great product?" → "What would make users hate this product? What would make it unreliable, confusing, or slow? Now eliminate those things."

"How do I have a successful meeting?" → "What would make this meeting a complete waste of time? Agenda-less, no pre-read, no decisions, wrong people. Now invert."

"How do I become an FDE?" → "What behaviors would guarantee I never become one? Can't communicate clearly, can't ship fast, can't think independently. Avoid those."

**The exercise:** Take your most important current goal. Write a list of 5 things that would guarantee you fail at it. Be specific. Then treat that list as your risk register.`
      },
      {
        id: "gmm-4", num: "Model 4", title: "Occam's Razor", readTime: "3 min",
        content: `Among competing explanations, prefer the one with the fewest assumptions. Simpler explanations are more likely to be correct — and more useful even when they're incomplete.

**The principle:** When you have two theories that both explain the evidence, start with the simpler one. Add complexity only when the simple explanation demonstrably fails.

**Why engineers violate this constantly:** When something breaks, smart people construct elaborate theories. "It must be a race condition in the distributed cache triggered by the new deployment interacting with the legacy auth service..." Sometimes. But usually? Someone pushed bad config.

**The discipline:** Before constructing a complex explanation, ask: what's the simplest thing that could explain this? Investigate that first. Only upgrade complexity when simplicity fails.

**Counterpoint:** Complex systems do have complex failure modes. The razor is a starting point, not a rule. If you've ruled out the simple explanations, don't keep searching for them. Follow the evidence up the complexity ladder.

**FDE application:** Customers will always have a complex theory about why their system is broken. Listen to it, then look for the simple thing first.`
      },
      {
        id: "gmm-5", num: "Model 5", title: "Second-Order Thinking", readTime: "5 min",
        content: `First-order thinking asks: "What happens next?" Second-order thinking asks: "And then what?" Most people stop at first-order. That's where the opportunity is.

**Howard Marks:** "First-level thinking is simplistic and superficial, and just about everyone can do it. Second-level thinking is deep, complex, and convoluted."

**Examples of first vs. second-order:**

First: This medication reduces pain. Second: Long-term use creates dependency, which creates a market for stronger alternatives, which creates an opioid crisis.

First: We'll cut costs by laying off 20% of staff. Second: The remaining team burns out and key people leave. Institutional knowledge exits. Hiring costs in 18 months exceed the savings.

First: We'll add this feature because customers are asking for it. Second: It increases complexity, makes the core product harder to learn, and distracts the team from what actually drives retention.

**The question to ask:** "And then what?" Ask it at least twice. Write down the chain. Where does it end up in 6 months? 2 years?

**For FDEs:** When a customer asks for a solution, think second-order before agreeing. Will this fix create new problems? Does it address the root cause or just delay a larger issue? The best FDEs push back constructively because they've run the chain further than the customer has.`
      },
      {
        id: "gmm-6", num: "Model 6", title: "Probabilistic Thinking", readTime: "5 min",
        content: `The world is probabilistic, not deterministic. Great thinkers don't think in certainties — they think in distributions, ranges, and likelihoods.

**The shift:** Instead of "this will work" or "this will fail," ask: "What's the probability this works? Under what conditions? What's my base rate here?"

**Base rates:** The historical frequency of an outcome in a class of similar events. Most people ignore base rates and reason from the specific case. This leads to systematic overconfidence.

Examples of base rates worth knowing:
~90% of startups fail within 10 years. Most software projects run over time and budget. First solutions to complex problems are usually wrong.

**Bayesian updating:** Start with a prior belief. When new evidence arrives, update the belief proportionally to the evidence's strength. Don't flip completely on one data point. Don't ignore strong evidence either.

**In practice:** When making a decision, ask:
1. What's my prior? What's the base rate for this type of outcome?
2. What new information do I have that should update it?
3. How confident am I in that information?

**The mistake to avoid:** Treating a vivid, recent anecdote as strong evidence. Your brain weights memorable events far too heavily. Always ask: is this representative, or is this just memorable?`
      },
    ]
  },
  {
    id: "leverage", title: "Leverage Points (Essay)", author: "Donella Meadows",
    phase: 1, type: "free", color: "#c8f135", emoji: "🎯",
    tagline: "The most important 3,000 words in systems thinking. Free online.",
    chapters: [
      {
        id: "lp-1", num: "Part 1", title: "Places to Intervene in a System", readTime: "5 min",
        content: `This essay is Meadows at her most direct. Written for a policy audience, it became one of the most shared pieces in systems thinking history.

**The central problem:** People spend enormous energy fighting over the parameters of systems — the constants, the subsidies, the targets. But they rarely question the structure of information flows, the rules, or the goals. Parameters are the least powerful lever. Yet they consume almost all political energy.

**Why we fight over parameters:** They're visible. They're quantifiable. Changing a tax rate is comprehensible. Changing the paradigm that says growth is always good — that's threatening. So we argue about numbers and leave the structure untouched.

**The full hierarchy (from least to most powerful):**

12. Numbers — constants and parameters (subsidies, standards, taxes)
11. Size of buffers and their stocks
10. Structure of material flows
9. Length of delays
8. Strength of negative feedback loops
7. Gain around driving positive feedback loops
6. Structure of information flows (who sees what, when)
5. Rules of the system (incentives, constraints, laws)
4. Power to change the rules
3. Goals of the system
2. Mindset or paradigm
1. Power to change paradigms

**The paradox:** The higher you go on this list, the more leverage you have — and the more resistance you'll face. People will let you change numbers all day. Tell them their paradigm is wrong and see what happens.`
      },
      {
        id: "lp-2", num: "Part 2", title: "Dancing With Systems", readTime: "4 min",
        content: `Meadows closes with a lesson in humility that's easy to miss: knowing leverage points doesn't mean knowing how to use them.

**The danger of knowing too much:** Once you see leverage points, you're tempted to pull them hard. But systems are complex. Pulling a leverage point in the "right" direction can make things worse — because systems are nonlinear, your model is wrong, or you've created a new problem by solving the old one.

**Her advice:** Be skeptical of your own certainty. Even when you're right about the leverage point, you can be wrong about the direction or the magnitude.

**The systems thinker's disposition:**
Comfort with not knowing. Willingness to update the model. Patience with emergence. Resistance to premature conclusions. Curiosity about why the system is doing what it's doing — it's always doing something reasonable from its own point of view.

**The humility insight:** Every deeply entrenched system behavior is rational from within the system's own logic. If you don't understand why it makes sense to someone, you don't understand it well enough to change it.

**For FDEs:** The leverage point in a customer's broken system is usually not the thing they're asking you to fix. It's one level up — in the information flows, the rules, or sometimes the goals. Your job is to find it, name it clearly, and propose something actionable.

**Meadows' final idea:** "Dancing with systems" — you can't control them. You can learn their rhythms and work with them.`
      },
    ]
  },
  {
    id: "ps", title: "Are Your Lights On?", author: "Gause & Weinberg",
    phase: 2, type: "book", color: "#35c8f1", emoji: "💡",
    tagline: "The book on problem definition. Shorter than you think, sharper than anything.",
    chapters: [
      {
        id: "ps-1", num: "Part 1", title: "What Is the Problem?", readTime: "5 min",
        content: `The central insight of this book: most people never correctly identify the problem they're trying to solve. They solve the wrong problem, brilliantly.

**The title story:** A new high-rise building is built. Tenants complain the elevators are too slow. Management considers expensive solutions: new elevators, faster motors, staggered work hours. An observer suggests putting mirrors in the elevator lobbies. Complaints stop immediately. The real problem wasn't slow elevators — it was that waiting felt unpleasant. Mirrors gave people something to do.

**The lesson:** The problem as presented is almost never the real problem. It's a symptom, an assumption, or someone's preferred solution presented as a problem statement.

**The definition:** A problem is a difference between things as desired and things as perceived. It has two sides: the desired state and the current state. Change either side and the "problem" changes.

**Your first move when handed a problem:**
1. Don't start solving immediately
2. Ask: whose problem is this?
3. Ask: what would happen if we didn't solve it?
4. Ask: is the stated problem actually the problem, or is it someone's assumed solution?

**The discipline:** Spend more time on problem definition than most people spend on the entire project. It is the highest-leverage activity in engineering.`
      },
      {
        id: "ps-2", num: "Part 2", title: "What's Really the Problem?", readTime: "5 min",
        content: `Even when you've defined the problem once, the definition will shift. Problem solving is not linear. As you learn more, the problem changes.

**The Billy Problem:** Billy keeps fighting with his sister. His parents try various punishments. Nothing works. They reframe: is the problem Billy's behavior, or the conditions that create it (boredom, a shared room, competition for attention)? Different problem, different solution.

**Problems change as you study them.** The solution you design changes the problem. The people who implement it change the problem. The act of defining the problem changes what people think the problem is.

**The technique — restate, don't just repeat:**
When you think you understand the problem, restate it from a completely different angle:
Who else is affected? What would success actually look like? What would have to be true for this not to be a problem? Is this actually a symptom of a different, upstream problem?

**The trap of the "given" solution:** Clients often come to you with a solution embedded in the problem statement. "We need a dashboard that shows X." That's a solution, not a problem. The problem is: "We can't see X when we need to, which causes Y." Always strip out the embedded solution and re-examine the actual need.

**FDE in practice:** Before you write a line of code or configure anything, write down what problem you're solving in one sentence without using any product names, feature names, or technical terms. If you can't, you don't understand the problem yet.`
      },
      {
        id: "ps-3", num: "Part 3", title: "Whose Problem Is It?", readTime: "4 min",
        content: `Problems don't exist in a vacuum. They exist for specific people. Understanding whose problem it is — really — is essential to solving it.

**The cast of characters in any problem:**
Client: who wants the problem solved. Customer: who will use the solution. Problem owner: who is experiencing the pain. Decision maker: who will approve and fund the solution.

These are often different people. The person who hired you may not be the person suffering. The solution you build for the client may not help the customer.

**The political reality:** Problems are contested. Different stakeholders have different definitions of what the problem is — because they have different desired states. The VP sees an efficiency problem. The engineers see a communication problem. The customers see a reliability problem. All of them are right from their vantage point.

**Your job:** Map the stakeholders. For each, understand: what is their desired state? What do they perceive the current state to be?

**The key question:** "Who has the power to accept a solution?" That person's definition of the problem is the one you need to solve — while also not making it worse for the others.

**FDE implication:** In most customer engagements, the person who brought you in is not the person who will use what you build. Spend time with end users early. Their version of the problem is usually more real than the executive's.`
      },
      {
        id: "ps-4", num: "Part 4", title: "Where Does It Come From?", readTime: "4 min",
        content: `Once you know what the problem is and whose it is, you need to understand where it originates. Problems have sources. Find the source, and you have real leverage.

**The regulation paradox:** Many problems are caused by solutions to previous problems. The solution created a side effect. The side effect was "solved" with another solution. And so on. You're often hired to fix the third-order consequence of a decision made five years ago.

**Dig for origins:**
When did this first become a problem? What changed at that moment? Was there a time when this wasn't a problem? What was different then? Who decided this was the right way to do it? What were they optimizing for?

**The "behind the problem" move:** Ask why the problem exists twice. First-level: "Why are we having this problem?" Second-level: "Why are we in a situation where this kind of problem is possible?" The second question often reveals the structural source.

**Solutioneering:** The habit of jumping to solutions before understanding the source. Almost everyone does it. It's the engineer's occupational hazard. The dopamine hit of "here's what we should build" is real. Resist it until you've genuinely sat with the source of the problem.

**Your anchor question:** "What would have to stop being true for this to no longer be a problem?" That points you at the source.`
      },
    ]
  },
  {
    id: "postmortems", title: "Engineering Post-Mortems", author: "Google SRE + Public Examples",
    phase: 2, type: "free", color: "#35c8f1", emoji: "🔍",
    tagline: "How elite engineering teams learn from failure. Free and priceless.",
    chapters: [
      {
        id: "pm-1", num: "Guide 1", title: "How to Read a Post-Mortem", readTime: "4 min",
        content: `Post-mortems are one of the highest-leverage learning tools available to engineers. They're public case studies of real systems failing in real ways.

**What a good post-mortem contains:**
Timeline: what happened, in sequence, with timestamps. Root cause: what actually caused the failure. Contributing factors: conditions that made the failure possible. Impact: who was affected, how much, for how long. Detection: how was it found? Resolution: what stopped the bleeding? Action items: what changes prevent recurrence?

**How to read one actively (not passively):**
1. Stop at each event in the timeline and ask: "What would I have done here?"
2. Try to guess the root cause before reading the root cause section
3. Ask: "What assumption failed?"
4. Ask: "At what leverage point could this have been prevented?"
5. After reading action items: "Are these addressing root cause or symptoms?"

**Where to find them:**
Google SRE Book: sre.google/sre-book (free online). GitHub blog, Stripe engineering blog, Netflix tech blog, Cloudflare blog. Search "engineering post-mortem [company name]" — hundreds are public.

**The habit:** Read one post-mortem per week. In 6 months you'll have pattern-matched on 25 real failure modes. That's a superpower.`
      },
      {
        id: "pm-2", num: "Guide 2", title: "The Blameless Post-Mortem", readTime: "4 min",
        content: `The blameless post-mortem is one of the most important cultural inventions in modern software engineering. The practice: investigate failures without assigning blame to individuals.

**The premise:** People don't cause system failures. Systems create conditions where well-intentioned, skilled people inevitably make mistakes. Find and fix the conditions, not the person.

**Why blameless works:**
It gets you to the real root cause (people don't hide information when they won't be blamed). It creates psychological safety to report near-misses before they become failures. It produces systemic fixes instead of individual corrections that leave the underlying problem intact.

**The key questions in a blameless post-mortem:**
What did people know at the time? (Not what we know now in hindsight.) What did the system communicate to them? What would a reasonable, skilled person have done with the same information? What in the system design made this mistake easy to make? What would prevent the next person from making the same mistake?

**What a blame post-mortem looks like:** "John pushed bad config. John needs retraining." The bad config goes unfixed. The deployment process that allowed it goes unfixed. It happens again, with someone else named.

**For FDEs:** When you enter a customer environment that has had failures, run a blameless post-mortem in your mind on their history. Don't blame their team. Find the system conditions.`
      },
      {
        id: "pm-3", num: "Guide 3", title: "Writing Your Own Post-Mortem", readTime: "5 min",
        content: `You don't have to wait for a catastrophic outage to practice post-mortems. Every failed project, missed deadline, bad meeting, or broken process is post-mortem material.

**The template:**

**Summary:** One paragraph. What happened, what was the impact, what was the root cause.

**Timeline:** [Time] — [Event, in neutral language]. Be specific. "Around 2pm" is not a timeline entry. "14:23 UTC" is.

**Root Cause:** Not "someone forgot." The systemic condition that made the failure possible. Use 5 Whys to get here.

**Contributing Factors:** What other conditions made this worse or more likely? (Understaffing, unclear ownership, missing monitoring, etc.)

**What Went Well:** Always include this — it reinforces good practices and keeps the document balanced.

**Action Items:** Each action should address root cause or contributing factors, not symptoms. Each should be specific and assigned to a person with a due date.

**The micro-practice:** After your next project, meeting, or failed initiative — write a 1-page post-mortem using this template. Do it within 48 hours while memory is fresh. Over time, these become case studies of your own engineering judgment improving.`
      },
    ]
  },
  {
    id: "ls", title: "The Lean Startup", author: "Eric Ries",
    phase: 3, type: "book", color: "#b47dff", emoji: "🚀",
    tagline: "Build-measure-learn. The operating model for FDE speed.",
    chapters: [
      {
        id: "ls-1", num: "Part 1", title: "The Build-Measure-Learn Loop", readTime: "5 min",
        content: `The core insight of The Lean Startup: the goal of any new initiative is not to build a product — it's to find a sustainable model. Everything before that is a hypothesis.

**The loop:**
1. Build a minimum viable product (MVP) — the smallest thing that tests your riskiest assumption
2. Measure what happens — with real data, not opinions
3. Learn whether your assumption was right
4. Repeat — either persevere (you were right) or pivot (you were wrong)

**The key move:** Identify your riskiest assumption first. Don't build the whole product and then test it. Test the single thing most likely to kill you if you're wrong.

**Why this matters for FDEs:** You will be asked to build solutions to problems you don't fully understand, under time pressure, with incomplete information. The lean loop is your operating model. Build the smallest thing that generates real signal. Don't overbuild. Learn fast.

**Minimum Viable Product does not mean Crappy Product.** An MVP is not a half-finished product. It's a complete test of a specific hypothesis. It might be a spreadsheet, a landing page, a manual process, or a prototype. The question is: does it generate real learning?

**The vanity metrics trap:** Don't measure things that go up but don't tell you if you're succeeding. Measure actionable metrics — things that change when you change something, and tell you which direction to move.`
      },
      {
        id: "ls-2", num: "Part 2", title: "Validated Learning & Experiments", readTime: "5 min",
        content: `Validated learning is learning backed by empirical evidence from real customers. It is the unit of progress in the lean approach.

**The difference:**
Opinion: "I think users want X." Not learning.
Validated learning: "We built X, 200 users tried it, 40% came back the next day." Learning.

**Designing experiments:**
Every experiment should have a clear hypothesis ("We believe this specific thing"), a falsifiable test ("We will build/do this minimal thing"), a threshold ("We will know we're right if this measurable outcome occurs"), and a deadline (time-boxed).

**The concierge MVP:** Instead of building automated software, do the service manually first. This is faster, cheaper, and reveals what actually matters. Airbnb's founders went door-to-door photographing apartments before building photo upload tools.

**Why FDEs need this:** You're often the first human being who has tried to connect a customer's business problem to a technical solution in their specific context. Everything is a hypothesis. Run small experiments before committing to a full build. A day of manual testing beats a week of building the wrong automation.

**Pivot or persevere:** When you get data, be honest. Is the hypothesis validated? If not, what do you change? The discipline is in the honesty — not continuing to invest in a disproven direction out of sunk cost.`
      },
      {
        id: "ls-3", num: "Part 3", title: "Pivot: Changing Direction Without Losing Momentum", readTime: "4 min",
        content: `A pivot is a structured course correction designed to test a new fundamental hypothesis. It is not failure. It is the mechanism of learning.

**What a pivot is not:** giving up, random direction changes, or thrashing because you're impatient. A pivot is deliberate. It follows learning.

**Types of pivots relevant to FDEs:**

**Zoom-in pivot:** What you thought was one feature of a larger solution is actually the whole solution. Focus on it.

**Zoom-out pivot:** What you thought was the whole solution is actually a feature of something larger the customer needs.

**Customer segment pivot:** The solution works, but for a different kind of customer than you expected.

**Problem pivot:** The customers you're serving have a different problem than you thought. Solve that instead.

**The discipline of pivoting:** Hold the vision loosely. Be attached to the outcome (solving the customer's real problem) and unattached to the method (how you solve it). Most people do the opposite — they fall in love with their solution and argue with the data.

**Your internal signal:** When you find yourself explaining away negative results, you probably need to pivot. When you find yourself energized by evidence, you're probably on the right track.`
      },
    ]
  },
  {
    id: "det", title: "The Design of Everyday Things", author: "Don Norman",
    phase: 3, type: "book", color: "#b47dff", emoji: "🔧",
    tagline: "Why bad design is a systems problem, not a user problem.",
    chapters: [
      {
        id: "det-1", num: "Ch. 1", title: "The Psychopathology of Everyday Things", readTime: "5 min",
        content: `Norman's foundational argument: when people have trouble using something, the problem is almost always the design, not the person. "User error" is a myth. It's design error.

**Affordances:** The relationship between a physical object and a person that determines how it can be used. A chair affords sitting. A button affords pressing. Good design makes affordances visible. Bad design hides them or creates false ones.

**Signifiers:** Signals that communicate where the action should take place. A push plate on a door signifies "push here." When signifiers are absent or misleading, people get confused — and then blame themselves.

**The Norman Door:** Have you ever pushed a door that should be pulled? That's a design failure. The door communicated the wrong action. Norman doors are everywhere — in software, in processes, in org structures.

**Feedback:** Systems must communicate the results of actions. Without feedback, people can't learn whether what they did worked. No feedback equals confusion.

**Conceptual models:** The image users have in their minds about how a system works. Good design creates accurate conceptual models. Bad design creates wrong ones — and then users make predictable mistakes.

**The FDE lens:** When a customer says "our users keep doing it wrong," that's a Norman Door. The system is miscommunicating. Before training anyone, ask: what conceptual model does this system create? Is it accurate? Where are the missing signifiers?`
      },
      {
        id: "det-2", num: "Ch. 2", title: "The Seven Stages of Action", readTime: "5 min",
        content: `Norman describes seven stages of action — the mental steps between wanting something and achieving it. Failures can happen at any stage, and knowing which stage broke tells you how to fix it.

**The seven stages:**
1. Goal: form the goal ("I want to send this file")
2. Plan: plan the action ("I'll attach it to the email")
3. Specify: specify an action sequence ("I'll click the paperclip icon")
4. Perform: execute the action ("I clicked it")
5. Perceive: perceive the state of the world ("A dialog opened")
6. Interpret: interpret the perception ("It's asking me to select a file")
7. Compare: compare the outcome to the goal ("Did I attach the right file?")

**Gulf of execution:** The gap between what someone wants to do and the actions the system allows. Bad interfaces create this gulf.

**Gulf of evaluation:** The gap between the system state and the person's ability to perceive it. Bad feedback creates this gulf.

**The practical move:** When debugging a broken process or tool, walk through the seven stages with a real user. At which stage do they get confused? That's where the design fix is.

**For FDEs:** When you deploy a solution and adoption is low, run this analysis. Don't assume users are lazy or resistant. Find the stage where the system is failing them and fix it there.`
      },
      {
        id: "det-3", num: "Ch. 3", title: "Human Error? No, Bad Design.", readTime: "4 min",
        content: `This chapter is essential for anyone who investigates how systems fail. Norman argues that what we call "human error" is almost always a predictable consequence of poor design.

**Two types of errors:**

**Slips:** The person has the right goal but executes incorrectly. Automatic behavior takes over. Example: you intend to press Ctrl+S but press Ctrl+A. Caused by poor physical design, distraction, or automation.

**Mistakes:** The person has the wrong goal — they're pursuing the wrong plan. They may execute perfectly and still fail. Caused by wrong conceptual models, incomplete information, or misleading feedback.

**The Swiss Cheese model:** Major accidents are never caused by a single failure. They happen when multiple small failures align — holes in multiple layers line up and a hazard passes through.

**Designing for error:**
Assume people will make errors. Design to catch them. Make actions reversible wherever possible. Make the current state visible so people can detect errors early. Use forcing functions: constraints that prevent errors before they happen.

**The mindset shift for FDEs:** When something breaks in a customer's environment, your first instinct should not be "who made the mistake?" It should be "what in the design allowed this mistake to be easy to make?" That reframe changes the entire nature of your solution.`
      },
    ]
  },
  {
    id: "fde-craft", title: "The FDE Craft", author: "Curated for this plan",
    phase: 3, type: "guide", color: "#b47dff", emoji: "⚡",
    tagline: "What it actually means to be a forward deployed engineer.",
    chapters: [
      {
        id: "fde-1", num: "Essay 1", title: "What FDEs Actually Do", readTime: "5 min",
        content: `Forward deployed engineers are a relatively new archetype, pioneered at Palantir and now found at companies like Retool, Hex, Anyscale, Scale AI, and others.

**The core loop:**
1. Get deployed to a customer environment
2. Understand their business problem deeply (faster than anyone else would)
3. Build something that solves it (faster than anyone else could)
4. Make it stick (train, document, integrate)
5. Move to the next problem or next customer

**What makes it different from regular engineering:**
You don't have months to iterate. You have days. You don't have perfect specs. You have ambiguous problems and a deadline. You're simultaneously the engineer, the product manager, and the account manager. You're in the customer's environment, not your own.

**The skills that matter most (from job postings and practitioners):**
1. Diagnosis speed — how fast can you understand an unfamiliar system?
2. Prototyping speed — how fast can you build something real?
3. Communication — can you explain technical things clearly under pressure?
4. Judgment — can you make good calls with incomplete information?
5. Autonomy — can you operate without hand-holding?

**What FDEs are not:** They're not consultants who write decks. They're not support engineers who troubleshoot. They're not traditional SWEs who need six months to ship. They are people who think and build, simultaneously, in foreign territory.`
      },
      {
        id: "fde-2", num: "Essay 2", title: "The 48-Hour Deployment Mindset", readTime: "5 min",
        content: `Imagine you're dropped into a customer's environment with 48 hours, a laptop, access to their systems, and a vague problem statement. What do you do?

**Hour 1–4: Diagnosis sprint**
Don't touch anything yet. Talk to people. Ask: "Walk me through what a typical day looks like when this problem occurs." "Show me what you see when it breaks." "What have you already tried?" "What does success look like?"

Map what you hear. Look for: the real problem vs. the stated problem, who's most affected, what data exists, what's been attempted.

**Hour 4–8: Hypothesis formation**
Write your theory of the problem in one sentence. Write your proposed intervention. Then ask: what's the riskiest assumption here? What could make me completely wrong?

**Hour 8–24: Build the MVP**
Build the smallest thing that tests your hypothesis. Not the whole solution. Not the polished version. The thing that will tell you if you're on the right track. If it takes more than a few hours to build, it's too big.

**Hour 24–36: Test with real users**
Watch someone use it. Don't explain it. Don't defend it. Just watch. Where do they get confused? What did you miss?

**Hour 36–48: Iterate and handoff**
Fix the most critical issues. Document how it works. Make the case for what the full solution would look like.

**The mindset shift:** In normal engineering, speed is a tradeoff against quality. In FDE work, speed is quality — because a fast wrong answer generates learning that a slow right answer never would.`
      },
      {
        id: "fde-3", num: "Essay 3", title: "Technical Communication for FDEs", readTime: "5 min",
        content: `The FDE who can't communicate clearly is half an FDE. Technical communication isn't a soft skill. It's a core engineering competency.

**The audience split:** You will constantly communicate to two very different audiences — technical people who need to implement things and non-technical people who need to make decisions.

**For non-technical executives:**
Lead with the outcome, not the method ("This will reduce invoice processing time from 3 days to 4 hours"). Use analogies, not jargon ("It's like adding a traffic cop at the intersection where everything was backing up"). Anticipate the ROI question before it's asked. Make the recommendation explicit. One page. Five minutes. Decision.

**For technical teams:**
Be precise about constraints and assumptions. Explain your reasoning, not just your conclusion. Acknowledge uncertainty explicitly. Leave a trail — document the decisions and why you made them.

**The Feynman technique for explanation:**
1. Pick the concept you want to explain
2. Explain it as if to a 12-year-old
3. Find the gaps — where did you reach for jargon or skip a step?
4. Go back to source material on the gaps
5. Simplify and use analogies

**The daily practice:** Once a day, find something technical you know and explain it in 3 sentences to an imaginary non-technical person. Write it down. Over time, you build a library of clean explanations.

**The ultimate FDE communication test:** Can you get a decision-maker to understand the problem, trust your solution, and approve it — in a 5-minute hallway conversation? If yes, you're there.`
      },
      {
        id: "fde-4", num: "Essay 4", title: "Prototyping Under Pressure", readTime: "4 min",
        content: `FDEs are defined by their ability to ship fast. Not perfectly — fast. Here's how to develop that muscle deliberately.

**The time-box method:**
Set a timer. 2 hours. Build something that proves your concept. When the timer goes off, stop. Show what you have. This is not about finishing. It's about learning to make real progress under time pressure.

**How to scope for speed:**
1. Write down the full solution
2. Cut it in half. Cut it in half again.
3. What's the single most important thing that proves the idea works?
4. Build only that.

**Tools that enable speed (build your repertoire):**
Python for data transformation and automation. SQL for any data question. No-code tools (Retool, Airtable, Notion) for rapid internal tools. APIs + curl/Postman for testing integrations quickly. Spreadsheets — still the fastest prototype tool for many use cases.

**The ugly is okay rule:** A working prototype that's ugly is infinitely more useful than a beautiful design that doesn't exist. Customers can react to ugly. They can't react to a deck.

**The debrief habit:** After every time-boxed session, spend 10 minutes writing: What did I build? What did I cut? What did I learn? What would I do differently? This is where the real skill improvement happens.

**Your practice challenge:** Every week, pick one micro-problem in your life or work and build a solution to it in 2 hours. The constraint is the timer, not the tools.`
      },
    ]
  },
];

// ─── PHASES & CONCEPTS ────────────────────────────────────────────────────────

const PHASES = [
  {
    id: 1, title: "Mental Models", color: "#c8f135",
    concepts: [
      { id: "c1", title: "Stocks & Flows", body: "Every system has stocks (things that accumulate) and flows (rates of change). A bank account is a stock; income and spending are flows. Before diagnosing any problem, map its stocks and flows first." },
      { id: "c2", title: "Feedback Loops", body: "Reinforcing loops amplify change (compound interest, viral growth). Balancing loops resist change (a thermostat, a market price). Most broken systems have a loop out of whack." },
      { id: "c3", title: "Delays", body: "The gap between an action and its effect causes oscillation. Engineers overshoot because they don't account for delays. Ask: where is the lag in this system?" },
      { id: "c4", title: "Leverage Points", body: "Some interventions move a system far more than others. Changing rules beats changing goals, beats changing flows, beats changing numbers. Most people fight over the numbers." },
      { id: "c5", title: "First Principles", body: "Break a problem down to its foundational truths. Ignore analogies and convention. Ask: what do I know for certain? What can I build from there?" },
      { id: "c6", title: "Inversion", body: "Instead of asking 'how do I succeed?', ask 'what would guarantee failure?' Then avoid those things. Inversion finds failure modes that forward thinking misses." },
      { id: "c7", title: "Second-Order Effects", body: "Every action has downstream consequences. First-order: you raise prices, revenue goes up. Second-order: customers churn. FDEs think at least two steps ahead." },
      { id: "c8", title: "The Map ≠ Territory", body: "Every model, framework, and org chart is a simplification. When things stop working, ask: where is my map wrong? Get closer to the actual territory." },
      { id: "c9", title: "Probabilistic Thinking", body: "Think in distributions, not certainties. What's the base rate? Start with a prior. Update beliefs proportionally to evidence, not to emotional salience." },
    ]
  },
  {
    id: 2, title: "Engineering Problem-Solving", color: "#35c8f1",
    concepts: [
      { id: "c10", title: "5 Whys", body: "Ask 'why' five times to get from symptom to root cause. The first answer is almost never the real cause. Toyota built an entire manufacturing philosophy on this." },
      { id: "c11", title: "Problem Statement Precision", body: "A vague problem has vague solutions. Write one paragraph: what is happening, where, when, for whom, and what the measurable impact is. No solutions in the problem statement." },
      { id: "c12", title: "MECE Thinking", body: "Mutually Exclusive, Collectively Exhaustive. When breaking a problem into parts, the parts shouldn't overlap and together should cover everything." },
      { id: "c13", title: "Post-Mortem Mindset", body: "When something breaks, resist blame. Ask: what conditions allowed this? What assumption failed? What system change prevents recurrence?" },
      { id: "c14", title: "Issue Trees", body: "Decompose a big problem into a tree of smaller questions. Each branch is MECE. Solve the leaves, and you solve the root." },
      { id: "c15", title: "Blameless Culture", body: "People don't cause system failures. Systems create conditions where mistakes are inevitable. Find the conditions, not the person." },
      { id: "c16", title: "Occam's Razor", body: "Among competing explanations, prefer the one with fewest assumptions. Investigate the simplest cause first. Add complexity only when simplicity fails." },
    ]
  },
  {
    id: 3, title: "FDE Reps", color: "#b47dff",
    concepts: [
      { id: "c17", title: "The FDE Mindset", body: "Forward deployed engineers diagnose fast, build fast, and communicate clearly under ambiguity. Speed and judgment beat perfection every time." },
      { id: "c18", title: "Technical Translation", body: "FDEs sit between engineers and customers. Key skill: explain something technical so a non-technical exec can make a decision in 5 minutes. No jargon." },
      { id: "c19", title: "Prototype Under Pressure", body: "Give yourself a time box (2 hours). Build something ugly but functional. Ship it. The goal is to prove a concept, not win a design award." },
      { id: "c20", title: "Build-Measure-Learn", body: "Every solution is a hypothesis. Build the smallest thing that tests it. Measure what actually happens. Learn. Iterate. Don't overbuild before getting signal." },
      { id: "c21", title: "Affordances & Signifiers", body: "Good systems communicate how they should be used. When users make 'errors', the design is usually the real problem — missing signifiers, wrong conceptual model." },
    ]
  }
];

const ALL_CONCEPTS = PHASES.flatMap(p => p.concepts.map(c => ({ ...c, phaseId: p.id, phaseColor: p.color, phaseTitle: p.title })));

const DAILY_TASKS = [
  { id: "t1", text: "Read one concept card", duration: "5 min" },
  { id: "t2", text: "Map a system you interacted with today", duration: "10 min" },
  { id: "t3", text: "Write a problem journal entry", duration: "10 min" },
  { id: "t4", text: "Read one library lesson", duration: "5–8 min" },
  { id: "t5", text: "Apply 5 Whys to one thing that frustrated you", duration: "5 min" },
  { id: "t6", text: "Write a precise problem statement", duration: "10 min" },
  { id: "t7", text: "Explain one concept simply (out loud or written)", duration: "5 min" },
  { id: "t8", text: "Identify one leverage point in your day", duration: "5 min" },
];

const COACH_SYSTEM = `You are an FDE (Forward Deployed Engineer) learning coach. Your user is on a 6-month journey to become an FDE. They have an ADD brain and learn best through micro-bursts and real-world application.

Their reading library (built into the app):
Phase 1 - Mental Models: Thinking in Systems (Meadows, 6 chapters), Great Mental Models Vol.1 (6 models), Leverage Points essay (Meadows, 2 parts)
Phase 2 - Engineering Problem-Solving: Are Your Lights On? (Gause & Weinberg, 4 parts), Engineering Post-Mortems (3 guides)
Phase 3 - FDE Reps: The Lean Startup (Ries, 3 parts), Design of Everyday Things (Norman, 3 chapters), The FDE Craft (4 curated essays)

Core concepts: stocks/flows, feedback loops, delays, leverage points, first principles, inversion, second-order thinking, 5 Whys, MECE, blameless post-mortems, build-measure-learn, technical translation, prototyping under pressure.

Your role:
- Keep responses SHORT — 3-5 sentences max unless asked for more (ADD brain!)
- If they're stuck, give ONE concrete micro-task to do RIGHT NOW
- If they describe a problem, immediately apply a framework to it
- Be direct, warm, a little edgy — never corporate or preachy
- Quiz them, challenge them, make them think
- Connect what they're reading to their actual life/work situations
- Celebrate small wins genuinely

Never just explain. Always connect to their specific situation.`;

// ─── STORAGE ──────────────────────────────────────────────────────────────────

const STORAGE_KEY = "fde_app_v3";
function loadState() { try { const r = localStorage.getItem(STORAGE_KEY); return r ? JSON.parse(r) : null; } catch { return null; } }
function saveState(s) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch {} }
const today = () => new Date().toISOString().split("T")[0];

function initState() {
  const saved = loadState();
  if (saved) return saved;
  return { currentPhase: 1, currentWeek: 1, streak: 0, lastActiveDate: null, completedTasks: {}, conceptIndex: 0, journalEntries: [], chatHistory: [], readChapters: [], activeBook: null, learningSpeed: 1 };
}

// ─── STYLES ───────────────────────────────────────────────────────────────────

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  :root { --bg:#0d0d12;--surface:#13131a;--card:#18181f;--border:#22222e;--border2:#2a2a38;--text:#e8e8f0;--muted:#5a5a72;--muted2:#7a7a92;--accent:#c8f135;--accent2:#35c8f1;--accent3:#b47dff; }
  body { background:var(--bg);color:var(--text);font-family:'Lora',serif;min-height:100vh;overflow-x:hidden; }
  .app { max-width:520px;margin:0 auto;min-height:100vh;display:flex;flex-direction:column; }
  .header { padding:18px 18px 0; }
  .header-top { display:flex;align-items:center;justify-content:space-between;margin-bottom:14px; }
  .logo { font-family:'Syne',sans-serif;font-weight:800;font-size:17px;letter-spacing:-0.02em; }
  .logo span { color:var(--accent); }
  .streak-badge { display:flex;align-items:center;gap:5px;background:var(--card);border:1px solid var(--border2);border-radius:100px;padding:5px 11px;font-family:'JetBrains Mono',monospace;font-size:11px; }
  .phase-bar { background:var(--card);border:1px solid var(--border);border-radius:10px;padding:10px 14px;margin-bottom:2px; }
  .phase-bar-label { font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--muted);letter-spacing:.15em;margin-bottom:7px; }
  .phase-track { height:3px;background:var(--border2);border-radius:3px;overflow:hidden;margin-bottom:7px; }
  .phase-fill { height:100%;border-radius:3px;transition:width .6s ease; }
  .phase-info { display:flex;justify-content:space-between;align-items:center; }
  .phase-name { font-family:'Syne',sans-serif;font-size:12px;font-weight:700; }
  .phase-week { font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--muted); }
  .tabs { display:flex;padding:10px 18px 0;gap:4px; }
  .tab { flex:1;padding:9px 0;background:none;border:1px solid var(--border);border-radius:9px;font-family:'JetBrains Mono',monospace;font-size:10px;letter-spacing:.06em;color:var(--muted);cursor:pointer;transition:all .2s; }
  .tab.active { background:var(--card);border-color:var(--border2);color:var(--text); }
  .content { flex:1;padding:14px 18px 90px;overflow-y:auto; }
  .section-label { font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:.2em;color:var(--muted);text-transform:uppercase;margin-bottom:9px;margin-top:18px; }
  .section-label:first-child { margin-top:0; }
  .concept-card { background:var(--card);border:1px solid var(--border2);border-radius:14px;padding:18px;margin-bottom:10px;position:relative;overflow:hidden; }
  .concept-card-phase { font-family:'JetBrains Mono',monospace;font-size:9px;letter-spacing:.1em;margin-bottom:7px; }
  .concept-card-title { font-family:'Syne',sans-serif;font-weight:700;font-size:17px;margin-bottom:9px; }
  .concept-card-body { font-size:13px;line-height:1.65;color:var(--muted2); }
  .concept-nav { display:flex;gap:7px;margin-top:14px; }
  .concept-btn { flex:1;padding:9px;background:var(--surface);border:1px solid var(--border);border-radius:7px;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted2);cursor:pointer;transition:all .15s; }
  .concept-btn.primary { background:var(--accent);color:#0d0d12;border-color:var(--accent);font-weight:500; }
  .concept-dots { display:flex;justify-content:center;gap:4px;margin-top:10px;flex-wrap:wrap; }
  .concept-dot { width:4px;height:4px;border-radius:50%;background:var(--border2);transition:all .2s;flex-shrink:0; }
  .concept-dot.active { background:var(--accent);width:14px;border-radius:2px; }
  .task-item { background:var(--card);border:1px solid var(--border);border-radius:11px;padding:12px 14px;margin-bottom:7px;display:flex;align-items:center;gap:12px;cursor:pointer;transition:all .15s; }
  .task-item:hover { border-color:var(--border2); }
  .task-item.done { opacity:.4; }
  .task-check { width:20px;height:20px;border-radius:5px;border:1.5px solid var(--border2);flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:all .15s; }
  .task-item.done .task-check { background:var(--accent);border-color:var(--accent); }
  .task-text { flex:1;font-size:13px;line-height:1.4; }
  .task-duration { font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--muted); }
  .book-card { background:var(--card);border:1px solid var(--border);border-radius:13px;padding:16px;margin-bottom:10px;cursor:pointer;transition:all .15s; }
  .book-card:hover { border-color:var(--border2); }
  .book-card-top { display:flex;align-items:flex-start;gap:12px;margin-bottom:10px; }
  .book-emoji { font-size:26px;flex-shrink:0; }
  .book-meta { flex:1; }
  .book-title { font-family:'Syne',sans-serif;font-weight:700;font-size:14px;margin-bottom:2px; }
  .book-author { font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--muted);margin-bottom:5px; }
  .book-tagline { font-size:12px;color:var(--muted2);line-height:1.4; }
  .book-progress { display:flex;align-items:center;gap:8px; }
  .book-track { flex:1;height:3px;background:var(--border2);border-radius:3px;overflow:hidden; }
  .book-fill { height:100%;border-radius:3px;transition:width .4s ease; }
  .book-pct { font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--muted);flex-shrink:0; }
  .book-phase-tag { font-family:'JetBrains Mono',monospace;font-size:9px;padding:3px 7px;border-radius:4px;flex-shrink:0; }
  .back-btn { display:flex;align-items:center;gap:6px;background:none;border:1px solid var(--border);border-radius:8px;padding:7px 11px;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted2);cursor:pointer;margin-bottom:14px;transition:all .15s; }
  .back-btn:hover { border-color:var(--border2);color:var(--text); }
  .book-header { background:var(--card);border:1px solid var(--border);border-radius:13px;padding:16px;margin-bottom:14px; }
  .book-header-title { font-family:'Syne',sans-serif;font-weight:800;font-size:18px;margin-bottom:3px; }
  .book-header-author { font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);margin-bottom:8px; }
  .book-header-tagline { font-size:13px;color:var(--muted2);line-height:1.5; }
  .chapter-item { background:var(--card);border:1px solid var(--border);border-radius:11px;padding:13px 15px;margin-bottom:8px;cursor:pointer;display:flex;align-items:center;gap:12px;transition:all .15s; }
  .chapter-item:hover { border-color:var(--border2); }
  .chapter-check { width:18px;height:18px;border-radius:50%;border:1.5px solid var(--border2);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700; }
  .chapter-meta { flex:1; }
  .chapter-num { font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--muted);margin-bottom:2px; }
  .chapter-title { font-family:'Syne',sans-serif;font-size:13px;font-weight:600; }
  .chapter-time { font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--muted);flex-shrink:0; }
  .reader-header { margin-bottom:18px; }
  .reader-book { font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--muted);margin-bottom:5px;letter-spacing:.1em; }
  .reader-num { font-family:'JetBrains Mono',monospace;font-size:10px;margin-bottom:6px; }
  .reader-title { font-family:'Syne',sans-serif;font-weight:800;font-size:20px;line-height:1.15;margin-bottom:6px; }
  .reader-time { font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--muted); }
  .reader-body { font-size:14px;line-height:1.78;color:#ccccd8; }
  .reader-body p { margin-bottom:14px; }
  .reader-body strong { color:var(--text); }
  .reader-footer { margin-top:24px;display:flex;gap:8px; }
  .reader-btn { flex:1;padding:12px;background:var(--surface);border:1px solid var(--border);border-radius:10px;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted2);cursor:pointer;transition:all .15s;text-align:center; }
  .reader-btn.primary { background:var(--accent);color:#0d0d12;border-color:var(--accent);font-weight:600; }
  .reader-btn.done-btn { background:rgba(200,241,53,.1);color:var(--accent);border-color:rgba(200,241,53,.3); }
  .journal-new { background:var(--card);border:1px solid var(--border2);border-radius:13px;padding:16px;margin-bottom:14px; }
  .journal-new h3 { font-family:'Syne',sans-serif;font-size:14px;font-weight:700;margin-bottom:12px; }
  .journal-field { margin-bottom:10px; }
  .journal-field label { display:block;font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--muted);letter-spacing:.12em;margin-bottom:5px; }
  .journal-field textarea { width:100%;background:var(--surface);border:1px solid var(--border);border-radius:7px;padding:9px 11px;color:var(--text);font-family:'Lora',serif;font-size:13px;line-height:1.55;resize:none;outline:none;transition:border-color .15s; }
  .journal-field textarea:focus { border-color:var(--border2); }
  .journal-field textarea::placeholder { color:var(--muted); }
  .save-btn { width:100%;padding:11px;background:var(--accent);color:#0d0d12;border:none;border-radius:9px;font-family:'Syne',sans-serif;font-weight:700;font-size:13px;cursor:pointer; }
  .save-btn:disabled { opacity:.35;cursor:default; }
  .journal-entry { background:var(--card);border:1px solid var(--border);border-radius:11px;padding:14px;margin-bottom:9px; }
  .journal-entry-date { font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--muted);margin-bottom:9px; }
  .journal-entry-section { margin-bottom:9px; }
  .journal-entry-section:last-child { margin-bottom:0; }
  .journal-entry-label { font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--muted);letter-spacing:.1em;margin-bottom:3px; }
  .journal-entry-text { font-size:13px;line-height:1.55;color:var(--muted2); }
  .chat-messages { display:flex;flex-direction:column;gap:10px;margin-bottom:14px; }
  .chat-bubble { max-width:88%;padding:11px 13px;border-radius:13px;font-size:13px;line-height:1.6; }
  .chat-bubble.user { align-self:flex-end;background:var(--accent);color:#0d0d12;border-bottom-right-radius:3px; }
  .chat-bubble.assistant { align-self:flex-start;background:var(--card);border:1px solid var(--border2);color:var(--text);border-bottom-left-radius:3px;white-space:pre-wrap; }
  .chat-bubble.loading { color:var(--muted);font-style:italic;font-family:'JetBrains Mono',monospace;font-size:10px; }
  .chat-input-row { display:flex;gap:7px;position:sticky;bottom:0;background:var(--bg);padding:10px 0 2px; }
  .chat-input { flex:1;background:var(--card);border:1px solid var(--border2);border-radius:11px;padding:11px 13px;color:var(--text);font-family:'Lora',serif;font-size:13px;outline:none;resize:none;line-height:1.4;max-height:90px; }
  .chat-input::placeholder { color:var(--muted); }
  .chat-send { background:var(--accent);border:none;border-radius:9px;width:42px;height:42px;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;font-size:17px;transition:opacity .15s; }
  .chat-send:disabled { opacity:.35;cursor:default; }
  .quick-prompts { display:flex;flex-wrap:wrap;gap:5px;margin-bottom:12px; }
  .quick-prompt { background:var(--surface);border:1px solid var(--border);border-radius:100px;padding:5px 11px;font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--muted2);cursor:pointer;transition:all .15s;white-space:nowrap; }
  .quick-prompt:hover { border-color:var(--border2);color:var(--text); }
  .empty-state { text-align:center;padding:32px 18px;color:var(--muted);font-size:13px;line-height:1.6; }
  .empty-state .icon { font-size:26px;margin-bottom:10px; }
  @media(min-width:600px){.app{max-width:600px;}}
`;

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function renderBody(text) {
  return text.split("\n").map((line, i) => {
    if (!line.trim()) return null;
    const parts = line.split(/(\*\*[^*]+\*\*)/g).map((p, j) =>
      p.startsWith("**") && p.endsWith("**") ? <strong key={j}>{p.slice(2, -2)}</strong> : p
    );
    return <p key={i}>{parts}</p>;
  });
}

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function ConceptFeed({ state, dispatch }) {
  const concept = ALL_CONCEPTS[state.conceptIndex % ALL_CONCEPTS.length];
  const phase = PHASES.find(p => p.id === concept.phaseId);
  return (
    <div>
      <div className="concept-card">
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: phase.color, borderRadius: "14px 14px 0 0" }} />
        <div className="concept-card-phase" style={{ color: phase.color }}>PHASE {phase.id} · {phase.title.toUpperCase()}</div>
        <div className="concept-card-title">{concept.title}</div>
        <div className="concept-card-body">{concept.body}</div>
        <div className="concept-nav">
          <button className="concept-btn" onClick={() => dispatch({ type: "PREV_CONCEPT" })}>← Prev</button>
          <button className="concept-btn primary" onClick={() => dispatch({ type: "NEXT_CONCEPT" })}>Next →</button>
        </div>
      </div>
      <div className="concept-dots">
        {ALL_CONCEPTS.map((_, i) => <div key={i} className={`concept-dot ${i === state.conceptIndex % ALL_CONCEPTS.length ? "active" : ""}`} />)}
      </div>
    </div>
  );
}

function TodayTasks({ state, dispatch }) {
  const todayKey = today();
  const done = state.completedTasks[todayKey] || [];
  const tasks = getTasksForSpeed(state.learningSpeed || 1);
  return (
    <div>
      {tasks.map(t => (
        <div key={t.id} className={`task-item ${done.includes(t.id) ? "done" : ""}`} onClick={() => dispatch({ type: "TOGGLE_TASK", id: t.id, date: todayKey })}>
          <div className="task-check">{done.includes(t.id) && <span style={{ color: "#0d0d12", fontSize: 11 }}>✓</span>}</div>
          <span className="task-text">{t.text}</span>
          <span className="task-duration">{t.duration}</span>
        </div>
      ))}
      {done.length >= tasks.length && <div style={{ textAlign: "center", padding: "10px", fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "var(--accent)" }}>🎉 All done today!</div>}
    </div>
  );
}

function LibraryTab({ state, dispatch }) {
  const { activeBook } = state;
  if (activeBook?.chapterId) return <ReaderView state={state} dispatch={dispatch} />;
  if (activeBook?.bookId) return <ChapterListView state={state} dispatch={dispatch} />;
  return <BookListView state={state} dispatch={dispatch} />;
}

function BookListView({ state, dispatch }) {
  return (
    <div>
      {[1, 2, 3].map(phaseId => {
        const phase = PHASES.find(p => p.id === phaseId);
        const books = LIBRARY.filter(b => b.phase === phaseId);
        return (
          <div key={phaseId}>
            <div className="section-label" style={{ color: phase.color }}>// Phase {phaseId} — {phase.title}</div>
            {books.map(book => {
              const read = book.chapters.filter(c => state.readChapters.includes(c.id)).length;
              const pct = book.chapters.length > 0 ? Math.round((read / book.chapters.length) * 100) : 0;
              return (
                <div key={book.id} className="book-card" onClick={() => dispatch({ type: "OPEN_BOOK", bookId: book.id })}>
                  <div className="book-card-top">
                    <span className="book-emoji">{book.emoji}</span>
                    <div className="book-meta">
                      <div className="book-title">{book.title}</div>
                      <div className="book-author">{book.author}</div>
                      <div className="book-tagline">{book.tagline}</div>
                    </div>
                    <span className="book-phase-tag" style={{ background: `${book.color}15`, color: book.color, border: `1px solid ${book.color}30` }}>{book.type.toUpperCase()}</span>
                  </div>
                  <div className="book-progress">
                    <div className="book-track"><div className="book-fill" style={{ width: `${pct}%`, background: book.color }} /></div>
                    <span className="book-pct">{read}/{book.chapters.length}</span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

function ChapterListView({ state, dispatch }) {
  const book = LIBRARY.find(b => b.id === state.activeBook?.bookId);
  if (!book) return null;
  return (
    <div>
      <button className="back-btn" onClick={() => dispatch({ type: "CLOSE_BOOK" })}>← Library</button>
      <div className="book-header">
        <div style={{ fontSize: 28, marginBottom: 8 }}>{book.emoji}</div>
        <div className="book-header-title" style={{ color: book.color }}>{book.title}</div>
        <div className="book-header-author">{book.author}</div>
        <div className="book-header-tagline">{book.tagline}</div>
      </div>
      <div className="section-label">// Chapters & Lessons</div>
      {book.chapters.map(ch => {
        const isRead = state.readChapters.includes(ch.id);
        return (
          <div key={ch.id} className="chapter-item" onClick={() => dispatch({ type: "OPEN_CHAPTER", bookId: book.id, chapterId: ch.id })}>
            <div className="chapter-check" style={isRead ? { background: book.color, borderColor: book.color, color: "#0d0d12" } : {}}>
              {isRead ? "✓" : ""}
            </div>
            <div className="chapter-meta">
              <div className="chapter-num">{ch.num}</div>
              <div className="chapter-title">{ch.title}</div>
            </div>
            <span className="chapter-time">{ch.readTime}</span>
          </div>
        );
      })}
    </div>
  );
}

function ReaderView({ state, dispatch }) {
  const book = LIBRARY.find(b => b.id === state.activeBook?.bookId);
  const chapter = book?.chapters.find(c => c.id === state.activeBook?.chapterId);
  if (!book || !chapter) return null;
  const isRead = state.readChapters.includes(chapter.id);
  const idx = book.chapters.findIndex(c => c.id === chapter.id);
  const nextChapter = book.chapters[idx + 1];
  const goNext = () => {
    if (!isRead) dispatch({ type: "MARK_READ", chapterId: chapter.id });
    if (nextChapter) dispatch({ type: "OPEN_CHAPTER", bookId: book.id, chapterId: nextChapter.id });
    else dispatch({ type: "CLOSE_CHAPTER" });
  };
  return (
    <div>
      <button className="back-btn" onClick={() => dispatch({ type: "CLOSE_CHAPTER" })}>← {book.title}</button>
      <div className="reader-header">
        <div className="reader-book" style={{ color: book.color }}>{book.emoji} {book.title.toUpperCase()}</div>
        <div className="reader-num" style={{ color: book.color }}>{chapter.num}</div>
        <div className="reader-title">{chapter.title}</div>
        <div className="reader-time">⏱ {chapter.readTime}</div>
      </div>
      <div className="reader-body">{renderBody(chapter.content)}</div>
      <div className="reader-footer">
        {!isRead && <button className="reader-btn done-btn" onClick={() => dispatch({ type: "MARK_READ", chapterId: chapter.id })}>✓ Mark read</button>}
        <button className="reader-btn primary" onClick={goNext}>{nextChapter ? "Next lesson →" : "← Back to chapters"}</button>
      </div>
    </div>
  );
}

function JournalTab({ state, dispatch }) {
  const [problem, setProblem] = useState("");
  const [cause, setCause] = useState("");
  const [solution, setSolution] = useState("");
  const canSave = problem.trim() && cause.trim() && solution.trim();
  const save = () => {
    if (!canSave) return;
    dispatch({ type: "ADD_JOURNAL", entry: { id: Date.now().toString(), date: today(), problem: problem.trim(), cause: cause.trim(), solution: solution.trim() } });
    setProblem(""); setCause(""); setSolution("");
  };
  return (
    <div>
      <div className="journal-new">
        <h3>📝 New Entry</h3>
        <div className="journal-field"><label>PROBLEM OBSERVED</label><textarea rows={2} placeholder="What problem did you notice today?" value={problem} onChange={e => setProblem(e.target.value)} /></div>
        <div className="journal-field"><label>ROOT CAUSE DIAGNOSIS</label><textarea rows={2} placeholder="What do you think is really causing it?" value={cause} onChange={e => setCause(e.target.value)} /></div>
        <div className="journal-field"><label>WHAT YOU'D DO</label><textarea rows={2} placeholder="If you could fix it, what would you try?" value={solution} onChange={e => setSolution(e.target.value)} /></div>
        <button className="save-btn" disabled={!canSave} onClick={save}>Save Entry</button>
      </div>
      <div className="section-label">Past Entries ({state.journalEntries.length})</div>
      {state.journalEntries.length === 0 && <div className="empty-state"><div className="icon">📖</div>No entries yet. Write your first above.</div>}
      {[...state.journalEntries].reverse().map(e => (
        <div key={e.id} className="journal-entry">
          <div className="journal-entry-date">{e.date}</div>
          <div className="journal-entry-section"><div className="journal-entry-label">PROBLEM</div><div className="journal-entry-text">{e.problem}</div></div>
          <div className="journal-entry-section"><div className="journal-entry-label">ROOT CAUSE</div><div className="journal-entry-text">{e.cause}</div></div>
          <div className="journal-entry-section"><div className="journal-entry-label">SOLUTION</div><div className="journal-entry-text">{e.solution}</div></div>
        </div>
      ))}
    </div>
  );
}

const QUICK_PROMPTS = ["I'm unfocused 😵", "Give me a 5-min challenge", "Quiz me on phase 1", "Help me apply a framework", "What should I read next?"];

function CoachTab({ state, dispatch }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const scroll = () => setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
  const buildContext = () => {
    const phase = PHASES.find(p => p.id === state.currentPhase);
    const totalChapters = LIBRARY.reduce((s, b) => s + b.chapters.length, 0);
    const speed = state.learningSpeed || 1;
    const speedLabel = SPEED_LABELS[speed]?.label || "Steady";
    return `User context: Phase ${state.currentPhase} (${phase.title}), Week ${state.currentWeek}. Streak: ${state.streak} days. Learning speed: ${speedLabel} (${speed}×). Tasks done today: ${(state.completedTasks[today()] || []).length}/${getTasksForSpeed(speed).length}. Library: ${state.readChapters.length}/${totalChapters} chapters read. Journal entries: ${state.journalEntries.length}.`;
  };
  const send = async (text) => {
    const msg = (text || input).trim();
    if (!msg || loading) return;
    setInput("");
    const userMsg = { role: "user", content: msg };
    dispatch({ type: "ADD_CHAT", message: userMsg });
    setLoading(true); scroll();
    try {
      const history = [...state.chatHistory, userMsg];
      const apiMessages = history.map((m, i) => i === 0 ? { role: "user", content: buildContext() + "\n\n" + m.content } : { role: m.role, content: m.content });
      const res = await fetch("https://api.anthropic.com/v1/messages", { method: "POST", headers: { "Content-Type": "application/json", "x-api-key": import.meta.env.VITE_ANTHROPIC_KEY, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" }, body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: COACH_SYSTEM, messages: apiMessages }) });
      const data = await res.json();
      dispatch({ type: "ADD_CHAT", message: { role: "assistant", content: data.content?.find(b => b.type === "text")?.text || "Couldn't respond — try again." } });
    } catch { dispatch({ type: "ADD_CHAT", message: { role: "assistant", content: "Network error — check your connection." } }); }
    finally { setLoading(false); scroll(); }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {state.chatHistory.length === 0 && <div className="empty-state" style={{ paddingTop: 16 }}><div className="icon">🤖</div>Your coach knows your plan, progress, and library.<br />Ask anything — or tap a quick start.</div>}
      <div className="quick-prompts">{QUICK_PROMPTS.map(p => <button key={p} className="quick-prompt" onClick={() => send(p)}>{p}</button>)}</div>
      <div className="chat-messages">
        {state.chatHistory.map((m, i) => <div key={i} className={`chat-bubble ${m.role}`}>{m.content}</div>)}
        {loading && <div className="chat-bubble assistant loading">thinking...</div>}
        <div ref={bottomRef} />
      </div>
      <div className="chat-input-row">
        <textarea className="chat-input" rows={1} placeholder="Ask your coach anything..." value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }} />
        <button className="chat-send" disabled={!input.trim() || loading} onClick={() => send()}>↑</button>
      </div>
    </div>
  );
}

// ─── SETTINGS ─────────────────────────────────────────────────────────────────

const SPEED_LABELS = {
  0.5: { label: "Tortoise", desc: "Half pace · ~12 months · Deep absorption", emoji: "🐢" },
  1:   { label: "Steady",   desc: "Standard pace · ~6 months · Recommended", emoji: "🚶" },
  1.5: { label: "Brisk",    desc: "1.5× pace · ~4 months · Push yourself",   emoji: "🏃" },
  2:   { label: "Sprint",   desc: "Double pace · ~3 months · Full immersion", emoji: "⚡" },
  3:   { label: "Blitz",    desc: "3× pace · ~2 months · FDE bootcamp mode",  emoji: "🔥" },
};

function getTasksForSpeed(speed) {
  // More tasks per day at higher speed
  if (speed <= 0.5) return DAILY_TASKS.slice(0, 3);
  if (speed <= 1)   return DAILY_TASKS.slice(0, 4);
  if (speed <= 1.5) return DAILY_TASKS.slice(0, 5);
  if (speed <= 2)   return DAILY_TASKS.slice(0, 6);
  return DAILY_TASKS; // all 8
}

function getWeeksPerPhase(speed) {
  // At 1× = 8 weeks per phase; faster = fewer weeks needed
  return Math.round(8 / speed);
}

function SettingsTab({ state, dispatch }) {
  const speed = state.learningSpeed || 1;
  const meta = SPEED_LABELS[speed] || SPEED_LABELS[1];
  const weeksPerPhase = getWeeksPerPhase(speed);
  const totalWeeks = weeksPerPhase * 3;
  const months = Math.round(totalWeeks / 4);
  const tasksPerDay = getTasksForSpeed(speed).length;

  return (
    <div>
      <div className="section-label">// learning speed</div>

      <div style={{ background: "var(--card)", border: "1px solid var(--border2)", borderRadius: 14, padding: 20, marginBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
          <span style={{ fontSize: 32 }}>{meta.emoji}</span>
          <div>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 18, color: "var(--accent)" }}>{meta.label}</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "var(--muted)", marginTop: 2 }}>{meta.desc}</div>
          </div>
        </div>

        <input
          type="range"
          min={0.5} max={3} step={0.5}
          value={speed}
          onChange={e => dispatch({ type: "SET_SPEED", speed: parseFloat(e.target.value) })}
          style={{ width: "100%", marginBottom: 12, accentColor: "var(--accent)", cursor: "pointer" }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: "var(--muted)", marginBottom: 18 }}>
          {Object.entries(SPEED_LABELS).map(([s, v]) => (
            <span key={s} style={{ color: parseFloat(s) === speed ? "var(--accent)" : "var(--muted)", fontWeight: parseFloat(s) === speed ? 600 : 400 }}>{v.emoji}</span>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[
            ["Duration", `~${months} mo`],
            ["Per phase", `${weeksPerPhase} wks`],
            ["Tasks/day", `${tasksPerDay}`],
          ].map(([label, val]) => (
            <div key={label} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "10px 8px", textAlign: "center" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: "var(--muted)", marginBottom: 4 }}>{label}</div>
              <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 16, color: "var(--accent)" }}>{val}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="section-label">// what changes at this speed</div>
      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, padding: 16, marginBottom: 14 }}>
        {[
          ["Daily tasks", `${tasksPerDay} tasks per day`],
          ["Phase length", `${weeksPerPhase} weeks per phase`],
          ["Phase unlock", speed >= 2 ? "Phases unlock early based on chapters read" : "Phases unlock on schedule"],
          ["Coach intensity", speed >= 2 ? "Coach pushes harder, quizzes more often" : "Coach is supportive and patient"],
        ].map(([label, val]) => (
          <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", padding: "8px 0", borderBottom: "1px solid var(--border)" }}>
            <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "var(--muted)" }}>{label}</span>
            <span style={{ fontFamily: "'Lora',serif", fontSize: 12, color: "var(--muted2)", textAlign: "right", maxWidth: "55%" }}>{val}</span>
          </div>
        ))}
      </div>

      <div className="section-label">// week controls</div>
      <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, padding: 16 }}>
        <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10, color: "var(--muted)", marginBottom: 12 }}>Manually adjust your position if you're ahead or behind</div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <button onClick={() => dispatch({ type: "SET_WEEK", week: Math.max(1, state.currentWeek - 1) })}
            style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, width: 36, height: 36, color: "var(--muted2)", cursor: "pointer", fontSize: 16 }}>−</button>
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 20, color: "var(--accent)" }}>Week {state.currentWeek}</div>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: "var(--muted)" }}>of {weeksPerPhase} in this phase</div>
          </div>
          <button onClick={() => dispatch({ type: "SET_WEEK", week: state.currentWeek + 1 })}
            style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, width: 36, height: 36, color: "var(--muted2)", cursor: "pointer", fontSize: 16 }}>+</button>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {[1, 2, 3].map(p => {
            const ph = PHASES.find(ph => ph.id === p);
            return (
              <button key={p} onClick={() => dispatch({ type: "SET_PHASE", phase: p })}
                style={{ flex: 1, padding: "9px 0", background: state.currentPhase === p ? `${ph.color}18` : "var(--surface)", border: `1px solid ${state.currentPhase === p ? ph.color + "50" : "var(--border)"}`, borderRadius: 8, fontFamily: "'JetBrains Mono',monospace", fontSize: 9, color: state.currentPhase === p ? ph.color : "var(--muted)", cursor: "pointer" }}>
                Phase {p}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── REDUCER ──────────────────────────────────────────────────────────────────

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_CONCEPT": return { ...state, conceptIndex: (state.conceptIndex + 1) % ALL_CONCEPTS.length };
    case "PREV_CONCEPT": return { ...state, conceptIndex: (state.conceptIndex - 1 + ALL_CONCEPTS.length) % ALL_CONCEPTS.length };
    case "TOGGLE_TASK": {
      const existing = state.completedTasks[action.date] || [];
      const updated = existing.includes(action.id) ? existing.filter(id => id !== action.id) : [...existing, action.id];
      let { streak, lastActiveDate } = state;
      if (!existing.includes(action.id)) {
        const td = today(), y = new Date(); y.setDate(y.getDate() - 1);
        const yStr = y.toISOString().split("T")[0];
        if (lastActiveDate === td) {}
        else if (lastActiveDate === yStr) { streak += 1; lastActiveDate = td; }
        else { streak = 1; lastActiveDate = td; }
      }
      return { ...state, completedTasks: { ...state.completedTasks, [action.date]: updated }, streak, lastActiveDate };
    }
    case "OPEN_BOOK": return { ...state, activeBook: { bookId: action.bookId } };
    case "CLOSE_BOOK": return { ...state, activeBook: null };
    case "OPEN_CHAPTER": return { ...state, activeBook: { bookId: action.bookId, chapterId: action.chapterId } };
    case "CLOSE_CHAPTER": return { ...state, activeBook: { bookId: state.activeBook?.bookId } };
    case "MARK_READ": return state.readChapters.includes(action.chapterId) ? state : { ...state, readChapters: [...state.readChapters, action.chapterId] };
    case "ADD_JOURNAL": return { ...state, journalEntries: [...state.journalEntries, action.entry] };
    case "ADD_CHAT": return { ...state, chatHistory: [...state.chatHistory, action.message] };
    case "SET_SPEED": return { ...state, learningSpeed: action.speed };
    case "SET_WEEK": return { ...state, currentWeek: Math.max(1, action.week) };
    case "SET_PHASE": return { ...state, currentPhase: action.phase, currentWeek: 1 };
    default: return state;
  }
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [state, dispatch_] = useState(() => initState());
  const [tab, setTab] = useState("today");
  const dispatch = (action) => { dispatch_(prev => { const next = reducer(prev, action); saveState(next); return next; }); };
  const phase = PHASES.find(p => p.id === state.currentPhase);
  const totalChapters = LIBRARY.reduce((s, b) => s + b.chapters.length, 0);
  const weeksPerPhase = getWeeksPerPhase(state.learningSpeed || 1);
  const speedMeta = SPEED_LABELS[state.learningSpeed || 1] || SPEED_LABELS[1];

  return (
    <>
      <style>{css}</style>
      <div className="app">
        <div className="header">
          <div className="header-top">
            <div className="logo">FDE<span>.</span>companion</div>
            <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
              <div className="streak-badge" style={{ cursor: "pointer" }} onClick={() => setTab("settings")} title="Learning speed">
                {speedMeta.emoji} {speedMeta.label}
              </div>
              <div className="streak-badge">🔥 {state.streak}d &nbsp;·&nbsp; 📚 {state.readChapters.length}/{totalChapters}</div>
            </div>
          </div>
          <div className="phase-bar">
            <div className="phase-bar-label">// CURRENT PHASE</div>
            <div className="phase-track"><div className="phase-fill" style={{ width: `${Math.min(100, ((state.currentWeek - 1) / weeksPerPhase) * 100)}%`, background: phase.color }} /></div>
            <div className="phase-info">
              <span className="phase-name" style={{ color: phase.color }}>Phase {phase.id} · {phase.title}</span>
              <span className="phase-week">Week {state.currentWeek} / {weeksPerPhase}</span>
            </div>
          </div>
        </div>
        <div className="tabs">
          {[["today", "Today"], ["library", "Library"], ["journal", "Journal"], ["coach", "Coach"], ["settings", "⚙"]].map(([id, label]) => (
            <button key={id} className={`tab ${tab === id ? "active" : ""}`} onClick={() => setTab(id)}>{label}</button>
          ))}
        </div>
        <div className="content">
          {tab === "today" && (<><div className="section-label">// concept of the moment</div><ConceptFeed state={state} dispatch={dispatch} /><div className="section-label">// today's micro-tasks</div><TodayTasks state={state} dispatch={dispatch} /></>)}
          {tab === "library" && <LibraryTab state={state} dispatch={dispatch} />}
          {tab === "journal" && <JournalTab state={state} dispatch={dispatch} />}
          {tab === "coach" && <CoachTab state={state} dispatch={dispatch} />}
          {tab === "settings" && <SettingsTab state={state} dispatch={dispatch} />}
        </div>
      </div>
    </>
  );
}
