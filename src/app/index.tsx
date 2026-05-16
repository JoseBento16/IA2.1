import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { THEME } from "../styles/contants";
import { Button } from "../components/Buttons";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="card" size={100} color="#5439eed2" />
        </View>
        <Text style={styles.logo}>DevCard</Text>
        <Text style={styles.subtitle}>Seu cartão de visita digital de dev mobile</Text>
      </View>

      <Button 
        label="Criar meu cartão" 
        variant="primary" 
        onPress={() => router.push("/cadastro")} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 24,
    backgroundColor: "#FFFFFF",
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 250,
    marginBottom: 40,
  },
  iconContainer: {
    marginBottom: 10,
  },
  logo: {
    color: THEME.colors.primary,
    fontWeight: "bold",
    fontSize: 50,
  },
  subtitle: {
    color: "#666",
    fontSize: 16,
    textAlign: "center",
    marginTop: 8,
  }
});