import { IonButton, IonAvatar, IonLabel } from '@ionic/react';
import './index.css';

const Avatar = ({ name, email, profilePicture }) => {
  const handleEditProfile = () => {
    alert('Cannot edit at the moment');
  };

  return (
    <div className="ion-padding flex flex-col items-center justify-center">
      <IonAvatar className=" profile">
        <img src={profilePicture} alt="Profile" />
      </IonAvatar>
      <IonLabel>
        <h2 className="text-center text-3xl font-bold">{name}</h2>
        <h6 className="text-center text-xl">{email}</h6>
      </IonLabel>
      <IonButton
        size="small"
        fill="outline"
        className="p-1  font-bold text-lg edit-profile"
        onClick={handleEditProfile}
      >
        Edit
      </IonButton>
    </div>
  );
};

export default Avatar;
