import React from "react";
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

const Register = () => {
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
        <IonSegment value="all" color="primary">
          <IonSegmentButton value="all">
            <IonLabel>Mascotas</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="favorites">
            <IonLabel>Doctor</IonLabel>
          </IonSegmentButton>
        </IonSegment>
      </IonToolbar>
      <IonContent fullscreen>
        <RegisterPetOwner />
      </IonContent>
    </IonPage>
  );
};

export default Register;
