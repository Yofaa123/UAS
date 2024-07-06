import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Pengaturan = () => {
  const navigation = useNavigation();

  const openWhatsApp = () => {
    Linking.openURL('https://wa.me/6282225203581');
  };

  const goToLogin = () => {
    navigation.navigate('Masuk'); // Ganti 'Masuk' dengan nama layar login Anda dalam navigator
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Akun</Text>
      </View>

      {/* Informasi Akun */}
      <View style={styles.accountContainer}>
        <Image
          source={require('../assets/avatar.jpg')} // Ganti dengan path gambar avatar Anda
          style={styles.avatar}
        />
        <View style={styles.accountInfo}>
          <Text style={styles.accountName}>Yofa</Text>
          <Text style={styles.accountEmail}>mohammadyofaarifin@gmail.com</Text>
          <Text style={styles.accountPhone}>082225203581</Text>
        </View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>UBAH</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Pengaturan */}
      <View style={styles.settingSection}>
        <Text style={styles.sectionTitle}>Akun</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Ajak teman pakai Toko Zada</Text>
          <Text style={styles.settingAction}>Bagikan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Tukar poin</Text>
          <Text style={styles.settingAction}>0 poin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Kode promo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Voucher saya</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Sosial Media */}
      <View style={styles.settingSection}>
        <Text style={styles.sectionTitle}>Sosial media</Text>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>tokozada.com</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Toko Zada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Toko Zada</Text>
        </TouchableOpacity>
      </View>

      {/* Menu Info Lainnya */}
      <View style={styles.settingSection}>
        <Text style={styles.sectionTitle}>Info lainnya</Text>
        <TouchableOpacity style={styles.settingItem} onPress={openWhatsApp}>
          <Text style={styles.settingText}>Bantuan</Text>
          <Text style={styles.settingAction}>Whatsapp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Ketentuan Layanan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Kebijakan Privasi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>Beri Kami Nilai</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>App Credit</Text>
          <Text style={styles.settingAction}>V4.0.0</Text>
        </TouchableOpacity>
      </View>

      {/* Tombol Keluar */}
      <TouchableOpacity style={styles.logoutButton} onPress={goToLogin}>
        <Text style={styles.logoutButtonText}>KELUAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#007BFF',
    padding: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  accountInfo: {
    flex: 1,
  },
  accountName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  accountEmail: {
    fontSize: 14,
    color: '#888',
  },
  accountPhone: {
    fontSize: 14,
    color: '#888',
  },
  editButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  settingSection: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingText: {
    fontSize: 14,
    color: '#000',
  },
  settingAction: {
    fontSize: 14,
    color: '#007BFF',
  },
  logoutButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Pengaturan;
