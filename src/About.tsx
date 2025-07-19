import React, { useState } from "react";

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

const facts = [
  {
    title: "Builder & Explorer",
    text: `I'm Remy Sedlak—a <b>builder</b>, <b>problem-solver</b>, and <b>explorer</b> at heart. I'm passionate about <b>empowering creativity through code</b>, whether that's crafting <b>intuitive user experiences</b>, building <b>robust backend systems</b>, or experimenting with <b>new tools and workflows</b>. I love taking on <b>new challenges</b> and <b>learning from every project</b> I tackle.

My journey in tech has been shaped by a drive to <b>make things better</b>, whether that's <b>optimizing</b> a process, designing a <b>clean interface</b>, or <b>collaborating with others</b> to bring ideas to life.`,
  },
  {
    title: "Curious by Nature",
    text: `At my core, I’m <b>fascinated by how things work</b>: how <b>systems connect</b>, <b>scale</b>, and <b>improve</b>. That curiosity has guided me toward using <b>type-safe languages</b> and <b>interface-driven design</b>, helping me manage <b>complexity</b> and stay in <b>control</b> as my projects grow.

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
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full max-w-6xl items-center">
                {/* Images */}
                <div className="hidden md:flex flex-row md:flex-col items-center md:w-1/3 gap-y-3 gap-x-8">
                    <div className=" flex flex-col items-center">
                        <img
                            src="/assets/remysedlak_image.jpg"
                            alt="image of Remy Sedlak"
                            loading="lazy"
                            className="rounded-xl shadow-xl border w-42 h-40 md:w-54 md:h-46 object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <span className="text-sm text-slate-600 mt-1">Portrait from AEO Day</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="/assets/IMG_2927.png"
                            alt="image of Remy's cat, Church"
                            loading="lazy"
                            className="rounded-xl shadow-xl border w-42 h-40 md:w-54 md:h-46 object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <span className="text-sm text-slate-600 mt-1">Church pushing a commit</span>
                    </div>
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
                                        : "bg-white text-slate-900 cursor-pointer border shadow-md  border-slate-900 hover:bg-yellow-50 hover:text-slate-800 text-md md:text-lg"
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
                        shadow-xl p-6 transition-all duration-300  whitespace-pre-line"dangerouslySetInnerHTML={{
                                  __html: modifyLinks(facts[selected].text),
                                }}>
                        </p>
                    </div>
                </div>
                <div className="md:hidden flex flex-row md:flex-col items-center md:w-1/3 gap-y-3 gap-x-8">
                    <div className=" flex flex-col items-center">
                        <img
                            src="/assets/remysedlak_image.jpg"
                            alt="image of Remy Sedlak"
                            loading="lazy"
                            className="rounded-xl shadow-xl border w-42 h-40 md:w-54 md:h-46 object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <span className="text-sm text-slate-600 mt-1">Portrait from AEO Day</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="/assets/IMG_2927.png"
                            alt="image of Remy's cat, Church"
                            loading="lazy"
                            className="rounded-xl shadow-xl border w-42 h-40 md:w-54 md:h-46 object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <span className="text-sm text-slate-600 mt-1">Church pushing a commit</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;