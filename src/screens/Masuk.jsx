import * as React from 'react';
import {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Linking,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Masuk = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const isLoginEnabled = email !== '' && password !== '';

  const handleLogin = () => {
    if (!email || !password) {
      setErrorMessage('Harap isi semua kolom yang wajib diisi');
      return;
    }

    setErrorMessage('');
    navigation.navigate('Beranda');
  };

  return (
    <View style={styles.masuk}>
      <Image
        style={styles.logo}
        source={require('../assets/tambahkan-subjudul-1.png')}
      />
      <View style={styles.header}>
        <Text style={styles.subtitle}>Belum Punya Akun?</Text>
      </View>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('DaftarAkun')}>
        <Text style={styles.registerText}>DAFTAR SEKARANG</Text>
      </TouchableOpacity>
      <Text style={styles.masukTitle}>LOGIN</Text>
      <Text style={styles.label}>Email / Nomor HP</Text>
      <TextInput
        style={styles.input}
        placeholder="Email atau Nomor HP"
        placeholderTextColor="#A9A9A9"
        value={email}
        onChangeText={setEmail}
        color="#000000"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#A9A9A9"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        color="#000000"
      />
      <TouchableOpacity
        style={[
          styles.loginButton,
          {backgroundColor: isLoginEnabled ? '#7B61FF' : '#C0C0C0'},
        ]}
        onPress={handleLogin}
        disabled={!isLoginEnabled}>
        <Text
          style={[
            styles.loginText,
            {color: isLoginEnabled ? '#FFFFFF' : '#000000'},
          ]}>
          LOGIN
        </Text>
      </TouchableOpacity>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <TouchableOpacity
        style={styles.forgotPasswordButton}
        onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.forgotPassword}>Lupa Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.secondaryRegisterButton}
        onPress={() => navigation.navigate('DaftarAkun')}>
        <Text style={styles.secondaryRegisterText}>
          Belum punya akun? Yuk daftar!
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.helpButton}
        onPress={() => Linking.openURL('https://wa.me/6282225203581')}>
        <Text style={styles.helpText}>BANTUAN</Text>
        <Image
          style={styles.whatsappIcon}
          source={require('../assets/logoswhatsappicon.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  masuk: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  logo: {
    width: 110,
    height: 100,
    marginTop: 20,
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#707070',
  },
  registerButton: {
    backgroundColor: '#7B61FF',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    alignItems: 'center',
    width: 150,
  },
  registerText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  masukTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 20,
    color: 'black',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    color: '#000000',
  },
  input: {
    width: '100%',
    height: 42,
    backgroundColor: '#F0F0F0',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  loginButton: {
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  loginText: {
    fontWeight: 'bold',
  },
  errorMessage: {
    marginTop: 10,
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  forgotPasswordButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  forgotPassword: {
    color: '#7B61FF',
    textAlign: 'center',
  },
  secondaryRegisterButton: {
    marginTop: 20,
    borderColor: '#7B61FF',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
  },
  secondaryRegisterText: {
    color: '#000000',
    textAlign: 'center',
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00FF7F',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  helpText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginRight: 10,
  },
  whatsappIcon: {
    width: 20,
    height: 20,
  },
});

export default Masuk;
