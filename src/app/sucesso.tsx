import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native";
import { THEME } from "../styles/contants";
import { Button } from "../components/Buttons";
import { FooterComponent } from "react-native-screens/lib/typescript/components/ScreenFooter";

export default function SucessoScreen(){
    return (
          <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>Cartão criado com sucesso!</Text>
                    <Text style={styles.subtitle}>
                      Seu cartão de visita digital está pronto.
                      compartilhe com a galera!
                    </Text>
                </View>
                <View style={styles.FooterComponent}>  
                  <Button label="Criar outro cartão" />
                  <Button label="Voltar para ao inicio" variant="secondary" />
                </View>
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
        gap:12,
    },
    title:{
        color: THEME.colors.heading,
        fontWeight: 'bold',
        fontSize:THEME.text.heading.h2,
        width:200,
        textAlign:"center",
    },
    subtitle:{
        color: THEME.colors.subtitle,
        fontWeight: '400',
        fontSize:16,
        width:200,
        textAlign:"center",
    },
    FooterComponent:{
        flexDirection:"column",
        gap:12,
    }
});