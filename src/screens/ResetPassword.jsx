import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Linking,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontSize, FontFamily, Color, Border} from './GlobalStyles';

const ResetPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [error, setError] = React.useState('');

  const handleResetPassword = () => {
    if (!email) {
      setError('Harap isi email anda');
    } else {
      // Lakukan tindakan reset password, misalnya navigasi ke halaman lain
      setError('');
      navigation.navigate('Masuk');
    }
  };

  return (
    <View style={[styles.resetPassword, styles.iconLayout]}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.evaarrowBackOutline}
          onPress={() => navigation.navigate('Masuk')}>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require('../assets/evaarrowbackoutline.png')}
          />
        </TouchableOpacity>
        <Text style={styles.resetPassword1}>Reset Password</Text>
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.emailLabel}>Email yang sudah terdaftar</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={setEmail}
          value={email}
          placeholder="Email yang sudah terdaftar"
          placeholderTextColor={Color.colorDarkgray_100}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <Text style={styles.pastikanAndaMemasukan}>
          Pastikan anda memasukkan email dengan benar. Silahkan cek email anda
          setelah reset password berhasil. Jika tidak menemukan email di kotak
          masuk email anda, silahkan cek di spam. Jika ada kendala silahkan
          hubungi kami dengan menekan tombol bantuan.
        </Text>
      </View>
      <TouchableOpacity
        style={[styles.resetPasswordItem, styles.groupInnerLayout]}
        onPress={handleResetPassword}>
        <Text style={[styles.resetSekarang, styles.bantuanTypo]}>
          RESET SEKARANG
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.rectangleParent, styles.groupInnerLayout]}
        onPress={() => Linking.openURL('https://wa.me/6282225203581')}>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Text style={[styles.bantuan, styles.bantuanTypo]}>BANTUAN</Text>
        <Image
          style={styles.logoswhatsappIcon}
          contentFit="cover"
          source={require('../assets/logoswhatsappicon1.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: 'hidden',
    width: '100%',
  },
  bantuanTypo: {
    fontSize: FontSize.size_sm,
    textAlign: 'center',
    fontFamily: FontFamily.interRegular,
    position: 'absolute',
  },
  groupInnerLayout: {
    height: 39,
    width: 318,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 45, // Tinggi border tetap sama
    backgroundColor: Color.colorMediumslateblue,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  resetPassword1: {
    fontSize: FontSize.size_xl,
    textAlign: 'center',
    fontFamily: FontFamily.interRegular,
    color: Color.colorWhite,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 2, // Mengatur posisi teks agar lebih ke bawah, tapi tetap di dalam border
  },
  emailLabel: {
    color: Color.colorBlack,
    marginBottom: 5,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_sm,
  },
  textInput: {
    height: 40,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderRadius: Border.br_6xs,
    paddingHorizontal: 10,
    color: Color.colorBlack,
  },
  pastikanAndaMemasukan: {
    marginTop: 15,
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkgray_100,
    textAlign: 'left',
    fontFamily: FontFamily.interRegular,
  },
  emailContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    width: '90%',
  },
  resetPasswordItem: {
    top: 220,
    borderRadius: Border.br_8xs,
    left: '50%',
    marginLeft: -159,
    height: 39,
    backgroundColor: Color.colorMediumslateblue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetSekarang: {
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
  },
  groupInner: {
    backgroundColor: Color.colorMediumspringgreen,
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
  },
  bantuan: {
    color: Color.colorWhite,
    fontSize: FontSize.size_sm,
  },
  logoswhatsappIcon: {
    top: 12,
    width: 19,
    height: 15,
    borderRadius: Border.br_8xs,
    left: 104,
    position: 'absolute',
    overflow: 'hidden',
  },
  rectangleParent: {
    top: 270,
    left: '50%',
    marginLeft: -159,
    height: 39,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: '100%',
  },
  evaarrowBackOutline: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -19, // Mengatur posisi ikon agar lebih ke bawah, tapi tetap di dalam border
  },
  resetPassword: {
    backgroundColor: Color.colorWhite,
    flex: 1,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default ResetPassword;
