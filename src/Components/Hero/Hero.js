import React from "react";
import "./Hero.css";
import ContactUs from "../ContactUS/ContactUs";
import Banner from "../../assets/banner/banner.png";
import Banner1 from "../../assets/banner/banner1.webp";
import Banner2 from "../../assets/banner/banner2.jpeg";
import Banner3 from "../../assets/banner/banner3.webp";
import Banner4 from "../../assets/banner/banner4.webp";
import Banner5 from "../../assets/banner/banner5.jpeg";
import Banner6 from "../../assets/banner/banner6.webp";
import SEO from "../SEO";
export const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
    const images = React.useMemo(
        () => [Banner, Banner1, Banner2, Banner3, Banner4, Banner5, Banner6],
        [],
    );
    React.useEffect(() => {
        const id = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1,
            );
        }, 3000);
        return () => clearInterval(id);
    }, [images]);
    return (
        <>
            <SEO title="Home" />
            <div className="hero">
                <img src={images[currentImageIndex]} alt="" />
                <div className="dotdiv">
                    <span
                        className={
                            `dot ` +
                            (currentImageIndex === 0 ? "dotactive" : "")
                        }
                    ></span>
                    <span
                        className={
                            `dot ` +
                            (currentImageIndex === 1 ? "dotactive" : "")
                        }
                    ></span>
                    <span
                        className={
                            `dot ` +
                            (currentImageIndex === 2 ? "dotactive" : "")
                        }
                    ></span>
                    <span
                        className={
                            `dot ` +
                            (currentImageIndex === 3 ? "dotactive" : "")
                        }
                    ></span>
                    <span
                        className={
                            `dot ` +
                            (currentImageIndex === 4 ? "dotactive" : "")
                        }
                    ></span>
                    <span
                        className={
                            `dot ` +
                            (currentImageIndex === 5 ? "dotactive" : "")
                        }
                    ></span>
                    <span
                        className={
                            `dot ` +
                            (currentImageIndex === 6 ? "dotactive" : "")
                        }
                    ></span>
                </div>
            </div>
            <div className="title container">
                <h2>What We Offer</h2>
                <p>
                    At Invisible Routes, we're dedicated to empowering
                    businesses like yours with cutting-edge software solutions
                    tailored to your needs. With a commitment to innovation and
                    excellence, we offer a comprehensive suite of services
                    designed to streamline your operations, boost productivity,
                    and drive growth.
                </p>
            </div>
            <h2>Contact with us</h2>
            <ContactUs />
        </>
    );
};
export default Hero;
