import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonMenuButton, IonButtons, IonIcon } from '@ionic/react';
import { menu } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import PizzaCard from '../components/PizzaCard';
import './Tab1.css';

const Tab1: React.FC = () => {
  const row = [];
  const column = [];
  for (let i = 0; i < 20; i++) {
    row.push(<PizzaCard key={'column:' + i}></PizzaCard>);
    column.push(
      <IonItem key={'row:' + i}>
        <div style={{ width: '100%', overflow: 'auto', whiteSpace: 'nowrap' }}>
          {row}
        </div>
      </IonItem>
    )
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Tab 1</IonTitle>
          <IonButtons slot="start">
            <IonMenuButton>
              <IonIcon icon={menu} size="large"></IonIcon>
            </IonMenuButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer name="Tab 1 page" /> */}
        <IonList>
          {column}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
