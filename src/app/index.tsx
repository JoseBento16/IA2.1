import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons 
            name="card" 
            size={100} 
            color="#6366f1" 
          />
        </View>

        <Text style={styles.title}>
          DevCard
        </Text>

        <Text style={styles.subtitle}>
          Seu cartão de visita digital{"\n"}de dev mobile
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => router.push('/cadastro')}
        >
          <Text style={styles.buttonText}>
            Criar meu cartão
          </Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          IA 2.1
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 24,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#6366f1',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#6366f1',
    width: '100%',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#9ca3af',
  },
});