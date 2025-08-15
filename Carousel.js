import React, { useState } from "react";
import cardStackImage from "../assets/pexels-davegarcia-32642487.jpg";
import transactionImage from "../assets/nathan-dumlao-lvWw_G8tKsk-unsplash.jpg";
import onlinePaymentImage from "../assets/pexels-n-voitkevich-6214474.jpg";

const carouselSlides = [
  {
    badge: "Premium Rewards Card",
    title: "Get Welcome Voucher Worth INR 15,000",
    description:
      "Apply for our Premium Rewards Credit Card and unlock exclusive benefits including airport lounge access, reward points, and cashback on all purchases.",
    primaryButton: "Apply Now",
    image: cardStackImage,
    imageAlt: "Premium Rewards Credit Card Stack",
  },
  {
    badge: "Contactless Payments",
    title: "Experience Secure and Fast Transactions",
    description:
      "Pay securely and quickly with contactless card technology. No need to enter a PIN for small purchases.",
    primaryButton: "Learn More",
    image: transactionImage,
    imageAlt: "Contactless Card Transaction",
  },
  {
    badge: "Shop Online",
    title: "Seamless Shopping Experience",
    description:
      "Shop from home anytime using your credit card, backed by 24/7 fraud protection and instant transaction alerts.",
    primaryButton: "Shop Now",
    image: onlinePaymentImage,
    imageAlt: "Online Payment",
  },
];

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
  };

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-bg">
        <div className="carousel-inner">
          {carouselSlides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeSlide ? "active" : ""
              }`}
            >
              <div className="row align-items-center">
                <div className="col card-content">
                  <span className="badge">{slide.badge}</span>
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <div className="button-group">
                    <button className="primary-btn">
                      {slide.primaryButton}
                    </button>
                    <button className="secondary-btn">
                      {slide.secondaryButton}
                    </button>
                  </div>
                </div>
                <div
                  className="col img-content"
                  style={{
                    background: `url(${slide.image}) no-repeat center center`,
                    backgroundSize: "cover",
                  }}
                >
                  {/* <img
                    className="carousel-img"
                    src={slide.image}
                    alt={slide.imageAlt}
                  /> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control prev" onClick={prevSlide}>
          &#8592;
        </button>
        <button className="carousel-control next" onClick={nextSlide}>
          &#8594;
        </button>
        <div className="carousel-indicators">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              className={index === activeSlide ? "active" : ""}
              onClick={() => goToSlide(index)}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

// /* /*
// CAROUSEL */
// .carousel-bg {
//   background: linear-gradient(90deg, #29a9df 65%, #2cb39a 100%);
//   border-radius: 22px;
//   color: #fff;
//   padding: 2rem 3rem;
//   margin-top: 40px;
// }

// .carousel-control-prev,
// .carousel-control-next {
//   width: 5%;
// }

// .carousel-inner {
//   min-height: 330px;
//   display: flex;
//   align-items: center;
// }

// .carousel-indicators [data-bs-target] {
//   background-color: #a9edfa;
// }

// .carousel-indicators button {
//   background-color: #a9edfa;
//   width: 12px;
//   height: auto;
//   border-radius: 50%;
//   border: none;
//   margin: 0 4px;
//   opacity: 0.5;
//   transition: opacity 0.3s;
// }

// .carousel-indicators button.active {
//   opacity: 1;
// }

// .carousel-indicators {
//   margin-bottom: 1.5rem;
// }

// .carousel-bg .badge {
//   font-size: 1rem;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
// }

// .carousel-bg h2 {
//   font-size: 2.05rem;
//   font-weight: 600;
// }

// /* Carousel image */
// .sc-hero-img {
//   max-width: 235px;
//   border-radius: 14px;
//   box-shadow: 0 3px 12px rgba(0, 0, 0, 0.13);
// } */

// import { useState } from "react";
// import rewardsCardImage from "C:UsersSabah AhmedDesktopCapstone ProjectReactSCPagestandard-chartered-app\vite-projectsrcassetscredit card accepting.jpg";

// const carouselSlides = [
//   {
//     badge: "Premium Rewards Card",
//     title: "Get welcome voucher worth INR 15,000",
//     description:
//       "Apply for our Premium Rewards Credit Card and unlock exclusive benefits including airport lounge access, reward points, and cashback on all purchases.",
//     primaryButton: "Apply Now",
//     secondaryButton: "Manage cookies or not",
//     image: rewardsCardImage, // Use the imported image here
//     imageAlt: "Rewards Card",
//   },
//   // ...other slides

//   {
//     badge: "Travel Benefits",
//     title: "Complimentary Airport Lounge Access",
//     description:
//       "Enjoy free lounge access at airports worldwide when you use your Premium Rewards Credit Card. Relax and travel in style!",
//     primaryButton: "Explore Benefits",
//     secondaryButton: "Terms & Conditions",
//     image:
//       "https://images.pexels.com/photos/1059383/pexels-photo-1059383.jpeg?auto=compress&w=300&h=170&fit=crop",
//     imageAlt: "Lounge Access",
//   },
// ];

// // Carousel Component
// const Carousel = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const nextSlide = () => {
//     setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
//   };

//   const prevSlide = () => {
//     setActiveSlide(
//       (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
//     );
//   };

//   const goToSlide = (index) => {
//     setActiveSlide(index);
//   };

//   return (
//     <div className="container">
//       <div className="carousel slide carousel-bg">
//         <div className="carousel-inner">
//           {carouselSlides.map((slide, index) => (
//             <div
//               key={index}
//               className={`carousel-item ${
//                 index === activeSlide ? "active" : ""
//               }`}
//             >
//               <div className="row align-items-center">
//                 <div className="col-md-7 col-12">
//                   <span className="badge bg-light text-primary mb-3 px-3 py-2">
//                     {slide.badge}
//                   </span>
//                   <h2>{slide.title}</h2>
//                   <p>{slide.description}</p>
//                   <div className="mt-4 mb-5">
//                     <button className="btn btn-light text-primary fw-bold me-2 px-4 py-2">
//                       {slide.primaryButton}
//                     </button>
//                     <button
//                       className="btn btn-outline-light fw-bold"
//                       style={{ opacity: 0.6 }}
//                     >
//                       {slide.secondaryButton}
//                     </button>
//                   </div>
//                 </div>
//                 <div className="col-md-5 col-12 text-center">
//                   <img
//                     className="sc-hero-img"
//                     src={slide.image}
//                     alt={slide.imageAlt}
//                   />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           onClick={prevSlide}
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           onClick={nextSlide}
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//         <div className="carousel-indicators">
//           {carouselSlides.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               onClick={() => goToSlide(index)}
//               className={index === activeSlide ? "active" : ""}
//               aria-current={index === activeSlide ? "true" : "false"}
//               aria-label={`Slide ${index + 1}`}
//             ></button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;
