import './SplitPane.css';
import { IonSplitPane, IonMenu, IonHeader, IonToolbar, IonTitle, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router';
import { IonReactRouter } from '@ionic/react-router';
import Tabs from '../pages/Tabs';

const SplitPane: React.FC = () => {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="menu-content">
        <IonMenu content-id="menu-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Pantry</IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonMenu>
        <IonRouterOutlet id="menu-content">
          <Route path="/">
            <Tabs></Tabs>
          </Route>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default SplitPane;
