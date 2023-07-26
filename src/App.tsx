import { ReactElement } from 'react';
import { StatusBar } from 'react-native';
import Home from './screens/Home';


export default function App(): ReactElement {
  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        translucent

      />
      <Home />
    </>
  )
}
