import React from 'react'

function NftSection() {
  return (
    <div className="nft-section" id="nfts">
      <div className="nft-section-inner">
        <div className="gird-container">
          <div className="first-item">
            <div className="img-wrapper">
              <img src="/image/Team_image/Cardi_B.png" alt="" />
            </div>
            <div className="img-wrapper">
              <img src="/image/Team_image/Bad_Bunny.png" alt="" />
            </div>
            <div className="img-wrapper">
              <img src="/image/Team_image/team-avatar.png" alt="" />
            </div>
            <div className="img-wrapper">
              <img src="/image/Team_image/team-avatar.png" alt="" />
            </div>
            <div className="img-wrapper">
              <img src="/image/Team_image/team-avatar.png" alt="" />
            </div>
            <div className="img-wrapper">
              <img src="/image/Team_image/team-avatar.png" alt="" />
            </div>

          </div>
          <div className="second-item">
            <div className="heading-wrapper">
              <div className="title">The <span>NFTS</span></div>
              <div className="vertical-bar"></div>
              <div className="horizontal-bar"></div>
            </div>

            <div className="para-wrapper">
              <div className="vertical-line"></div>
              <div className="content">
                The Somos Collection

              </div>
            </div>
          </div>
          <div className="last-item"></div>
        </div>
      </div>
    </div>
  )
}

export default NftSection