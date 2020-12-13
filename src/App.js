import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, triangle } from "ionicons/icons";
import Register from "./pages/Register";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import "./theme/app.css";

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/register" component={Register} exact={true} />
        <Route path="/" component={Register} exact={true} />
      </IonRouterOutlet>
      {/* meter validación de que menú aparezca solo cuanto está iniciada la sesión */}
      {/* <IonTabs>
        <IonTabBar slot="bottom">
          <IonTabButton tab="register" href="/register">
            <IonIcon icon={triangle} />
            <IonLabel>Menú</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs> */}
    </IonReactRouter>
  </IonApp>
);

export default App;
