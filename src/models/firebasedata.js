import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  initFirebase,
}  from '../services/firebase';

export default {
  namespace: 'Firebasedata',
  state: {
    sixMinEngData: {},
  },
  subscriptions: {
    init({ dispatch }) {
      initFirebase();
      firebase.database().ref('/sixMinutesEnglish')
        .on('value', (snapshot) => {
          const sixMinEngData = snapshot.val();
          if (sixMinEngData) {
            dispatch({ type: 'fetchedData', payload: sixMinEngData });
          }
        });
    },
  },
  reducers: {
    fetchedData(state, { payload: sixMinEngData }) {
      return { ...state, sixMinEngData };
    },
  },
}
