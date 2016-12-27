import React from 'react';
import classNames from 'classnames/bind';
import styles from './modal.css';

const cx = classNames.bind(styles);

const Modal = (props) => {
  const {noBg, isOpen, closePopupProp, children, authenticated} = props;
  const alt = noBg ? "-noBg" : "";
  
  if (isOpen === false || authenticated) {
    return null
  } else {
      return (
        <section className={cx("popupContainer")}>
            <div id='modal-box' className={cx(`popup${alt}`)}>
                {children}
            </div>
            <div className={cx("backdrop")} onClick={closePopupProp}></div>
        </section> 
      )    
  }
}

export default Modal;