import { useContext, useState } from "react";
import { Button, TextInput, View } from "react-native";
import { AuthContext } from "../config/AuthContext";

export default function Login({navigation}) {

    const { setLoggedIn, setUser } = useContext(AuthContext);

    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [releaseYear, setReleaseYear] = useState("");

    function handleButtonPress(): void {
        //Fetch para comprobar usu y pass
        const isUserOk = true; //TODO: recuperar de la BBDD
        if (isUserOk) {
            setLoggedIn(true);
            setUser(new User);
            navigation.navigate("Home");
        } else {
            setLoggedIn(false);
        }
    }

    return (
        <View>
             <TextInput
                placeholder="usu"
                value={id}
                onChangeText={setId}
            />
            <TextInput
               placeholder="pass"
               value={title}
               onChangeText={setTitle}
           />
            <Button
                title="ENVIAR"
                onPress={() => handleButtonPress()}
            />
        </View>
    );

}


