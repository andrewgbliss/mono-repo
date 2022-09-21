import { useState, useEffect } from 'react';
import { firebase } from './firebase';

interface FirebaseUser {
  uid: string;
  displayName: string | null;
  email: string | null;
}

export function useFirebase() {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  useEffect(() => {
    if (!user) {
      // firebase.auth().onAuthStateChanged((User) => {
      //   if (User) {
      //     const data = {
      //       uid: User.uid,
      //       displayName: User.displayName,
      //       email: User.email,
      //     };
      //     setUser(data);
      //   } else {
      //     setUser(null);
      //   }
      //   setLoading(false);
      // });
    } else {
      setLoading(false);
    }
  }, [user, setUser]);
  return { user, loading };
}

export function login() {
  // const provider = new firebase.auth.GoogleAuthProvider();
  // provider.setCustomParameters({
  //   prompt: 'select_account',
  // });
  // firebase.auth().signInWithRedirect(provider);
}

export async function logout() {
  // await firebase.auth().signOut();
}
