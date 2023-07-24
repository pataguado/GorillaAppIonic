import { lazy, Suspense, useEffect, useState } from 'react';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
import { appPages } from './data/appPages';
import Menu from './components/Menu';
import './tailwind.css';
import './theme/variables.css';
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
import Instructions from './pages/Instruction';

setupIonicReact();

const App = () => {
  // Show Instructions usestate and listeners
  const [showInstructions, setShowInstructions] = useState(true);

  useEffect(() => {
    const hasShownInstructions = localStorage.getItem('hasShownInstructions');
    if (hasShownInstructions) {
      setShowInstructions(false);
    } else {
      setShowInstructions(true);
    }
  }, []);

  const handleInstructionsDismiss = () => {
    localStorage.setItem('hasShownInstructions', 'true');
    setShowInstructions(false);
  };

  // Determine if the Menu should be shown based on the current path
  const shouldShowMenu = !window.location.pathname.startsWith('/instructions');

  return (
    <>
      {showInstructions ? (
        <Instructions onDismiss={handleInstructionsDismiss} />
      ) : (
        <IonApp>
          <IonReactRouter>
            {shouldShowMenu ? <Menu appPages={appPages} /> : null}{' '}
            {/* Render the Menu only if shouldShowMenu is true */}
            <IonRouterOutlet id="main">
              <Suspense fallback={<div>Loading...</div>}>
                {appPages.map((appPage, index) => {
                  const Component = lazy(() =>
                    import(`./pages/${appPage.component}`),
                  );
                  return (
                    <Route key={index} path={appPage.url} exact>
                      <Component />
                    </Route>
                  );
                })}
              </Suspense>
            </IonRouterOutlet>
          </IonReactRouter>
        </IonApp>
      )}
    </>
  );
};

export default App;
