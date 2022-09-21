import { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore/lite';
import { nanoid } from 'nanoid';

const firebaseConfig = {
  apiKey: 'AIzaSyAuh6WikL-O8OUrQ3cnNnv3D3jRbEk9KXg',
  authDomain: 'bid-calculator-bb6d1.firebaseapp.com',
  projectId: 'bid-calculator-bb6d1',
  storageBucket: 'bid-calculator-bb6d1.appspot.com',
  messagingSenderId: '580618711463',
  appId: '1:580618711463:web:12c459b246641ca0bd4682',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export function useFirebase() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    signInAnonymously(auth).then(() => {
      setLoading(false);
    });
  }, []);
  return { loading };
}

export const getBid = async (id: any) => {
  const docRef = doc(db, 'bids', id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};

export const saveBid = async (id: any, data: any) => {
  if (!id) {
    id = nanoid();
  }
  await setDoc(doc(db, 'bids', id), data);
  return id;
};
