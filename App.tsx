import {SafeAreaView, StatusBar} from 'react-native';
import { Cestas } from './src/screens/Cestas';

//loading 
import { Loanding } from "../orgsCestas/src/components/Loanding";

//import fonts
import { 
   useFonts,
   Montserrat_400Regular,
   Montserrat_700Bold 
  } from '@expo-google-fonts/montserrat';

export default function App() {

 const [fontCarregada] = useFonts({
     "MontserratRegular": Montserrat_400Regular,
     "MontserratBold": Montserrat_700Bold,
 })

  return (
    <SafeAreaView>
      <StatusBar/>

      {  fontCarregada ? <Cestas/> : <Loanding />}
     
    </SafeAreaView>
  );
}

