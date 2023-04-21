import React from "react";
import Button from "../Button";
import InputNumber from "./Components/InputNumber";
import { useCountdown } from "@/hooks/useCount";

function MintSection() {
  const targetDate = new Date("May 5, 2023 00:00:00");
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  return (
    <div className="mint-section" id="mint">
      <div className="mint-section-inner">
        <div className="left-text-container">
          <div className="content">
            <div className="title">
              {console.log("Log Target Date", days, hours, minutes, seconds)}
              Join the culture
            </div>
            <div className="para-wrapper">
              <div className="vertical-line"></div>
              <div className="content">
                Lorem ipsum dolor sit amet consectetur. Feugiat praesent
                tristique tellus diam nisi tortor ipsum sodales. Semper integer
                nisl facilisis velit mauris. Sollicitudin ut ut dolor id eget.
                Habitant imperdiet eget mi.
              </div>
            </div>
          </div>
          <div className="countdown-wrapper">
            <img src="/svg/clock.svg" alt="" />
            <span className="countdown-nums">
              {" "}
              {`${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds`}{" "}
            </span>
          </div>

          <div className="mint-buttons-wrapper">
            <div className="number-incrementor">
              <InputNumber mintQuantity={1} setMintQuantity={2} />
              <div className="input-btn-line-1"></div>
              <div className="input-btn-line-2"></div>
            </div>

            <div className="mint-now-btn">
              <Button variant="bw" value="connect wallet" />
            </div>
          </div>
        </div>
        <div className="right-image-container">
          <div className="image-grid">
            <div className="row-1">
              <div className="top-horizontal-bar"></div>
              <div className="left-vertical-bar"></div>
              <div className="right-vertical-bar"></div>

              <div className="img-wrapper">
                <img src="/image/mint/image.png" alt="" />
              </div>
              <div className="img-wrapper">
                <img src="/image/mint/image.png" alt="" />
              </div>
            </div>
            <div className="row-2">
              <div className="img-wrapper">
                <img src="/image/mint/image.png" alt="" />
              </div>
              <div className="img-wrapper">
                <img src="/image/mint/image.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MintSection;
