import { motion } from "framer-motion"; // fixed import
import { BsStars } from "react-icons/bs";
import Btn from "../Btn";
import { ReactTyped } from "react-typed";

const Banner = () => {
    return (
        <section className='banner w-full bg-[url("/images/banner.jpg")] bg-no-repeat bg-center bg-cover -z-10'>
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 pt-[60px] lg:pt-[80px] px-4">

                {/* Profile Image */}
                <div className="flex justify-center lg:justify-start">
                    <img
                        src="/images/profile.png"
                        alt="Profile"
                        className="w-[250px] md:w-[300px] lg:w-auto"
                    />
                </div>

                {/* Text Section */}
                <div className="relative pt-[60px] lg:pt-[120px] text-center lg:text-left">

                    {/* Floating Arrow */}
                    <motion.img
                        src="/images/arrow.png"
                        alt="scrolling"
                        className="absolute h-[40px] left-1/2 lg:left-0 -translate-x-1/2 lg:-translate-x-[90px] -translate-y-[60px]"
                        animate={{ y: [0, -15, 0] }}
                        transition={{
                            duration: 3,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                    />

                    <p className='flex justify-center lg:justify-start items-center gap-2 mb-2 text-base'>
                        <BsStars /> <span>Hey There!</span>
                    </p>

                    <h4 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">I'm Rachel </h4>

                    <ReactTyped
                        strings={[
                            "Web Developer",
                            "Web Designer",
                            "full stack web developer",
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        attr="placeholder"
                        loop
                    >
                        <input
                            type="text"
                            className="text-center lg:text-left moving_text"
                            style={{
                                fontSize: '28px',
                                paddingBottom: '15px',
                                fontFamily: 'var(--second-family)',
                                color: '#000000',  // make sure this is a valid color
                            }}
                        />

                    </ReactTyped>

                    <p className="text-sm md:text-base text-gray-700 mb-6 max-w-[500px] mx-auto lg:mx-0">
                        We're a team of strategic thinkers working globally with the largest brands. We believe that progress doesn't come from playing it safe.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
                        <Btn to="/" variant="primary">Download CV</Btn>
                        <Btn to="/" variant="secondary">Show Reel</Btn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
