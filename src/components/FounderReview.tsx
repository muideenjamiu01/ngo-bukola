import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const founderReviews = [
  {
    name: "Mrs Bunmi Alli",
    text: "Madam Bukola Ayinde is the founder of DSNMI. Thank you for being a selfless leader. Thank you for creating the group and showing us the light. Bukola Ayinde has made a great impact in the life of mothers of children with special needs through her workshops, seminars and has also empower mothers and caregivers with knowledge and support needed to care for their children."
  },
  {
    name: "Mrs Amina Tijani",
    text: "Mrs Bukola Ayinde is a lovable person. She's so kind and selfless. She helps other people to become more in life. She is generous and a philanthropist. I pray to almighty God to bless Mrs Bolukola Ayinde and her entire family for all she has done for us."
  },
  {
    name: "Mrs Patience Akande",
    text: "Bukola Ayinde is simply phenomenal! She is changing the narrative and perspective of how society perceives children with special needs. Bukola is all about positive thinking and is a beacon of hope and inspiration for us all."
  },
  {
    name: "Bunmi Ibilola Ajayi",
    text: "Bukola Ayinde is a remarkable and inspiring woman I admire alot. Through Diary of a Special Needs Mum, she has created a safe space for mothers to share their experiences, access vital resources, and find a community of like-minded individuals who understand the unique challenges they face."
  },
  {
    name: "Precious Eze",
    text: "I Thank God for making me come in contact with Mrs Bukola Ayinde. She is a rare gem A woman with a golden heart that wants to see the best in others."
  }
];

const FounderReview = () => {

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
          {founderReviews.map((testimonial, index) => (
            <div key={index} className='px-8'>
              <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mb-10 max-h-64">
                <p className="text-gray-700 italic truncate-text">{testimonial.text}</p>
                <h4 className="text-orange-500 mt-4 font-semibold font-happyMonkey">{testimonial.name}</h4>
              </div>
            </div>
          ))}
        </Carousel>
  )
}

export default FounderReview;
