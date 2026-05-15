import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";
import { THEME } from "../styles/contants";
import { Button } from "../components/Buttons";
import { DevCard } from "../components/DevCard";

export default function SucessoScreen(){
    return (
          <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Seu Cartão</Text>
                </View>

                <DevCard />

                <View style={[styles.footerComponent, { marginTop: 24 }]}>
                  <Button label="Editar" variant="outline" />
                  <Button label="Finalizar" variant="primary" />
                </View>
            </View>
          </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"column",
        justifyContent:"center",
        paddingHorizontal: 24,
        gap: 12,
    },
    headerContainer:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"flex-start",
        gap:16,
    },
    title:{
        color: THEME.colors.heading,
        fontWeight: 'bold',
        fontSize:THEME.text.heading.h3,
        textAlign:"center",
    },
    footerComponent:{
        flexDirection:"column",
        gap:12,
    },
}); 