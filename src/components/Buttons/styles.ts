import { StyleSheet } from "react-native";
import { THEME } from "../../styles/contants";

export const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: THEME.colors.primary,
        flexDirection:"row",
        justifyContent:"center",
        alignContent:"center",
        paddingVertical:16,
        paddingHorizontal:24,
        borderRadius: THEME.border.Radius.md,
    },
    buttonText:{
        color: THEME.colors.primaryForeground,
        fontWeight:"500",
        fontSize:18,
    },
})