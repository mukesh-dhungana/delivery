import React, { useState } from "react";
import "./vendor.style.scss";
import VendorHeader from "./VendorHeader";
import Switch from "../../components/form/Switch";
import classnames from "classnames";
import { dateOptions, timeOptions } from "../../helpers/selectOptions";
import Reviews from './Reviews';

function index() {
  return (
    <div className="vendor">
      <VendorHeader />
      <VendorBody />
    </div>
  );
}

export const VendorBody = () => {
  return (
    <div className="vendor-body">
      <main className="vendor-main">
        <section className="vendor-section">
          <VendorLeftMenu />
          <VendorMainBody />
          <VendorRightMenu />
        </section>
      </main>
    </div>
  );
};

const VendorLeftMenu = () => {
  return <div className="vendor-left">
    <div className="vendro-left__container">
      <div className="vendor-nav">
        <ul className="vendor-nav__list">
          <li className="vendor-nav__item">
            <a className="vendor-nav__link">
              <span>Merchant Info</span>
            </a>
          </li>
          <li className="vendor-nav__item">
            <a className="vendor-nav__link active-link">
              <span>Popular Items</span>
            </a>
          </li>
          <li className="vendor-nav__item">
            <a className="vendor-nav__link">
              <span>Groceries Items</span>
            </a>
          </li>
          <li className="vendor-nav__item">
            <a className="vendor-nav__link">
              <span>Reviews & Ratings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>;
};

const popularProducts = [
  {name:'Health Omelatte',price:'$7.99',subItems:['Egg Whites','Vegetables']},
  {name:'Fresh Produce: Mamamia Mini Cucumbers',price:'$5.99',subItems:[]},
  {name:'Ali Baba Wrap',price:'$10.99',subItems:['Egg Whites','Vegetables']},
  {name:'Health Omelatte',price:'$7.99',subItems:['Egg Whites','Vegetables']},
  {name:'Health Omelatte',price:'$7.99',subItems:['Grilled chicken','grilled peppers','eggplant','balsamic vinaigrette','sundried tomatoes']},
]

const VendorMainBody = () => {
  const [open,setOpen] = useState(true);
  const toggle = () => setOpen(!open);
  return <div className="vendor-middle">
    <div className="vendor-middle__promos">
      <i className="icon-price-tag"></i>
      <span>10% Off for First Time Users , $10.00 Off All Orders Over $100.00 </span>
    </div>
    <div className="vendor-middle__container">
        <div className="popular-items">
          <div className="popular-items__title" onClick={()=>toggle()}>
              <h3>Popular items <i className="icon-star"></i></h3>
              <div className={`popular-items__caret ${open?'':'open-icon'}`}>
                  <span class="iconify" data-icon="bi:chevron-down" data-inline="false"></span>
              </div>
          </div>
          {
            open? (
              <div className="popular-items__body">
                <ul className="popular-items__list">
                  {
                    popularProducts.map(item=>{
                      return(
                        <li
                         key={item.name}
                         className="popular-items__item">
                            <div className="popular-items__item-title">
                              <a>
                                {item.name}
                              </a>
                              <span>
                                {item.price}
                              </span>
                            </div>
                            <div className="popular-items__item-subitems">
                              {item.subItems && item.subItems.map(ite=><span key={ite + Math.random()}>{ite}</span>)}
                            </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            ):
            null
          }
          <Maps />
        </div>
    </div>
    <Reviews />
  </div>;
};


const Maps = () =>{
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const deliverTime = <span>07:00 am - 12:00 am</span>;
  var d = new Date();
  var dayName = days[d.getDay()];
  const content =(
      days.map(item=>{
        let a = classnames({
          "maps-table__row":true,
          "active-date":item === dayName
        })
        return(
            <div 
              key={item}
              className={a}>
              <span className="maps-table__col">
                {item}
              </span>
              <span className="maps-table__col">
                {deliverTime}
              </span>
            </div>
        )
      })
  );
  return(
    <div className="maps">
        <div className="vendor__title">
            <h3>Maps and hour</h3>
            <p>Phone:  <a href="#">212-233-5797</a></p>
        </div>
        <div className="maps-table">
          <div className="maps-table__container">
              <div className="maps-table__content">
                <div className={"maps-table__row header"}>
                  <span className="maps-table__col"></span>
                  <span className="maps-table__col">Delivery Time</span>
                </div>
                {content}
              </div>
          </div>
          <div className="maps-table__container">
            <div className="maps-table__content">
              <div className={"maps-table__row header"}>
                <span className="maps-table__col"></span>
                <span className="maps-table__col">Pickup Time</span>
              </div>
                {content}
              </div>
          </div>
        </div>
    </div>
  )
}

const VendorRightMenu = () => {
  const [deliver, setDeliver] = useState(false);
  const switchClass = (name) =>
    classnames({
      "filter-switch__label": true,
      active: (name === "delivery" && !deliver) || (name === "pick" && deliver),
    });
  return (
    <div className="vendor-right">
      <div className="vendor-right__container">
        <div className="vendor-right__start">
          <button className="btn btn-block btn-white-primary">
            Start group order
          </button>
        </div>
        <div className="vendor-settings">
          <div className="vendor-settings__container">
            <div className="vendor-settings__switch">
              <div className="filter-switch">
                <div
                  onClick={() => setDeliver(false)}
                  className={switchClass("delivery")}
                >
                  <span>Delivery</span>
                </div>
                <Switch
                  value={deliver}
                  checked={deliver}
                  onChange={(e) => setDeliver(e.target.checked)}
                />
                <div
                  onClick={() => setDeliver(true)}
                  className={switchClass("pick")}
                >
                  <span>Pickup</span>
                </div>
              </div>
            </div>
            <div className="vendor-settings__selects">
              <div className="vendor-settings__select">
                <FilterSelect options={dateOptions} />
              </div>
              <div className="vendor-settings__select">
                <FilterSelect options={timeOptions} />
              </div>
            </div>
            <div className="vendor-settings__to">
              <p>To: 1 Mott St. 1033</p>
            </div>
            <div className="vendor-settings__bag">
              {/* if cart list empty add empty class to h4 */}
              <h4 className="vendor-settings__bag-title">Your Bag</h4>
              <div className="vendor-settings__bag-items">
                <ul className="cart-view__list">
                  <li className="cart-view__item">
                    <div className="cart-view__product">
                      <div className="cart-view__product-content cart-product">
                        <div className="cart-product__items">
                          <span>2</span>
                        </div>
                        <div className="cart-product__content">
                          <span className="cart-product__name">Health Omlette</span>
                          <span className="cart-product__subname">Egg Whites only</span>
                          <span className="cart-product__subname">Toast</span>
                        </div>
                      </div>
                      <div className="cart-view__product-price">
                        <span className="price">$17.98</span>
                        <span className="icon-delete"></span>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* <span className="no-data">No Items in Your Bag</span> */}
              </div>
              <div className="vendor-settings__bag-total">
                <div className="">
                  <span>Delivery Fee</span>
                  <span className="delivery-free">Free</span>
                </div>
                <div className="">
                  <span>Tax</span>
                  <span>$1.60</span>
                </div>
              </div>
            </div>
            
            <div className="vendor-settings__checkout">
              {/* remove Active class when cart is empty*/}
              <button className="btn btn-block active"> 
                <span>Go to Checkout </span>
                <span className="total">$0.00</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const FilterSelect = ({ options }) => {
  return (
    <div className="filter-select__item">
      <select name="" id="">
        {options &&
          options.map((item) => {
            return (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default index;
