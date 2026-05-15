import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";
import { THEME } from "../styles/contants";
import { Button } from "../components/Buttons";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen(){
    return (
         <SafeAreaView>
            <View style={styles.container}>
                
                <View style={styles.headerContainer}>
                    <View style={styles.iconContainer}>
                        <Ionicons 
                            name="card" 
                            size={100} 
                            color="#5439eed2" 
                            />
                    </View>
                    <Text style={styles.logo}>DevCard</Text>
                    <Text style={styles.subtitle}>Seu cartão de visita digital de dev</Text>
                </View>

                <Button label="Criar meu cartão" />
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        height:"100%",
        justifyContent:"center",
        paddingHorizontal:24,
    },
    headerContainer:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:750,
    },
    logo:{
        color: THEME.colors.primary,
        fontWeight:"bold",
        fontSize:56,
    },
    subtitle:{
        color: THEME.colors.subtitle,
        fontWeight:400,
        fontSize:16,
        width:200,
        textAlign:"center",
    },
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
    iconContainer:{
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 8,
    },
})