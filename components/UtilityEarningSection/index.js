import React, {useState, useEffect} from 'react'


const UtilityEarningSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 6;

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalCards - 1 ? 0 : prevIndex + 1));
  };

  const goToPreviousCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalCards - 1 : prevIndex - 1));
  };

  const images = [
    "/image/utilities/laptop2.svg",
    "/image/utilities/car.svg",
    "/image/utilities/laptop.svg",
  ]

  const interval = 4000;

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(sliderInterval);
  }, [interval]);



  return (
    <div className='utility-earning-section'>


        <div className='heading'>
          <div className='seperator-left'></div>
          <div className='main-text'>
              <h1>UTILITY & EARNING</h1>
              <p>Every NFT holder gains instant access to The Seven22 Private Wealth Club.
                <br/>Membership includes:
              </p>
          </div>
          <div className="seperator-right"></div>
        </div>


        <div className='card-slider-main'>

          <div className='left-points'>

            <div className="arrow left-arrow" onClick={goToPreviousCard}>          
              <img src="/image/arrow-right.svg" alt="" />
            </div>
            <div className="arrow right-arrow" onClick={goToNextCard}>
              <img src="/image/arrow-right.svg" alt="" />
            </div>

            <div className={`card ${currentIndex === 0 ? 'active' : ''}`}>
                <div className='elipse-container'>
                  <div></div>
                </div>

                <p>1. The One Percent Access Card exclusive member rates on travel & VIP pricing at restaurants and retailers globally..</p>
            </div>

            <div className={`card ${currentIndex === 1 ? 'active' : ''}`}>
                <div className='elipse-container'>
                  <div></div>
                </div>

                <p>2. The One Percent Access Card exclusive member rates on travel & VIP pricing at restaurants and retailers globally.</p>
            </div>

            <div className={`card ${currentIndex === 2 ? 'active' : ''}`}>
                <div className='elipse-container'>
                  <div></div>
                </div>

                <p>3. The One Percent Access Card exclusive member rates on travel & VIP pricing at restaurants and retailers globally.</p>
            </div>
          </div>


          <div className='centered-img'>
            <img src={images[currentImageIndex]} interval={interval} alt="Earning" />
          </div>
          <div className='left-points right-points'>
            <div className={`card ${currentIndex === 3 ? 'active' : ''}`}>
                <div className='elipse-container'>
                  <div></div>
                </div>

                <p>4. The One Percent Access Card exclusive member rates on travel & VIP pricing at restaurants and retailers globally.</p>
            </div>

            <div className={`card ${currentIndex === 4 ? 'active' : ''}`}>
                <div className='elipse-container'>
                  <div></div>
                </div>

                <p>5. The One Percent Access Card exclusive member rates on travel & VIP pricing at restaurants and retailers globally.</p>
            </div>

            <div className={`card ${currentIndex === 5 ? 'active' : ''}`}>
                <div className='elipse-container'>
                  <div></div>
                </div>

                <p>6. The One Percent Access Card exclusive member rates on travel & VIP pricing at restaurants and retailers globally.</p>
            </div>
          </div>

          <div className='nav-slider' >
              <div className={`slider ${currentIndex === 0 ? 'active-slider' : ''}`}></div>
              <div className={`slider ${currentIndex === 1 ? 'active-slider' : ''}`}></div>
              <div className={`slider ${currentIndex === 2 ? 'active-slider' : ''}`}></div>
              <div className={`slider ${currentIndex === 3 ? 'active-slider' : ''}`}></div>
              <div className={`slider ${currentIndex === 4 ? 'active-slider' : ''}`}></div>
              <div className={`slider ${currentIndex === 5 ? 'active-slider' : ''}`}></div>
            </div>

        </div>
    </div>
  )
}

export default UtilityEarningSection