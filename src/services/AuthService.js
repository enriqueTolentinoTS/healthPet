import Firebase from "../server/firebase";

export const createPetOwner = (petOwner) => {
  const firebase = new Firebase();
  return new Promise((resolve, eject) => {
    firebase.auth
      .createUserWithEmailAndPassword(petOwner.email, petOwner.password)
      .then((auth) => {
        firebase.db
          .collection("Users")
          .doc(auth.user.uid)
          .set({
            uidAuth: auth.user.uid,
            email: petOwner.email,
            nombre: petOwner.nombre,
          })
          .then((doc) => {
            // guardar la sesión
            resolve({
              status: true,
              message: "Te has registrado exitosamente!",
            });
          });
      })
      .catch((err) => {
        console.log(err);
        resolve({ status: false, message: err.message }); // cambiar por algo salió mal
      });
  });
};
