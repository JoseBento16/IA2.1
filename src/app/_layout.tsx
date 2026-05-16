import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { THEME } from "../styles/contants";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      
      <Stack
        screenOptions={{
          headerShown: false, 
          animation: "slide_from_right", 
          contentStyle: { backgroundColor: THEME.colors.background } 
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="cadastro" />
        <Stack.Screen name="preview" />
        <Stack.Screen name="sucesso" />
      </Stack>
    </SafeAreaProvider>
  );
}