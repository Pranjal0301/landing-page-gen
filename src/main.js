import './styles.css';

const pages = {
  shore: {
    theme: 'shore',
    title: 'The Most Specialized Implant Center in Massapequa',
    business: 'Shore Smiles Dental',
    phone: '(516) 715-2048',
    phoneHref: 'tel:+15167152048',
    address: '875 N Broadway, North Massapequa, NY 11758',
    navTone: 'gold',
    hero: {
      eyebrow: '1,600+ 5-Star Reviews',
      kicker: 'Limited Offer',
      heading: 'Thinking about Dental Implants? Start Free.',
      subheading:
        'Everything you need to decide with confidence, at no cost: consultation, 3D panoramic X-ray, oral health assessment, and diagnostics.',
      offer: 'Save $575 this month on your consultation package.',
      cta: 'Book Your Consultation',
      image:
        'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Bg9VdVXVrEP1Vv6to1qu/media/690c40606917d215d9b5cefa.png',
      proof: [
        'Consultation with our implant expert',
        '3D panoramic X-ray',
        'Full oral health assessment',
        'Diagnostics and treatment plan',
      ],
    },
    survey: {
      label: 'Fill out this 2-minute survey',
      disclaimer: 'Please note: Medicare or Medicaid does not cover dental implants.',
      question: 'Which condition best describes you?',
      options: [
        'Missing 1 tooth',
        'Missing multiple teeth',
        'Struggling with dentures',
        'Struggling with implants',
        'Struggling with a bridge / crown',
        'Most of my teeth are in rough shape',
        'Other',
      ],
    },
    stats: [
      ['4.9/5', 'Average review rating'],
      ['20+', 'Years of implant planning'],
      ['Same week', 'Consult availability'],
      ['Flexible', 'Monthly payment options'],
    ],
    mediaStrip: {
      eyebrow: "It's Time To Get Your Life Back",
      heading: 'Get a dental implant consultation',
      body: 'No more food restrictions. No more hiding your smile. No more discomfort.',
      image:
        'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Bg9VdVXVrEP1Vv6to1qu/media/687368ace9e9e58931c869a3.webp',
    },
    testimonials: [
      {
        title: 'I finally fixed my smile and it was easier than I expected',
        body:
          'Years of failing front teeth made this patient nervous to begin, but advanced imaging and a calm treatment plan made the entire process far more comfortable than expected.',
      },
      {
        title: 'From nervous to thrilled at 87',
        body:
          'A loose partial and hidden infection led to a full upper implant solution, with minimal discomfort and a confident result that changed daily life.',
      },
      {
        title: 'One place, everything I needed',
        body:
          'From extraction and grafting to crowns and implants, the patient completed the entire process under one roof and recovered faster than expected.',
      },
    ],
    resultImages: [
      'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/fa07Ql7aL6oWa8CwOUq3/media/682b22d001d49ae64cbe20a6.jpeg',
      'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/fa07Ql7aL6oWa8CwOUq3/media/682b22d0cad27edfb694b01d.jpeg',
      'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/fa07Ql7aL6oWa8CwOUq3/media/682b22d057dbea28016dfeb1.jpeg',
      'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/fa07Ql7aL6oWa8CwOUq3/media/682b22d00ed5067d79435d0b.jpeg',
    ],
    doctor: {
      name: 'Dr. Jigar S. Gandhi',
      role: 'Dental Implants Specialist',
      image:
        'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/Bg9VdVXVrEP1Vv6to1qu/media/c7a1ddf3-542b-4220-98be-57a4daaf0e27.png',
      body:
        'Graduating at the top of his class from Stony Brook and serving as Chief Resident at the James J. Peters VA Medical Center, Dr. Gandhi combines academic rigor with a calm, patient-first treatment style.',
    },
    specialists: [
      'Dr. Daniel Abramov',
      'Dr. Jonathan Derlath',
      'Dr. R. Rengifo',
      'Dr. Mike Mackney',
      'Dr. Jason L. Joseph',
      'Dr. Abra DiLisio',
      'Dr. Jose Rivero',
    ],
    benefits: [
      'Long-lasting solution',
      'Natural look and feel',
      'Eat and smile with confidence',
      'Boost self-esteem',
      'Avoid bone loss',
    ],
    financing: ['LendingClub', 'Cherry', 'Sunbit'],
    faqs: [
      [
        'Are dental implants painful?',
        'Most patients are surprised by how little discomfort they feel. Treatment is planned digitally and managed with local anesthesia or sedation when needed.',
      ],
      [
        'How long does the implant process take?',
        'The process varies by case, but usually includes consultation, digital scan, implant placement, healing, and final restoration.',
      ],
      [
        'How do I know if I am a good candidate?',
        'If you are missing one or more teeth and are in generally good health, there is a strong chance you are a candidate after imaging and bone assessment.',
      ],
      [
        'Why choose implants instead of dentures or bridges?',
        'Implants are the only replacement option that restores the root, which helps preserve jawbone and creates a more secure, natural-feeling bite.',
      ],
    ],
  },
  riverside: {
    theme: 'riverside',
    title: 'Free Implant Consult Package',
    business: 'Signature Smiles Dental',
    phone: '(951) 450-0258',
    phoneHref: 'tel:+19514500258',
    address: '14140 Meridian Pkwy Suite 102, Riverside, CA 92518',
    navTone: 'green',
    hero: {
      eyebrow: 'Call Us Today',
      kicker: 'Save up to 40%',
      heading: "Don't overpay for dental implants in California.",
      subheading:
        'We use the same quality brand-name materials and charge less. View pricing, see patient work, and book a free consultation with a 3D CBCT scan.',
      offer: 'Single implants from $2,299. Snap-on dentures from $11,999 per arch.',
      cta: 'Book Your Free Consultation',
      image: 'https://assets.cdn.filesafe.space/kpiSLyo45aydDiKclJUh/media/6638ef19790230744b5e88f3.jpeg',
      proof: [
        '100% secure and private intake',
        'Transparent all-inclusive pricing',
        '10-year warranty included',
        'Sedation and extractions included on select offers',
      ],
    },
    stats: [
      ['1000+', 'Implants placed'],
      ['10 Year', 'Warranty included'],
      ['1500+ Hrs', 'Specialized implant training'],
      ['99%', 'Implant integration success rate'],
    ],
    galleryImages: [
      'https://assets.cdn.filesafe.space/kpiSLyo45aydDiKclJUh/media/ba47d1d2-dab4-4115-bcd0-d0fb422c7aa6.jpeg',
      'https://assets.cdn.filesafe.space/kpiSLyo45aydDiKclJUh/media/d89e6b69-cdd8-4b29-914d-60e3a125497b.png',
      'https://assets.cdn.filesafe.space/kpiSLyo45aydDiKclJUh/media/11ea9cc1-6821-41f0-aff5-668c7fc9c3c3.jpeg',
    ],
    compare: {
      heading: 'Why choose us over another implant center?',
      painPoints: [
        'Competitors leave out sedation fees and extraction fees.',
        'Many offices use itemized billing and surprise add-ons.',
        'Most do not offer a meaningful warranty.',
      ],
      wins: [
        'Oral sedation included on core offers',
        'Extractions included with All-on-4 packages',
        'Transparent pricing from start to finish',
      ],
    },
    pricing: [
      {
        title: 'Single Dental Implant',
        price: 'As low as $2,299',
        detail: 'From $103/mo, including implant placement, abutment, and zirconia crown.',
      },
      {
        title: 'Snap-On Dentures w/ 4 Implants',
        price: '$11,999 per arch',
        detail:
          'Includes extractions, oral sedation, 10-year warranty, implant placement, abutments, and prosthesis.',
      },
    ],
    doctor: {
      name: 'Dr. Brian Bebing',
      role: 'Implant and Cosmetic Dentistry',
      image: 'https://assets.cdn.filesafe.space/kpiSLyo45aydDiKclJUh/media/663e2cd746154e1256e01a1a.jpeg',
      body:
        'Dr. Bebing and Dr. Harun Ayouby bring a clinically focused approach to implant dentistry, with continuing education in implant surgery, digital workflow, and cosmetic restoration.',
    },
    education: [
      {
        heading: 'Bridge vs dental implant',
        body: 'For one missing tooth or a short span, implants usually offer the more durable long-term option and avoid loading neighboring teeth.',
      },
      {
        heading: 'Dentures vs full-arch implants',
        body: 'Full-arch implants stabilize chewing, reduce jawbone loss, and avoid the slippage many denture patients eventually experience.',
      },
      {
        heading: 'What are dental implants?',
        body: 'Each implant uses a titanium root replacement paired with an abutment and final crown or arch restoration.',
      },
    ],
    faqs: [
      [
        'What makes dental implants so effective?',
        'Titanium integrates with bone and provides a stable long-term base for crowns, bridges, or full-arch restorations.',
      ],
      [
        "Why can't I just get dentures instead?",
        'Dentures may be cheaper upfront, but many patients struggle with discomfort, reduced chewing ability, and continued jawbone shrinkage.',
      ],
      [
        'Will my procedure hurt?',
        'Sedation and modern surgical planning are designed to keep the procedure comfortable and recovery manageable.',
      ],
    ],
  },
  austin: {
    theme: 'austin',
    title: 'Free Implant Consult Package',
    business: 'Optima Dental Surgery Center',
    phone: '(512) 341-2321',
    phoneHref: 'tel:+15123412321',
    address: '990 Hesters Crossing Rd, Round Rock, TX 78681',
    navTone: 'lime',
    hero: {
      eyebrow: 'Austin area offer',
      kicker: 'Save 50% on fees',
      heading: 'Struggling with cracked, chipped, or missing teeth?',
      subheading:
        'Get a free consultation and 3D CBCT scan with one of our dentists, plus transparent full-arch pricing built for difficult cases and mobile-first scheduling.',
      offer: 'Fixed full-arch implants start at $159/mo or $12,500.',
      cta: 'Submit Info',
      image: 'https://assets.cdn.filesafe.space/26xYY6UwKhvRzuBBgzpG/media/65faa54b393e819a75977424.png',
      proof: [
        '25 years as a local practice',
        'Price match guarantee',
        'In-house lab workflow',
        'Limited lifetime warranty on final zirconia teeth',
      ],
    },
    stats: [
      ['5,000+', 'Implants placed'],
      ['12 Year', 'Warranty included'],
      ['150+ Hrs', 'Specialized implant training'],
      ['99%', 'Implant integration success rate'],
    ],
    galleryImages: [
      'https://assets.cdn.filesafe.space/26xYY6UwKhvRzuBBgzpG/media/2db0d647-52c3-4434-a123-e540f90992c3.jpeg',
      'https://assets.cdn.filesafe.space/26xYY6UwKhvRzuBBgzpG/media/2f0b2c86-a2d1-4a44-87ce-8a98d02aa596.jpeg',
      'https://assets.cdn.filesafe.space/26xYY6UwKhvRzuBBgzpG/media/565fd2a2-0b2c-4b54-b24b-24421e17c63e.png',
    ],
    compare: {
      heading: 'Why choose us?',
      painPoints: [
        'Corporate implant centers often push every patient into the most expensive full-arch option.',
        'Sedation, extraction, and grafting fees are often added later.',
        'Most offices do not include meaningful warranties or transparent scope.',
      ],
      wins: [
        'Multiple treatment tiers for different budgets',
        'Sedation, extractions, and limited grafting included',
        '12-year or limited lifetime warranty on major options',
      ],
    },
    pricing: [
      {
        title: 'Single Dental Implant',
        price: 'As low as $2,025',
        detail: 'From $102/mo with implant placement and limited warranty. Abutment and crown vary by case.',
      },
      {
        title: 'Fixed Full Arches',
        price: '$12,500 per arch',
        detail:
          'From $160/mo, including extractions, sedation, up to six implants, healing teeth, and final durable teeth.',
      },
      {
        title: 'All-On-4 Zirconia',
        price: 'From $245/mo',
        detail:
          'Premium full-arch option with provisional day-of-surgery teeth and final zirconia restoration.',
      },
    ],
    testimonials: [
      {
        title: "Keith's story",
        body: 'After two years of missing teeth and low confidence, the affordability of treatment finally made the investment possible.',
      },
      {
        title: "Beverly's story",
        body: 'A long struggle with eating comfortably gave way to stable chewing and a return to favorite meals.',
      },
      {
        title: "Tori's story",
        body: 'The post-surgery mirror moment felt like getting an important part of herself back.',
      },
    ],
    doctor: {
      name: 'Dr. Kris Owens',
      role: 'Board-Certified Periodontist and Implant Surgeon',
      image: 'https://assets.cdn.filesafe.space/26xYY6UwKhvRzuBBgzpG/media/666b4e75e5ff81772b01429b.jpeg',
      body:
        'Dr. Owens combines surgical training in periodontics with decades of implant experience and is known for taking on severe bone-loss cases that many practices decline.',
    },
    education: [
      {
        heading: 'Dental implants prevent bone loss',
        body: 'They are the only tooth replacement option that restores the root and helps preserve jaw volume over time.',
      },
      {
        heading: 'Bridge vs implant',
        body: 'For single-tooth replacement, implants usually preserve more structure and avoid the limited lifespan of many bridges.',
      },
      {
        heading: 'Dentures vs full-arch implants',
        body: 'Full-arch implants restore bite confidence and reduce the instability and facial sagging linked to long-term denture wear.',
      },
    ],
    faqs: [
      [
        'What makes dental implants so great?',
        'Titanium implants become a stable biologic anchor, supporting long-term function while preserving bone.',
      ],
      [
        "Why can't I just get dentures instead?",
        'Dentures can create ongoing comfort and fit issues, while implants offer a more fixed and durable long-term option.',
      ],
      [
        'Will my procedure hurt?',
        'Sedation and guided treatment planning are designed to reduce discomfort during surgery and recovery.',
      ],
    ],
  },
};

const app = document.querySelector('#app');
const pageKey = document.body.dataset.page || 'shore';
const page = pages[pageKey];

document.title = `${page.title} - ${page.business}`;
document.body.classList.add(`theme-${page.theme}`);

app.innerHTML = `
  <div class="page-shell page-${pageKey}">
    <header class="mobile-callbar ${page.navTone}">
      <div>
        <p class="callbar-label">${page.business}</p>
        <p class="callbar-address">${page.address}</p>
      </div>
      <a class="callbar-phone" href="${page.phoneHref}">${page.phone}</a>
    </header>

    <main>
      ${renderHero(page)}

      ${page.survey ? renderSurvey(page) : ''}
      ${page.leadForm ? renderLeadForm(page) : ''}

      <section class="stats">
        ${page.stats
          .map(
            ([value, label]) => `
              <article class="stat-card">
                <strong>${value}</strong>
                <span>${label}</span>
              </article>
            `,
          )
          .join('')}
      </section>

      ${page.mediaStrip ? renderMediaStrip(page) : ''}

      ${page.galleryImages ? renderGallery(page) : ''}
      ${page.testimonials ? renderTestimonials(page) : ''}
      ${page.resultImages ? renderResults(page) : ''}
      ${page.compare ? renderCompare(page) : ''}
      ${page.pricing ? renderPricing(page) : ''}

      <section class="doctor-section">
        <div class="section-heading">
          <p class="eyebrow">Meet your implant team</p>
          <h2>${page.doctor.name}</h2>
          <p>${page.doctor.role}</p>
        </div>
        <div class="doctor-card">
          <img src="${page.doctor.image}" alt="${page.doctor.name}" />
          <div>
            <p>${page.doctor.body}</p>
            <button class="primary-cta js-scroll-lead">Book Your Consultation</button>
          </div>
        </div>
      </section>

      ${page.specialists ? renderSpecialists(page) : ''}
      ${page.benefits ? renderBenefits(page) : ''}
      ${page.education ? renderEducation(page) : ''}
      ${page.financing ? renderFinancing(page) : ''}

      <section class="faq-section">
        <div class="section-heading">
          <p class="eyebrow">Still not sure?</p>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div class="faq-list">
          ${page.faqs
            .map(
              ([question, answer], index) => `
                <details class="faq-item" ${index === 0 ? 'open' : ''}>
                  <summary>${question}</summary>
                  <p>${answer}</p>
                </details>
              `,
            )
            .join('')}
        </div>
      </section>

      <section class="contact-banner">
        <div>
          <p class="eyebrow">Get in touch with us today</p>
          <h2>${page.phone}</h2>
          <p>${page.address}</p>
        </div>
        <a class="primary-cta" href="${page.phoneHref}">Call Now</a>
      </section>
    </main>

    <footer class="footer">
      <p>${page.business} • Mobile-first implant landing page clone</p>
      <p>${page.address}</p>
    </footer>

    <button class="floating-cta js-scroll-lead">${page.hero.cta}</button>
  </div>
`;

function renderSurvey(currentPage) {
  return `
    <section class="lead-section lead-section-survey" id="lead">
      <div class="section-heading">
        <p class="eyebrow">${currentPage.survey.label}</p>
        <h2>${currentPage.survey.question}</h2>
      </div>
      <form class="survey-form">
        <div class="radio-grid">
          ${currentPage.survey.options
            .map(
              (option, index) => `
                <label class="choice-pill">
                  <input type="radio" name="condition" value="${option}" ${index === 0 ? 'checked' : ''} />
                  <span>${option}</span>
                </label>
              `,
            )
            .join('')}
        </div>
        <div class="form-row">
          <input type="text" placeholder="Full Name" aria-label="Full Name" />
          <input type="tel" placeholder="Phone Number" aria-label="Phone Number" />
        </div>
        <button type="submit" class="primary-cta">Request My Consultation</button>
        <p class="form-disclaimer">${currentPage.survey.disclaimer}</p>
      </form>
    </section>
  `;
}

function renderLeadForm(currentPage) {
  return `
    <section class="lead-section lead-form-wrap" id="lead">
      <div class="section-heading">
        <p class="eyebrow">Get a free consultation and 3D CBCT scan</p>
        <h2>Book a mobile-first lead capture flow</h2>
      </div>
      <form class="stacked-form">
        <label>
          <span>Full Name</span>
          <input type="text" placeholder="Your full name here..." />
        </label>
        <label>
          <span>Email</span>
          <input type="email" placeholder="Your email here..." />
        </label>
        <label>
          <span>Phone</span>
          <input type="tel" placeholder="Phone" />
        </label>
        <label class="check-row">
          <input type="checkbox" checked />
          <span>I agree to receive messages from the business about scheduling and treatment options.</span>
        </label>
        <button type="submit" class="primary-cta">${currentPage.hero.cta}</button>
        <p class="form-disclaimer">We will never share or sell your information.</p>
      </form>
    </section>
  `;
}

function renderHero(currentPage) {
  if (pageKey === 'shore') {
    return `
      <section class="hero hero--shore">
        <div class="hero-copy">
          <p class="eyebrow">${currentPage.hero.eyebrow}</p>
          <p class="hero-kicker">&gt;&gt;&gt;&gt;&gt;&gt; ${currentPage.hero.kicker} &lt;&lt;&lt;&lt;&lt;&lt;</p>
          <h1>${currentPage.hero.heading}</h1>
          <div class="hero-offer">${currentPage.hero.offer}</div>
          <button class="primary-cta js-scroll-lead">${currentPage.hero.cta}</button>
          <p class="hero-subheading">${currentPage.hero.subheading}</p>
          <ul class="proof-list">
            ${currentPage.hero.proof.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div class="hero-visual">
          <img src="${currentPage.hero.image}" alt="${currentPage.business} dental implant results" />
        </div>
      </section>
    `;
  }

  if (pageKey === 'riverside') {
    return `
      <section class="hero hero--riverside">
        <div class="hero-copy">
          <p class="eyebrow">${currentPage.hero.eyebrow}</p>
          <p class="hero-kicker">${currentPage.hero.kicker}</p>
          <h1>${currentPage.hero.heading}</h1>
          <div class="hero-media-inline">
            <img src="${currentPage.hero.image}" alt="${currentPage.business} dental implant results" />
          </div>
          <p class="hero-subheading">${currentPage.hero.subheading}</p>
          <div class="hero-offer">${currentPage.hero.offer}</div>
          <button class="primary-cta js-scroll-lead">${currentPage.hero.cta}</button>
          <p class="hero-trust">100% Secure & Private • HIPAA Compliant</p>
        </div>
      </section>
    `;
  }

  return `
    <section class="hero hero--austin" id="lead">
      <div class="hero-copy">
        <p class="eyebrow">${currentPage.hero.eyebrow}</p>
        <p class="hero-kicker">${currentPage.hero.kicker}</p>
        <h1>${currentPage.hero.heading}</h1>
        <div class="lead-box lead-box--hero">
          <p class="lead-box-title">Get A Free Consultation & 3D CBCT Scan</p>
          <p class="lead-box-copy">${currentPage.hero.subheading}</p>
          <form class="stacked-form hero-form">
            <label>
              <span>Full Name</span>
              <input type="text" placeholder="Your full name here..." />
            </label>
            <label>
              <span>Email</span>
              <input type="email" placeholder="Your email here..." />
            </label>
            <label>
              <span>Phone</span>
              <input type="tel" placeholder="Phone" />
            </label>
            <label class="check-row">
              <input type="checkbox" checked />
              <span>I agree to receive messages from the business.</span>
            </label>
            <button type="submit" class="primary-cta">${currentPage.hero.cta}</button>
          </form>
        </div>
        <div class="hero-media-inline">
          <img src="${currentPage.hero.image}" alt="${currentPage.business} dental implant results" />
        </div>
        <ul class="proof-list proof-list--ticks">
          ${currentPage.hero.proof.map((item) => `<li>${item}</li>`).join('')}
        </ul>
        <p class="hero-trust">100% Secure & Private • HIPAA Compliant</p>
      </div>
    </section>
  `;
}

function renderMediaStrip(currentPage) {
  return `
    <section class="media-strip">
      <div class="section-heading">
        <p class="eyebrow">${currentPage.mediaStrip.eyebrow}</p>
        <h2>${currentPage.mediaStrip.heading}</h2>
        <p>${currentPage.mediaStrip.body}</p>
      </div>
      <div class="media-card">
        <img src="${currentPage.mediaStrip.image}" alt="${currentPage.mediaStrip.heading}" />
      </div>
    </section>
  `;
}

function renderGallery(currentPage) {
  return `
    <section class="gallery-section">
      <div class="section-heading">
        <p class="eyebrow">Smile gallery</p>
        <h2>${pageKey === 'austin' ? 'Before and After Gallery' : 'View our previous work'}</h2>
      </div>
      <div class="gallery-grid">
        ${currentPage.galleryImages.map((src) => `<img src="${src}" alt="Dental implant result" />`).join('')}
      </div>
    </section>
  `;
}

function renderTestimonials(currentPage) {
  return `
    <section class="testimonials">
      <div class="section-heading">
        <p class="eyebrow">Real stories</p>
        <h2>${pageKey === 'shore' ? 'Lives changed through implant treatment' : 'Real testimonials from real people'}</h2>
      </div>
      <div class="story-grid">
        ${currentPage.testimonials
          .map(
            (item) => `
              <article class="story-card">
                <div class="story-badge">Patient Story</div>
                <h3>${item.title}</h3>
                <p>${item.body}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderResults(currentPage) {
  return `
    <section class="results">
      <div class="section-heading">
        <p class="eyebrow">Real patient results</p>
        <h2>See what is possible</h2>
      </div>
      <div class="gallery-grid">
        ${currentPage.resultImages.map((src) => `<img src="${src}" alt="Before and after smile result" />`).join('')}
      </div>
    </section>
  `;
}

function renderCompare(currentPage) {
  return `
    <section class="compare-section">
      <div class="section-heading">
        <p class="eyebrow">Transparent pricing</p>
        <h2>${currentPage.compare.heading}</h2>
      </div>
      <div class="compare-grid">
        <article class="compare-card compare-card-negative">
          <h3>What other implant centers leave out</h3>
          <ul>
            ${currentPage.compare.painPoints.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </article>
        <article class="compare-card compare-card-positive">
          <h3>What is included here</h3>
          <ul>
            ${currentPage.compare.wins.map((item) => `<li>${item}</li>`).join('')}
          </ul>
          <button class="primary-cta js-scroll-lead">Get Pricing & Availability</button>
        </article>
      </div>
    </section>
  `;
}

function renderPricing(currentPage) {
  return `
    <section class="pricing-section">
      <div class="section-heading">
        <p class="eyebrow">Types of dental implants and fees</p>
        <h2>Full transparency on pricing</h2>
      </div>
      <div class="pricing-grid">
        ${currentPage.pricing
          .map(
            (card) => `
              <article class="price-card">
                <p class="price-card-title">${card.title}</p>
                <h3>${card.price}</h3>
                <p>${card.detail}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderSpecialists(currentPage) {
  return `
    <section class="specialists">
      <div class="section-heading">
        <p class="eyebrow">Meet our specialists</p>
        <h2>Specialists supporting complex implant cases</h2>
      </div>
      <div class="chip-grid">
        ${currentPage.specialists.map((name) => `<div class="specialist-chip">${name}</div>`).join('')}
      </div>
    </section>
  `;
}

function renderBenefits(currentPage) {
  return `
    <section class="benefits">
      <div class="section-heading">
        <p class="eyebrow">Implant benefits</p>
        <h2>Why patients upgrade to implants</h2>
      </div>
      <div class="chip-grid">
        ${currentPage.benefits.map((item) => `<div class="benefit-chip">${item}</div>`).join('')}
      </div>
    </section>
  `;
}

function renderEducation(currentPage) {
  return `
    <section class="education">
      <div class="section-heading">
        <p class="eyebrow">Education</p>
        <h2>Implant treatment explained simply</h2>
      </div>
      <div class="story-grid">
        ${currentPage.education
          .map(
            (item) => `
              <article class="story-card">
                <h3>${item.heading}</h3>
                <p>${item.body}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderFinancing(currentPage) {
  return `
    <section class="financing">
      <div class="section-heading">
        <p class="eyebrow">Flexible options</p>
        <h2>Financing partners that help patients move sooner</h2>
      </div>
      <div class="chip-grid">
        ${currentPage.financing.map((item) => `<div class="finance-pill">${item}</div>`).join('')}
      </div>
    </section>
  `;
}

document.querySelectorAll('.js-scroll-lead').forEach((button) => {
  button.addEventListener('click', () => {
    const target =
      document.querySelector('#lead') ||
      document.querySelector('.pricing-section') ||
      document.querySelector('.compare-section');

    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const button = form.querySelector('button[type="submit"]');
    const originalText = button?.textContent || 'Submit';
    if (button) {
      button.textContent = 'Submitted';
      button.disabled = true;
    }

    const note = document.createElement('p');
    note.className = 'form-success';
    note.textContent = 'Thanks. This demo captures the mobile-first layout and interaction flow.';
    form.append(note);

    window.setTimeout(() => {
      if (button) {
        button.textContent = originalText;
        button.disabled = false;
      }
      note.remove();
      form.reset();
    }, 2200);
  });
});
