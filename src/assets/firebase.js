import { initializeApp} from 'firebase-admin/app';
import { auth} from 'firebase-admin';

const app = initializeApp({
    credential: applicationDefault(),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});


export function getU(uid){
    auth.getUser(uid)
    .then((userRecord) => {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    })
    .catch((error) => {
      console.log('Error fetching user data:', error);
    });
};