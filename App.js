import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { useFonts, Oswald_400Regular } from "@expo-google-fonts/oswald";

import { theme } from "./src/infrastructure/theme";

import RestaurantsScreen from "./src/features/restaurants/screens/RestaurantsScreen";

export default function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <RestaurantsScreen />
                <ExpoStatusBar style="auto" />
            </ThemeProvider>
        </>
    );
}
