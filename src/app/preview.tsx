import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Preview() {
  const router = useRouter();
  
  const params = useLocalSearchParams<{ 
    nome: string, 
    cargo: string, 
    empresa: string, 
    anos: string, 
    tecnologia: string, 
    cor: string 
  }>();

  const getNivel = (anos: string) => {
    const n = parseInt(anos || '0');
    if (n <= 2) return { label: 'Júnior', cor: '#94a3b8' }; // Cinza
    if (n <= 5) return { label: 'Pleno', cor: '#fbbf24' };  // Dourado/Amarelo conforme imagem
    return { label: 'Sênior', cor: '#fbbf24' };
  };

  const nivel = getNivel(params.anos);

  const getCorFundo = (corSelecionada: string) => {
    switch (corSelecionada) {
      case 'Verde': return '#10b981';
      case 'Roxo': return '#8b5cf6';
      default: return '#3b82f6';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>
        Seu Cartão
      </Text>

      <View style={[
        styles.cardContainer, 
        { backgroundColor: getCorFundo(params.cor) }
      ]}>
        
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>
            {params.nome ? params.nome[0].toUpperCase() : '?'}
          </Text>
        </View>

        <Text style={styles.cardName}>
          {params.nome || "Seu Nome Completo"}
        </Text>

        <Text style={styles.cardCargo}>
          {params.cargo || "Seu Cargo"}
        </Text>

        <Text style={styles.cardEmpresa}>
          {params.empresa || "Sua Empresa"}
        </Text>
        
        <View style={styles.divider} />
        
        <Text style={styles.techLabel}>
          Especialista em
        </Text>

        <Text style={styles.techValue}>
          {params.tecnologia || "Sua Tecnologia"}
        </Text>

        <View style={[
          styles.badgeContainer, 
          { backgroundColor: nivel.cor }
        ]}>
          <Text style={styles.badgeText}>
            {nivel.label}
          </Text>
        </View>

        <Text style={styles.experienceFooter}>
          {params.anos || "0"} anos de experiência
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.secondaryButton} 
        onPress={() => router.back()}
      >
        <Text style={styles.secondaryButtonText}>
          Editar dados
        </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.buttonContainer} 
        onPress={() => router.replace('/sucesso')}
      >
        <Text style={styles.buttonText}>
          Finalizar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#111827',
    marginTop: 40,
  },
  cardContainer: {
    padding: 30,
    borderRadius: 24,
    alignItems: 'center',
    marginBottom: 30,
    // Sombra para Android
    elevation: 10,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  cardName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  cardCargo: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  cardEmpresa: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  divider: {
    width: '80%',
    height: 1,
    backgroundColor: '#fff',
    opacity: 0.3,
    marginVertical: 20,
  },
  techLabel: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.9,
  },
  techValue: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  badgeContainer: {
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 20,
    marginBottom: 10,
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  experienceFooter: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.7,
  },
  buttonContainer: {
    backgroundColor: '#6366f1',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButton: {
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#6366f1',
    alignItems: 'center',
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  secondaryButtonText: {
    color: '#6366f1',
    fontSize: 16,
    fontWeight: 'bold',
  },
});