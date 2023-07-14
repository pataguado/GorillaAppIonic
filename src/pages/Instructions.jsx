import { IonApp, IonContent, IonButton, IonFooter } from '@ionic/react';
import './Instructions.css';

const Instructions = ({ onDismiss }) => {
  return (
    <IonApp>
      <IonContent>
        <div className="background">
          <div className="instructions">
            <h1 className="text-white font-bold text-center mx-24">
              Welcome to Primate
            </h1>
          </div>
        </div>
        <IonFooter className="flex item-center justify-around p-3">
          <IonButton onClick={onDismiss}>Next</IonButton>
        </IonFooter>
      </IonContent>
    </IonApp>
  );
};

export default Instructions;
