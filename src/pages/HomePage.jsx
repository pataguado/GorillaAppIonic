import { IonContent, IonPage, IonHeader, IonToolbar } from '@ionic/react';
import Map from '../components/Map'; 

const HomePage = () => {
  return (
    <IonPage className="h-full">
      <IonContent>
        <Map />
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
