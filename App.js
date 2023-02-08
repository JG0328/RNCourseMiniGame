import {LinearGradient} from 'expo-linear-gradient';
import {StyleSheet, ImageBackground, StatusBar} from 'react-native';

import StartGameScreen from './screens/StartGameScreen';
import {useState} from "react";
import GameScreen from "./screens/GameScreen";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default function App() {
    const [userNumber, setUserNumber] = useState();

    function pickNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
    }

    let screen = <StartGameScreen onPickNumber={pickNumberHandler}/>;

    if (userNumber) {
        screen = <GameScreen/>;
    }

    return (
        <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootScreen}>
            <ImageBackground
                source={require('./assets/images/background.png')}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroundImage}
            >
                <SafeAreaProvider>
                    <SafeAreaView style={styles.rootScreen}>
                        {screen}
                    </SafeAreaView>
                </SafeAreaProvider>
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1
    },
    backgroundImage: {
        opacity: 0.15
    }
});
