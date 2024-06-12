import React, { useEffect } from 'react';
import styles from './ImageScroller.module.css';
import SenacLogo from './ParceirosImg/SenacLogo.png'
import NutriAcessLogo from './ParceirosImg/NutriAcessLogo.png'

const ImageScroller = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(`.${styles.scroller}`);

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(`.${styles.scrollerInner}`);
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div className={`${styles.scroller}`} data-speed="fast">
      <div className={`${styles.scroller}`} data-direction="right" data-speed="slow">
        <div className={styles.scrollerInner}>
          <img src={SenacLogo} alt="Logo do Senac" title="Senac Logo" />
          <img src={NutriAcessLogo} alt="Logo da NutriAcess" />
        </div>
      </div>
    </div>
  );
};

export default ImageScroller;
