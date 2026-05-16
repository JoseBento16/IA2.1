import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { THEME } from "../styles/contants";
import { Button } from "../components/Buttons";

export default function SucessoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.contentContainer}>
        <View style={styles.iconBackgroundOuter}>
          <View style={styles.iconBackgroundInner}>
            <Ionicons name="checkmark-sharp" size={60} color="#FFFFFF" />
          </View>
        </View>

        <Text style={styles.title}>Cartão criado{"\n"}com sucesso!</Text>
        
        <Text style={styles.subtitle}>
          Seu cartão de visita digital está pronto.{"\n"}Compartilhe com a galera!
        </Text>
      </View>

      <View style={styles.footerComponent}>
        <Button 
          label="Criar outro cartão" 
          variant="primary" 
          onPress={() => router.replace("/")} 
        />
        
        <TouchableOpacity 
          onPress={() => router.replace("/")} 
          activeOpacity={0.6}
          style={styles.linkButton}
        >
          <Text style={styles.linkText}>Voltar ao início</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 28,
    justifyContent: "space-between",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  iconBackgroundOuter: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#F0FDF4", 
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  iconBackgroundInner: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#10B981", 
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#10B981",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: THEME.colors.heading,
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 34,
  },
  subtitle: {
    fontSize: 15,
    color: THEME.colors.subtitle, 
    textAlign: "center",
    lineHeight: 22,
  },
  footerComponent: {
    width: "100%",
    gap: 20,
    alignItems: "center",
  },
  linkButton: {
    padding: 10,
  },
  linkText: {
    color: THEME.colors.primary,
    fontSize: 16,
    fontWeight: "600",
  },
});