import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Beranda = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.table}>
        <View style={styles.searchContainer}>
          <Image source={require('../assets/search.png')} style={styles.icon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Hai kak, mau belanja apa?"
            placeholderTextColor="#888"
          />
        </View>
      </View>
      {/* Custom Banner */}
      <View style={styles.customBannerContainer}>
        <View style={styles.storeInfo}>
          <Image
            source={require('../assets/bishop.png')}
            style={styles.storeIcon}
          />
          <View style={styles.storeDetails}>
            <Text style={styles.storeName}>Toko Kami</Text>
            <Text style={styles.storeLocation}>Kota Pamekasan, Jawa Timur</Text>
            <Text style={styles.storeHours}>Buka jam 05:00 - 17:00</Text>
          </View>
        </View>
        <View style={styles.promotionContainer}>
          <Text style={styles.promotionText}>
            100% FREE ONGKIR SELAMANYA* !!!
          </Text>
          <View style={styles.separator} />
          <Text style={styles.promotionNote}>*Untuk jarak 1 KM</Text>
        </View>
        <View style={styles.userInfoTable}>
          <View style={styles.userInfo}>
            <Image
              source={require('../assets/mynauizero.png')}
              style={styles.userIcon}
            />
            <Text style={styles.userInfoText}>Pointku</Text>
          </View>
          <View style={styles.userInfo}>
            <Image
              source={require('../assets/materialsymbolsperson.png')}
              style={styles.userIcon}
            />
            <Text style={styles.userInfoText}>Yofa</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Produk Terbaru</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={styles.productCard}>
            <Image
              source={require('../assets/beras-1.png')}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Beras Fortune</Text>
            <Text style={styles.productPrice}>Rp 50.000</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Beli</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productCard}>
            <Image
              source={require('../assets/telur-1.png')}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Telur Ayam</Text>
            <Text style={styles.productPrice}>Rp 26.000</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Beli</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productCard}>
            <Image
              source={require('../assets/mie-sedap-1.png')}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Mie Sedaap</Text>
            <Text style={styles.productPrice}>Rp 2.500</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Beli</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productCard}>
            <Image
              source={require('../assets/soklin-1.png')}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Soklin</Text>
            <Text style={styles.productPrice}>Rp 5.000</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Beli</Text>
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity style={styles.productCard}>
            <Image
              source={require('../assets/kecap-1.png')}
              style={styles.productImage}
            />
            <Text style={styles.productName}>Kecap</Text>
            <Text style={styles.productPrice}>Rp 10.000</Text>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Beli</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kategori Populer</Text>
        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={require('../assets/sembako-1.png')}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryName}>Sembako</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={require('../assets/bumbu-1.png')}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryName}>Bumbu Dapur</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={require('../assets/daging-1.png')}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryName}>Daging-Ikan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={require('../assets/images-1.png')}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryName}>Snak & Roti</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={require('../assets/minuman-1.png')}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryName}>Minuman</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              source={require('../assets/kardus-1.png')}
              style={styles.categoryImage}
            />
            <Text style={styles.categoryName}>Lainnya</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  table: {
    backgroundColor: '#007BFF',
    padding: 2,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    margin: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#007BFF',
  },
  icon: {
    width: 24,
    height: 24,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  customBannerContainer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  storeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  storeIcon: {
    width: 50,
    height: 50,
  },
  storeDetails: {
    marginLeft: 10,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  storeLocation: {
    fontSize: 14,
    color: '#555',
  },
  storeHours: {
    fontSize: 14,
    color: '#007BFF',
  },
  promotionContainer: {
    backgroundColor: '#FFFACD',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  promotionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#000',
    marginVertical: 5,
  },
  promotionNote: {
    fontSize: 12,
    color: '#000',
  },
  userInfoTable: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    width: 30,
    height: 30,
  },
  userInfoText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#000',
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
    color: '#000',
  },
  productCard: {
    width: 120,
    marginHorizontal: 10,
    alignItems: 'center',
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  productName: {
    marginTop: 10,
    textAlign: 'center',
    color: '#000',
  },
  productPrice: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  buyButton: {
    marginTop: 5,
    backgroundColor: '#007BFF',
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  categoryCard: {
    width: '30%',
    marginVertical: 10,
    alignItems: 'center',
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  categoryName: {
    marginTop: 10,
    textAlign: 'center',
    color: '#000',
  },
});

export default Beranda;
