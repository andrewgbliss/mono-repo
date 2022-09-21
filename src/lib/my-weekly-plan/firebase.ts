import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAuh6WikL-O8OUrQ3cnNnv3D3jRbEk9KXg',
  authDomain: 'bid-calculator-bb6d1.firebaseapp.com',
  projectId: 'bid-calculator-bb6d1',
  storageBucket: 'bid-calculator-bb6d1.appspot.com',
  messagingSenderId: '580618711463',
  appId: '1:580618711463:web:12c459b246641ca0bd4682',
};

const app = firebase.initializeApp(firebaseConfig);

export { app, firebase };
