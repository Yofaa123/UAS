import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color, FontFamily, FontSize, Border} from './GlobalStyles';

const DaftarAkun = () => {
  const navigation = useNavigation();
  const [nama, setNama] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [nomorTelepon, setNomorTelepon] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [ulangiPassword, setUlangiPassword] = React.useState('');
  const [alamatLengkap, setAlamatLengkap] = React.useState('');
  const [successMessage, setSuccessMessage] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleDaftar = () => {
    // Form validation
    if (
      !nama ||
      !nomorTelepon ||
      !password ||
      !ulangiPassword ||
      !alamatLengkap
    ) {
      setErrorMessage('Harap isi semua kolom yang wajib diisi');
      return;
    }

    if (password !== ulangiPassword) {
      setErrorMessage('Password dan Ulangi Password harus sama');
      return;
    }

    setSuccessMessage(true);
    setErrorMessage('');
    setTimeout(() => {
      setSuccessMessage(false);
      navigation.navigate('Masuk');
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.daftarAkun}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Masuk')}>
            <Image
              style={styles.backIcon}
              source={require('../assets/evaarrowbackoutline.png')}
            />
          </TouchableOpacity>
          <Text style={styles.daftarAkunText}>Daftar Akun</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nama</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setNama}
            value={nama}
            placeholder="Nama lengkap anda"
            placeholderTextColor={Color.colorDarkgray_100}
          />
          <Text style={styles.hintText}>(Wajib diisi) Nama lengkap anda</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            placeholderTextColor={Color.colorDarkgray_100}
            keyboardType="email-address"
          />
          <Text style={styles.hintText}>
            (Opsional) Jika anda lupa email anda, silahkan dikosongkan
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nomor Telepon</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setNomorTelepon}
            value={nomorTelepon}
            placeholder="Nomor Telepon"
            placeholderTextColor={Color.colorDarkgray_100}
            keyboardType="phone-pad"
          />
          <Text style={styles.hintText}>
            (Wajib diisi) Gunakan nomor telepon aktif dan terdaftar di Whatsapp
            untuk mempermudah konfirmasi pesanan
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            placeholderTextColor={Color.colorDarkgray_100}
            secureTextEntry
          />
          <Text style={styles.hintText}>(Wajib diisi) Minimal 6 karakter</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Ulangi Password</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={setUlangiPassword}
            value={ulangiPassword}
            placeholder="Ulangi Password"
            placeholderTextColor={Color.colorDarkgray_100}
            secureTextEntry
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Alamat lengkap</Text>
          <TextInput
            style={[styles.textInput, styles.alamatLengkapInput]}
            onChangeText={setAlamatLengkap}
            value={alamatLengkap}
            placeholder="Alamat lengkap"
            placeholderTextColor={Color.colorDarkgray_100}
            multiline
          />
          <Text style={styles.hintText}>
            (Wajib diisi) Isikan alamat dengan lengkap, untuk mempermudah
            pengiriman pesanan
          </Text>
        </View>
        <TouchableOpacity style={styles.daftarButton} onPress={handleDaftar}>
          <Text style={styles.daftarButtonText}>DAFTAR SEKARANG</Text>
        </TouchableOpacity>
        {successMessage && (
          <Text style={styles.successMessage}>Daftar akun berhasil</Text>
        )}
        {errorMessage && (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: Color.colorWhite,
  },
  daftarAkun: {
    flex: 1,
    paddingBottom: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: Color.colorMediumslateblue,
    padding: 10,
    borderRadius: Border.br_6xs,
  },
  backIcon: {
    width: 28,
    height: 28,
  },
  daftarAkunText: {
    marginLeft: 16,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    fontFamily: FontFamily.interRegular,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: FontSize.size_sm,
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    marginBottom: 8,
  },
  textInput: {
    height: 42,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderRadius: Border.br_6xs,
    paddingLeft: 10,
    color: Color.colorBlack,
  },
  alamatLengkapInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  hintText: {
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkgray_100,
    marginTop: 4,
  },
  daftarButton: {
    backgroundColor: Color.colorMediumslateblue,
    paddingVertical: 15,
    borderRadius: Border.br_6xs,
    alignItems: 'center',
    justifyContent: 'center',
  },
  daftarButtonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.interRegular,
  },
  successMessage: {
    marginTop: 20,
    fontSize: FontSize.size_md,
    color: 'green',
    textAlign: 'center',
  },
  errorMessage: {
    marginTop: 20,
    fontSize: FontSize.size_md,
    color: 'red',
    textAlign: 'center',
  },
});

export default DaftarAkun;
