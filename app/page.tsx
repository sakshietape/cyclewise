"use client";

import { ArrowDown, ArrowUpRight, Baby, Brain, Check, CircleHelp, Dumbbell, FlowerIcon, Heart, MessageCircle, Moon, Salad, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";

const updated = "13 September 2026";

function Header() {
  return (
    <>
      <div className="topline">
        <div className="container">An evidence-informed place to understand your body · Updated {updated}</div>
      </div>
      <header className="container nav">
        <a className="logo" href="#top"><span className="logo-mark" />cyclewise</a>
        <nav className="nav-links">
          <a href="#learn">Learn</a>
          <a href="#guidelines">Guidelines</a>
          <a href="#skinhair">Skin &amp; Hair</a>
          <a href="#care">Care</a>
          <a href="#faq">FAQs</a>
          <a href="#glossary">Glossary</a>
          <a href="#screener">Screener chatbot</a>
        </nav>
        <a className="nav-cta" href="/admin">Admin sign in</a>
      </header>
    </>
  );
}

function ChatbotFAB() {
  return (
    <div className="fab-wrap">
      <span className="fab-tooltip">Chat with our PCOS Assistant</span>
      <a
        className="fab"
        href="https://pcosense-sanjivani.onrender.com"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chat with our PCOS Assistant"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Header />

      {/* ── Hero ── */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow">A calmer guide to PCOS</div>
            <h1>Understand your body, <em>in your own time.</em></h1>
            <p className="hero-copy">Polycystic ovary syndrome can look different for everyone. Find clear, kind information to help you feel more informed and ready for your next conversation with a doctor.</p>
            <div className="button-row">
              <a className="button button-primary" href="#learn">Start exploring <ArrowDown size={16} /></a>
              <a className="button button-ghost" href="#guidelines">See latest guidelines <ArrowUpRight size={16} /></a>
            </div>
            <p className="hero-note">Always remember: you know your body best. A healthcare professional can help you make sense of symptoms.</p>
          </div>
          <div className="hero-art" aria-label="Abstract illustration of connected circles">
            <div className="art-ring" />
            <span className="art-caption">Small steps. Better questions. More support.</span>
          </div>
        </div>
      </section>

      {/* ── Start here cards ── */}
      <section className="section section-alt" id="learn">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Start here</div>
              <h2>The basics, made simple.</h2>
            </div>
            <p className="section-intro">PCOS is common, manageable, and never your fault. Begin with the pieces that feel most useful today.</p>
          </div>
          <div className="card-grid">
            <a className="card" href="#what">
              <div className="icon-tile"><Sparkles size={20} /></div>
              <h3>What is PCOS?</h3>
              <p>A common hormone condition that can affect periods, skin, hair, and how your body uses energy.</p>
              <span className="source">Learn the basics →</span>
            </a>
            <a className="card" href="#symptoms">
              <div className="icon-tile"><Stethoscope size={20} /></div>
              <h3>Symptoms &amp; diagnosis</h3>
              <p>What to look for, what to ask, and how clinicians usually work toward a diagnosis.</p>
              <span className="source">Know the signs →</span>
            </a>
            <a className="card" href="#care">
              <div className="icon-tile"><ShieldCheck size={20} /></div>
              <h3>Care that fits you</h3>
              <p>Practical lifestyle ideas and an overview of treatment options, always with your doctor in the loop.</p>
              <span className="source">Explore care →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Screener CTA ── */}
      <section className="section screener-section" id="screener">
        <div className="container screener-panel">
          <div className="icon-tile"><MessageCircle size={20} /></div>
          <div>
            <div className="eyebrow">Need more support?</div>
            <h2>Explore questions with our PCOS screener chatbot.</h2>
            <p className="section-intro">For a quick check or related questions about PCOS, visit our dedicated screener website and chat with the bot. It is a separate resource from this educational guide.</p>
            <a className="button button-primary" href="https://pcosense-sanjivani.onrender.com" target="_blank" rel="noreferrer">Visit the PCOS Awareness Screener <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* ── 01 What is PCOS ── */}
      <section className="section" id="what">
        <div className="container split">
          <div>
            <div className="eyebrow">01 · What is PCOS?</div>
            <h2>A real condition, with many faces.</h2>
            <p className="section-intro">PCOS is a long-term health condition linked to hormones. Some people have irregular periods, higher levels of certain hormones, or ovaries that look different on a scan. You do not need every symptom to have PCOS.</p>
            <div className="stat-row">
              <div className="stat"><strong>1 in 10</strong><span>people with ovaries may have PCOS</span></div>
              <div className="stat"><strong>Many paths</strong><span>symptoms vary from person to person</span></div>
              <div className="stat"><strong>Not your fault</strong><span>it is not caused by a lack of willpower</span></div>
            </div>
          </div>
          <div className="list">
            <div className="list-item">
              <span className="number">01</span>
              <div>
                <strong>Hormones</strong>
                <span>Hormones are chemical messengers. In PCOS, some may be out of balance, including hormones that affect your skin, hair growth, and cycle.</span>
              </div>
            </div>
            <div className="list-item">
              <span className="number">02</span>
              <div>
                <strong>Cycles &amp; fertility</strong>
                <span>Periods may come less often, be unpredictable, or sometimes stop. This can make it harder to predict ovulation, though many people with PCOS do conceive.</span>
              </div>
            </div>
            <div className="list-item">
              <span className="number">03</span>
              <div>
                <strong>Skin &amp; hair</strong>
                <span>Higher levels of certain hormones can lead to acne, oily skin, extra hair in places like the chin or upper lip, or hair that thins on the scalp. These are common and treatable.</span>
              </div>
            </div>
            <div className="list-item">
              <span className="number">04</span>
              <div>
                <strong>Metabolism &amp; energy</strong>
                <span>PCOS is often linked to how the body handles blood sugar. This can affect energy levels, weight, and long-term heart health. A doctor can check and guide you.</span>
              </div>
            </div>
            <div className="list-item">
              <span className="number">05</span>
              <div>
                <strong>Whole-body health</strong>
                <span>PCOS can also connect with sleep, mood, and cholesterol. Taking small steps in one area often helps others too.</span>
              </div>
            </div>
            <div className="list-item">
              <span className="number">06</span>
              <div>
                <strong>Myth / fact</strong>
                <span>PCOS does not mean you cannot get pregnant, and it is not defined by cysts alone. Many people with PCOS live full, healthy lives with the right support.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 02 Symptoms & diagnosis ── */}
      <section className="section section-alt" id="symptoms">
        <div className="container split">
          <div>
            <div className="eyebrow">02 · Symptoms &amp; diagnosis</div>
            <h2>Questions are a good place to start.</h2>
            <p className="section-intro">There is no single test for PCOS. A doctor will listen to your story, ask about your health, and may use blood tests or an ultrasound. You do not need to arrive with all the answers — just bring your experience.</p>
          </div>
          <div className="card-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div className="card">
              <div className="icon-tile"><CircleHelp size={20} /></div>
              <h3>Common signs</h3>
              <ul>
                <li>Periods that are irregular or absent</li>
                <li>Extra facial or body hair</li>
                <li>Acne or oily skin</li>
                <li>Hair thinning on the scalp</li>
                <li>Difficulty getting pregnant</li>
                <li>Fatigue or low energy</li>
                <li>Mood changes, anxiety, or low mood</li>
              </ul>
            </div>
            <div className="card">
              <div className="icon-tile"><Check size={20} /></div>
              <h3>What diagnosis may include</h3>
              <ul>
                <li>Your period and symptom history</li>
                <li>A gentle physical check</li>
                <li>Blood tests for hormones and blood sugar</li>
                <li>Checking other possible causes</li>
                <li>Sometimes an ultrasound</li>
                <li>Questions about family history</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 Guidelines ── */}
      <section className="section" id="guidelines">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">03 · Reviewed regularly</div>
              <h2>Latest guidelines, translated.</h2>
            </div>
            <p className="section-intro">Short summaries in everyday language. Each one links to the trusted source, and nothing is published without review.</p>
          </div>
          <div className="guideline">
            <span className="eyebrow">2023 international evidence-based guideline</span>
            <h3>PCOS care should be personal, not one-size-fits-all.</h3>
            <p>Experts recommend shared decision-making: your goals, preferences, symptoms, and overall health should shape your care. Lifestyle support is helpful for everyone, whatever their body size.</p>
            <a className="source" href="https://www.monash.edu/medicine/mchri/pcos/guideline" target="_blank" rel="noreferrer">Read the source at Monash University <ArrowUpRight size={13} /></a>
          </div>
          <div className="guideline">
            <span className="eyebrow">2023 mental health recommendation</span>
            <h3>Mood deserves a place in every PCOS conversation.</h3>
            <p>Guidelines encourage clinicians to ask about depression and anxiety, and to offer support when needed. Seeking help is a sign of care, not a failure.</p>
            <a className="source" href="https://www.monash.edu/medicine/mchri/pcos/guideline" target="_blank" rel="noreferrer">Read the source at Monash University <ArrowUpRight size={13} /></a>
          </div>
          <p className="hero-note">Last updated on {updated} · Next scheduled source check: 31 August 2026</p>
        </div>
      </section>

      {/* ── NEW: Skin & Hair ── */}
      <section className="section section-alt" id="skinhair">
        <div className="container split">
          <div>
            <div className="eyebrow">04 · Skin &amp; hair changes</div>
            <h2>Common concerns, gentle answers.</h2>
            <p className="section-intro">Skin and hair changes are among the most visible signs of PCOS, and they can affect how you feel about yourself. You are not alone in noticing them, and most can be managed with the right support.</p>
            <p className="hero-note" style={{ marginTop: "24px" }}>Last updated on {updated}</p>
          </div>
          <div className="list">
            <div className="list-item">
              <span className="number"><FlowerIcon size={20} style={{ color: "var(--teal)" }} /></span>
              <div>
                <strong>Acne &amp; oily skin</strong>
                <span>Higher levels of androgens (a type of hormone) can make the skin produce more oil. This often shows up on the face, chest, or back. A gentle skincare routine and a conversation with a doctor about options can help a lot.</span>
              </div>
            </div>
            <div className="list-item">
              <span className="number"><FlowerIcon size={20} style={{ color: "var(--teal)" }} /></span>
              <div>
                <strong>Extra hair growth (hirsutism)</strong>
                <span>Some people notice darker or thicker hair appearing on the chin, upper lip, chest, or tummy. This happens because of hormone levels, not anything you did wrong. There are safe, practical options to manage this — ask your doctor what suits you best.</span>
              </div>
            </div>
            <div className="list-item">
              <span className="number"><FlowerIcon size={20} style={{ color: "var(--teal)" }} /></span>
              <div>
                <strong>Hair thinning on the scalp</strong>
                <span>Some people with PCOS notice their hair becoming thinner, especially near the top or temples. This is called female-pattern hair loss and is linked to the same hormone imbalance. It can be distressing — and it is worth mentioning at your next appointment.</span>
              </div>
            </div>
            <div className="list-item">
              <span className="number"><FlowerIcon size={20} style={{ color: "var(--teal)" }} /></span>
              <div>
                <strong>Dark patches of skin</strong>
                <span>Some people notice velvety, darkened patches of skin around the neck, underarms, or inner thighs. This can be a sign that the body is working harder to manage blood sugar. It is called acanthosis nigricans and is worth mentioning to a doctor.</span>
              </div>
            </div>
            <div className="list-item">
              <span className="number"><FlowerIcon size={20} style={{ color: "var(--teal)" }} /></span>
              <div>
                <strong>What actually helps</strong>
                <span>Managing the underlying hormone imbalance often improves skin and hair over time. Meanwhile, simple skincare, SPF, gentle hair care, and talking to a doctor about your specific concerns are good first steps. You deserve care that includes the parts you can see.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 Prevention & Lifestyle ── */}
      <section className="section" id="care">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">05 · Prevention &amp; lifestyle</div>
              <h2>Support your health gently.</h2>
            </div>
            <p className="section-intro">There is no perfect PCOS routine. Try small, repeatable changes and choose what feels realistic for your life.</p>
          </div>
          <div className="card-grid">
            <div className="card">
              <div className="icon-tile"><Salad size={20} /></div>
              <h3>Eat regularly</h3>
              <p>Build meals around foods you enjoy, including fibre, protein, and colourful plants. No single "PCOS diet" is required. Some easy ideas to try:</p>
              <div className="tip-list">
                <div className="tip-item"><span className="tip-dot" /><p>A bowl of dal or lentil soup with roti or rice — filling and gentle on blood sugar.</p></div>
                <div className="tip-item"><span className="tip-dot" /><p>Eggs or curd with a handful of vegetables in the morning — easy protein to start the day.</p></div>
                <div className="tip-item"><span className="tip-dot" /><p>Whole fruits as a snack instead of biscuits or sweets — same sweetness, more fibre.</p></div>
                <div className="tip-item"><span className="tip-dot" /><p>Drinking water steadily through the day — thirst is sometimes confused with hunger.</p></div>
              </div>
            </div>
            <div className="card">
              <div className="icon-tile"><Dumbbell size={20} /></div>
              <h3>Move your way</h3>
              <p>Walking, dancing, stretching, or strength work can all support health. Choose movement you can return to. Some gentle starting points:</p>
              <div className="tip-list">
                <div className="tip-item"><span className="tip-dot" /><p>A 20-minute walk after your main meal — helps the body manage blood sugar gently.</p></div>
                <div className="tip-item"><span className="tip-dot" /><p>Simple bodyweight moves at home: squats, wall push-ups, or slow lunges — no gym needed.</p></div>
                <div className="tip-item"><span className="tip-dot" /><p>Yoga or stretching for 10–15 minutes — especially helpful on days when energy is low.</p></div>
                <div className="tip-item"><span className="tip-dot" /><p>Dancing to a few songs — counts as movement and can lift your mood too.</p></div>
              </div>
            </div>
            <div className="card">
              <div className="icon-tile"><Moon size={20} /></div>
              <h3>Protect your rest</h3>
              <p>A regular wind-down routine and support for sleep problems can make everyday symptoms easier to handle. Some simple things that help:</p>
              <div className="tip-list">
                <div className="tip-item"><span className="tip-dot" /><p>Try to go to bed and wake up at roughly the same time every day — even on weekends.</p></div>
                <div className="tip-item"><span className="tip-dot" /><p>Dim screens or switch to night mode about an hour before bed — bright light tells your brain it is still daytime.</p></div>
                <div className="tip-item"><span className="tip-dot" /><p>A short, calming routine — washing your face, reading a page, or a few deep breaths — signals to your body that it is time to wind down.</p></div>
                <div className="tip-item"><span className="tip-dot" /><p>If sleep is a regular struggle, mention it at your next appointment — it is worth treating, not just tolerating.</p></div>
              </div>
            </div>
          </div>
          <div className="split" style={{ marginTop: "65px" }}>
            <div>
              <div className="eyebrow">Treatment overview</div>
              <h2>Care has options.</h2>
            </div>
            <div>
              <p className="section-intro">Treatment depends on what matters to you: period regularity, skin or hair symptoms, fertility, blood sugar, mood, or something else. A doctor can talk through options and possible benefits and risks. Never start or stop treatment without medical advice.</p>
              <a className="button button-primary" href="#about">See sources &amp; safety note <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW: Fertility & Pregnancy ── */}
      <section className="section section-alt" id="fertility">
        <div className="container split">
          <div>
            <div className="eyebrow">06 · Fertility &amp; pregnancy planning</div>
            <h2>There is reason for hope.</h2>
            <p className="section-intro">PCOS is one of the most common reasons periods become irregular, which can make it harder to know when you are ovulating. But many people with PCOS do become pregnant — often without any extra help at all.</p>
            <p className="hero-note" style={{ marginTop: "24px" }}>Last updated on {updated}</p>
          </div>
          <div>
            <div className="list">
              <div className="list-item">
                <span className="number"><Baby size={20} style={{ color: "var(--teal)" }} /></span>
                <div>
                  <strong>Why does PCOS affect fertility?</strong>
                  <span>Because ovulation (when an egg is released) can be less predictable with PCOS, it can take longer to conceive. It does not mean it is impossible — it often just means the timing is harder to track.</span>
                </div>
              </div>
              <div className="list-item">
                <span className="number"><Baby size={20} style={{ color: "var(--teal)" }} /></span>
                <div>
                  <strong>When should I talk to a doctor?</strong>
                  <span>If you have been trying to conceive for 12 months without success (or 6 months if you are over 35), it is a good time to ask for support. Your doctor can help map out what is happening and what options are available to you.</span>
                </div>
              </div>
              <div className="list-item">
                <span className="number"><Baby size={20} style={{ color: "var(--teal)" }} /></span>
                <div>
                  <strong>What can help while trying?</strong>
                  <span>Regular movement, balanced eating, and managing stress all support ovulation. Some people find that even small improvements in lifestyle help their cycles become more regular over time.</span>
                </div>
              </div>
              <div className="list-item">
                <span className="number"><Baby size={20} style={{ color: "var(--teal)" }} /></span>
                <div>
                  <strong>What about pregnancy itself?</strong>
                  <span>Most people with PCOS have healthy pregnancies. Your care team may keep a closer eye on blood sugar during pregnancy, as PCOS can sometimes be connected with how the body manages glucose. This is manageable with the right support.</span>
                </div>
              </div>
            </div>
            <div className="hope-box">
              <h3>You are not alone in this.</h3>
              <p>Fertility worries can bring up a lot of emotions. Whatever you are feeling is valid. If you need to talk, bring it to your doctor or a counsellor — this is part of your health too, not a separate issue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 07 Mental health ── */}
      <section className="section" id="mental">
        <div className="container split">
          <div>
            <div className="eyebrow">07 · Mental health &amp; PCOS</div>
            <h2>Your feelings count, too.</h2>
            <p className="section-intro">Living with changing symptoms or uncertainty can be tiring. PCOS is associated with a higher chance of anxiety and depression, and support is available.</p>
          </div>
          <div className="card">
            <div className="icon-tile"><Brain size={20} /></div>
            <h3>Make space for support</h3>
            <p>Tell someone you trust how you are doing. Bring mood changes to your next appointment and ask about counselling or other support. If you feel unsafe or might hurt yourself, contact local emergency services or a crisis service now.</p>
          </div>
        </div>
      </section>

      {/* ── 08 FAQs (expanded to 15) ── */}
      <section className="section section-alt" id="faq">
        <div className="container">
          <div className="eyebrow">08 · FAQs</div>
          <h2>Good questions to keep close.</h2>
          <div className="faq-list" style={{ marginTop: "35px" }}>
            <details>
              <summary>Is PCOS caused by something I did?</summary>
              <p>No. PCOS is a complex condition involving genes, hormones, and the environment. It is not a personal failure and is not caused by one food or habit. Many people who eat well and exercise regularly still develop PCOS.</p>
            </details>
            <details>
              <summary>Can PCOS be cured?</summary>
              <p>There is not currently a single cure, but symptoms and long-term health risks can often be managed well. The right plan for you can also change over time as your life and priorities change — and that is normal.</p>
            </details>
            <details>
              <summary>Can I get pregnant with PCOS?</summary>
              <p>Many people with PCOS become pregnant, with or without support. PCOS is one of the most treatable causes of irregular ovulation. If you are trying to conceive, talk with a doctor about your options — there is usually a clear next step.</p>
            </details>
            <details>
              <summary>Should I lose weight to manage PCOS?</summary>
              <p>Health is not a number on a scale. Movement, nourishing food, sleep, and medical care can help people of all body sizes. Your care should never be based on shame, and no doctor should make you feel unworthy of help at any weight.</p>
            </details>
            <details>
              <summary>Why is my period so irregular?</summary>
              <p>In PCOS, the signals between the brain and the ovaries can be disrupted, making it harder for ovulation to happen on a regular schedule. Without ovulation, a period may not come, or it may come at unpredictable times. This is one of the most common signs of PCOS, and there are ways to support a more regular cycle.</p>
            </details>
            <details>
              <summary>Does PCOS get better with age?</summary>
              <p>For many people, some symptoms do become easier to manage over time — especially around the time of perimenopause. Cycles can sometimes become more regular in the mid-thirties. However, long-term health checks (like blood sugar and heart health) remain important throughout life.</p>
            </details>
            <details>
              <summary>Is the extra hair or acne permanent?</summary>
              <p>Not necessarily. Managing the hormone imbalance at the root of PCOS often improves skin and hair over time. There are also safe cosmetic and medical options to manage both in the meantime. It is worth discussing what bothers you most with your doctor — you do not have to simply accept it.</p>
            </details>
            <details>
              <summary>Can stress make PCOS worse?</summary>
              <p>Yes, ongoing stress can affect hormone levels and make cycles more irregular. The relationship goes both ways — PCOS symptoms can also cause stress. Finding gentle ways to manage stress (rest, talking to someone, movement you enjoy) is a meaningful part of caring for yourself.</p>
            </details>
            <details>
              <summary>Do I need to take hormonal birth control for PCOS?</summary>
              <p>Hormonal contraception is one option that some people find helpful for managing certain PCOS symptoms, but it is not the only option and is not right for everyone. Your doctor can explain what it does and does not address, and help you weigh up choices based on your own goals and health history.</p>
            </details>
            <details>
              <summary>Is PCOS related to diabetes?</summary>
              <p>PCOS is connected to how the body handles insulin — the hormone that manages blood sugar. Many people with PCOS have insulin resistance, which means the body needs to work harder to keep blood sugar stable. This does not mean you will develop diabetes, but it does make regular check-ups and a balanced diet more important.</p>
            </details>
            <details>
              <summary>Can thin people have PCOS?</summary>
              <p>Yes. PCOS affects people of all body sizes. The condition is about hormones, not body weight. Thinner people with PCOS may find their symptoms are taken less seriously — if that happens to you, it is okay to ask for further investigation.</p>
            </details>
            <details>
              <summary>Will PCOS affect me after menopause?</summary>
              <p>Some of the hormonal aspects of PCOS — like elevated androgens — may ease after menopause. However, any long-term risks related to blood sugar and heart health remain worth monitoring throughout life. Keep attending regular health check-ups even if PCOS feels less active.</p>
            </details>
            <details>
              <summary>What should I tell my doctor at my first appointment?</summary>
              <p>Write down your cycle history (how often, how long, how heavy), any symptoms that concern you (skin, hair, mood, energy), and any family history of PCOS, diabetes, or heart conditions. You do not need a perfect account — just share what you have noticed. Your experience is the most important starting point.</p>
            </details>
            <details>
              <summary>Is there a link between PCOS and anxiety or depression?</summary>
              <p>Yes. Research consistently shows that people with PCOS are more likely to experience anxiety and depression. This may be partly related to hormone imbalances, and partly to the stress of living with a condition that can feel unpredictable. Please bring these feelings to your doctor — mental health is part of managing PCOS, not separate from it.</p>
            </details>
            <details>
              <summary>Can teenagers have PCOS?</summary>
              <p>Yes, PCOS can appear during or after puberty. Irregular periods are common in the first year or two after periods start, but if cycles remain very unpredictable beyond that, it is worth asking a doctor. Early support can make a real difference to long-term health and confidence.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ── NEW: Glossary ── */}
      <section className="section" id="glossary">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">09 · Glossary</div>
              <h2>Medical words, plain language.</h2>
            </div>
            <p className="section-intro">Words you might hear from a doctor or read in an article — explained simply, without the jargon.</p>
          </div>
          <div className="glossary-grid">
            <div className="glossary-card">
              <p className="glossary-term">Androgens</p>
              <p className="glossary-def">A group of hormones sometimes called "male hormones," though everyone has some. In PCOS, these are often higher than usual, which can cause acne, extra hair growth, or hair thinning on the scalp.</p>
            </div>
            <div className="glossary-card">
              <p className="glossary-term">Insulin resistance</p>
              <p className="glossary-def">When the body's cells do not respond to insulin as well as they should, so the body produces more insulin to compensate. This is very common in PCOS and is linked to blood sugar levels and energy.</p>
            </div>
            <div className="glossary-card">
              <p className="glossary-term">Anovulation</p>
              <p className="glossary-def">When the ovaries do not release an egg during a cycle. This is why periods can be irregular or absent in PCOS — without ovulation, the usual hormonal sequence that triggers a period does not happen.</p>
            </div>
            <div className="glossary-card">
              <p className="glossary-term">Ovulation</p>
              <p className="glossary-def">The moment each cycle when an egg is released from the ovary. This is when pregnancy can happen. In PCOS, ovulation may be less frequent or harder to predict.</p>
            </div>
            <div className="glossary-card">
              <p className="glossary-term">LH and FSH</p>
              <p className="glossary-def">Two hormones made by the brain that tell the ovaries when to grow and release eggs. In PCOS, the balance between these two is often off, which is part of why cycles become irregular.</p>
            </div>
            <div className="glossary-card">
              <p className="glossary-term">Polycystic ovaries</p>
              <p className="glossary-def">On an ultrasound, ovaries in PCOS can look like they contain many small fluid-filled sacs (follicles). These are not painful cysts — the word "polycystic" just describes how they look. You can have PCOS without this finding.</p>
            </div>
            <div className="glossary-card">
              <p className="glossary-term">Hirsutism</p>
              <p className="glossary-def">The medical word for unwanted hair growth in areas where hair is typically thicker in men — such as the chin, upper lip, chest, or tummy. It is caused by higher androgen levels and is common in PCOS.</p>
            </div>
            <div className="glossary-card">
              <p className="glossary-term">Acanthosis nigricans</p>
              <p className="glossary-def">A skin change that looks like dark, velvety patches — usually around the neck, underarms, or groin. It can be a sign of insulin resistance and is worth mentioning to a doctor.</p>
            </div>
            <div className="glossary-card">
              <p className="glossary-term">Metabolic syndrome</p>
              <p className="glossary-def">A group of conditions — including high blood sugar, high blood pressure, and unhealthy cholesterol levels — that can occur together. People with PCOS have a higher chance of developing these, which is why regular health checks matter.</p>
            </div>
            <div className="glossary-card">
              <p className="glossary-term">Shared decision-making</p>
              <p className="glossary-def">An approach to healthcare where the doctor and the patient decide together on the best plan, based on the patient's values, goals, and preferences — not just what the guideline says. You are a partner in your own care.</p>
            </div>
          </div>
          <p className="hero-note" style={{ marginTop: "32px" }}>Last updated on {updated}</p>
        </div>
      </section>

      {/* ── About & sources ── */}
      <section className="section section-alt" id="about">
        <div className="container split">
          <div>
            <div className="eyebrow">About &amp; sources</div>
            <h2>Information you can trace.</h2>
          </div>
          <div>
            <p className="section-intro">Cyclewise turns trusted guidance into plain-language summaries. Our reference point is the 2023 International Evidence-based Guideline for the Assessment and Management of PCOS, developed with healthcare professionals and people with lived experience.</p>
            <a className="source" href="https://www.monash.edu/medicine/mchri/pcos/guideline" target="_blank" rel="noreferrer">View the full guideline at Monash University <ArrowUpRight size={13} /></a>
          </div>
        </div>
      </section>

      {/* ── Disclaimer + Footer ── */}
      <div className="disclaimer">
        <div className="container">
          <p><strong>This website is for general information only, not medical advice.</strong> Please see a doctor for diagnosis or treatment. If you have urgent concerns, contact local emergency services.</p>
        </div>
      </div>
      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 cyclewise</span>
          <span>Last updated {updated} · For education, with care.</span>
        </div>
      </footer>

      {/* ── Floating chatbot button ── */}
      <ChatbotFAB />
    </main>
  );
}
