import React from 'react'
import StarRatings from "react-star-ratings";

const reviewes = [
    {
        rating:4.23,name:'Diana F',on:'May 02, 2020',reviewNum:26,orderNumber:199,content:'I okayed a substitute for a couple of items and they went crazy substituting poor quality toilet paper for Charmin and paper towels for Bounty. They did this because they claimed to have the brands I wanted but didn’t. Bait and switch? They have a minimum order of $50, which would have been acceptable if they actually had the items I wanted. Don’t bother with these people!b'
    },
    {
        rating:3.23,name:'Diana F',on:'May 04, 2020',reviewNum:12,orderNumber:100,content:'I okayed a substitute for a couple of items and they went crazy substituting poor quality toilet paper for Charmin and paper towels for Bounty. They did this because they claimed to have the brands I wanted but didn’t. Bait and switch? They have a minimum order of $50, which would have been acceptable if they actually had the items I wanted. Don’t bother with these people!b'
    },
    {
        rating:4,name:'Diana F',on:'Apr 02, 2020',reviewNum:31,orderNumber:60,content:'I okayed a substitute for a couple of items and they went crazy substituting poor quality toilet paper for Charmin and paper towels for Bounty. They did this because they claimed to have the brands I wanted but didn’t. Bait and switch? They have a minimum order of $50, which would have been acceptable if they actually had the items I wanted. Don’t bother with these people!b'
    }
]

function Reviews() {
    return (
        <section className="section section-reviews merchants-review">
            <h3 className="merchants-review__title">
                Reviews
            </h3>
            <div className="merchants-review__stats">
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
                <span>
                    Based on <strong>168 ratings </strong> and <strong> 39 reviews</strong>
                </span>
            </div>
            <div className="merchants-review__container">
                <ul className="merchants-review__list">
                    {
                        reviewes.map((item,index)=><Review item={item} index={index} />)
                    }
                    <Review />
                </ul>
            </div>
        </section >
    )
}

const Review = ({item,index}) =>{
    if(!item){
        return null
    }
    return(
        <li key={item.name} className="merchants-review__item">
            <div className="merchants-review__review review">
                <div className="review__ratings">
                    <StarRatings
                        rating={item.rating}
                        starRatedColor="#f6ba10"
                        numberOfStars={5}
                        name="rating"
                        starDimension="18px"
                        starSpacing="1px"
                        starEmptyColor="#aaa"
                        starHoverColor="#f6ba10"
                    />
                </div>
                <div className="review__reviewer">
                    <span>By: {item.name}</span>
                    <span>on  {item.on} | </span>
                    <span> {item.reviewNum} reviews written | {item.orderNumber} orders placed</span>
                </div>
                <div className="review__content">
                    <p>
                    {item.content}
                    </p>
                </div>
            </div>
        </li>
    )
}

export default Reviews
