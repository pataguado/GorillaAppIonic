import { IonContent, IonPage } from '@ionic/react';
import FeedbackForm from '../components/FeedbackForm';
const Feedback = () => {
  return (
    <IonPage className="h-full p-12">
      <IonContent>
      <FeedbackForm />
      </IonContent>
    </IonPage>
  );
};

export default Feedback;
