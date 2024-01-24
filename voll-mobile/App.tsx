

import { StatusBar, NativeBaseProvider  } from "native-base"

import { themes } from './src/styles/themes';
import Register from "./src/Register";

export default function App() {
  return (    
    <NativeBaseProvider theme={themes}>
      <StatusBar  backgroundColor={themes.colors.red[500]} />
      <Register />      
    </NativeBaseProvider>
     
  );
}


