import React, { useEffect } from "react";
import "./index.css";
import portfolio from "./data/portfolio.ts";
import timeline from "./data/timeline.ts";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import StackIcon from "tech-stack-icons";

const modifyLinks = (htmlString: string) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, 'text/html');
      doc.querySelectorAll('b').forEach((b) => {
         b.classList.add('font-[450]');
      });
      doc.querySelectorAll('a').forEach((a) => {
         a.classList.add("text-blue-800");
         a.classList.add("hover:text-blue-500");
         a.classList.add("underline");
      });
      
      return doc.body.innerHTML;
   };
   
import {
  Routes,
  Route,
  Link,
  useLocation,
  HashRouter,
} from "react-router-dom";
import About from "./About.tsx";
import "tech-stack-icons";
function ScrollToSection() {
  const location = useLocation();
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return null;
}

function App() {
  const [showNav, setShowNav] = React.useState(false);
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true,    // whether animation should happen only once
    });
  }, []);
  return (
    <HashRouter>
      <ScrollToSection />
      <div className="h-[100dvh] flex flex-col">
        {/* Navbar */}
        <nav className="overflow-hidden overflow-y-hidden p-2 bg-slate-900 text-slate-100 flex items-center justify-between sticky top-0 z-50">
          <button
            className="md:hidden p-2"
            onClick={() => setShowNav((prev) => !prev)}
            aria-label="Open navigation menu"
          >
            <img
              src="/assets/menu-svgrepo-com(1).svg"
              className="w-8 h-8"
              alt="Menu"
            />
          </button>
          {showNav && (
            <div className="fixed inset-0 bg-slate-800 bg-opacity-60 z-50 flex flex-col">
              <button
                className="self-end m-4 p-2"
                onClick={() => setShowNav(false)}
                aria-label="Close navigation menu"
              >
                <span className="text-white text-3xl">&times;</span>
              </button>
              <ul className="flex flex-col items-center justify-center flex-1 space-y-8 text-white text-3xl font-eb-garamond">
                <li>
                  <Link
                  className="hover:unerline"
                    to="/"
                    state={{ scrollTo: "home" }}
                    onClick={() => setShowNav(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    state={{ scrollTo: "projects" }}
                    onClick={() => setShowNav(false)}
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    state={{ scrollTo: "timeline" }}
                    onClick={() => setShowNav(false)}
                  >
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    state={{ scrollTo: "links" }}
                    onClick={() => setShowNav(false)}
                  >
                    Links
                  </Link>
                </li>
                <li>
                  <Link to="/about" onClick={() => setShowNav(false)}>
                    About
                  </Link>
                </li>
              </ul>
            </div>
          )}
          <h1 className="font-eb-garamond text-3xl text-right ml-auto md:ml-2">
            Remy Sedlak
          </h1>
          <ul className="space-x-6  hidden md:flex mr-2">
            <li>
              <Link
                to="/"
                state={{ scrollTo: "home" }}
                className="hover:text-gray-400 text-2xl"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/"
                state={{ scrollTo: "projects" }}
                className="hover:text-gray-400 text-2xl"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/"
                state={{ scrollTo: "timeline" }}
                className="hover:text-gray-400 text-2xl"
              >
                Timeline
              </Link>
            </li>
            <li>
              <Link
                to="/"
                state={{ scrollTo: "links" }}
                className="hover:text-gray-400 text-2xl"
              >
                Links
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400 text-2xl ">
                About
              </Link>
            </li>
            
          </ul>
        </nav>
        <div className="flex-1 overflow-y-auto 	bg-slate-200" >
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Hero Section */}

                  <section id="home" className="p-2  px-4 flex flex-col md:items-center  justify-center h-[60vh] bg-slate-800">
                    <h1 data-aos="zoom-in-down" data-aos-duration="600" className=" text-5xl transition-opacity duration-300 ease-in-out md:text-5xl lg:text-6xl xl:text-7xl font-eb-garamond text-white mb-4">
                      Welcome to my portfolio!
                    </h1>
                    <h3 data-aos="zoom-in-down"  data-aos-duration="600" className="text-2xl font-eb-garamond text-slate-100  mb-4 text-left md:text-center">
                      I am Remy, a <b>Computer Science</b> and{" "}
                      <b>Interactive Design</b> student
                      <br /> with a love for <b>
                        software development
                      </b> and <b>user experience.</b>
                      
                    </h3>
                  </section>
                  {/* Projects Section */}
                  <section
                    id="projects"
                    className="py-16 px-4 max-w-4xl mx-auto "
                  >
                    <h2 className="text-3xl font-eb-garamond mb-6 text-slate-950">
                      My Projects
                    </h2>
                    <div className="grid gap-8 md:grid-cols-2">
                      {portfolio.map((project, idx) => (
                        <div
                          key={idx}
                          className="bg-white rounded-lg shadow-lg p-6 flex flex-col"
                        >
                          <img
                            src={project.imgUrl}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded mb-4 border"
                          />
                          <div className="flex flex-row items-center">
                          <h3 className="text-2xl font-eb-garamond">
                            {project.title}
                          </h3>
                          <div className="flex flex-wrap ml-2 gap-x-2">
                            {project.stack.map((tech, i) => (
                              
                                <a
                                  title={tech.name}
                                  href={tech.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group"
                                >
                                  <StackIcon className="w-6 h-6 transition-transform duration-200 group-hover:scale-110 group-hover:drop-shadow" name={tech.name} />
                                  {tech.name === 'sqlite' && (
                                    <img src="assets/Sqlite-square-icon.svg" alt="sqlite" className="w-6 h-6 transition-transform duration-200 group-hover:scale-110 group-hover:drop-shadow" />
                                  )}
                                </a>
                            ))}
                          </div>
                          </div>
                          <p className="mb-4 text-gray-700 text-lg" dangerouslySetInnerHTML={{
                                  __html: modifyLinks(project.desc),
                                }}></p>
                            <a
                            href={project.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto text-blue-950 w-32 hover:underline cursor-pointer inline"
                            >
                            <span className="">View on GitHub</span>
                            </a>
                        </div>
                      ))}
                    </div>
                  </section>
                  {/* Timeline Section */}
                  <section
                    id="timeline"
                    className="py-16 px-8 max-w-4xl mx-auto"
                  >
                    <h2 className="text-3xl font-eb-garamond mb-6 text-slate-950">
                      Timeline
                    </h2>
                    {/* Vertical timeline line */}
                    <div className="relative">
                      <div className="absolute  top-0 bottom-0 w-[1px] bg-black rounded"></div>

                      <ul className="flex flex-col gap-10">
                        {timeline.map((entry, idx) => (
                          <li key={idx} className="relative flex items-start ">
                            {/* Dot */}
                            <span className="absolute -left-1.75 mt-2 w-4 h-4 bg-slate-100 rounded-full border-2 border-black shadow"></span>
                            <div className="ml-6 bg-white rounded-lg p-4 shadow-lg">
                              <div className="flex items-baseline gap-4 border-b ">
                                <span className="text-lg font-medium text-gray-600">
                                  {entry.year}
                                </span>
                                <span className="text-xl font-eb-garamond text-slate-800 font-semibold  ">
                                  {entry.title}
                                </span>
                                <span className="ml-auto text-md font-light  text-gray-500">
                                  {entry.duration}
                                </span>
                              </div>
                              <div
                                className="mt-2 text-gray-700 text-lg"
                                dangerouslySetInnerHTML={{
                                  __html: modifyLinks(entry.details),
                                }}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </section>

                  {/* Links Section */}
                  <section id="links" className="pt-8 pb-2 px-4 bg-yellow-50 relative">
                    <div className="md:ml-32 ml-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h2 className="text-3xl font-eb-garamond mb-4 text-zinc-800">
                            Links
                          </h2>
                          <ul className="space-y-2 text-lg text-zinc-800">
                            <li>
                              <a
                                href="https://github.com/remysedlak"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline  flex items-center gap-2"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                                  GitHub
                                </svg>
                                GitHub
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://linkedin.com/in/remysedlak"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline flex items-center gap-2"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.78 1.76-1.75 1.76zm15.25 12.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-11h2.89v1.5h.04c.4-.75 1.37-1.54 2.82-1.54 3.02 0 3.58 1.99 3.58 4.58v6.46z" />
                                </svg>
                                LinkedIn
                              </a>
                            </li>
                            <li>
                <a
                  href="https://drive.google.com/file/d/1-gW3kevUAv6ImxSWIZgw-VO9A38-KFCk/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-2"
                >
                  <svg
                  className="w-5 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  >
                  <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.828a2 2 0 0 0-.586-1.414l-5.828-5.828A2 2 0 0 0 12.172 2H6zm0 2h6v5a1 1 0 0 0 1 1h5v10H6V4zm8 0.414L18.586 9H14V4.414zM8 12h8v2H8v-2zm0 4h8v2H8v-2z" />
                  </svg>
                  Resume
                </a>
            </li>
                            <li>
                              <a
                                href="mailto:remysedlak@gmail.com"
                                className="hover:underline flex items-center gap-2"
                              >
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z" />
                                </svg>
                                remysedlak@gmail.com
                              </a>
                            </li>
                            
                          </ul>
                        </div>
                        
                        
                      </div>
                      
                    </div>
                    
                     <footer className=" text-center mt-4 opacity-40">
  <p className="hidden md:flex md:justify-center text-xs  text-zinc-900 font-eb-garamond items-center">
    &copy; {new Date().getFullYear()} Remy Sedlak. All rights reserved. Built with TypeScript — and a lot of caffeine ☕.
  </p>
</footer>
                  </section>
                 


                </>
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
