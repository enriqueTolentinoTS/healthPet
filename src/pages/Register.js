import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
} from "@ionic/react";
import RegisterPetOwner from "../components/RegisterPetOwner";
import Blank from "../components/Blank";

const initialState = {
  segment: "pet",
  content: <RegisterPetOwner />,
};

const Register = () => {
  const [state, setState] = useState(initialState);

  const handleSegmentChange = (e) => {
    if (e.detail.value === "pet") {
      setState({
        segment: "pet",
        content: <RegisterPetOwner />,
      });
    } else {
      setState({
        segment: "doctor",
        content: <Blank />,
      });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Registro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonToolbar>
        <IonTitle>¿Quién usará el app?</IonTitle>
      </IonToolbar>
      <IonToolbar>
        <IonSegment
          value={state.segment}
          color="primary"
          onIonChange={handleSegmentChange}
        >
          <IonSegmentButton value="pet">
            <IonLabel>Mascotas</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="doctor">
            <IonLabel>Doctor</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
      <IonContent fullscreen>{state.content}</IonContent>
    </IonPage>
  );
};

export default Register;
