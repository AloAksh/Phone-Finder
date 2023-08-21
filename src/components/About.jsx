import React from "react";

const AboutOne = () => {
	return <div className="min-h-screen bg-amber-200">

    </div>;
};

const AboutTwo = () => {
	return <div className="min-h-screen bg-red-400"></div>;
};

const AboutThree = () => {
	return <div className="min-h-screen bg-orange-300"></div>;
};

const AboutFour = () => {
	return <div className="min-h-screen bg-purple-400"></div>;
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
