import React, { useState, useEffect, useRef } from "react";
import Popup from "../../popup/Popup";
import "./cart.styles.scss";

function Cart({ className }) {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const ref = useRef(null);
  return (
    <div ref={ref} className={className + " cart"}>
      <button onClick={() => setOpen(true)} className="btn no-bg">
        <span className="icon-shopping-bag"></span>
        <span className="cart-badge">3</span>
      </button>
      <Popup
        parentRef={ref}
        className="cart-popup"
        open={open}
        onClose={onClose}
      >
        <CartBlock />
      </Popup>
    </div>
  );
}

const data = [
  {
    cat: "Food",
    items: [
      { name: "Ali Baba organic market", num: "2", price: "17.98" },
      { name: "Waiwai", num: "4", price: "13.45" },
      { name: "Lays", num: "1", price: "20" },
    ],
  },
];

const CartBlock = () => {
  const [change,setChange] = useState(false);
  const onChange = (data) =>{
    setChange(data)
  }
  return (
    <div className="cart-block">
      {
        change ? <CartView onChange = {onChange} />
        :
        <ul className="cart-list">
            {
                data.map((item,index)=><CartCat index={index} onChange = {onChange} item={item} />)
            }
        </ul>
      }
    </div>
  );
};

const CartView = ({onChange}) => {
  return (
    <div className="cart-view">
      <div className="cart-view__link">
        <a onClick={()=>onChange(false)}>
          <span className="icon-left-arrow-thick"></span>
          View all bags
        </a>
      </div>
      <div className="cart-view__content">
        <div className="cart-view__title">
          <div className="cart-view__title-icon">
            <span className="icon-food"></span>
          </div>
          <div className="cart-view__title-name">
            <span>Ali Baba organic market</span>
          </div>
        </div>
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
        <div className="cart-total">
            <div className="cart-total__item bold">
                <div className="cart-totla__title">Subtotal</div>
                <div className="cart-totla__price">$17.98</div>
            </div>
            <div className="cart-total__item">
                <div className="cart-totla__title">Delivery Fee</div>
                <div className="cart-totla__price">Free</div>
            </div>
            <div className="cart-total__item">
                <div className="cart-totla__title">Tax</div>
                <div className="cart-totla__price">$1.60</div>
            </div>
            <div className="cart-total__item bold">
                <div className="cart-totla__title">Total</div>
                <div className="cart-totla__price">$19.58</div>
            </div>
        </div>
        <div className="cart-btn">
            <button className="btn btn-primary btn-block">
                Go to checkout
            </button>
        </div>
      </div>
    </div>
  );
};

const CartCat = ({item, index,onChange}) => {
  return (
    <li key={index + item.cat} className="cart-list__item">
      <div className="cart-header">
        <div className="cart-header__icon">
          <span className="icon-food"></span>
        </div>
        <div className="cart-header__name">
          <span>{item.cat}</span>
        </div>
      </div>
      <div className="cart-item__container">{item.items.map(item=><CartCatItem {...item} onChange={onChange} />)}</div>
    </li>
  );
};

const CartCatItem = ({ name, num, price,onChange }) => {
  return (
    <div key={ name} className="cart-items">
      <div className="cart-items__item">
        <div className="cart-items__name">
          <a>{name}</a>
        </div>
        <div className="cart-items__details">
          <span className="cart-items__no">{num} Items</span>-
          <span className="cart-items__price">${price}</span>
        </div>
      </div>
      <div className="cart-items__link" onClick={()=>onChange(true)}>
        <span className="cart-items__link-name" >Review Order</span>
        <span className="cart-items__link-icon icon-right-arrow-thick"></span>
      </div>
    </div>
  );
};

export default Cart;
