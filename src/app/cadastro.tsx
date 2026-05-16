import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput, StyleSheet, ScrollView, KeyboardAvoidingView, Platform,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

import { THEME } from "../styles/contants";
import { Button } from "../components/Buttons";

export default function CadastroScreen() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [anos, setAnos] = useState("");
  const [tecnologia, setTecnologia] = useState("");
  const [cor, setCor] = useState("Azul");

  const [erros, setErros] = useState<Record<string, string>>({});

  const validarFormulario = () => {
    let novosErros: Record<string, string> = {};
    if (nome.trim().length < 3) novosErros.nome = "O nome deve conter pelo menos 3 caracteres.";
    if (!cargo.trim()) novosErros.cargo = "O cargo é obrigatório.";
    const anosNum = parseInt(anos);
    if (!anos || isNaN(anosNum) || anosNum <= 0) novosErros.anos = "Informe um número maior que 0.";
    if (!tecnologia.trim()) novosErros.tecnologia = "A tecnologia é obrigatória.";

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  const handleGerar = () => {
    if (validarFormulario()) {
      router.push({
        pathname: "/preview",
        params: { nome, cargo, empresa: empresa || "Nenhuma", anos, tecnologia, cor }
      });
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Cadastro</Text>
            <Text style={styles.subtitle}>Preencha seus dados de dev</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Nome completo</Text>
              <TextInput 
                style={[styles.inputText, erros.nome && styles.inputError]} 
                placeholder="Ex: José Bento" 
                placeholderTextColor="#CBCFD9"
                value={nome} 
                onChangeText={setNome} 
              />
              {erros.nome && <Text style={styles.errorText}>{erros.nome}</Text>}
            </View>
          
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Cargo</Text>
              <TextInput 
                style={[styles.inputText, erros.cargo && styles.inputError]} 
                placeholder="Ex: Desenvolvedor Mobile" 
                placeholderTextColor="#CBCFD9"
                value={cargo} 
                onChangeText={setCargo} 
              />
              {erros.cargo && <Text style={styles.errorText}>{erros.cargo}</Text>}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Empresa (opcional)</Text>
              <TextInput 
                style={styles.inputText} 
                placeholder="Ex: Microsoft" 
                placeholderTextColor="#CBCFD9"
                value={empresa} 
                onChangeText={setEmpresa} 
              />
            </View>
          
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Anos de experiência</Text>
              <TextInput 
                style={[styles.inputText, styles.inputActiveBorder, erros.anos && styles.inputError]} 
                placeholder="4" 
                placeholderTextColor="#CBCFD9"
                keyboardType="numeric" 
                value={anos} 
                onChangeText={setAnos} 
              />
              {erros.anos && <Text style={styles.errorText}>{erros.anos}</Text>}
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Tecnologia favorita</Text>
              <TextInput 
                style={[styles.inputText, erros.tecnologia && styles.inputError]} 
                placeholder="Ex: React Native" 
                placeholderTextColor="#CBCFD9"
                value={tecnologia} 
                onChangeText={setTecnologia} 
              />
              {erros.tecnologia && <Text style={styles.errorText}>{erros.tecnologia}</Text>}
            </View>
          

            <Text style={styles.label}>Cor do cartão</Text>
<View style={styles.colorRow}>
  {[
    { label: "Azul", hex: "#001affa6" },
    { label: "Verde", hex: "#00ff00" },
    { label: "Roxo", hex: "#8400ff" }
  ].map((item) => {
    const isSelected = cor === item.label;
    return (
      <TouchableOpacity 
        key={item.label} 
        activeOpacity={0.7}
        style={[
          styles.colorButton, 
          isSelected && styles.colorButtonSelected
        ]} 
        onPress={() => setCor(item.label)}
      >
        <View style={[styles.colorCircle, { backgroundColor: item.hex }]} />
        <Text style={[
          styles.colorText, 
          isSelected && styles.colorTextSelected
        ]}>
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  })}
</View>
          <View style={styles.footerComponent}>
            <Button label="Gerar Cartão" variant="primary" onPress={handleGerar} />
          </View>

        </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1,
    backgroundColor: "#FFFFFF" 
  },
  scrollContainer: { 
    paddingHorizontal: 24, 
    paddingBottom: 32 
  },
  headerContainer: { 
    marginTop: 16, 
    gap: 4 
  },
  title: {
     color: "#2E3A59", 
     fontWeight: "bold", 
     fontSize: 32 
    },
  subtitle: { 
    fontSize: 16, 
    color: "#CBCFD9", 
    marginBottom: 12 
  },
  formContainer: {
     gap: 2 
    },
  inputGroup: { 
    marginBottom: 16 
  },
  label: { 
    fontSize: 14, 
    fontWeight: "600", 
    color: "#6E758A", 
    marginBottom: 8 
  },
  inputText: { 
    borderWidth: 1, 
    borderColor: "#E2E5ED", 
    borderRadius: 12, 
    paddingVertical: 14, 
    paddingHorizontal: 16, 
    fontSize: 16, 
    color: "#2E3A59" 
  },
  inputActiveBorder: { 
    borderColor: THEME.colors.primary,
    borderWidth: 1.5 
  },
  inputError: { 
    borderColor: THEME.colors.erro, 
  },
  errorText: { color: THEME.colors.erro, 
    fontSize: 12, 
    marginTop: 4 
  },
  colorRow: { 
    flexDirection: "row", 
    gap: 12, 
    marginTop: 4, 
    marginBottom: 20 
  },
  colorButton: { 
    flex: 1, 
    flexDirection: "row", 
    paddingVertical: 14, 
    borderRadius: 12, 
    borderWidth: 1, 
    borderColor: "#E2E5ED", 
    alignItems: "center", 
    justifyContent: "center",
    backgroundColor: "#FFFFFF"
  },
  colorButtonSelected: {
    borderColor: "#C0A9FF", 
    borderWidth: 1.5,
  },
  colorCircle: { 
    width: 24,       
    height: 24,      
    borderRadius: 12, 
    marginRight: 10, 
  },
  colorText: { 
    color: "#CBCFD9", 
    fontSize: 15,
    fontWeight: "500"
  },
  colorTextSelected: {
    color: "#2E3A59", 
    fontWeight: "700"
  }
  ,
  footerComponent: {
    marginTop: 12,
   
  }
});