import React, { useState } from 'react';
import { IonContent, IonPage, IonTextarea, IonButton } from '@ionic/react';
import './index.css'
const FeedbackForm = () => {
  const [feedbackText, setFeedbackText] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedbackText(event.target.value || '');
  };

  const handleSendFeedback = () => {
    // Implement the logic for sending the feedback here.
    console.log('Feedback:', feedbackText);
    setFeedbackText(''); // Clear the feedback input after sending.
  };

  return (
    <IonPage>
      <IonContent>
        <div className='text-3xl font-bold text-left mt-12'>Feedback</div>
        <div className='text-md text-left my-6'>
          If you have any feedback on the app, the projects you have visited, or any other primate-related things,
          please tell us in the box below. Thank you.
        </div>
        <div className='input-box border-3'>
        <IonTextarea
          rows={12} 
          value={feedbackText}
          onIonChange={handleFeedbackChange}
        />
        </div>
        <IonButton expand='full'  onClick={handleSendFeedback}>
          Send Feedback
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default FeedbackForm;