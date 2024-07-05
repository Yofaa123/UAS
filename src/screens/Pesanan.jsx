import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Pesanan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Dalam Proses</Text>
      </View>

      {/* Pesan Pesanan Kosong */}
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>Tidak ada pesanan dalam proses</Text>
        <Text style={styles.emptySubtitle}>Yuk segera belanja</Text>
        <Image
          source={require('../assets/pesanan.jpg')} // Ganti dengan path gambar Anda
          style={styles.emptyImage}
        />
        <Text style={styles.emptyDescription}>
          Kurir kami akan dengan senang hati mengantarkan pesanmu.
        </Text>
        <TouchableOpacity
          style={styles.shopButton}
          onPress={() => navigation.navigate('Beranda')}>
          <Text style={styles.shopButtonText}>Belanja Sekarang</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
  },
  emptyImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  emptyDescription: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  shopButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  shopButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Pesanan;
