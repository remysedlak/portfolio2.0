import React from "react";

const About: React.FC = () => (
    <div
        className="mx-40 flex flex-row justify-center items-center mt-20"
    >
        <img
            src="/assets/remysedlak_image.jpg"
            alt="Remy Sedlak"
            className="rounded-full shadow-lg mr-20 w-70 h-70 border border-orange-900"
        />
        <div style={{ flex: 1, minWidth: 250 }} className="bg-orange-100 p-2 border border-orange-900">
            <p className="text-xl mb-4 ">
                Hi, I'm Remy Sedlak,
                I'm passionate about building music software that empowers creativity and exploration. Whether it's experimenting with new sounds or designing intuitive interfaces, I love pushing the boundaries of what's possible with code and music.
            </p>
            <p className="mb-3 text-lg">
                When I'm not coding, you can usually find me hanging out with my cat, who is always curious about my latest projects (and sometimes walks across my keyboard).
            </p>
            <p className="mb-3 text-lg">
                I have a deep fascination with systems—how things work, how they connect, and how they can be improved. This curiosity drives me to explore scripting and automation, making workflows smoother and more efficient.
            </p>
            <p className="mt-4 text-md font-semibold">
                Thanks for stopping by and learning a bit about me!
            </p>
        </div>
    </div>
);

export default About;