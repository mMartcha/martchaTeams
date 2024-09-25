import { ThemeProvider} from "styled-components";
import theme from './src/theme'; 
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading'; 
import { StatusBar } from 'react-native';
import { AppRoutes } from './src/routes/app.routes'; 
import { Routes } from './src/routes'; 
import { Groups } from './src/screens/Groups';
import { NewGroup } from "./src/screens/NewGroup";
import { Players } from "./src/screens/Players";
import { TeamContextProvider } from "./src/context/TeamContext";



export default function RootLayout() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})


  return (
    <TeamContextProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
        backgroundColor='#202024'
        barStyle={'light-content'}
        translucent
        />
        {fontsLoaded ? <Routes/> : <Loading/> }

      </ThemeProvider>
    </TeamContextProvider>
  );
}
