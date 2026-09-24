export default function HomePage() {
  return (
    <>
      <section className="hero">
        <p className="hero-eyebrow">Student Portfolio</p>
        <h1 className="hero-title">Alimzhan Galymzhan</h1>
        <p className="hero-subtitle">
          I am an Information Systems student learning to build mobile apps,
          websites, and simple digital products.
        </p>
        <a href="#contact" className="btn">
          Get In Touch
        </a>
      </section>

      <section className="quote-section">
        <blockquote className="design-quote">
          “I try to keep my projects simple, useful, and easy to understand.”
        </blockquote>
      </section>

      <main>
        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I study Information Systems and started learning programming at
            university. I mostly work on student projects and practice with
            mobile apps, websites, and simple backends. Right now I am learning
            more about Swift and SwiftUI.
          </p>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="project-list">
            <article className="project-card">
              <p className="project-tag">Education Platform</p>
              <h3 className="project-title">Chatra</h3>
              <p className="project-text">
                A team project for students and teachers with classes,
                assignments, attendance, grades, and an AI assistant.
              </p>
            </article>

            <article className="project-card">
              <p className="project-tag">Personal Website</p>
              <h3 className="project-title">Portfolio Website</h3>
              <p className="project-text">
                My personal website where I practice HTML, CSS, JavaScript,
                responsive layouts, and simple animations.
              </p>
            </article>

            <article className="project-card">
              <p className="project-tag">Hackathon Project</p>
              <h3 className="project-title">Digital Urpaq</h3>
              <p className="project-text">
                A bilingual web platform for applications, programs, and daily
                tasks at the Palace of Schoolchildren.
              </p>
            </article>

            <article className="project-card">
              <p className="project-tag">Hackathon Project</p>
              <h3 className="project-title">RugPull Risk</h3>
              <p className="project-text">
                A simple dashboard that shows possible risks in crypto projects
                and makes the information easier to read.
              </p>
            </article>

            <article className="project-card">
              <p className="project-tag">Mobile App</p>
              <h3 className="project-title">FreelanceOS</h3>
              <p className="project-text">
                A mobile dashboard where freelancers can keep track of income,
                expenses, taxes, goals, and payments from clients.
              </p>
            </article>

            <article className="project-card">
              <p className="project-tag">Web Platform</p>
              <h3 className="project-title">FORGE</h3>
              <p className="project-text">
                A student project that helps turn a business idea into a clear
                task by asking questions and creating a simple task plan.
              </p>
            </article>

            <article className="project-card">
              <p className="project-tag">Learning Platform</p>
              <h3 className="project-title">Söyle</h3>
              <p className="project-text">
                A learning web platform with speech exercises, communication
                cards, progress tracking, and separate roles for users.
              </p>
            </article>
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            <li className="skill-item">HTML &amp; CSS</li>
            <li className="skill-item">JavaScript</li>
            <li className="skill-item">Python</li>
            <li className="skill-item">Figma</li>
            <li className="skill-item">Flutter</li>
            <li className="skill-item">FastAPI</li>
            <li className="skill-item skill-item-danger">
              Currently Learning SwiftUI
            </li>
          </ul>
        </section>

        <section id="contact" className="section contact-section">
          <h2 className="section-title">Get In Touch</h2>
          <p className="about-text contact-text">
            You can send me an email if you want to talk about a project or
            study together.
          </p>
          <a href="mailto:alimzhanart@icloud.com" className="btn">
            Send an Email
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Alimzhan Galymzhan. Student portfolio.</p>
      </footer>
    </>
  );
}
