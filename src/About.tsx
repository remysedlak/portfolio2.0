import React, { useState } from "react";

const facts = [
    {
        title: "Builder & Explorer",
        text: `I'm Remy Sedlak—a builder, problem-solver, and explorer at heart. I'm passionate about empowering creativity through code, whether that's crafting intuitive user experiences, building robust backend systems, or experimenting with new tools and workflows. I love taking on new challenges and learning from every project I tackle.

My journey in tech has been shaped by a drive to make things better, whether that's optimizing a process, designing a clean interface, or collaborating with others to bring ideas to life.`,
    },
    {
        title: "Curious by Nature",
        text: `At my core, I’m fascinated by how things work: how systems connect, scale, and improve. That curiosity has guided me toward using type-safe languages and interface-driven design, helping me manage complexity and stay in control as my projects grow.

Through my coursework in Java and C, I've gained a deep appreciation for how systems operate at a low level, and I've become especially interested in Unix systems. I enjoy diving into the details, understanding the "why" behind the "how," and applying that knowledge to build better software.`,
    },
    {
        title: "Life Beyond the Keyboard",
        text: `Outside of tech, I enjoy producing music, lifting weights, and exploring the outdoors. I believe that balance and curiosity outside of work help fuel creativity and resilience in my projects.

Whether I'm learning something new, collaborating with others, or just enjoying a quiet moment with my cat,  Church, I'm always looking for ways to grow and make a positive impact.`,
    },
];

const About: React.FC = () => {
    const [selected, setSelected] = useState(0);

    return (
        <div className="md:mx-25 mx-2 flex flex-col items-center justify-center md:mt-8 mt-4 m-2">
            <h1 className="text-3xl  font-eb-garamond mb-4 text-slate-950 text-center">
                So, who am I?
            </h1>
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl items-center">
                {/* Images */}
                <div className="flex flex-row md:flex-col items-center md:w-1/3 gap-y-3 gap-x-8">
                    <div className="flex flex-col items-center">
                        <img
                            src="/assets/remysedlak_image.jpg"
                            alt="image of Remy Sedlak"
                            loading="lazy"
                            className="rounded-xl shadow-xl border w-42 h-40 md:w-48 md:h-42 object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <span className="text-sm text-slate-600 mt-1">Portrait from AEO</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src="/assets/IMG_2927.png"
                            alt="image of Remy's cat, Church"
                            loading="lazy"
                            className="rounded-xl shadow-xl border w-42 h-40 md:w-50 md:h-40 object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <span className="text-sm text-slate-600 mt-1">Church's Merge Request</span>
                    </div>
                </div>
                {/* Interactive Facts */}
                <div className="flex-1 flex flex-col items-center">
                    <div className="flex gap-2 mb-4 flex-wrap">
                        {facts.map((fact, idx) => (
                            <button
                                key={fact.title}
                                className={`px-4 py-2 rounded-xl font-semibold transition-colors duration-200 ${
                                    selected === idx
                                        ? "bg-slate-900 text-white shadow"
                                        : "bg-white text-slate-900 border hover:bg-slate-100"
                                }`}
                                onClick={() => setSelected(idx)}
                                aria-pressed={selected === idx}
                            >
                                {fact.title}
                            </button>
                        ))}
                    </div>
                    <div className="w-full max-w-2xl">
                        <p className="text-xl md:text-xl mb-2 bg-white rounded-xl shadow-xl p-6 transition-all duration-300 min-h-[120px] whitespace-pre-line">
                            {facts[selected].text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;