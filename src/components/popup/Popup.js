import React,{useRef} from 'react'
import useOutsideClick from '../../helpers/outsideClickHooks';
import classnames from 'classnames';
import isEmpty from '../../isEmpty';

function Popup({open,onClose,parentRef,children,className}) {
    const popref = useRef(null);
    useOutsideClick(popref,onClose,parentRef)
    if(!open){
        return null;
    }
    const popupClass =  classnames({
        "popup":true,
        [className]:!isEmpty(className)
    });
    return (
        <div 
            ref={popref}
            className={popupClass}
        >
            {children}
        </div>
    )
}

export default Popup
