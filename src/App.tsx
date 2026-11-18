import { useEffect, useRef, useState } from 'react'
import './App.css'

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

const skillGroups = [
  {
    title: 'Programming Languages',
    items: ['JavaScript', 'Python'],
  },
  {
    title: 'Data Analytics',
    items: ['Business Analytics'],
  },
  {
    title: 'Databases',
    items: ['Database Management'],
  },
  {
    title: 'Web Development',
    items: ['Web system analysis', 'Quality assurance'],
  },
  {
    title: 'Development Tools & IT',
    items: ['Microsoft Office', 'IT support', 'System administration'],
  },
]

const projects = [
  {
    number: '01',
    category: 'ACADEMIC CAPSTONE',
    title:
      'A Web-Based Food Inventory Management System with Predictive Demand Forecasting and Customer Churn Analysis',
    description:
      'An academic capstone project focused on restaurant operations, inventory planning, and business insights through forecasting and churn analysis.',
    role: 'Project Manager / System Analyst',
    detailsTitle: 'PROJECT SCOPE',
    details: [
      'Inventory management and tracking',
      'Predictive demand forecasting',
      'Customer churn analysis',
      'Food waste minimization',
    ],
    accent: 'sage',
    preview: 'inventory',
    stackGroups: [
      { category: 'Frontend & charts', technologies: 'React.js · Vite · Tailwind CSS · Recharts' },
      { category: 'API & data', technologies: 'FastAPI · Python · Uvicorn · Nginx · PostgreSQL 17 · SQLAlchemy · Alembic' },
      { category: 'Analytics', technologies: 'Prophet · SARIMA (statsmodels) · scikit-learn (Logistic Regression, Random Forest)' },
      { category: 'Security & email', technologies: 'JWT (PyJWT) · bcrypt · role-based access control · Resend' },
      { category: 'Delivery & operations', technologies: 'Git · GitHub · GitHub Actions · Vercel · Hostinger KVM VPS · Ubuntu 24.04 · UptimeRobot · Visual Studio Code' },
    ],
    link: 'https://www.kubyertos.tech/login',
    repository: 'https://github.com/jefteyr-star',
  },
  {
    number: '02',
    category: 'SYSTEM PROJECT',
    title: 'LAFB: An Integrated POS, Ordering, and Inventory Management System',
    description:
      'A system analysis and quality assurance project focused on operational workflows across sales, inventory, franchise ordering, and supplier management.',
    role: 'Quality Assurance / System Analyst',
    detailsTitle: 'PROJECT SCOPE',
    details: [
      'Reviewed sales and inventory workflows',
      'Analyzed franchise ordering and supplier processes',
      'Identified process gaps and system risks',
    ],
    accent: 'blue',
    preview: 'lafb',
    stackGroups: [
      { category: 'Frontend', technologies: 'HTML5 · CSS3 · JavaScript · Bootstrap or Tailwind CSS' },
      { category: 'Backend', technologies: 'Node.js · Express.js' },
      { category: 'Database', technologies: 'MySQL' },
      { category: 'Development environment', technologies: 'Visual Studio Code' },
    ],
    link: '',
    repository: 'https://github.com/jefteyr-star',
  },
  {
    number: '03',
    category: 'PERSONAL PROJECT',
    title: 'FinAN — Personal Finance Tracker',
    description:
      'A personal finance management application for tracking income and expenses, organizing accounts and categories, and exploring spending insights.',
    detailsTitle: 'FEATURES',
    details: [
      'Income and expense tracking',
      'Customizable categories and accounts',
      'Financial analytics',
      'Spending insights',
    ],
    accent: 'sage',
    preview: 'finance',
    stackGroups: [],
    link: '',
    repository: 'https://github.com/jefteyr-star',
  },
  {
    number: '04',
    category: 'SYSTEM ADMINISTRATION VIRTUAL LAB',
    title: 'Windows Server & Active Directory Lab',
    description:
      'A virtual lab exploring domain and user management, department-based access, and Windows client networking in a controlled environment.',
    detailsTitle: 'LAB COVERAGE',
    details: [
      'Domain, user, and OU management',
      'Group Policy configuration',
      'Department file sharing and permissions',
      'VirtualBox networking and Windows clients',
    ],
    accent: 'amber',
    preview: 'network',
    stackGroups: [
      { category: 'Host system', technologies: 'AMD Ryzen 3 3200 with Radeon Vega Graphics · 16 GB RAM · Windows 11 Pro' },
      { category: 'Virtualization', technologies: 'Oracle VM VirtualBox 7.2.16' },
      { category: 'Guest OS images', technologies: 'Windows Server 2012 ISO · Windows 10 ISO' },
    ],
    link: '',
    repository: 'https://github.com/jefteyr-star',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.2 10h11.6M10 4.2l5.8 5.8-5.8 5.8" />
    </svg>
  )
}

function ProjectArtwork({
  kind,
  onImageClick,
}: {
  kind: string
  onImageClick: (src: string, alt: string) => void
}) {
  if (kind === 'inventory') {
    const alt = 'KubYertos food inventory system sign-in screen'
    return (
      <div className="project-art project-art--screenshot">
        <button className="project-image-trigger" type="button" onClick={() => onImageClick('/food-inventory-login.png', alt)} aria-label={`View image: ${alt}`}>
          <img src="/food-inventory-login.png" alt={alt} width="1501" height="768" loading="lazy" decoding="async" />
        </button>
        <span className="project-art-label">KUBYERTOS · SIGN-IN SCREEN</span>
      </div>
    )
  }

  if (kind === 'lafb') {
    const alt = 'LAFB admin dashboard showing franchise management options'
    return (
      <div className="project-art project-art--screenshot">
        <button className="project-image-trigger" type="button" onClick={() => onImageClick('/lafb-admin-dashboard.png', alt)} aria-label={`View image: ${alt}`}>
          <img src="/lafb-admin-dashboard.png" alt={alt} width="508" height="309" loading="lazy" decoding="async" />
        </button>
        <span className="project-art-label">LAFB · ADMIN DASHBOARD</span>
      </div>
    )
  }

  if (kind === 'network') {
    const alt = 'VirtualBox virtual machine list and network settings for the Windows Server lab'
    return (
      <div className="project-art project-art--screenshot">
        <button className="project-image-trigger" type="button" onClick={() => onImageClick('/active-directory-virtual-lab.png', alt)} aria-label={`View image: ${alt}`}>
          <img src="/active-directory-virtual-lab.png" alt={alt} width="580" height="264" loading="lazy" decoding="async" />
        </button>
        <span className="project-art-label">VIRTUALBOX · LAB SETUP</span>
      </div>
    )
  }

  if (kind === 'finance') {
    return (
      <div className="project-art project-art--finance" aria-hidden="true">
        <svg viewBox="0 0 360 250" fill="none">
          <path className="art-line art-line--strong" d="M75 91a15 15 0 0 1 15-15h165a15 15 0 0 1 15 15v76H75z" />
          <path className="art-line" d="M75 104h195v63H90a15 15 0 0 1-15-15z" />
          <path className="art-line art-line--strong" d="M224 118h46v31h-46a15 15 0 0 1 0-31z" />
          <circle className="art-accent" cx="239" cy="133" r="4" />
          <circle className="art-outline" cx="139" cy="82" r="27" />
          <path className="art-line art-line--accent" d="M139 67v30M147 74c-2-4-13-5-16 0-4 8 15 8 15 16 0 6-10 9-17 4" />
          <circle className="art-accent art-accent--muted" cx="190" cy="187" r="8" />
          <circle className="art-accent" cx="218" cy="201" r="5" />
        </svg>
        <span className="project-art-label">BUDGET · SPENDING</span>
      </div>
    )
  }

  return (
    <div className="project-art project-art--network" aria-hidden="true">
      <svg viewBox="0 0 360 250" fill="none">
        <path className="art-line art-line--strong" d="M180 98v38M105 136h150M105 136v26M180 136v26M255 136v26" />
        <rect className="art-panel" x="135" y="47" width="90" height="51" rx="2" />
        <rect className="art-panel" x="72" y="162" width="66" height="38" rx="2" />
        <rect className="art-panel" x="147" y="162" width="66" height="38" rx="2" />
        <rect className="art-panel" x="222" y="162" width="66" height="38" rx="2" />
        <circle className="art-accent" cx="153" cy="64" r="4" />
        <path className="art-line" d="M164 64h45M151 79h58" />
        <circle className="art-accent art-accent--muted" cx="88" cy="181" r="4" />
        <circle className="art-accent art-accent--muted" cx="163" cy="181" r="4" />
        <circle className="art-accent art-accent--muted" cx="238" cy="181" r="4" />
        <path className="art-line" d="M98 181h28M173 181h28M248 181h28" />
      </svg>
      <span className="project-art-label">DOMAIN · ACCESS · POLICY</span>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const [copyStatus, setCopyStatus] = useState('')
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const navigationRef = useRef<HTMLDivElement>(null)
  const lightboxRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'))
    let frame = 0
    const updateScrollState = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const marker = window.innerHeight * 0.34
        let currentSection = 'home'
        for (const section of sections) {
          if (section.getBoundingClientRect().top <= marker) currentSection = section.id
        }
        setActiveSection(currentSection)
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        setScrollProgress(scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0)
      })
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            currentObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!selectedImage || !lightboxRef.current) return
    lightboxRef.current.showModal()
    lightboxRef.current.querySelector<HTMLButtonElement>('.lightbox-close')?.focus()
  }, [selectedImage])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !navigationRef.current?.contains(event.target) &&
        !menuToggleRef.current?.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuToggleRef.current?.focus()
      }
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('jefteyr@gmail.com')
      setCopyStatus('Email copied to clipboard.')
    } catch {
      setCopyStatus('Copy failed. Email: jefteyr@gmail.com')
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="scroll-progress" aria-hidden="true" style={{ transform: `scaleX(${scrollProgress})` }} />
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Jeftey Luke G. Rivera — home">
            <span className="brand-mark">J<span>.</span></span>
            <span className="brand-name">JEFTEY LUKE G. RIVERA</span>
          </a>
          <button
            ref={menuToggleRef}
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
          </button>
          <div
            ref={navigationRef}
            className={`nav-links${menuOpen ? ' is-open' : ''}`}
            id="primary-navigation"
          >
            {navigation.map((item) => (
              <a
                href={item.href}
                key={item.href}
                aria-current={activeSection === item.href.slice(1) ? 'location' : undefined}
                onClick={() => {
                  setMenuOpen(false)
                  menuToggleRef.current?.focus()
                }}
              >
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={() => {
              setMenuOpen(false)
              menuToggleRef.current?.focus()
            }}>
              Get in touch <ArrowIcon />
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Open to OJT opportunities</p>
            <h1 id="hero-title">Jeftey Luke G.<span className="title-period"> Rivera</span></h1>
            <p className="hero-role">Aspiring Data Analyst <span>/</span> Data &amp; Business Analytics Student</p>
            <p className="hero-intro">
              I’m a BSIT student majoring in Data and Business Analytics, interested in business analysis, systems, and practical data-informed solutions.
              I’m seeking an OJT opportunity where I can contribute, learn from a team, and grow through real work.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work <ArrowIcon />
              </a>
              <a className="button button-muted" href="/resume.pdf" download="Rivera-Jeftey-Luke-Resume.pdf" title="Download resume">
                Download Resume
              </a>
            </div>
            <ul className="hero-facts" aria-label="Quick facts">
              <li><span>LOCATION</span><strong>San Jose del Monte, Bulacan</strong></li>
              <li><span>SCHOOL</span><strong>Bulacan State University - Sarmiento Campus</strong></li>
              <li><span>YEAR LEVEL</span><strong>4th Year</strong></li>
              <li><span>FOCUS</span><strong>Data &amp; Business Analytics</strong></li>
            </ul>
            <div className="hero-socials" aria-label="Professional profiles">
              <span>CONNECT</span>
              <a href="mailto:jefteyr@gmail.com" className="profile-link">Email</a>
              <a href="https://github.com/jefteyr-star" target="_blank" rel="noreferrer" className="profile-link">GitHub</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-frame">
              <img
                className="portrait-photo"
                src="/jeftey-rivera-profile.jpg"
                alt="Jeftey Luke G. Rivera in a suit"
                width="768"
                height="905"
                fetchPriority="high"
              />
              <div className="photo-note">
                <span className="note-line" />
                <span>Curious by nature.<br />Grounded in data.</span>
              </div>
            </div>
            <div className="hero-index"><span>01</span> / PROFILE</div>
          </div>
          <div className="hero-bottom">
            <span>CSJDM, BULACAN <i /></span>
            <a href="#about">SCROLL TO EXPLORE <span>↓</span></a>
          </div>
        </section>

        <section className="about section-wrap section-pad" id="about" aria-labelledby="about-title">
          <div className="section-label reveal"><span>01</span> A LITTLE ABOUT ME</div>
          <div className="about-grid">
            <h2 className="reveal" id="about-title">Learning to make<br />data <em>make sense.</em></h2>
            <div className="about-body">
              <p>
                I’m currently pursuing a Bachelor of Science in Information Technology major in Data and Business Analytics at Bulacan State University - Sarmiento Campus,
                with a focus on data-driven decision making, business analysis, and systems development.
              </p>
              <p>
                Through academic projects and organizational involvement, I’ve developed a practical understanding of business operations, system analysis,
                and data-informed planning. I enjoy turning business needs into structured processes and solutions that are useful, efficient, and easy to understand.
              </p>
              <div className="about-note"><span>↳</span> Analytical thinking grounded in discipline, teamwork, and continuous learning.</div>
            </div>
          </div>
        </section>

        <section className="skills section-wrap section-pad" id="skills" aria-labelledby="skills-title">
          <div className="section-label reveal"><span>02</span> WHAT I’M BUILDING</div>
          <div className="section-heading-row">
            <h2 className="reveal" id="skills-title">Skills &amp; <em>toolkit.</em></h2>
            <p>Focused on business analysis, systems thinking, and practical technology support.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card reveal" key={group.title}>
                <div className="skill-card-top"><span>0{index + 1}</span></div>
                <h3>{group.title}</h3>
                <div className="skill-stack">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section-pad" id="projects" aria-labelledby="projects-title">
          <div className="section-wrap">
            <div className="section-label reveal"><span>03</span> SELECTED WORK</div>
            <div className="section-heading-row projects-heading">
              <h2 className="reveal" id="projects-title">Projects with<br /><em>a purpose.</em></h2>
              <p>
                Selected work focused on analysis, system design, and real-world operational problem solving.
              </p>
            </div>
            <div className="projects-list">
              {projects.map((project) => (
                <article className={`project-card ${project.accent} reveal`} key={project.number}>
                  <div className={`project-preview-wrap${['inventory', 'lafb', 'network'].includes(project.preview) ? ` project-preview--screenshot project-preview--${project.preview}` : ''}`}>
                    <ProjectArtwork
                      kind={project.preview}
                      onImageClick={(src, alt) => setSelectedImage({ src, alt })}
                    />
                    <span className="project-number">{project.number}</span>
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-category">{project.category}</div>
                    {project.role && (
                      <p className="project-role"><span>ROLE</span><strong>{project.role}</strong></p>
                    )}
                    {project.stackGroups.length > 0 && (
                      <ul className="project-tech" aria-label="Technology highlights">
                        {project.stackGroups
                          .flatMap((group) => group.technologies.split(' · '))
                          .slice(0, 5)
                          .map((technology) => <li key={technology}>{technology}</li>)}
                      </ul>
                    )}
                    <details className="project-more">
                      <summary>Details</summary>
                      <div className="project-details">
                        <h4>{project.detailsTitle}</h4>
                        <ul>
                          {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                        </ul>
                      </div>
                      {project.stackGroups.length > 0 && (
                        <div className="project-stack">
                          <span className="meta-label">{project.preview === 'network' ? 'LAB ENVIRONMENT' : 'TECH / ENVIRONMENT'}</span>
                        <ul className="project-stack-groups">
                          {project.stackGroups.map((group) => (
                            <li key={group.category}>
                              <strong>{group.category}</strong>
                              <span>{group.technologies}</span>
                            </li>
                          ))}
                        </ul>
                        </div>
                      )}
                    </details>
                    <div className="project-meta">
                      <div>
                        <span className="meta-label">LIVE DEMO</span>
                        {project.link ? (
                          <a className="meta-link" href={project.link} target="_blank" rel="noreferrer">Open live project</a>
                        ) : (
                          <span className="meta-unavailable">No public demo</span>
                        )}
                      </div>
                      <div className="project-links">
                        <a href={project.repository} target="_blank" rel="noreferrer">GitHub profile</a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="education section-wrap section-pad" id="education" aria-labelledby="education-title">
          <div className="section-label reveal"><span>04</span> THE FOUNDATION</div>
          <div className="education-grid">
            <div>
          <h2 className="reveal" id="education-title">Education &amp;<br /><em>growth.</em></h2>
              <p className="education-intro">
                Building a foundation in data and business analytics through academic work, projects, and leadership opportunities.
              </p>
            </div>
            <article className="education-card reveal">
              <div className="education-topline"><span>UNDERGRADUATE</span><span>2023 - PRESENT</span></div>
              <h3>Bachelor of Science in Information Technology<br />major in Data and Business Analytics</h3>
              <p className="school-name">Bulacan State University - Sarmiento Campus</p>
              <div className="education-divider" />
              <div className="education-bottom">
                <span>YEAR LEVEL</span><strong>4th Year</strong>
                <span>FOCUS</span><strong>Data Analytics, Systems Development, Business Solutions</strong>
                <span>LEADERSHIP</span><strong>Finance &amp; Marketing Associate, Director of Finance</strong>
              </div>
            </article>
          </div>
        </section>

        <section className="certificates section-wrap section-pad" id="certificates" aria-labelledby="certificates-title">
          <div className="section-label reveal"><span>05</span> CONTINUOUS LEARNING</div>
          <div className="cert-row">
            <div>
              <h2 className="reveal" id="certificates-title">Certificates &amp;<br /><em>achievements.</em></h2>
              <p>Academic and professional experiences that reflect discipline, participation, and growth.</p>
            </div>
            <div className="certificate-list">
              <div className="certificate-item reveal">
                <span className="certificate-badge">TRAINING</span>
                <strong>Advance Web with Data Analytics for BSIT 3rd Year Student</strong>
              </div>
              <div className="certificate-item reveal">
                <span className="certificate-badge">CONFERENCE</span>
                <strong>IRCITE International Research Conference on Information Technology Education</strong>
              </div>
              <div className="certificate-item reveal">
                <span className="certificate-badge">AWARD</span>
                <strong>Gold Gear Award (Dean’s Lister) – Academic Year 2025–2026</strong>
              </div>
              <div className="certificate-item reveal">
                <span className="certificate-badge">HONOR</span>
                <strong>With High Honors – Academic Year 2022–2023</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="section-wrap contact-wrap">
            <div className="section-label reveal"><span>06</span> LET’S CONNECT</div>
            <div className="contact-grid">
              <div className="contact-copy reveal">
                <h2 id="contact-title">Let’s talk about<br /><em>your next opportunity.</em></h2>
                <p>
                  I’m seeking an OJT opportunity in data analytics or systems.
                  Contact me by email, or visit my GitHub profile to explore my work.
                </p>
                <div className="contact-actions">
                  <a href="mailto:jefteyr@gmail.com" className="button button-light contact-email">
                    Email me <ArrowIcon />
                  </a>
                  <button className="copy-email" type="button" onClick={copyEmail}>Copy email</button>
                  <span className="copy-status" aria-live="polite">{copyStatus}</span>
                  <a href="https://github.com/jefteyr-star" target="_blank" rel="noreferrer" className="contact-profile-link">
                    GitHub profile
                  </a>
                </div>
              </div>
              <aside className="contact-card" aria-label="Contact details">
                <span className="contact-card-label">DIRECT CONTACT</span>
                <span className="contact-card-item">
                  <span>EMAIL</span>
                  <a href="mailto:jefteyr@gmail.com">jefteyr@gmail.com</a>
                </span>
                <span className="contact-card-item">
                  <span>LOCATION</span>
                  <span>San Jose del Monte, Bulacan</span>
                </span>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">J<span>.</span></span>
          <span className="brand-name">JEFTEY LUKE G. RIVERA</span>
        </a>
        <span>ASPIRING DATA ANALYST · OJT CANDIDATE</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
      </footer>
      <dialog
        className="lightbox"
        ref={lightboxRef}
        aria-label="Project image preview"
        onClose={() => setSelectedImage(null)}
        onCancel={(event) => {
          event.preventDefault()
          lightboxRef.current?.close()
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault()
            lightboxRef.current?.close()
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) lightboxRef.current?.close()
        }}
      >
        {selectedImage && (
          <>
            <button className="lightbox-close" type="button" aria-label="Close image preview" onClick={() => lightboxRef.current?.close()}>
              <span aria-hidden="true">×</span>
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
            <p>{selectedImage.alt}</p>
          </>
        )}
      </dialog>
    </>
  )
}

export default App
