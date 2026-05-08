import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [anos, setAnos] = useState('');
  const [tecnologia, setTecnologia] = useState('');
  const [cor, setCor] = useState('Azul');

  const [erros, setErros] = useState<any>({});

  const validar = () => {
    let currentErrors: any = {};

    if (nome.length < 3) {
      currentErrors.nome = "O nome deve ter pelo menos 3 caracteres";
    }
    if (!cargo) {
      currentErrors.cargo = "O cargo é obrigatório";
    }
    const anosNum = parseInt(anos);
    if (!anos || isNaN(anosNum) || anosNum <= 0) {
      currentErrors.anos = "Informe um número de anos maior que 0";
    }
    if (!tecnologia) {
      currentErrors.tecnologia = "A tecnologia é obrigatória";
    }

    setErros(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleGerar = () => {
    if (validar()) {
      router.push({
        pathname: '/preview',
        params: { 
          nome: nome || "Seu Nome Completo", 
          cargo: cargo || "Seu Cargo", 
          empresa, 
          anos, 
          tecnologia: tecnologia || "Sua Tecnologia", 
          cor 
        }
      });
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.flexContainer}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>
          Cadastro
        </Text>
        
        <Text style={styles.subtitle}>
          Preencha seus dados de dev
        </Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Nome completo
          </Text>
          <TextInput 
            style={[styles.inputText, erros.nome && styles.inputError]}
            placeholder="Seu Nome Completo"
            value={nome}
            onChangeText={setNome}
          />
          {erros.nome && <Text style={styles.errorText}>{erros.nome}</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Cargo
          </Text>
          <TextInput 
            style={[styles.inputText, erros.cargo && styles.inputError]}
            placeholder="Seu Cargo"
            value={cargo}
            onChangeText={setCargo}
          />
          {erros.cargo && <Text style={styles.errorText}>{erros.cargo}</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Empresa (opcional)
          </Text>
          <TextInput 
            style={styles.inputText}
            placeholder="Sua Empresa"
            value={empresa}
            onChangeText={setEmpresa}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Anos de experiência
          </Text>
          <TextInput 
            style={[styles.inputText, erros.anos && styles.inputError]}
            placeholder="4"
            keyboardType="numeric"
            value={anos}
            onChangeText={setAnos}
          />
          {erros.anos && <Text style={styles.errorText}>{erros.anos}</Text>}
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>
            Tecnologia favorita
          </Text>
          <TextInput 
            style={[styles.inputText, erros.tecnologia && styles.inputError]}
            placeholder="Sua Tecnologia"
            value={tecnologia}
            onChangeText={setTecnologia}
          />
          {erros.tecnologia && <Text style={styles.errorText}>{erros.tecnologia}</Text>}
        </View>

        <Text style={styles.label}>
          Cor do cartão
        </Text>
        
        <View style={styles.colorRow}>
          {[
            { label: 'Azul', hex: '#3b82f6' },
            { label: 'Verde', hex: '#10b981' },
            { label: 'Roxo', hex: '#8b5cf6' }
          ].map((item) => (
            <TouchableOpacity 
              key={item.label}
              style={[
                styles.colorButton, 
                cor === item.label && styles.selectedColor
              ]}
              onPress={() => setCor(item.label)}
            >
              <View style={[styles.colorCircle, { backgroundColor: item.hex }]} />
              <Text style={cor === item.label ? styles.selectedText : styles.unselectedText}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity 
          style={styles.buttonContainer} 
          onPress={handleGerar}
        >
          <Text style={styles.buttonText}>
            Gerar Cartão
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 24,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#bec2d0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#ef4444',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 12,
    marginTop: 4,
  },
  colorRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 32,
  },
  colorButton: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#bec2d0',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  colorCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  selectedColor: {
    borderColor: '#6366f1',
    backgroundColor: '#eef2ff',
    borderWidth: 2,
  },
  selectedText: {
    color: '#6366f1',
    fontWeight: 'bold',
  },
  unselectedText: {
    color: '#666',
  },
  buttonContainer: {
    backgroundColor: '#6366f1',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});