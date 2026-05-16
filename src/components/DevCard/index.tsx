import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

type DevCardProps = {
  nome?: string | string[];
  cargo?: string | string[];
  empresa?: string | string[];
  anos?: string | string[];
  tecnologia?: string | string[];
  corCard?: string | string[];
  nivel?: string;
  corBadge?: string;
};

export function DevCard({ nome, cargo, empresa, anos, tecnologia, corCard, nivel, corBadge }: DevCardProps) {
  const customBg = corCard === "Verde" ? "#05DEC1" : corCard === "Roxo" ? "#A78BFA" : "#19a7e7";

  return (
    <View style={[styles.cardContainer, { backgroundColor: customBg }]}>
      <View style={styles.cardAvatarContainer}>
        <View style={styles.cardAvatarSubContainer}>
          <Text style={[styles.cardAvatarLetter, { color: customBg }]}>
            {nome ? String(nome).charAt(0).toUpperCase() : "J"}
          </Text>
        </View>
      </View>

      <View style={styles.cardTextGroup}>
        <Text style={styles.cardTitle}>{nome || "Jose Bento"}</Text>
        <View style={styles.cardTextGroup}>
          <Text style={styles.cardText}>{cargo || "Desenvolvedor Frontend"}</Text>
          <Text style={styles.cardSubtitle}>{empresa || "MWT"}</Text>
        </View>
      </View>

      <View style={styles.cardSeparator} />

      <View style={styles.cardTextGroup}>
        <Text style={styles.cardSubtitle}>Especialista em</Text>
        <Text style={styles.cardRole}>{tecnologia || "Backend"}</Text>
      </View>

      <View style={[styles.cardBadgeContainer, { backgroundColor: corBadge || "#3B82F6" }]}>
        <Text style={styles.cardBadgeText}>{nivel || "Especialista"}</Text>
      </View>

      <Text style={styles.cardSubtitle}>{anos || "0"} anos de experiência</Text>
    </View>
  );
}