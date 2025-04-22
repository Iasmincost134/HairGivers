import React, { useState } from 'react';
import {
  View,Text,StyleSheet,Image,TouchableOpacity,ScrollView,Modal,} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function HomeScreen() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <ScrollView style={styles.container}>
        <StatusBar style="dark" />

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <Ionicons name="menu" size={28} color="#f48fb1" />
          </TouchableOpacity>

          <Image source={require('./img/LogoRosa.png')} style={styles.logo} />
          <Image source={require('./img/perfil.png')} style={styles.profileImage} />
        </View>

        {/* Doações */}
        <View style={styles.donationCard}>
          <View style={styles.donationCircle}>
            <Text style={styles.donationPercent}>85%</Text>
          </View>
          <View>
            <Text style={styles.donationText}>Doações concluídas!</Text>
            <Text style={styles.donationSubText}>
              Mês passado: <Text style={{ fontWeight: 'bold' }}>74%</Text>
            </Text>
          </View>
          <MaterialIcons name="verified" size={28} color="#ffeb3b" style={styles.donationIcon} />
        </View>

        {/* Seção Autoestima */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Autoestima e Bem-Estar</Text>
          <Text style={styles.sectionSubtitle}>Doe Com Amor E Muito Carinho</Text>

          <View style={styles.optionsRow}>
            <TouchableOpacity style={styles.optionCard}>
              <Image source={require('./img/turban.png')} style={styles.turban} />
              <Text style={styles.optionTitle}>Lenços & Acessórios</Text>
              <Text style={styles.optionSubtitle}>Amarre com estilo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionCard}>
              <Image source={require('./img/hair.png')} style={styles.turban} />
              <Text style={styles.optionTitle}>Cabelo</Text>
              <Text style={styles.optionSubtitle}>Doação Capilar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Instituições & Hospitais */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Instituições & Hospitais</Text>
          <Text style={styles.sectionSubtitle}>Fique Informado Dos Hospitais Parceiros E Para Doação</Text>

          <View style={styles.card}>
            <Image source={require('./img/hospital1.png')} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Centro Oncológico Mogi das Cruzes</Text>
              <Text style={styles.cardSubtitle}>Centro de tratamento e apoio</Text>
              <Text style={styles.status}>Aberto  ⭐⭐⭐⭐⭐</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image source={require('./img/hospital2.png')} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>Ong Cabelegria</Text>
              <Text style={styles.cardSubtitle}>
                Cabelegria é uma organização dedicada a resgatar a autoestima
              </Text>
              <Text style={styles.status}>⭐⭐⭐⭐⭐</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Saiba Mais...</Text>
          </TouchableOpacity>
        </View>

        {/* Educação */}
        <View style={styles.section}>
          <View style={styles.educationHeader}>
            <Text style={styles.sectionTitle}>Educação</Text>
            <Text style={styles.link}>Veja Mais</Text>
          </View>
          <Text style={styles.sectionSubtitle}>
            Confira Artigos, Informações E Histórias Inspiradoras Aqui
          </Text>

          <View style={styles.card}>
            <Image source={require('./img/educacao.png')} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.sectionSubtitle}>
                Câncer De Mama E Análise Dos Fatores Relacionados Aos Métodos De Detecção E Educação Do Diagnóstico
              </Text>
              <Text style={styles.sectionSubtitle}>
                O câncer de mama é considerado um problema de saúde pública e, dentre todos os tipos de cânceres, é o que mais acomete mulheres em todo o mundo1. A estimativa ....
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Menu suspenso */}
      <Modal
        transparent={true}
        animationType="fade"
        visible={menuVisible}
        onRequestClose={() => setMenuVisible(false)}
      >
        <TouchableOpacity 
        style={styles.modalOverlay} 
        activeOpacity={1}
        onPress={() => setMenuVisible(false)}>
          <View style={styles.dropdownMenu}>
            <TouchableOpacity style={styles.menuItem} activeOpacity={1}> 
              <Text style={styles.menuText}> Bem-vindo(a) à Hair Givers!
Somos uma rede feita por e para mulheres, com amor, empatia e força. Conectamos pacientes, familiares, voluntários e doadores em um só lugar — oferecendo apoio, informações, autoestima e esperança. Aqui, cada gesto importa. 💖</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 60,
    height: 60,
    tintColor: '#f48fb1',
  },
  turban: {
    width: 50,
    height: 50,
    tintColor: '#f48fb1',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  donationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 20,
    shadowColor: 'rgba(149, 157, 165, 0.2)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 5,
    marginBottom: 30,
  },
  donationCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 6,
    borderColor: '#f8bbd0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  donationPercent: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  donationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  donationSubText: {
    fontSize: 14,
    color: '#444',
  },
  donationIcon: {
    marginLeft: 'auto',
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#999',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  pSubtitle: {
    fontSize: 14,
    color: '#646464',
    marginBottom: 20,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    width: '47%',
    elevation: 4,
    shadowColor: 'rgba(149, 157, 165, 0.2)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 24,
  },
  optionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  optionSubtitle: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: 'rgba(149, 157, 165, 0.2)',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 24,
    elevation: 5,
  },
  cardImage: {
    width: '100%',
    height: 120,
  },
  cardContent: {
    padding: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  status: {
    marginTop: 4,
    fontSize: 13,
    color: 'green',
  },
  button: {
    backgroundColor: '#f8bbd0',
    padding: 18,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    width: 250,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  educationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  link: {
    color: '#f48fb1',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 80,
    paddingLeft: 20,
  },
  dropdownMenu: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: 300,
    elevation: 6,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  menuText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
    textAlign: 'left',
  },
});
