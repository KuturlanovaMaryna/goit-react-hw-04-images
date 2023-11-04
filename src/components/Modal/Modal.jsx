import React, { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ closeModal, currentImg, alt }) => {
  // componentDidMount() {
  //   window.addEventListener('keydown', this.onKeyDown);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.onKeyDown);
  // }

  // onKeyDown = event => {
  //   if (event.code === 'Escape') {
  //     return this.props.closeModal();
  //   }
  // };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  useEffect(() => {
    const onKeyDown = event => {
      if (event.code === 'Escape') {
        return closeModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [closeModal]);

  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img className={css.img} src={currentImg} alt={alt} />
      </div>
    </div>
  );
};

export default Modal;
