/* Ihsana preview · editorial content
   Sample articles, cases and results are illustrative and clearly labelled.
   Text from the developer guide and approved mockups is kept verbatim. */

window.IHSANA_MAQASID = [
  { key: 'faith', label: 'Faith', ar: 'al-Din', full: 'Faith', sector: 'Religious life and community', fund: 'Freedom to worship, community institutions, civil and religious rights', desc: 'Protecting religious life, learning and the institutions that hold communities together.', examples: ['Muslim students & youth', 'Anti-Islamophobia monitoring', 'Civil rights & legal defence'] },
  { key: 'life', label: 'Life', ar: 'al-Nafs', full: 'Life · Health', sector: 'Health and survival', fund: 'Maternal survival, child survival, disease control', desc: 'Protecting life and health, from a mother’s survival in childbirth to a child’s fifth birthday.', examples: ['Maternal survival', 'Child survival (under-5)', 'Respiratory disease & TB'] },
  { key: 'intellect', label: 'Intellect', ar: 'al-Aql', full: 'Intellect · Education', sector: 'Education', fund: 'Children in school, literacy, skills and training', desc: 'Protecting the mind through education, skills and access to knowledge.', examples: ['Children out of school', 'Education quality', 'Skills development'] },
  { key: 'progeny', label: 'Progeny', ar: 'al-Nasl', full: 'Progeny · Family', sector: 'Family and the next generation', fund: 'Childhood nutrition, maternal and child health, family stability', desc: 'Protecting families and the next generation, so children grow up healthy and secure.', examples: ['Childhood nutrition & stunting', 'Child poverty reduction', 'Youth retention'] },
  { key: 'wealth', label: 'Wealth', ar: 'al-Mal', full: 'Wealth · Economy', sector: 'Economic wellbeing', fund: 'Poverty reduction, employment, financial inclusion', desc: 'Protecting livelihoods and economic dignity, so people can provide for themselves.', examples: ['Women’s economic participation', 'Youth employment', 'Economic inclusion & poverty'] },
  { key: 'general', label: 'General', ar: '', full: 'General', sector: 'Cross-cutting', fund: 'Articles not tied to one Maqsad, including zakat, methodology and Ihsana itself', desc: 'Cross-cutting work that informs how giving is designed, governed and measured.', examples: ['Zakat', 'Methodology', 'Ihsana'] }
];

window.IHSANA_ARTICLE_TYPES = ['Data and analysis', 'History', 'Introduction', 'Perspectives'];

window.IHSANA_AUDIENCE = [
  { name: 'Family offices', desc: 'Giving that matches the rigour of your investments. We build a multi-generational giving strategy that the whole family can own, and give the next generation a structured way to take part.' },
  { name: 'Private foundations', desc: 'Sharper focus for an existing grant portfolio. We review where your grants go today, test them against evidence, and help the board agree on fewer, bigger priorities.' },
  { name: 'Ultra-high-net-worth donors', desc: 'A clear thesis for personal giving. We turn your values and your zakat obligation into a short list of high-impact opportunities, with diligence done on each.' },
  { name: 'Wealth advisors', desc: 'A specialist partner for clients who ask about Islamic giving. We work alongside you on zakat calculation, governance and where to give, so you can serve the whole client.' },
  { name: 'Institutional givers', desc: 'Evidence and coordination at scale. We help corporate and institutional givers align programmes with community priorities and co-invest with peers.' },
  { name: 'Endowments & awqaf', desc: 'Governance and strategy for perpetual capital. We help awqaf decide how returns are distributed, measure what they achieve, and keep them true to the founder’s intent.' }
];

window.IHSANA_SERVICES = [
  { n: '01', title: 'Giving strategy & thesis', desc: 'We define your objectives against the Maqasid framework and build a clear allocation thesis: what to fund, where, and why it will hold.' },
  { n: '02', title: 'Priority & portfolio design', desc: 'Using our country model, we identify the most solvable, most urgent needs and construct a diversified portfolio of high-conviction commitments.' },
  { n: '03', title: 'Diligence & structuring', desc: 'We vet vehicles and partners, structure grants and gifts, and align every commitment with the sharia and with your intent.' },
  { n: '04', title: 'Impact measurement', desc: 'The relationship does not end at the cheque. We measure real-world outcomes and report, plainly, on the lives your capital reached.' },
  { n: '05', title: 'Zakat governance', desc: 'We help institutions and family offices build the policies, oversight and reporting that make zakat allocation defensible and repeatable.' },
  { n: '06', title: 'Convening & co-investment', desc: 'We connect aligned givers into pooled, coordinated commitments, so the largest and hardest problems meet capital at the scale they require.' }
];

window.IHSANA_PATHS = [
  { n: '01', title: 'Closing the information gap', desc: 'Our research reaches past the symptoms to the systemic causes of crises — the burdens that emergency aid consistently overlooks. We build the evidence base that turns reactive giving into deliberate, root-cause investment.', steps: ['Map the need: what is most urgent in each country and sector', 'Find the root causes behind it', 'Review the evidence on what works and what it costs', 'Publish priorities, starting with the State of the Muslim World'] },
  { n: '02', title: 'Closing the allocation gap', desc: 'Through strategic advisory, we guide philanthropists to move beyond temporary fixes — directing capital toward the highest-return, most-solvable priorities, and building a portfolio of giving with the discipline of an investment thesis.', steps: ['Agree your giving thesis and horizon', 'Design a portfolio across causes and partners', 'Diligence, structure and fund each position', 'Measure, review and rebalance every year'] }
];

window.IHSANA_FIVE = [
  { category: 'Health', title: 'Maternal survival', big: '~960,000 deaths a year', desc: 'Mothers and newborns still dying around childbirth from causes we already know how to prevent; newborns account for most of the deaths, and skilled care saves both.' },
  { category: 'Health', title: 'Enteric infections', big: '~465,000 deaths a year', desc: 'Enteric infections are gut infections spread by unsafe water and food. Nearly all the deaths come from diarrhoea, and that so many die from something we can prevent with clean water and treat for pennies is a moral travesty.' },
  { category: 'Health', title: 'Malaria & tropical disease', big: '~508,000 deaths a year', desc: 'Malaria and neglected tropical diseases: among the most cost-effective illnesses in the world to prevent and treat.' },
  { category: 'Education', title: 'Children out of school', big: 'Around 110 million children', desc: 'Children with no access to schooling, one of the highest-return investments a country can make in its future.' },
  { category: 'Economic', title: 'Youth employment', big: 'A generation of 350 million young people', desc: 'A young generation ready for work; jobs, skills and enterprise turn a demographic risk into a demographic dividend.' }
];

window.IHSANA_ARTICLES = [
  {
    id: 'how-muslims-die',
    title: 'How Muslims Die',
    date: '12 November 2026',
    dateISO: '2026-11-12',
    author: 'Ihsana Research',
    readTime: 9,
    maqasid: ['life'],
    type: 'Data and analysis',
    countries: 'OIC countries',
    tags: ['Root causes', 'Maternal health', 'Child health', 'Malaria', 'Data'],
    cover: 'assets/pulse-check.jpg',
    coverAlt: 'A clinician checking a pulse at the wrist',
    coverCaption: 'Photograph from the supplied Ihsana article mockup.',
    featured: true,
    summary: 'How health crises from preventable causes remain the most prominent threat across OIC countries.',
    dek: 'The causes are familiar. The money still goes elsewhere.',
    sections: [
      {
        h: 'The threat that rarely makes the headline',
        html: `<p>Across the 57 countries of the Organisation of Islamic Cooperation, the most common threat to life is not war, drought or displacement. It is the ordinary failure of health systems to do things the world already knows how to do: keep a mother alive through childbirth, protect a newborn’s first month, treat diarrhoea, and control malaria.</p>
        <p>These deaths are concentrated, predictable and preventable. That combination should make them the easiest part of global health to fund. Instead, they remain the most persistently underweighted.</p>`,
        facts: ['~960,000 mothers and newborns die each year across OIC countries', '~465,000 deaths a year from enteric infections', '~508,000 deaths a year from malaria and tropical disease', 'Most deaths are concentrated in a small group of countries']
      },
      {
        h: 'Three causes, one pattern',
        html: `<p><strong>Maternal and newborn survival.</strong> Mothers and newborns are still dying around childbirth from causes we know how to prevent. Newborn deaths drive most of the toll; skilled care, safe blood and basic newborn care close much of the gap.</p>
        <p><strong>Enteric infections.</strong> Gut infections spread by unsafe water and food. Nearly all the deaths come from diarrhoea, and that so many die from something we can prevent with clean water and treat for pennies is a moral travesty.</p>
        <p><strong>Malaria and neglected tropical disease.</strong> Among the most cost-effective illnesses in the world to prevent and treat, and still among the least generously funded relative to the burden.</p>`,
        chart: {
          src: 'assets/chart-mortality.svg',
          alt: 'Bar chart comparing annual deaths from maternal and newborn causes, enteric infections and malaria across OIC countries',
          caption: 'Deaths from three preventable causes across OIC countries. Illustrative sample data.',
          source: 'Source: IHME Global Burden of Disease 2023; Ihsana analysis',
          sourceUrl: 'https://www.healthdata.org/research-analysis/gbd'
        }
      },
      {
        h: 'Why money misses the most solvable need',
        html: `<p>The allocation gap is not only about how much is given. It is about which problems are legible to donors. A hospital collapse produces images. A mother dying of postpartum haemorrhage in a functioning district clinic produces a statistic. The first attracts emergency funding; the second requires a health system that is reliably supplied, staffed and supervised.</p>
        <p>That is harder to communicate, but it is not harder to fund. A portfolio of proven maternal-health interventions can be costed, delivered and measured. The barrier is the absence of a short, credible list of priorities attached to a specific place.</p>`,
        facts: ['Skilled birth attendance, safe blood and newborn care are proven interventions', 'Clean water and basic treatment make enteric deaths among the most preventable', 'Malaria control is highly cost-effective per life saved', 'Funding follows visibility, not always solvability']
      },
      {
        h: 'What better allocation looks like',
        html: `<p>Start with the countries where the burden is largest and the delivery constraints are known. Fund a defined package rather than a general programme. Attach a measurable outcome to each commitment, and set a review point early enough to change course.</p>
        <ul>
          <li><strong>Concentrate.</strong> Fewer, larger commitments in the countries where the model identifies the greatest preventable burden.</li>
          <li><strong>Fund the constraint.</strong> If the barrier is skilled staff, fund training and retention. If it is supply, fund the supply chain.</li>
          <li><strong>Measure survival, not activity.</strong> Count mothers and newborns alive at discharge, not workshops delivered.</li>
        </ul>`
      },
      {
        h: 'A test for the next grant',
        html: `<p>Before the next health grant is approved, ask three questions. Does this address a cause on which the evidence is strong? Is it aimed at a country where the burden is large? And will we know, within a defined period, whether fewer mothers and children died?</p>
        <p>A giving portfolio that can answer those questions is already doing something rare: treating the most preventable deaths as the most urgent opportunity.</p>`,
        facts: ['A clear country priority is the beginning, not the end, of diligence', 'The best grant is one whose result can be checked']
      }
    ],
    references: [
      { label: 'IHME Global Burden of Disease', url: 'https://www.healthdata.org/research-analysis/gbd' },
      { label: 'WHO · Maternal mortality', url: 'https://www.who.int/news-room/fact-sheets/detail/maternal-mortality' },
      { label: 'UNICEF · Child survival data', url: 'https://data.unicef.org/topic/child-survival/under-five-mortality/' }
    ]
  },
  {
    id: 'maternal-neonatal-mortality',
    title: 'Maternal and Neonatal Mortality Across OIC Countries',
    date: '5 November 2026',
    dateISO: '2026-11-05',
    author: 'Ihsana Research',
    readTime: 8,
    maqasid: ['progeny'],
    type: 'Data and analysis',
    countries: 'Niger, Nigeria, Pakistan, Somalia',
    tags: ['Maternal health', 'Root causes', 'Data', 'Nigeria', 'Pakistan', 'Somalia'],
    cover: 'assets/maternal-health.jpg',
    coverAlt: 'A mother holding her infant',
    coverCaption: 'Photograph from the supplied Ihsana homepage mockup.',
    featured: false,
    summary: 'Why the first day of life remains the most dangerous, and what a focused giving portfolio can change.',
    dek: 'Most of these deaths happen within a day of birth — and most are avoidable.',
    sections: [
      {
        h: 'A death every minute',
        html: `<p>Maternal and neonatal deaths are often described as a single burden. They are not. A mother who dies in childbirth leaves a family without its centre. A newborn who dies in the first month never has the chance to become anything else. Both losses are counted in the same health statistics, and both are shaped by the same first-day failures.</p>
        <p>Across OIC countries, roughly 960,000 mothers and newborns die each year from causes we know how to prevent. The majority of newborn deaths occur in the first week, and a large share within the first 24 hours.</p>`,
        facts: ['Roughly 960,000 maternal and newborn deaths a year', 'Most newborn deaths occur in the first week of life', 'Skilled care at birth is the single clearest dividing line']
      },
      {
        h: 'Where the risk is concentrated',
        html: `<p>The burden is not spread evenly. A small number of countries carry a disproportionate share. Nigeria alone accounts for more than 234,000 maternal and newborn deaths a year in the published model. Pakistan records more than 194,000. Niger, Somalia and Chad each carry burdens that would be national emergencies if they were sudden.</p>
        <p>This concentration is useful. It means a donor does not need a presence in every country to make a measurable difference. A focused portfolio in five or six places can reach a large share of the preventable burden.</p>`,
        chart: {
          src: 'assets/chart-maternal.svg',
          alt: 'Bar chart of annual maternal and newborn deaths in selected OIC countries',
          caption: 'Annual maternal and newborn deaths in selected countries. Illustrative sample data.',
          source: 'Source: Ihsana OIC Priority Investment Model 2026; WHO',
          sourceUrl: 'https://www.who.int/news-room/fact-sheets/detail/maternal-mortality'
        }
      },
      {
        h: 'The first 24 hours',
        html: `<p>Three interventions account for much of the difference between survival and death: a skilled attendant at birth, timely access to safe blood and emergency obstetric care, and basic newborn care — warmth, feeding support, infection prevention and breathing support.</p>
        <p>None of these requires a new discovery. What they require is a functioning chain: a trained worker who is present, a facility that has supplies, a referral route that works at night, and a family that can reach it.</p>`,
        facts: ['Skilled attendance at birth', 'Safe blood and emergency obstetric care', 'Basic newborn care in the first hours']
      },
      {
        h: 'The cost of a safe birth',
        html: `<p>Cost estimates vary widely by context, which is why country-level diligence matters. But the order of magnitude is modest relative to the burden. The mistake is to fund a clinic building without funding the staff, supplies and supervision that make the clinic safe.</p>
        <p>Donors should ask for a delivery model, not only a construction plan. A maternal-health grant that cannot describe who will be on duty at 2am has not yet described how it will save a life.</p>`
      },
      {
        h: 'Measuring the right thing',
        html: `<p>Count births attended by a skilled provider. Count caesarean sections performed for the right indication. Count mothers and babies alive at discharge. Then count them again at 28 days.</p>
        <p>Those measures are unglamorous, but they are close enough to the outcome to tell a donor whether the money worked. That is the standard a serious giving portfolio should set.</p>`,
        facts: ['Measure survival at discharge and at 28 days', 'Track the constraint, not only the activity', 'Review early enough to change course']
      }
    ],
    references: [
      { label: 'WHO · Maternal mortality', url: 'https://www.who.int/news-room/fact-sheets/detail/maternal-mortality' },
      { label: 'UNICEF · Newborn survival', url: 'https://data.unicef.org/topic/child-survival/neonatal-mortality/' }
    ]
  },
  {
    id: 'health-institutions-islamic-golden-age',
    title: 'Health Institutions Across the Islamic Golden Age',
    date: '29 October 2026',
    dateISO: '2026-10-29',
    author: 'Ihsana Research',
    readTime: 7,
    maqasid: ['life', 'faith'],
    type: 'History',
    countries: 'Historical · Abbasid caliphate',
    tags: ['Islamic Golden Age', 'Waqf', 'Health systems', 'History'],
    cover: 'assets/health.svg',
    coverAlt: 'An illustrated atlas of West Africa',
    coverCaption: 'Atlas illustration from the Ihsana review preview.',
    featured: false,
    summary: 'What the bimaristan can teach a modern donor about building institutions that outlast a grant.',
    dek: 'The hospital was not only a building. It was an endowment, a curriculum and a public trust.',
    sections: [
      {
        h: 'A hospital with a waiting list',
        html: `<p>In the ninth and tenth centuries, cities across the Islamic world developed an institution that had no close equivalent in Europe at the time: the bimaristan. It was a hospital, a teaching site and a charitable trust, often funded by waqf and supervised by a physician appointed to the court.</p>
        <p>The popular image is of a single enlightened ruler. The more useful lesson is institutional. The bimaristan persisted because its funding, governance and purpose were written into an endowment that survived the founder.</p>`
      },
      {
        h: 'What the bimaristan did differently',
        html: `<p>The best-known institutions combined treatment, training and record-keeping. Physicians taught students at the bedside. Pharmacies prepared and dispensed medicines. Admission was not limited to the wealthy, and some hospitals provided food, shelter and follow-up care after discharge.</p>
        <p>This was not a modern health system. But it was a system: a repeatable way to organise knowledge, money and authority around the protection of life.</p>`,
        facts: ['Waqf gave hospitals a perpetual funding base', 'Teaching and treatment were designed together', 'Records made practice visible and repeatable']
      },
      {
        h: 'Teaching, licensing and trust',
        html: `<p>Medical knowledge travelled with paper, translation and travel. Baghdad, Cairo, Damascus and Córdoba formed a network of learning that preserved and extended Greek, Persian and Indian medicine. The hospital was a node in that network, not an isolated charity.</p>
        <p>The trust that sustained it was not blind. Endowment deeds specified purpose, staff and obligations. Governance was imperfect, but it made the institution answerable to something beyond the mood of a single donor.</p>`,
        facts: ['Endowment deeds specified purpose and obligations', 'Knowledge networks crossed cities and generations', 'Accountability was built into the funding structure']
      },
      {
        h: 'Why the model still matters',
        html: `<p>Modern donors often fund a project and then leave. The bimaristan suggests a different question: what would it take to fund an institution that continues to work when the founder is gone?</p>
        <p>The answer is rarely a building. It is a combination of recurring revenue, clear governance, a trained workforce and a purpose specific enough to be defended.</p>`,
        facts: ['Ask what survives the end of the grant', 'Perpetual capital needs governance as much as returns', 'Institutions compound; projects end']
      }
    ],
    references: [
      { label: 'Britannica · Islamic Golden Age', url: 'https://www.britannica.com/topic/Islamic-Golden-Age' },
      { label: 'Britannica · Waqf', url: 'https://www.britannica.com/topic/waqf' }
    ]
  },
  {
    id: 'inspiring-long-term-projects-golden-age',
    title: 'Inspiring Long-term Projects of the Islamic Golden Age',
    date: '22 October 2026',
    dateISO: '2026-10-22',
    author: 'Ihsana Research',
    readTime: 7,
    maqasid: ['faith', 'wealth'],
    type: 'History',
    countries: 'Historical · across the Islamic world',
    tags: ['Islamic Golden Age', 'Waqf', 'Endowments', 'History'],
    cover: 'assets/education.svg',
    coverAlt: 'An illustrated atlas of South Asia',
    coverCaption: 'Atlas illustration from the Ihsana review preview.',
    featured: false,
    summary: 'Four endowments that outlived their founders — and the design choices that made them durable.',
    dek: 'The most ambitious giving of the era was built to keep working for centuries.',
    sections: [
      {
        h: 'The endowment that outlived its founder',
        html: `<p>Waqf is one of the most consequential giving technologies in Islamic history. A founder dedicates an asset, removes it from the market, and directs its returns to a purpose. The gift is not a one-off transfer. It is a structure designed to produce benefit indefinitely.</p>
        <p>The best examples were not merely generous. They were well designed: a clear purpose, a revenue source, a manager, and a set of obligations that could be enforced.</p>`
      },
      {
        h: 'Four projects worth studying',
        html: `<p><strong>The Great Mosque of Kairouan.</strong> A religious and educational complex that became a centre of learning in North Africa, sustained by endowments that tied property income to the maintenance of scholarship and worship.</p>
        <p><strong>Al-Azhar.</strong> Founded in Cairo in the tenth century, it grew from a mosque into one of the world’s longest-lived centres of Islamic learning. Its endurance came from a combination of prestige, property and a clear educational mandate.</p>
        <p><strong>The Nur al-Din hospital in Damascus.</strong> A twelfth-century hospital with a dedicated endowment, a staff and a public purpose. It treated patients regardless of means and became a model for later institutions.</p>
        <p><strong>Public water and caravan infrastructure.</strong> Wells, aqueducts and way stations were endowed across the Islamic world. They are easy to overlook because they are utilitarian. They are also among the clearest examples of giving designed around a recurring public need.</p>`,
        facts: ['Waqf converts a gift into a recurring flow of benefit', 'Clear purpose and enforceable obligations made endowments durable', 'Infrastructure and learning were both seen as charitable objects']
      },
      {
        h: 'What made waqf durable',
        html: `<p>Four design choices recur: a dedicated asset, a defined beneficiary, a manager with obligations, and a governance mechanism that could survive the founder. Where any of these was missing, the endowment tended to drift from its purpose or lose its value.</p>
        <p>The modern lesson is not to copy the legal form. It is to copy the discipline of asking how the benefit will continue after the initial gift is spent.</p>`,
        facts: ['Dedicated asset', 'Defined beneficiary', 'Accountable manager', 'Governance that survives the founder']
      },
      {
        h: 'Lessons for a modern donor',
        html: `<p>If you want your giving to last, fund a function rather than an occasion. Build a reserve. Write down who is responsible for what. And measure the benefit in the terms the original purpose intended.</p>
        <p>A perpetual endowment is not the only way to create lasting impact. But every durable gift answers the same question: what keeps this working when I am no longer here to ask?</p>`,
        facts: ['Fund a function, not an occasion', 'Write the governance down', 'Measure the benefit the purpose intended']
      }
    ],
    references: [
      { label: 'Britannica · Waqf', url: 'https://www.britannica.com/topic/waqf' },
      { label: 'Britannica · Islamic Golden Age', url: 'https://www.britannica.com/topic/Islamic-Golden-Age' }
    ]
  },
  {
    id: 'five-maqasid',
    title: 'The five Maqasid and our priorities',
    date: '15 October 2026',
    dateISO: '2026-10-15',
    author: 'Ihsana Research',
    readTime: 8,
    maqasid: ['faith', 'life', 'intellect', 'progeny', 'wealth'],
    type: 'Introduction',
    countries: 'Framework',
    tags: ['Maqasid', 'Framework', 'Al-Ghazali', 'Strategy'],
    cover: 'assets/giving.svg',
    coverAlt: 'An illustrated atlas of the eastern Mediterranean',
    coverCaption: 'Atlas illustration from the Ihsana review preview.',
    featured: false,
    summary: 'How the Maqasid al-Sharia guide our priorities in health, education and the economy.',
    dek: 'A framework for deciding what to protect — and what to fund first.',
    sections: [
      {
        h: 'The five objectives',
        html: `<p>Ihsana anchors its work in the five higher objectives of the sharia described by Imam al-Ghazali in <em>al-Mustasfa</em>: faith, life, intellect, progeny and wealth. They are not a list of sectors. They are a way of asking what a good allocation is protecting.</p>
        <table class="article-table">
          <thead><tr><th>Objective</th><th>Sector</th><th>What we fund and measure</th></tr></thead>
          <tbody>
            <tr><td><strong>Faith</strong> · al-Din</td><td>Religious life and community</td><td>Freedom to worship, community institutions, civil and religious rights</td></tr>
            <tr><td><strong>Life</strong> · al-Nafs</td><td>Health and survival</td><td>Maternal survival, child survival, disease control</td></tr>
            <tr><td><strong>Intellect</strong> · al-Aql</td><td>Education</td><td>Children in school, literacy, skills and training</td></tr>
            <tr><td><strong>Progeny</strong> · al-Nasl</td><td>Family and the next generation</td><td>Childhood nutrition, maternal and child health, family stability</td></tr>
            <tr><td><strong>Wealth</strong> · al-Mal</td><td>Economic wellbeing</td><td>Poverty reduction, employment, financial inclusion</td></tr>
          </tbody>
        </table>`
      },
      {
        h: 'Not a ranking, a discipline',
        html: `<p>The objectives are interlocking. A mother’s survival protects a family. A child’s education protects future income. A household’s economic security protects health and stability. The framework is most useful when it forces a donor to see those connections rather than choose one cause in isolation.</p>
        <p>It also imposes discipline. If a proposal cannot say which objective it protects, how it protects it, and how the protection will be measured, it is not yet a serious allocation.</p>`,
        facts: ['The Maqasid are objectives, not sectors', 'They overlap: health, education and income reinforce one another', 'Every allocation should name what it protects and how it will be measured']
      },
      {
        h: 'From principle to portfolio',
        html: `<p>Our country model translates the framework into priorities. It identifies where the burdens are largest, where money reliably changes outcomes, and where a donor can act through credible partners. The result is not a single ranking of causes. It is a set of country-specific starting points.</p>
        <p>A family might fund maternal survival in Niger, education in Iraq and youth employment in Tunisia. Each commitment protects a different objective, but together they form a coherent portfolio: lives saved, capability built and livelihoods created.</p>`,
        facts: ['Country context determines which priorities are most solvable', 'A portfolio can protect several objectives at once', 'Start with the country, then the cause, then the partner']
      },
      {
        h: 'Read the framework in practice',
        html: `<p>The next step is not to memorise the five objectives. It is to use them in a real allocation decision. When you review a proposal, ask which objective it protects, what evidence supports the approach, and what would count as failure.</p>
        <p>That is how a classical framework becomes a modern giving discipline.</p>`
      }
    ],
    references: [
      { label: 'Stanford Encyclopedia · al-Ghazali', url: 'https://plato.stanford.edu/entries/al-ghazali/' },
      { label: 'Ihsana · Priorities Dashboard', url: 'dashboard.html' }
    ]
  },
  {
    id: 'who-is-ihsana',
    title: 'Who is Ihsana?',
    date: '8 October 2026',
    dateISO: '2026-10-08',
    author: 'Ihsana',
    readTime: 6,
    maqasid: ['general'],
    type: 'Introduction',
    countries: 'Global',
    tags: ['Ihsana', 'Strategy', 'Advisory', 'Framework'],
    cover: 'assets/report.svg',
    coverAlt: 'An illustrated atlas of Africa and Asia',
    coverCaption: 'Atlas illustration from the Ihsana review preview.',
    featured: false,
    summary: 'Our vision and mission for guiding Muslim donors to give where it matters most.',
    dek: 'An advisory firm for donors who want their giving to be as serious as their capital.',
    sections: [
      {
        h: 'Our vision',
        html: `<p>We want a world in which every zakat dinar and every sadaqah gift is directed with the same care as a serious investment: toward a defined need, through a credible partner, with a result that can be seen.</p>
        <p>That vision is not only about efficiency. It is about stewardship. Giving is an act of faith, and the person who gives is entrusted with a responsibility to use it well.</p>`
      },
      {
        h: 'Our mission',
        html: `<p>Ihsana is an advisory firm for Muslim philanthropists, family offices and foundations. We transform your giving so it goes to the causes where it does the most measurable good, building something that will benefit you in this life and the next.</p>
        <p>We do that by closing two gaps: the information gap between good intentions and reliable evidence, and the allocation gap between evidence and a portfolio that acts on it.</p>`,
        facts: ['Research that reaches root causes', 'Advisory that turns evidence into allocation', 'Measurement that reports plainly on what changed']
      },
      {
        h: 'What we do',
        html: `<p>We build giving strategies, design portfolios, diligence partners, structure commitments and measure outcomes. We also build public goods: the Priorities Dashboard, a methodology for ranking needs, and research on the questions donors ask most often.</p>
        <p>Our work is grounded in the Maqasid al-Sharia and in the disciplines of evidence, prioritisation and governance.</p>`
      },
      {
        h: 'Who we serve',
        html: `<p>We work with family offices, private foundations, ultra-high-net-worth donors, wealth advisors, institutional givers, and endowments and awqaf. We take on a limited number of mandates so that each receives the attention a serious allocation requires.</p>
        <p>The common thread is not the size of the giving. It is the desire to give with purpose and to know whether it worked.</p>`
      },
      {
        h: 'Start with a conversation',
        html: `<p>A first conversation is a chance to hear about your goals and tell you honestly whether we can help. If we can, we will propose a scope and a process. If we cannot, we will say so.</p>
        <p>In the meantime, explore the dashboard, read our methodology, or begin with the five Maqasid. Each is a different door into the same work.</p>`
      }
    ],
    references: [
      { label: 'Ihsana · Priorities Dashboard', url: 'dashboard.html' },
      { label: 'Ihsana · Methodology', url: 'methodology.html' }
    ]
  },
  {
    id: 'trust-economic-outcomes',
    title: 'Trust and Economic Outcomes Across OIC Countries',
    date: '1 October 2026',
    dateISO: '2026-10-01',
    author: 'Ihsana Research',
    readTime: 8,
    maqasid: ['wealth'],
    type: 'Data and analysis',
    countries: 'Burkina Faso, Jordan, Morocco, Nigeria, Tunisia',
    tags: ['Trust', 'Economy', 'Data', 'Burkina Faso', 'Jordan', 'Morocco', 'Nigeria', 'Tunisia'],
    cover: 'assets/giving.svg',
    coverAlt: 'An illustrated atlas of the eastern Mediterranean',
    coverCaption: 'Atlas illustration from the Ihsana review preview.',
    featured: false,
    summary: 'Why social trust is an economic variable — and what it means for donors funding livelihoods.',
    dek: 'Markets run on trust. So does the giving that tries to improve them.',
    sections: [
      {
        h: 'The invisible infrastructure',
        html: `<p>Economic development is usually described in physical terms: roads, electricity, credit, skills. All of them matter. But markets also depend on something less visible: the expectation that contracts will be honoured, that strangers can be trusted, and that institutions will not arbitrarily take what is yours.</p>
        <p>Where that expectation is weak, transactions become smaller, shorter and more expensive. Firms stay informal. Households hold cash. Investment horizons shorten.</p>`,
        facts: ['Trust lowers the cost of transactions', 'Weak institutions shorten investment horizons', 'Informality is often a rational response to uncertainty']
      },
      {
        h: 'What the data suggests',
        html: `<p>Survey measures of trust are imperfect, and cross-country comparisons need care. But the pattern is consistent enough to be useful: countries with stronger confidence in institutions and in one another tend to show higher financial inclusion, more formal enterprise and lower transaction costs.</p>
        <p>Correlation is not causation. Trust can be a product of prosperity as well as a cause. Yet the policy implication survives: interventions that make commitments credible can have economic value beyond their direct spend.</p>`,
        chart: {
          src: 'assets/chart-trust.svg',
          alt: 'Chart showing the relationship between institutional trust and formal financial inclusion in selected OIC countries',
          caption: 'Illustrative sample: institutional trust and formal financial inclusion in five countries.',
          source: 'Source: World Bank Findex; illustrative trust index built for this preview',
          sourceUrl: 'https://www.worldbank.org/en/publication/globalfindex'
        }
      },
      {
        h: 'Burkina Faso, Jordan, Morocco, Nigeria, Tunisia',
        html: `<p>These five countries illustrate different positions on the same map. Jordan and Tunisia have relatively high formal financial inclusion but weak labour-market outcomes for young people. Morocco has made progress in inclusion while rural gaps persist. Nigeria combines a large market with deep informality. Burkina Faso faces the most basic constraints of security and institutional reach.</p>
        <p>A livelihoods portfolio that treats all five the same would be poorly designed. The binding constraint is different in each case.</p>`,
        facts: ['The binding constraint differs by country', 'Inclusion without jobs is not enough', 'Informality can be a response to institutional weakness']
      },
      {
        h: 'What this means for donors',
        html: `<p>Fund the institution, not only the entrepreneur. A training programme that does not connect to finance, markets or trustworthy contracts will struggle to produce durable income. A microfinance product in a weak legal environment may transfer risk to the borrower rather than reduce it.</p>
        <p>The practical question is: what would make a small business more willing to invest, hire or formalise? Sometimes the answer is capital. Often it is a credible commitment that the rules will hold.</p>`,
        facts: ['Connect training to finance and markets', 'Look for credible commitment, not only capital', 'Measure income and resilience, not only loans disbursed']
      }
    ],
    references: [
      { label: 'World Bank · Global Findex', url: 'https://www.worldbank.org/en/publication/globalfindex' },
      { label: 'OECD · Trust and public policy', url: 'https://www.oecd.org/governance/trust-and-public-policy-9789264275463-en.htm' }
    ]
  },
  {
    id: 'rethinking-zakat-allocation',
    title: 'Rethinking the allocation of zakat',
    date: '24 September 2026',
    dateISO: '2026-09-24',
    author: 'Ihsana Research',
    readTime: 7,
    maqasid: ['general'],
    type: 'Perspectives',
    countries: 'Global',
    tags: ['Zakat', 'Allocation', 'Root causes', 'Strategy'],
    cover: 'assets/report.svg',
    coverAlt: 'An illustrated atlas of Africa and Asia',
    coverCaption: 'Atlas illustration from the Ihsana review preview.',
    featured: false,
    summary: 'The $301 billion question is not how much Muslims give. It is where the giving goes.',
    dek: 'Zakat already dwarfs the cost of several global goals. The constraint is allocation.',
    sections: [
      {
        h: 'The $301 billion question',
        html: `<p>An estimated $301 billion is given in zakat each year. That is more than the estimated cost of ending extreme hunger. It is more than the cost of universal safe drinking water. The money exists.</p>
        <p>Yet the crises persist. The reason is not that Muslims are unwilling to give. It is that giving is often directed toward what is visible, familiar or urgent rather than what is most solvable and most neglected.</p>`,
        facts: ['~$301 billion given in zakat each year', 'More than the estimated cost of ending hunger', 'Allocation, not generosity, is the binding constraint']
      },
      {
        h: 'Three allocation failures',
        html: `<p><strong>Visibility.</strong> A crisis with images attracts money. A slow, systemic burden does not. The result is a funding pattern that follows attention rather than need.</p>
        <p><strong>Fragmentation.</strong> Many small gifts to many small projects can leave every problem underfunded. Concentration is uncomfortable, but it is how capital produces change.</p>
        <p><strong>Measurement.</strong> When the outcome is not defined, the grant cannot fail. That sounds generous. In practice it makes learning impossible and lets ineffective programmes continue.</p>`,
        facts: ['Visibility bias', 'Fragmentation', 'Unmeasured outcomes']
      },
      {
        h: 'What evidence-based zakat looks like',
        html: `<p>It looks like a portfolio. A clear thesis, a defined set of priorities, a limited number of partners, and a measurement plan. It accepts that not every cause can be funded and chooses the ones where the evidence and the need align.</p>
        <p>It also accepts the discipline of review. A zakat allocation is not a one-time ritual. It is a recurring responsibility, and each cycle should be better informed than the last.</p>`,
        chart: {
          src: 'assets/chart-zakat.svg',
          alt: 'Bar chart comparing annual zakat with the estimated cost of ending hunger, providing safe water and closing the education funding gap',
          caption: 'Annual zakat compared with three global funding goals. Illustrative sample.',
          source: 'Sources: NZF Worldwide; Oxfam America; UNESCO; UN News',
          sourceUrl: 'https://nzfworldwide.com/potential-global-zakat-pool-demystifying-the-numbers/'
        }
      },
      {
        h: 'A practical next step',
        html: `<p>Before the next zakat distribution, write down three things: the outcome you want, the evidence that the intervention can produce it, and the point at which you will decide whether it did. Then give to the partner best placed to deliver it.</p>
        <p>That is not a rejection of tradition. It is a way of taking the obligation seriously.</p>`,
        facts: ['Define the outcome before the gift', 'Choose the partner after the evidence', 'Set a review point in advance']
      }
    ],
    references: [
      { label: 'NZF Worldwide · The global zakat pool', url: 'https://nzfworldwide.com/potential-global-zakat-pool-demystifying-the-numbers/' },
      { label: 'Oxfam America · Cost to end hunger', url: 'https://www.oxfamamerica.org/explore/stories/how-much-money-would-it-take-to-end-world-hunger/' },
      { label: 'UN News · Education funding gap', url: 'https://news.un.org/en/story/2023/04/1135697' }
    ]
  }
];

window.IHSANA_CASES = [
  {
    id: 'maternal-health-portfolio',
    pillar: 'Health',
    client: 'A Gulf family office',
    title: 'From dispersed giving to a focused maternal-health portfolio',
    whatWeDid: 'Mapped seven years of grants against maternal-survival evidence and rebuilt the portfolio around three proven interventions.',
    result: '$42m committed to a five-year maternal-health programme across six countries.',
    quote: 'For the first time, our board could explain exactly what our giving was designed to change.',
    cover: 'assets/health.svg',
    coverAlt: 'An illustrated atlas of West Africa',
    date: 'October 2026',
    duration: 'Seven-month mandate',
    geography: 'Six OIC countries',
    tags: ['Health', 'Family office', 'Maternal health', 'Portfolio design'],
    summary: 'A family office with a long history of generous giving asked us to turn a scattered grant portfolio into a strategy it could govern, explain and measure.',
    sections: [
      { h: 'The starting point', html: `<p>The family had given for more than a decade, mostly in response to requests from trusted contacts. The giving was genuine, but it was fragmented: 63 grants across 19 countries, with no shared definition of success.</p><p>The board wanted to preserve the family’s values while making the portfolio easier to oversee. It also wanted the next generation to inherit a strategy, not a folder of receipts.</p>` },
      { h: 'What we did', html: `<p>We began with a grant audit. Each commitment was mapped against the Maqasid framework, the evidence base for its intervention, and the country context. We then worked with the board to agree a single primary objective: protecting life through maternal and newborn survival.</p><p>From there we designed a five-year portfolio around three proven interventions — skilled birth attendance, emergency obstetric care, and basic newborn care — in six countries where the preventable burden was largest and credible partners existed.</p>` },
      { h: 'The result', html: `<p>The family committed $42m over five years, concentrated in fewer, larger grants with a shared measurement framework. Every partner reports on the same maternal and newborn survival indicators, and the board reviews the portfolio twice a year.</p><p>The result is not only a clearer strategy. It is a governance model the next generation can inherit and improve.</p>` }
    ],
    lessons: ['Concentrate on a primary objective before choosing partners', 'Use the same outcome measures across the portfolio', 'Give the board a small number of decisions it can actually govern'],
    sampleNote: 'Illustrative sample case study · figures and quotes are for preview only'
  },
  {
    id: 'education-pathway',
    pillar: 'Education',
    client: 'A private foundation',
    title: 'Turning an open-ended scholarship fund into a measurable pathway',
    whatWeDid: 'Consolidated 19 grants into one education strategy with shared metrics and a four-year funding horizon.',
    result: '12,400 more children in structured schooling; 86% retention at year three.',
    quote: 'We stopped asking how many scholarships we funded and started asking what happened to the children.',
    cover: 'assets/education.svg',
    coverAlt: 'An illustrated atlas of South Asia',
    date: 'September 2026',
    duration: 'Five-month mandate',
    geography: 'Jordan, Lebanon, Pakistan',
    tags: ['Education', 'Private foundation', 'Scholarships', 'Measurement'],
    summary: 'A private foundation was funding scholarships in three countries but could not say whether the children it reached stayed in school or learned more.',
    sections: [
      { h: 'The starting point', html: `<p>The foundation had a clear instinct: education is one of the highest-return investments a donor can make. But its grants were organised around institutions rather than outcomes. Each partner reported differently, and the board had no way to compare them.</p><p>It also faced a strategic question. Should it fund more children, or fund the same children more fully?</p>` },
      { h: 'What we did', html: `<p>We consolidated 19 grants into one four-year education strategy. The foundation chose a focused outcome — children in structured schooling with measurable retention — and agreed a common set of indicators with every partner.</p><p>We also built a funding pathway: direct school fees, learning support and a transition-to-work component for older students. The aim was not simply to enrol children, but to keep them learning.</p>` },
      { h: 'The result', html: `<p>Across the portfolio, 12,400 more children were in structured schooling, with 86% retention at year three. The foundation now receives a single portfolio report and can compare partners on the outcomes that matter.</p><p>The strategy also changed the foundation’s own decisions. It no longer funds a scholarship without asking what happens after the final payment.</p>` }
    ],
    lessons: ['Choose one outcome and define it precisely', 'Make partners report on the same measures', 'Fund the transition, not only the entry point'],
    sampleNote: 'Illustrative sample case study · figures and quotes are for preview only'
  },
  {
    id: 'youth-livelihoods',
    pillar: 'Economy',
    client: 'An individual donor',
    title: 'A patient-capital approach to youth livelihoods',
    whatWeDid: 'Built a blended grant-and-loan portfolio with local partners, staged against employment outcomes.',
    result: '3,100 young people placed in paid work; 61% still employed after 18 months.',
    quote: 'The structure let us take a longer view than a single grant cycle usually allows.',
    cover: 'assets/giving.svg',
    coverAlt: 'An illustrated atlas of the eastern Mediterranean',
    date: 'August 2026',
    duration: 'Nine-month mandate',
    geography: 'Tunisia, Morocco',
    tags: ['Economy', 'Individual donor', 'Youth employment', 'Blended finance'],
    summary: 'An individual donor wanted to support youth employment without creating a dependency on short-term grants. We designed a staged portfolio that combined grants, patient loans and employer partnerships.',
    sections: [
      { h: 'The starting point', html: `<p>The donor had funded training programmes before, but struggled to know whether they led to work. Graduates often completed a course and returned to the same labour market that had excluded them.</p><p>The question was structural: how could a philanthropic commitment improve the odds of employment without pretending to be a commercial investor?</p>` },
      { h: 'What we did', html: `<p>We built a blended portfolio with three components: grants for foundational skills, patient loans for small enterprises that could hire, and employer partnerships that defined the skills actually in demand. Funding was released in stages, tied to employment outcomes.</p><p>Local partners were selected for their hiring networks and their willingness to report on job retention, not only training completion.</p>` },
      { h: 'The result', html: `<p>3,100 young people were placed in paid work, and 61% were still employed after 18 months. The portfolio is now in its second cohort, with a stronger pipeline of employers and a clearer understanding of which training components predict retention.</p><p>The donor has also gained something less tangible: a structure that allows patience without losing accountability.</p>` }
    ],
    lessons: ['Tie funding to employment outcomes, not attendance', 'Use grants where the market will not go', 'Measure retention, not only placement'],
    sampleNote: 'Illustrative sample case study · figures and quotes are for preview only'
  }
];
