import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


export default function ongCabelegria() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [comprimento, setComprimento] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = () => {
    if (!nome || !email || !comprimento || !selectedOption) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    if (!email.includes('@')) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
      return;
    }
    Alert.alert('Sucesso', 'Sua doação foi enviada com sucesso!');
    setNome('');
    setEmail('');
    setComprimento('');
    setMensagem('');
    setSelectedOption(null);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" backgroundColor="#fff" />

      <Image source={require('./img/imgCabelegria.png')} style={styles.headerImage} />

      <TouchableOpacity style={styles.backBtn}>
         <Ionicons name="arrow-back" size={28} color="#fff" />

      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Ong Cabelegria</Text>
        <Text style={styles.address}>Av. Luiz Dumont Villares</Text>

        {/* card de porcentagem */}
        <View style={styles.card}>
          <View style={styles.avatars}>
            <Image source={require('./img/perfil2.png')} style={styles.avatarOverlap} />
            <Image source={require('./img/perfil3.png')} style={styles.avatarOverlap} />
            <Image source={require('./img/perfil4.png')} style={styles.avatarOverlap} />
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text style={styles.cardText}>42% das solicitações atendidas</Text>
            <Text style={styles.cardSub}>21 de 50 pacientes já receberam suas perucas</Text>
            <View style={styles.progressBar}>
              <View style={styles.progress} />
            </View>
          </View>
        </View>

        {/* seção de descrição */}
        <Text style={styles.sectionTitle}>Descrição</Text>
        <Text style={styles.description}>
          A ONG Cabelegria arrecada doações de cabelo para confeccionar perucas destinadas a pacientes com câncer em tratamento.
          Com empatia e solidariedade, leva autoestima e esperança a quem enfrenta essa jornada.
        </Text>

        {/* seção do formulário */}
        <Text style={styles.sectionTitle}>Formulário</Text>

        <TextInput
          placeholder="Nome Completo:"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
          placeholderTextColor="#D1D1D1"
        />
        <TextInput
          placeholder="Email de Contato"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          placeholderTextColor="#D1D1D1"
        />
        <TextInput
          placeholder="Comprimento do cabelo doado (em cm):"
          value={comprimento}
          onChangeText={setComprimento}
          style={styles.input}
          keyboardType="numeric"
          placeholderTextColor="#D1D1D1"
        />
        <TextInput
          placeholder="Mensagem para quem vai receber a peruca (opcional):"
          value={mensagem}
          onChangeText={setMensagem}
          style={styles.input}
          placeholderTextColor="#D1D1D1"
        />

        <Text style={styles.radioLabel}>Tipo de envio da doação:</Text>

        <TouchableOpacity onPress={() => setSelectedOption('correios')} style={styles.radioOption}>
          <View style={[styles.radioCircle, selectedOption === 'correios' && styles.radioSelected]} />
          <Text style={styles.radioText}>Correios</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelectedOption('presencial')} style={styles.radioOption}>
          <View style={[styles.radioCircle, selectedOption === 'presencial' && styles.radioSelected]} />
          <Text style={styles.radioText}>Entrega presencial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.submitBtn} onPress={handleSubmit}>
          <Text style={styles.submitText}>Enviar Doação</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 180,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backBtn: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#FFC5D1',
    padding: 6,
    borderRadius: 50,
    elevation: 5,
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  address: {
    color: 'gray',
    marginBottom: 20,
  },
  card: {
    flexDirection: 'row',
    padding: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatars: {
    flexDirection: 'row',
    marginRight: 10,
    marginLeft: -8,
  },
  avatarOverlap: {
    width: 35,
    height: 35,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
    marginLeft: -10,
  },
  cardText: {
    fontWeight: 'bold',
    fontSize: 12, 
  },
  cardSub: {
    fontSize: 10,
    color: 'gray',
  },
  progressBar: {
    width: '100%', 
    height: 6,
    backgroundColor: '#eee',
    borderRadius: 3,
    marginTop: 8,
    overflow: 'hidden',
  },  
  progress: {
    width: '42%',
    height: '100%',
    backgroundColor: '#F2A0BE',
  },
  
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    color: '#444',
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#F2C6D6',
    marginTop: 10,
    paddingBottom: 5,
    marginBottom: 10,
  },
  radioLabel: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  radioCircle: {
    width: 18,
    height: 18,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E7A6B3',
    marginRight: 10,
  },
  radioSelected: {
    backgroundColor: '#E7A6B3',
  },
  radioText: {
    fontSize: 14,
  },
  submitBtn: {
    backgroundColor: '#F2C6D6',
    marginTop: 30,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
