import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";

export function DevCard() {
    return (
        <View>
            <View style={styles.cardContainer}>
                <View style={styles.cardAvatarContainer}>
                    <View style={styles.cardAvatarSubContainer}>
                        <Text style={styles.cardAvatarLetter}>J</Text>
                    </View>
                </View>

                <View style={styles.cardTextGroup}>
                    <Text style={styles.cardTitle}>Jose Bento</Text>
                    <View style={styles.cardTextGroup}>
                        <Text style={styles.cardText}>Desenvolvedor Frontend</Text>
                        <Text style={styles.cardSubtitle}>MWT</Text>
                    </View>
                </View>

                <View style={styles.cardSeparator} />

                <View style={styles.cardTextGroup}>
                    <Text style={styles.cardSubtitle}>Especialista em</Text>
                    <Text style={styles.cardRole}>Backend</Text>
                </View>

                <View style={styles.cardBadgeContainer}>
                    <Text style={styles.cardBadgeText}>Especialista</Text>
                </View>
                <Text style={styles.cardSubtitle}>12 anos de experiência</Text>
            </View>
        </View>
    )
}
