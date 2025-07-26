// authHeader.js
import { auth } from '../firebase'; // adjust path

export async function getAuthHeader() {
  const user = auth.currentUser;

  if (user) {
    const token = await user.getIdToken();
    return {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  } else {
    throw new Error('No user is signed in');
  }
}
