import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import user from "../../assets/user.png";
const Testimonials = () => {
  return (
    <div className="container">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={user} />
          <div className="myCarousel">
            <h3>Akash Kumar </h3>
            <h4>Trainee Software Engineer Intern</h4>
            <p>
              My internship at Akash Kumar was a transformative experience. The
              hands-on projects I worked on allowed me to apply my theoretical
              knowledge in a practical setting. The mentorship provided by
              senior engineers was invaluable, and their guidance helped me grow
              both technically and professionally. I am grateful for the
              supportive environment that encouraged learning and innovation.
            </p>
          </div>
        </div>

        <div>
          <img src={user} />
          <div className="myCarousel">
            <h3>Rifat Naj</h3>
            <h4>Web Development Intern</h4>
            <p>
              Interning at Invisible Routes was a game-changer for my career.
              The company culture is inclusive and dynamic, fostering creativity
              and collaboration. I had the opportunity to work on real-world
              projects that challenged me and enhanced my skills. The experience
              I gained here was instrumental in landing my first full-time job
              as a web developer.
            </p>
          </div>
        </div>

        <div>
          <img src={user} />
          <div className="myCarousel">
            <h3>Kaif Ali</h3>
            <h4>Data Science Intern</h4>
            <p>
              At Invisible Routes, I was able to dive deep into data science and
              machine learning. The projects were challenging yet rewarding, and
              I always felt supported by my team. The company's emphasis on
              continuous learning and professional development made it an ideal
              place for an intern. I left with a wealth of knowledge and a clear
              career path in data science.
            </p>
          </div>
        </div>
        <div>
          <img src={user} />
          <div className="myCarousel">
            <h3>Anil kumar verma</h3>
            <h4>Software Testing Intern</h4>
            <p>
              My time at Invisible Routes as a software testing intern was
              highly educational. I learned about different testing
              methodologies and tools, and the importance of quality assurance
              in the software development lifecycle. The team's commitment to
              excellence and their willingness to share knowledge made my
              internship a very rewarding experience.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
