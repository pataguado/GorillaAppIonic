import { IonApp, IonContent, IonButton, IonFooter } from '@ionic/react';
import React, { useState, useRef } from 'react';
import './Instructions.css';

const Instructions = ({ onDismiss }) => {
  const [counter, setCounter] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchMoveX, setTouchMoveX] = useState(null);
  const text = [
    'Welcome to Primate',
    'Promoting ethical primate tourism',
    'Helping you and primates stay safe',
    "Let's get exploring",
  ];
  const contentRef = useRef(null);

  const handleNext = () => {
    if (counter < 3) {
      setCounter(counter + 1);
    } else {
      onDismiss();
    }
  };

  const handleBack = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchMoveX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const touchDistance = touchStartX - touchMoveX;
    const threshold = 100;

    if (touchDistance > threshold) {
      handleNext();
    }
    setTouchStartX(null);
    setTouchMoveX(null);
  };

  return (
    <IonApp className="overflow-hidden background">
      <IonContent
        ref={contentRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="instructions">
          <h1 className="text-white font-bold text-5xl text-center mx-16">
            {text[counter]}
          </h1>
        </div>
      </IonContent>
      <IonFooter
        transparent
        className="flex item-center justify-between p-3 ion-no-border no-bg"
      >
        <IonButton
          onClick={handleBack}
          transparent
          color="secondary"
          fill="clear"
          size="large"
          className={`${counter === 0 ? 'opacity-0' : ''} font-bold m-3`}
        >
          Back
        </IonButton>
        <IonButton
          onClick={handleNext}
          color="secondary"
          size="large"
          className="font-bold m-3"
        >
          {counter < 3 ? 'Next' : 'Explore'}
        </IonButton>
      </IonFooter>
    </IonApp>
  );
};

export default Instructions;
