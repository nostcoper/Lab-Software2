import * as admin from 'firebase-admin';

const serviceAccount = require('./lab-software-2-firebase-adminsdk-6mgjg-0d12f8218b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://lab-software-2.firebaseio.com',
});

export const firebaseAdmin = admin;