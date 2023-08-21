import React from "react";

const AboutOne = () => {
	return <div className="min-h-screen bg-amber-200 flex flex-row flex-wrap justify-around items-center">
        <p className="font-semibold m-4 text-6xl">Find The Best Phone In Your Budget</p>
        <button className="bg-red-400 border-8 font-bold px-8 py-4 rounded-2xl text-white text-lg">Find Your Phone</button>
    </div>;
};

const AboutTwo = () => {
	return <div className="min-h-screen bg-red-400 flex justify-around items-center">
        <p className="text-6xl font-semibold max-w-fit">
            Select & Compare
        </p>
    </div>;
};

const AboutThree = () => {
	return <div className="min-h-screen bg-orange-300 flex flex-wrap justify-around items-center">
        <p className="text-6xl font-semibold">Don't Know What Features To Look For?</p>
    </div>;
};

const AboutFour = () => {
	return <div className="min-h-screen bg-purple-400 flex flex-wrap justify-around items-center">
        <p className="text-6xl font-semibold">Share Your Best Picks</p>
    </div>;
};

const About = () => {
	return (
		<div>
			<AboutOne />
			<AboutTwo />
			<AboutThree />
			<AboutFour />
		</div>
	);
};

export default About;
