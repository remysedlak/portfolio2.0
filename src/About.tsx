import React from "react";

const About: React.FC = () => (
    <div
        className="md:mx-40 mx-10 flex flex-col md:flex-row justify-center items-center mt-16"
    >
        <div style={{ flex: 1, minWidth: 250 }} className=" p-2 ">
            <img
            src="/assets/remysedlak_image.jpg"
            alt="Remy Sedlak"
            className="md:rounded-full float-right shadow-lg ml-4 mt-4 w-32 h-32 md:mb-0 md:w-70 md:h-70 border border-orange-900"
        />
        <h1 className="text-3xl mb-4 text-orange-600">About me</h1>
            <p className="text-xl mb-2 ">
                I'm passionate about building software that empowers creativity and exploration. Whether it's experimenting with workflows or designing intuitive interfaces, I love pushing the boundaries of what's possible with code and machines.
            </p>
            <p className="mb-2 text-xl">
                When I'm not coding, you can usually find me hanging out with my cat, who is always curious about my latest projects (and sometimes walks across my keyboard).
            </p>
            <p className="mb-2 text-xl">
                I have a deep fascination with systems—how things work, how they connect, and how they can be improved. This curiosity drives me to explore scripting and automation, making workflows smoother and more efficient.
            </p>
            <p className="mt-4 text-md  text-red-700">
                Thanks for stopping by and learning a bit about me!
            </p>
            
        </div>
    </div>
);

export default About;