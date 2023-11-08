import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/amilars/",
      name: "Amil K. Rustamli ",
      role: "Leading Specialist | IT Business Analytics | Business & Data Analytics, MBA",
      test: "I've had the privilege of working with Raul, a dedicated frontend developer with a strong passion for SEO optimization. Despite having limited experience, Raul's enthusiasm for learning and self-improvement is truly inspiring. He approaches every task with a growth mindset and a determination to excel. Raul's commitment to expanding his skill set and his willingness to take on new challenges reflect his strong work ethic. As he continues to learn and grow in the industry, I am confident that Raul's drive and determination will lead him to achieve great heights. It's a pleasure to recommend Raul for his positive attitude, eagerness to learn, and his unwavering commitment to personal and professional growth.",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/camal-mikayilov-01/",
      name: "Jamal Mikayilov",
      role: "Frontend Developer (React.js) | Project Manager | IPMA-D CPMA | Instructor",
      test: "Although we have known each other for a very short time, I have seen that your skills, experience, and determination are truly commendable both in our work and in the other projects we have collaborated on. I am confident that you will achieve the ambitious goals you have set in every area you progress. I wish your path to always be open.",
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/leyla-aliyeva-361031226/",
      name: "Leyla Aliyeva",
      role: "Backend Developer",
      test: "I highly recommend Raul Omarov as a group mate. He is an exceptional team player who consistently demonstrates strong communication skills, collaboration, and a proactive attitude. His dedication to working well with others contributes greatly to the success of any team proje",
    },
    // {
    //   id: 4,
    //   link: "https://www.linkedin.com/in/javid-aliyev-b343061b6/",
    //   name: "Javid Aliyev",
    //   role: "Full-Stack Web Developer. JavaScript | Rails | React | Redux.",
    //   test: "I mentored Rasif some months ago, and I can say that he is one of those people that you love to work with. He was always interested in what I was trying to teach him, paying attention and always asking questions if something was not clear. When it comes to professional skills, he is really committed to work, always doing him best and going beyond the requirements of the project he's building.",
    // },
    // {
    //   id: 5,
    //   link: "https://www.linkedin.com/in/elshad-bashirov-1907a1213/",
    //   name: "Elshad Bashirov",
    //   role: "Software Developer",
    //   test: "Throughout all our collaborations, Rasif has always conducted herself politely and kindly. He comes across as someone that's always willing to help and puts the team ahead of himself. But beneath this, I see a strength and determination to distinguish himself. He's not only someone I highly recommend but is also someone I greatly respect.",
    // },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link}>
                <BsLinkedin />
              </a>
            </div>
            <h5 className="client__name">{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
