import { useContext } from "react";
import { Text, View } from "react-native";
import { AuthContext } from "../config/AuthContext";
import Login from "./Login";

export default function Home({navigation}) {

    const { isLoggedIn } = useContext(AuthContext);

    return (
       isLoggedIn ? (
         <View>
            <Text>Bienvenido</Text>
         </View>
       ) : (
        <Login navigation={navigation} />
       )
    );

}


