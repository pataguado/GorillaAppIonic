import { IonContent, IonPage } from '@ionic/react';
import Avatar from '../components/Avatar';
import InfoDataList from '../components/InfoData/infoDataList';

const MyAccount = () => {
  const userProfile = {
    name: 'Jamie Forsyth',
    email: 'jamief@email.com',
    profilePicture: 'src/assets/profile/Teresia.png',
  };

  return (
    <IonPage className="h-full p-12">
      <IonContent>
        <Avatar {...userProfile} />
        <InfoDataList />
      </IonContent>
    </IonPage>
  );
};

export default MyAccount;
