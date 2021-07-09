import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { triangle, ellipse, square } from 'ionicons/icons';
import { Route, Redirect } from 'react-router';
import './Tabs.css';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import Tab1 from './Tab1';
import { useEffect, useState } from 'react';

const Tabs: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  function widthChanged() {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', widthChanged);
    return () => {
      window.removeEventListener('resize', widthChanged);
    }
  });

  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tabs/tab1">
          <Tab1 />
        </Route>
        <Route exact path="/tabs/tab2">
          <Tab2 />
        </Route>
        <Route exact path="/tabs/tab3">
          <Tab3 />
        </Route>
        <Route exact path="/tabs">
          <Redirect to="/tabs/tab1" />
        </Route>
        <Route exact path="/">
          <Redirect to="/tabs" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom" style={{ display: width < 992 ? '' : 'none' }}>
        <IonTabButton tab="tab1" href="/tab1">
          <IonIcon icon={triangle} />
          <IonLabel>Tab 1</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tab2">
          <IonIcon icon={ellipse} />
          <IonLabel>Tab 2</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tab3">
          <IonIcon icon={square} />
          <IonLabel>Tab 3</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Tabs;
