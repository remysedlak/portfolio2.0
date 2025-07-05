import React from "react";

const About: React.FC = () => (
    <div
        className="md:mx-25 mx-2 flex flex-col md:flex-row justify-center items-center md:mt-16 mt-4"
    >
        <div style={{ flex: 1, minWidth: 250 }} className=" p-2 md:p-4 bg-yellow-50 rounded-xl shadow-lg border ">
            <img
            src="/assets/remysedlak_image.jpg"
            alt="image of Remy Sedlak"
            loading="lazy"
            className="md:rounded-full float-right shadow-lg mr-4  mt-4 w-32 h-32 md:mb-0 md:w-50 md:h-50 border border-orange-900"
        />
        
        <div className="">
        <h1 className="text-3xl mb-4 text-orange-600">About me</h1>
            <p className="text-xl md:text-2xl mb-2 ">
                I'm passionate about building software that empowers creativity and exploration. Whether it's experimenting with workflows or designing intuitive interfaces, I love pushing the boundaries of what's possible with code and machines.
            </p>
            <p className="mb-2 text-xl md:text-2xl">
                When I'm not coding, you can usually find me hanging out with my cat, who is always curious about my latest projects (and sometimes walks across my keyboard). He may have gotten a commit pushed or two.
            </p>
            <p className="mb-2 text-xl md:text-2xl">
                I have a deep fascination with systems—how things work, how they connect, and how they can be improved. This focus has led me to prefer safe languages with types and interfaces, as they give me complete control and help me manage complexity in my projects.
            </p>
            </div>
           
            
        </div>
    </div>
);

export default About;