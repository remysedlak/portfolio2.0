import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

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

const ImageSlideshow = () => {
  const slides = [
     {
      src: "/assets/IMG_2929.jpg",
      alt: "image of Remy Sedlak",
      caption: "Portrait from AEO Day"
    },
    {
      src: "/assets/IMG_2927.png",
      alt: "image of Remy's cat, Church",
      caption: "My cat, Church, pushing a commit"
    },
    {
      src: "/assets/h4h-2025-204-2.jpg",
      alt: "image of Remy Sedlak at a hackathon",
      caption: "The Insquisitor, Hacking4Humanity 2025"
    },
    {
      src: "/assets/54413401962_2192bd17d1_c.jpg",
      alt: "image of Remy Sedlak at a hackathon",
      caption: "Hacking4Humanity finals in Harrisburg, PA"
    },
    {
      src: "/assets/IMG_2863.png",
      alt: "image of Remy Sedlak building a computer",
      caption: "Building my first computer in middle school"
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isPlaying, slides.length]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex flex-col items-center w-full relative group">
      {/* Main slideshow container */}
      <div className="relative max-w-sm h-md overflow-hidden rounded-xl shadow-xl border">
        {/* Loading spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        )}

        {/* Slides container */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={slide.src}
                alt={slide.alt}
                loading="lazy"
                onLoad={handleImageLoad}
                className="w-full h-60 md:h-84 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
        

        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/50 hover:bg-slate-900/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/50 hover:bg-slate-900/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>

        {/* Play/Pause button */}
        <button
          onClick={togglePlayPause}
          className="absolute bottom-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>
      </div>
      

      

      {/* Caption */}
      <div className=" text-center min-h-[3rem] flex items-center">
        <span className="text-sm text-slate-600 transition-opacity duration-300">
          {slides[currentSlide].caption}
        </span>
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-slate-500 w-3' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {isPlaying && (
        <div className="w-full mb-4  max-w-sm mt-4 h-1 bg-gray-200 rounded-full overflow-hidden opacity-30">
          <div 
            className="h-full bg-slate-500 rounded-full transition-all duration-100 ease-linear"
            style={{
              animation: 'slideProgress 8s linear infinite',
              animationPlayState: isPlaying ? 'running' : 'paused'
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes slideProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

const facts = [
  {
    title: "Builder & Explorer",
    text: `I'm Remy Sedlak—a <b>builder</b>, <b>problem-solver</b>, and <b>explorer</b> at heart. I'm passionate about <b>empowering creativity through code</b>, whether that's crafting <b>intuitive user experiences</b>, building <b>robust backend systems</b>, or experimenting with <b>new tools and workflows</b>. I love taking on <b>new challenges</b> and <b>learning from every project</b> I tackle.

My journey in tech has been shaped by a drive to <b>make things better</b>, whether that's <b>optimizing</b> a process, designing a <b>clean interface</b>, or <b>collaborating with others</b> to bring ideas to life.`,
  },
  {
    title: "Curious by Nature",
    text: `At my core, I'm <b>fascinated by how things work</b>: how <b>systems connect</b>, <b>scale</b>, and <b>improve</b>. That curiosity has guided me toward using <b>type-safe languages</b> and <b>interface-driven design</b>, helping me manage <b>complexity</b> and stay in <b>control</b> as my projects grow.

Through my coursework in <b>Java</b> and <b>C</b>, I've gained a deep appreciation for how systems operate at a <b>low level</b>, and I've become especially interested in <b>Unix systems</b>. I enjoy <b>diving into the details</b>, understanding the "<b>why</b>" behind the "<b>how</b>," and applying that knowledge to <b>build better software</b>.`,
  },
  {
    title: "Outside the Terminal",
    text: `Beyond tech, I enjoy <b>writing music</b>, <b>lifting weights</b>, and <b>exploring the outdoors</b>. I believe that <b>balance</b> and <b>curiosity outside of work</b> help fuel <b>creativity</b> and <b>resilience</b> in my projects. I often like to pick up a <b>new book</b> on a part of tech I haven't explored yet, or just to <b>learn something new</b>.

Whether I'm <b>learning something new</b>, <b>collaborating with others</b>, or just enjoying a <b>quiet moment</b> with my cat, <b>Church</b>, I'm always looking for ways to <b>grow</b> and make a <b>positive impact</b>.`,
  },
];

const About: React.FC = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className="md:mx-25 mx-2 flex flex-col items-center justify-center md:mt-8 mt-4 m-2 ">
            <h1 className="md:hidden text-4xl font-eb-garamond mb-4 text-slate-950 text-left">
                So, who am I?
            </h1>
            <div className="flex flex-col lg:flex-row gap-6 md:gap-16 w-full max-w-6xl items-center">
                {/* Slideshow - Desktop */}
                <div className="hidden lg:block">
                    <ImageSlideshow />
                </div>
                
                {/* Interactive Facts */}
                <div className="flex-1 flex flex-col ">
                    {/* Title for pc */}
                     <h1 data-aos="zoom-in-left" data-aos-duration="300" className="hidden md:block text-4xl font-eb-garamond mb-4 text-slate-950 text-left">
                So, who am I?
            </h1>
                    <div data-aos="fade-in-left" data-aos-duration="300" className="flex gap-2 mb-4 flex-wrap ">
                        {facts.map((fact, idx) => (
                            <button
                                key={fact.title}
                                className={`flex-1 min-w-0 px-2 py-1 rounded-xl font-semibold transition-colors duration-200 ${
                                    selected === idx
                                        ? "bg-slate-900 text-white shadow-md text-md md:text-lg"
                                        : "bg-white text-slate-900 cursor-pointer border shadow-md  border-slate-700 hover:bg-yellow-50 hover:text-slate-800 text-md md:text-lg"
                                }`}
                                style={{ width: "33.3333%" }}
                                onClick={() => setSelected(idx)}
                                aria-pressed={selected === idx}
                            >
                                {fact.title}
                            </button>
                        ))}
                    </div>
                    <div className="w-full max-w-2xl ">
                        <p data-aos="fade-in-left" data-aos-duration="300" className="text-xl md:text-xl mb-2 bg-white rounded-xl min-h-[330px] 
                        shadow-xl p-4 transition-all duration-300  whitespace-pre-line" dangerouslySetInnerHTML={{
                                  __html: modifyLinks(facts[selected].text),
                                }}>
                        </p>
                    </div>
                </div>
                
                {/* Slideshow - Mobile */}
                <div className="lg:hidden">
                    <ImageSlideshow />
                </div>
            </div>
        </div>
    );
};

export default About;