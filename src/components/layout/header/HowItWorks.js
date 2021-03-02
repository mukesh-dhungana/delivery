import React,{useState,useEffect,useRef} from 'react'
import Popup from '../../popup/Popup'

function HowItWorks() {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    const ref = useRef(null);
    return (
        <div ref={ref} className="header-home__link">
            <button 
                onClick={()=>setOpen(true)}
                className="btn no-bg">
                <span>How it works ?</span>
            </button>
            <Popup parentRef={ref} open={open} onClose={onClose}>
                <How />
            </Popup>
        </div>
    )
}

const how = [
    {
        title:'Place your order',
        iconClass:'icon-order-confirmation',
        details:"Enter your address, find what you're looking for, and easily order from the best restaurants in the neighborhood."
    },
    {
        title:'We handle the rest',
        iconClass:'icon-merchant',
        details:"We work with the merchant to make sure everything is ready for delivery or pickup, Then we'll send you a confirmation."
    },
    {
        title:'The merchant arrives...',
        iconClass:'icon-merchant-arrives',
        details:"...or you pick it up. Either way, you'll get 20 Delivery Points for every $1 spent, which you can cash in for awesome rewards."
    },

]

const howLaundry = [
    {
        title:'Pick a cleaner',
        iconClass:'icon-merchant',
        details:"Customize your service with wash & fold, dry cleaning, and tailoring options, and pick the best cleaner in your area based on convenience, reviews, and ratings."
    },
    {
        title:'Schedule pickup and delivery',
        iconClass:'icon-clock',
        details:"Easily arrange pickup and delivery times around your schedule, so that you can focus on the fun stuff and leave the laundry to the pros."
    },
    {
        title:"Know what you're paying for",
        iconClass:'icon-dollar-sign',
        details:"No need to count socks. Just send us your clothes and we'll update your bill based on what we receive."
    },

]

const How = () =>{
    const [data,setData] = useState(how);
    const [laundry,setLaundry] = useState(false);
    const onHowChange = ()=>{
        setLaundry(!laundry);
    }
    useEffect(()=>{
        if(laundry){
            setData(howLaundry)
        }else{
            setData(how)
        }
    },[laundry])
    return(
        <div className="how">
            <div className="how-container">
                <ul className="how-list">
                    {
                        data && data.map(HowItem)
                    }
                    
                </ul>
                <div 
                    onClick={()=>onHowChange()}
                    className="how-link">
                        <a>
                            {
                                laundry ? 'How food, alocohol and groceries work'
                                : 'How laundry Work'
                            }
                            <span className="icon-left-arrow"></span>
                        </a>
                </div>
            </div>
        </div>
    )
}

const HowItem = (data,index)=>{
    return(
        <li key={index + Math.random()} className="how-list__item how-item">
            <div className="how-item__container">
                <div className="how-item__title">
                    <h3>{data.title}</h3>
                </div>
                <div className="how-item__icon">
                    <div className="how-item__badge">
                        <span className={data.iconClass}></span>
                    </div>
                </div>  
                <div className="how-item__details">
                    <p>{data.details}</p>
                </div>
            </div>
        </li>
    )
}

export default HowItWorks
