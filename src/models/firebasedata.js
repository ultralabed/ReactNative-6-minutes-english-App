import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  initFirebase,
}  from '../services/firebase';

export default {
  namespace: 'Firebasedata',
  state: {
    sixMinEngData: {},
    loadingData: true,
  },
  subscriptions: {
    init({ dispatch }) {
      initFirebase();
      firebase.database().ref('/sixMinutesEnglish')
        .limitToFirst(20)
        .on('value', (snapshot) => {
          const sixMinEngData = snapshot.val();
          const loading = false; 
          if (sixMinEngData) {
            dispatch({ type: 'fetchedData', payload: sixMinEngData });
            dispatch({type: 'loadingData', payload: loading });
          }
        });
    },
  },
  reducers: {
    fetchedData(state, { payload: sixMinEngData }) {
      return { ...state, sixMinEngData };
    },
    loadingData(state, { payload: loading }) {
      return { ...state, loadingData: loading };
    }
  },
}
