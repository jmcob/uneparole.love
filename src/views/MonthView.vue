<template>
  <div class="wrapper">
    <div class="cadre">
      <h1 @click="writeWord">Write Data</h1>
    </div>
  </div>
</template>

<script>
import { addDoc, collection } from "firebase/firestore";

// export default {
//   methods: {
//     writeWord() {
//       // Initialize Cloud Firestore and get a reference to the service
//       const db = getFirestore(app);
//       paroles.forEach((parole) => {
//         try {
//           const docRef = addDoc(collection(db, "word"), {
//             parole: parole.parole,
//             ref: parole.ref,
//           });
//           console.log("Document written with ID: ", docRef.ref);
//         } catch (e) {
//           console.error("Error adding document: ", e);
//         }
//       });
//     },
//   },
// };
</script>
