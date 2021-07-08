import './PizzaCard.css';
import { IonCard, IonIcon, IonLabel, IonText } from '@ionic/react';
import { pizza } from 'ionicons/icons';
import { useState } from 'react';

const PizzaCard: React.FC = () => {
  const [pizzaCount, setPizzaCount] = useState(0);
  return (
    <IonCard onClick={() => setPizzaCount(pizzaCount + 1)} style={{
      backgroundColor: 'white',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2px',
      width: 'auto',
      height: 'auto'
    }}>
      < div >
        <IonCard style={{
          width: '25px',
          height: '25px',
          margin: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white'
        }}>
          <IonIcon style={{ color: 'black', width: '100%', height: '100%' }} icon={pizza}></IonIcon>
        </IonCard >
        <IonLabel style={{ width: '100%', textAlign: 'center' }}>Pizza!</IonLabel>
        <IonText>It's {pizzaCount} slice of pizza!</IonText>
      </div >
    </IonCard >
  );
};

export default PizzaCard;
