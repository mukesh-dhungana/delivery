import React from 'react'
import img from "../../assets/img/alcohol/liq3.jpg";
import StarRatings from "react-star-ratings";

function VendorHeader() {
  const imageStyles = `linear-gradient(to right bottom,hsla(0,0%,46.7%,.8),rgba(20,20,20,.8)),url(${img})`;
    return (
        <div className="vendor-header">
        <div
          style={{ backgroundImage: imageStyles }}
          className="vendor-cover"
        ></div>
        <div className="vendor-details">
          <div className="vendor-container">
            <div className="vendor__img">
              <img src={img} alt="" />
            </div>
            <div className="vendor__content">
              <div className="vendor__content-data vendor__name">
                <h3>Flowers Cafe</h3>
              </div>
              <div className="vendor__content-data vendor__ratings">
                <StarRatings
                  rating={4.35}
                  starRatedColor="#f6ba10"
                  numberOfStars={5}
                  name="rating"
                  starDimension="18px"
                  starSpacing="1px"
                  starEmptyColor="#aaa"
                  starHoverColor="#f6ba10"
                />
                <span>(113)</span>
              </div>
              <div className="vendor__content-data vendor__address">
                <span>
                  39 Essex St, New York, NY, 1002 | Breakfast Sandwiches, Salads,
                  Vegeterian
                </span>
              </div>
              <div className="vendor__content-data vendor__price">
                <span className="delivery">Free delivery |</span>
                <span>$10.00 min</span>
              </div>
              <div className="vendor__content-data vendor__time">
                <span>Estimated time 45min</span>
              </div>
            </div>
            <div className="vendor__button">
              <button className="btn btn-large btn-white">
                View Maps and Hours
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default VendorHeader
