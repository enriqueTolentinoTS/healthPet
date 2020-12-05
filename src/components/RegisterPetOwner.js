import React, { useState } from "react";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";

const initialState = {
  nombre: "",
  email: "",
  password: "",
  confirmaPassword: "",
};

const RegisterPetOwner = (props) => {
  const [petOwner, setPetOwner] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetOwner({
      ...petOwner,
      [name]: value,
    });
  };

  return (
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Nombre completo</IonLabel>
            <IonInput
              name="nombre"
              value={petOwner.nombre}
              onIonChange={handleChange}
            ></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput
              name="email"
              value={petOwner.email}
              onIonChange={handleChange}
            ></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Contraseña</IonLabel>
            <IonInput
              name="password"
              type="password"
              value={petOwner.password}
              onIonChange={handleChange}
            ></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating">Confirma contraseña</IonLabel>
            <IonInput
              name="confirmaPassword"
              type="password"
              value={petOwner.confirmaPassword}
              onIonChange={handleChange}
            ></IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow className="mt-4">
        <IonCol>
          <IonButton color="success" expand="block">
            Success
          </IonButton>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

export default RegisterPetOwner;
