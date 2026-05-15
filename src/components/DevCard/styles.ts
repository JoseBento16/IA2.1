import { THEME } from "../../styles/contants";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    cardContainer: {
      backgroundColor: "#1a9ce7",
      borderRadius: THEME.border.Radius.xl,
      paddingHorizontal: 32,
      paddingVertical: 32,
      justifyContent: "center",
      alignItems: "center",
      gap: 8,
    },
    cardAvatarContainer: {
      backgroundColor: "#ffffff8c",
      padding: 4,
      borderRadius: "100%",
    },
    cardAvatarSubContainer: {
      backgroundColor: "#f8f8ff",
      padding: 40,
      borderRadius: "100%",
      height: 80,
      width: 80,
     
    },
    cardAvatarLetter: {
      color: "#1a9ce7",
      fontSize: THEME.text.heading.h1,
      fontWeight: "bold",
    },
    cardTitle: {
      color: "#f8f8ff",
      fontSize: THEME.text.heading.h2,
      fontWeight: "bold",
    },
    cardText: {
      color: "#f8f8ff",
      fontSize: 16,
    },
    cardSubtitle: {
      color: "#f8f8ff", 
      fontSize: 14,
    },
    cardSeparator: {
      backgroundColor: "rgba(255, 255, 255, 0.47)",
      height: 1,
      width: 250,
      marginVertical: 8,
    },
    cardRole: {
      color: "#f8f8ff", 
      fontSize: THEME.text.heading.h4,
      fontWeight: "bold"
    },
    cardBadgeContainer: {
      backgroundColor: "#ffd000",
      paddingVertical: 8,
      paddingHorizontal: 12,
      borderRadius: THEME.border.Radius.xxl,
    },
    cardBadgeText: {
      color: "#000000d0",
      fontWeight: "bold",
      letterSpacing: 1,
      
    },
    cardTextGroup: {
      justifyContent: "center",
      alignItems: "center",
      gap: 4,
    },
}); 