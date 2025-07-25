import Link from "next/link"
import "./selected-works.css"


return (
    <div className="portfolio-container">
      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* Page Title */}
          <div className="title-section">
            <div className="title-header">
              <h1 className="page-title">Selected Works</h1>
              {/* <div className="time-badge">FROM 2023 TO NOW</div> */}
            </div>
            <p className="page-description">
              A curated collection of my most impactful projects, showcasing design thinking, technical expertise, and
              creative problem-solving.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/placeholder.svg?height=600&width=960" alt="Project 1" className="project-img" />
              </div>
              <div className="project-info">
                <div className="project-details">
                  <h3 className="project-title">E-Commerce Platform Redesign</h3>
                  <p className="project-category">UI/UX Design, Frontend Development</p>
                  <p className="project-description">
                    Complete redesign of a major e-commerce platform, focusing on user experience and conversion
                    optimization.
                  </p>
                </div>
                <div className="project-year">2024</div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/placeholder.svg?height=600&width=960" alt="Project 2" className="project-img" />
              </div>
              <div className="project-info">
                <div className="project-details">
                  <h3 className="project-title">FinTech Mobile Application</h3>
                  <p className="project-category">Product Design, User Research</p>
                  <p className="project-description">
                    Designing a seamless financial management experience for millennials and Gen Z users.
                  </p>
                </div>
                <div className="project-year">2024</div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/placeholder.svg?height=600&width=960" alt="Project 3" className="project-img" />
              </div>
              <div className="project-info">
                <div className="project-details">
                  <h3 className="project-title">Brand Identity System</h3>
                  <p className="project-category">Brand Design, Visual Identity</p>
                  <p className="project-description">
                    Complete brand identity development for a sustainable technology startup, including logo,
                    guidelines, and digital assets.
                  </p>
                </div>
                <div className="project-year">2023</div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/placeholder.svg?height=600&width=960" alt="Project 4" className="project-img" />
              </div>
              <div className="project-info">
                <div className="project-details">
                  <h3 className="project-title">Analytics Dashboard</h3>
                  <p className="project-category">Data Visualization, Interface Design</p>
                  <p className="project-description">
                    Comprehensive analytics dashboard for enterprise clients, featuring real-time data visualization and
                    reporting tools.
                  </p>
                </div>
                <div className="project-year">2023</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="page-footer">
            <p className="footer-text">
              Interested in working together?{" "}
              <Link href="/contact" className="footer-link">
                Let's talk
              </Link>
            </p>
          </footer>
        </div>
      </main>
    </div>
  )

export default SelectedWorks;