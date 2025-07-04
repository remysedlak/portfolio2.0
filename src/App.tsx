import React, { useEffect } from 'react'
import './index.css'
import portfolio from './data/portfolio.ts'
import timeline from './data/timeline.ts'
import { BrowserRouter, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom'
import About from './About.tsx'

function ScrollToSection() {
  const location = useLocation()
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])
  return null
}

function App() {
  const [showNav, setShowNav] = React.useState(false)
  return (
    <BrowserRouter>
      <ScrollToSection />
      <div className="bg-orange-50 min-h-screen" id="home">
        {/* Navbar */}
        <nav className="p-4 bg-red-800 text-white flex items-center justify-between sticky top-0 z-50">
            <button
            className="md:hidden p-2"
            onClick={() => setShowNav((prev) => !prev)}
            aria-label="Open navigation menu"
            >
            <img src="/assets/menu-svgrepo-com(1).svg" className="w-5 h-5" alt="Menu" />
            </button>
            {showNav && (
            <div className="fixed inset-0 bg-orange-800 bg-opacity-60 z-50 flex flex-col">
              <button
              className="self-end m-4 p-2"
              onClick={() => setShowNav(false)}
              aria-label="Close navigation menu"
              >
              <span className="text-white text-3xl">&times;</span>
              </button>
              <ul className="flex flex-col items-center justify-center flex-1 space-y-8 text-white text-3xl font-eb-garamond">
              <li>
                <Link to="/" state={{ scrollTo: 'home' }} onClick={() => setShowNav(false)}>Home</Link>
              </li>
              <li>
                <Link to="/" state={{ scrollTo: 'projects' }} onClick={() => setShowNav(false)}>Projects</Link>
              </li>
              <li>
                <Link to="/" state={{ scrollTo: 'timeline' }} onClick={() => setShowNav(false)}>Timeline</Link>
              </li>
              <li>
                <Link to="/" state={{ scrollTo: 'links' }} onClick={() => setShowNav(false)}>Links</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setShowNav(false)}>About</Link>
              </li>
              </ul>
            </div>
            )}
          <h1 className="font-eb-garamond text-3xl text-right ml-auto md:ml-0">Remy Sedlak</h1>
          <ul className="space-x-6  hidden md:flex">
            <li>
              <Link to="/" state={{ scrollTo: 'home' }} className="hover:text-gray-400 text-2xl">Home</Link>
            </li>
            <li>
              <Link to="/" state={{ scrollTo: 'projects' }} className="hover:text-gray-400 text-2xl">Projects</Link>
            </li>
            <li>
              <Link to="/" state={{ scrollTo: 'timeline' }} className="hover:text-gray-400 text-2xl">Timeline</Link>
            </li>
            <li>
              <Link to="/" state={{ scrollTo: 'links' }} className="hover:text-gray-400 text-2xl">Links</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400 text-2xl">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Hero Section */}
                <section className=" p-2 px-4 flex flex-col items-center justify-center h-[60vh] bg-orange-400">
                  <h1 className="text-5xl md:text-6xl font-eb-garamond text-white mb-4">Welcome to my portfolio!</h1>
                  <h3 className="text-2xl font-eb-garamond text-white mb-4 text-left md:text-center">I am Remy, a <b>Computer Science</b> and <b>Interactive Design</b> student<br /> with a love for <b>software development</b> and <b>user experience.</b></h3>
                </section>
                {/* Projects Section */}
                <section id="projects" className="py-16 px-4 max-w-4xl mx-auto">
                  <h2 className="text-3xl font-eb-garamond mb-6 text-orange-500">My Projects</h2>
                  <div className="grid gap-8 md:grid-cols-2">
                    {portfolio.map((project, idx) => (
                      <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col">
                        <img
                          src={project.imgUrl}
                          alt={project.title}
                          className="w-full h-48 object-cover rounded mb-4 border"
                        />
                        <h3 className="text-2xl font-eb-garamond mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {project.stack.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 rounded text-white text-xs"
                              style={{ backgroundColor: tech.color }}
                            >
                              {tech.name}
                            </span>
                          ))}
                        </div>
                        <p className="mb-4 text-gray-700">{project.desc}</p>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-auto text-orange-600 hover:underline font-semibold"
                        >
                          View on GitHub
                        </a>
                      </div>
                    ))}
                  </div>
                </section>
                {/* Timeline Section */}
                <section id="timeline" className="py-16 px-8 max-w-4xl mx-auto">
                  <h2 className="text-3xl font-eb-garamond mb-6 text-orange-500">Timeline</h2>
                  {/* Vertical timeline line */}
    <div className="relative">
      <div className="absolute  top-0 bottom-0 w-1 bg-orange-300 rounded"></div>
   
    <ul className="flex flex-col gap-10">
      {timeline.map((entry, idx) => (
        <li key={idx} className="relative flex items-start">
          {/* Dot */}
          <span className="absolute -left-1.5 mt-2 w-4 h-4 bg-white rounded-full border-2 border-orange-500 shadow"></span>
          <div className="ml-6">
            <div className="flex items-baseline gap-4">
              <span className="text-lg font-semibold text-orange-500">{entry.year}</span>
              <span className="text-xl font-eb-garamond font-semibold">{entry.title}</span>
              <span className="ml-auto text-md  text-gray-500">{entry.duration}</span>
            </div>
            <div
              className="mt-2 text-gray-700"
              dangerouslySetInnerHTML={{ __html: entry.details }}
            />
          </div>
        </li>
      ))}
    </ul>
     </div>
                </section>

                {/* Links Section */}
                <section id="links" className="py-16 px-4 max-w-4xl mx-auto">
                  <h2 className="text-3xl font-eb-garamond mb-6 text-orange-500">Links</h2>
                  <ul className="space-y-4 text-lg">
                    <li>
                      <a
                        href="https://github.com/remysedlak"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline font-semibold flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
                        </svg>
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/in/remysedlak"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline font-semibold flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm15.25 12.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-11h2.89v1.5h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.58v6.46z"/>
                        </svg>
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:remysedlak@gmail.com"
                        className="text-orange-600 hover:underline font-semibold flex items-center gap-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"/>
                        </svg>
                        remysedlak@gmail.com
                      </a>
                    </li>
                  </ul>
                </section>
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
