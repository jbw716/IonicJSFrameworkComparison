import {
  IonApp,
} from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import SplitPane from './components/SplitPane';

const App: React.FC = () => (
  <>
    <div
      style={{
        height: '25px',
        width: '200px',
        backgroundColor: 'red',
        color: 'white',
        position: 'absolute',
        top: '20px',
        right: '-70px',
        transform: 'rotate(45deg)',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '12pt',
        fontWeight: 'bold'
      }}
    >
      React
    </div>
    <IonApp>
      <SplitPane></SplitPane>
    </IonApp>
  </>
);

export default App;
