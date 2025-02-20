import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const testimonials = [
  {
    text: "I had a great time during the training and enjoyed Bukola's teaching simplicity.",
    author: "- Dr Adeola",
  },
  {
    text: "The course was fully packed. I looked forward to the classes every weekend. It has given me a lot of clarity and helped me to untangle myself from cobwebs in my mind.",
    author: "- Arin",
  },
  {
    text: "Immediately from the first lesson, I was hooked. I looked forward to each class. The course helped me rediscover my love for writing.",
    author: "- T. M.",
  },
  {
    text: "The experience was wholesome, healing and therapeutic. Thank you coach Bukola",
    author: "- Hassan",
  },
];

const TestimonialCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={300}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      
      arrows={false}
    >
      {testimonials.map((testimonial, index) => (
        <div className='px-8 md-px-10'>
        <div key={index} className="bg-white p-6 rounded-lg shadow-md max-w-sm mb-10 h-48">
          <p className="text-gray-700 italic">{testimonial.text}</p>
          <h4 className="text-orange-500 mt-4 font-semibold">{testimonial.author}</h4>
        </div>
        </div>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;