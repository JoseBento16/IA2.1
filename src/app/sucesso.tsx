import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { useRouter } from 'expo-router';

export default function Sucesso() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>
          ✅
        </Text>
      </View>

      <Text style={styles.title}>
        Cartão criado com sucesso!
      </Text>
      
      <Text style={styles.description}>
        Seu cartão de visita digital está pronto para ser compartilhado.
      </Text>

      <TouchableOpacity 
        style={styles.buttonContainer} 
        onPress={() => router.replace('/')}
      >
        <Text style={styles.buttonText}>
          Criar outro cartão
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.secondaryButton} 
        onPress={() => router.replace('/')}
      >
        <Text style={styles.secondaryText}>
          Voltar ao início
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0fdf4',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  icon: {
    fontSize: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 22,
  },
  buttonContainer: {
    backgroundColor: '#6366f1',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    paddingVertical: 12,
  },
  secondaryText: {
    color: '#9ca3af',
    fontSize: 14,
    fontWeight: '500',
  },
});