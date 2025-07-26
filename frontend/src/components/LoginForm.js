import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

// ...existing code...
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // User signed in
  })
  .catch((error) => {
    // Handle error
  });
// ...existing code...