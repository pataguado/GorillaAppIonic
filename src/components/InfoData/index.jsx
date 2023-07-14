import { IonIcon, IonContent, IonLabel } from '@ionic/react';
import { useEffect, useState } from 'react';
import { checkmarkCircle } from 'ionicons/icons';
import './index.css';
import { dynamicData } from '../../data/dynamicData';
import monkey from '../../assets/monkey.svg';
const InfoData = ({ version }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from an API endpoint or any other data source
    fetchData()
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const fetchData = () => {
    return Promise.resolve(dynamicData); // Simulating a resolved Promise with the dynamicData
  };

  return (
    <div className="flex flex-col items-center justify-center p-1">
      <div className="flex flex-col items-center justify-center">
        <div className="circle">
          {version && version == 1 ? (
            <img src={monkey} alt="monkey" />
          ) : (
            <IonIcon icon={checkmarkCircle} className="" size="large" />
          )}

          <div className="font-bold text-lg">
            {data ? data[version].number : null}
          </div>
        </div>
      </div>
      <IonLabel className="text-lg flex items-center justify-center font-bold text-center">
        {data ? data[version].label : null}
      </IonLabel>
    </div>
  );
};

export default InfoData;
