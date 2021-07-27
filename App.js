/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import admob, {MaxAdContentRating} from '@react-native-firebase/admob';
import React, {useEffect} from 'react';
import Scan from './src/component/scan';

const App = () => {
  useEffect(() => {
    admob()
      .setRequestConfiguration({
        maxAdContentRating: MaxAdContentRating.PG,
        tagForChildDirectedTreatment: true,
        tagForUnderAgeOfConsent: true,
      })
      .then(() => console.log('AdMob set up succeed'))
      .catch(err => console.log(`AdMob set up failed: ${err.message}`));
  }, []);

  return <Scan />;
};

export default App;