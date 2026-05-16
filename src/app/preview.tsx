import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRouter, useLocalSearchParams } from "expo-router";

import { THEME } from "../styles/contants";
import { Button } from "../components/Buttons";
import { DevCard } from "../components/DevCard";

export default function PreviewScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { nome, cargo, empresa, anos, tecnologia, cor } = params;

  // Lógica condicional obrigatória de Níveis por Experiência
  const calcularNivel = () => {
    const exp = Number(anos) || 0;
    if (exp <= 2) return { nivel: "Júnior", corBadge: "#9CA3AF" };
    if (exp <= 5) return { nivel: "Pleno", corBadge: "#3B82F6" };
    return { nivel: "Sênior", corBadge: "#F59E0B" };
  };

  const { nivel, corBadge } = calcularNivel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Seu Cartão</Text>
      </View>

      <DevCard 
        nome={nome}
        cargo={cargo}
        empresa={empresa}
        anos={anos}
        tecnologia={tecnologia}
        corCard={cor}
        nivel={nivel}
        corBadge={corBadge}
      />

      <View style={[styles.footerComponent, { marginTop: 24 }]}>
        <Button label="Editar dados" variant="outline" onPress={() => router.back()} />
        <Button label="Finalizar" variant="primary" onPress={() => router.replace("/sucesso")} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1, 
     flexDirection: "column", 
     justifyContent: "center", 
     paddingHorizontal: 24, gap: 12, 
     backgroundColor: "#FFFFFF" 
    },
  headerContainer: {
     flexDirection: "column", 
     justifyContent: "center",
     alignItems: "flex-start", 
     gap: 16 
    },
    title: { 
      color: THEME.colors.heading, 
      fontWeight: "bold", 
      fontSize: THEME.text.heading.h3 },
    footerComponent: {
       flexDirection: "column", 
       gap: 12 
      }
});