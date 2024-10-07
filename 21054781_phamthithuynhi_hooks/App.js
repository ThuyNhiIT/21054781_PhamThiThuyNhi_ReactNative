import { Text, SafeAreaView, StyleSheet } from "react-native";

// You can import supported modules from npm
import { Card } from "react-native-paper";

// or any files within the Snack
import AssetExample from "./components/AssetExample";
import CounterApp from "./useState";
import CounterApp1 from "./useState_V1";
import CounterApp2 from "./useState_V2";
import TestuseEffect from "./useEffect";
import TestuseEffect_V1 from "./useEffect_V1";
import TestuseEffect_V2 from "./useEffect_V2";
import TestuseEffect_Data from "./useEffect_Data";
import TestuseEffect_Tick from "./useEffect_Tick";
import TestReducer from "./useReducer";
import TestUseMemo from "./useMemo";
import TestUseCallBack from "./useCallBack";
export default function App() {
  return (
    //  <CounterApp />
    // <CounterApp1 />
    // <CounterApp2 />
    // <TestuseEffect />
    // <TestuseEffect_V1 />
    // <TestuseEffect_V2 />
    // <TestuseEffect_Data />
    // <TestuseEffect_Tick />
    // <TestReducer />
    // <TestUseMemo />
    <TestUseCallBack />
  );
}
