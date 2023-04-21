import React from 'react'
import Slider from 'react-slick';

function FaqSection() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src="/svg/black-arrow-left.svg" className="left-arrow" alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src="/svg/black-arrow-right.svg" alt="nextArrow" {...props} />
  );
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="faq-section" id="faqs">
      <div className="faq-section-inner">
        <div className="heading-wrapper">

          <div className="title">
            <div className="left-hat-img">
              {/* <img src="/svg/decorative-flower-dark.svg" alt="" />
              <img src="/svg/decorative-flower-dark.svg" alt="" />
              <img src="/svg/decorative-flower-dark.svg" alt="" />
              <img src="/svg/decorative-flower-dark.svg" alt="" />
              <img src="/svg/decorative-flower-dark.svg" alt="" />
              <img src="/svg/decorative-flower-dark.svg" alt="" />
              <img src="/svg/decorative-flower-dark.svg" alt="" /> */}


              <img src="/svg/hat.svg" alt="" />
            </div>
            <div className="right-hat-img">
              <img src="/svg/hat.svg" alt="" />

            </div>
            FAQs
          </div>
        </div>
        <div className="grid-container">
          <div className="first-item-image-container">
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
          </div>
          <div className="faq-section-inner">
            <Slider {...settings}>

              <div className="faq-card-wrapper">
                <div className="faq-card">
                  <div className="title">Lorem ipsum dolor sit amet consectetur. Vulputate purus.?</div>
                  <div className="desc">Lorem ipsum dolor sit amet consectetur. Feugiat praesent tristique tellus diam nisi tortor ipsum sodales. Semper integer nisl facilisis velit mauris. Sollicitudin ut ut dolor id eget. Habitant</div>
                </div>
                <div className="faq-card">
                  <div className="title">Lorem ipsum dolor sit amet consectetur. Vulputate purus.?</div>
                  <div className="desc">Lorem ipsum dolor sit amet consectetur. Feugiat praesent tristique tellus diam nisi tortor ipsum sodales. Semper integer nisl facilisis velit mauris. Sollicitudin ut ut dolor id eget. Habitant</div>
                </div>
                <div className="faq-card">
                  <div className="title">Lorem ipsum dolor sit amet consectetur. Vulputate purus.?</div>
                  <div className="desc">Lorem ipsum dolor sit amet consectetur. Feugiat praesent tristique tellus diam nisi tortor ipsum sodales. Semper integer nisl facilisis velit mauris. Sollicitudin ut ut dolor id eget. Habitant</div>
                </div>
              </div>
              <div className="faq-card-wrapper">
                <div className="faq-card">
                  <div className="title">Lorem ipsum dolor sit amet consectetur. Vulputate purus.?</div>
                  <div className="desc">Lorem ipsum dolor sit amet consectetur. Feugiat praesent tristique tellus diam nisi tortor ipsum sodales. Semper integer nisl facilisis velit mauris. Sollicitudin ut ut dolor id eget. Habitant</div>
                </div>
                <div className="faq-card">
                  <div className="title">Lorem ipsum dolor sit amet consectetur. Vulputate purus.?</div>
                  <div className="desc">Lorem ipsum dolor sit amet consectetur. Feugiat praesent tristique tellus diam nisi tortor ipsum sodales. Semper integer nisl facilisis velit mauris. Sollicitudin ut ut dolor id eget. Habitant</div>
                </div>
                <div className="faq-card">
                  <div className="title">Lorem ipsum dolor sit amet consectetur. Vulputate purus.?</div>
                  <div className="desc">Lorem ipsum dolor sit amet consectetur. Feugiat praesent tristique tellus diam nisi tortor ipsum sodales. Semper integer nisl facilisis velit mauris. Sollicitudin ut ut dolor id eget. Habitant</div>
                </div>
              </div>
              <div className="faq-card-wrapper">
                <div className="faq-card">
                  <div className="title">Lorem ipsum dolor sit amet consectetur. Vulputate purus.?</div>
                  <div className="desc">Lorem ipsum dolor sit amet consectetur. Feugiat praesent tristique tellus diam nisi tortor ipsum sodales. Semper integer nisl facilisis velit mauris. Sollicitudin ut ut dolor id eget. Habitant</div>
                </div>
                <div className="faq-card">
                  <div className="title">Lorem ipsum dolor sit amet consectetur. Vulputate purus.?</div>
                  <div className="desc">Lorem ipsum dolor sit amet consectetur. Feugiat praesent tristique tellus diam nisi tortor ipsum sodales. Semper integer nisl facilisis velit mauris. Sollicitudin ut ut dolor id eget. Habitant</div>
                </div>
                <div className="faq-card">
                  <div className="title">Lorem ipsum dolor sit amet consectetur. Vulputate purus.?</div>
                  <div className="desc">Lorem ipsum dolor sit amet consectetur. Feugiat praesent tristique tellus diam nisi tortor ipsum sodales. Semper integer nisl facilisis velit mauris. Sollicitudin ut ut dolor id eget. Habitant</div>
                </div>
              </div>
              <div className="faq-card-wrapper">
                <div className="faq-card">
                  <div className="title">Lorem ipsum dolor sit amet consectetur. Vulputate purus.?</div>
                  <div className="desc">Lorem ipsum dolor sit amet consectetur. Feugiat praesent tristique tellus diam nisi tortor ipsum sodales. Semper integer nisl facilisis velit mauris. Sollicitudin ut ut dolor id eget. Habitant</div>
                </div>
                <div className="faq-card">
                  <div className="title">Lorem ipsum dolor sit amet consectetur. Vulputate purus.?</div>
                  <div className="desc">Lorem ipsum dolor sit amet consectetur. Feugiat praesent tristique tellus diam nisi tortor ipsum sodales. Semper integer nisl facilisis velit mauris. Sollicitudin ut ut dolor id eget. Habitant</div>
                </div>
                <div className="faq-card">
                  <div className="title">Lorem ipsum dolor sit amet consectetur. Vulputate purus.?</div>
                  <div className="desc">Lorem ipsum dolor sit amet consectetur. Feugiat praesent tristique tellus diam nisi tortor ipsum sodales. Semper integer nisl facilisis velit mauris. Sollicitudin ut ut dolor id eget. Habitant</div>
                </div>
              </div>
            </Slider>

          </div>
          <div className="last-item-image-container">
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-light.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
            <img src="/svg/decorative-flower-dark.svg" alt="" />
            <img src="/svg/decorative-flower-lite.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqSection