import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

const {width, height} = Dimensions.get('window');

const LoginScreen = props => {
  const inputPass = useRef(null);
  const [emailState, setEmailState] = useState({
    email: '',
  });
  const [passwordState, setPasswordState] = useState({
    password: '',
  });
  const [seePasswordState, setSeePasswordState] = useState(true);

  return (
    <>
      <SafeAreaView style={{flex: 0, backgroundColor: 'black'}} />
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.content}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : ''}>
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
            }}
            keyboardShouldPersistTaps="always">
            <TouchableWithoutFeedback>
              <View style={styles.section}>
                <View style={styles.top}>
                  <Text style={styles.language}>English (Chile)</Text>
                </View>

                <View style={styles.middle}>
                  <View style={styles.logo}>
                    <Image
                      source={require('../assets/images/instagram.png')}
                      style={styles.image}
                    />
                  </View>
                  <View style={styles.inputsContainer}>
                    <TextInput
                      style={styles.inputEmail}
                      placeholder="Correo electrónico"
                      placeholderTextColor="rgba(0,0,0,0.5)"
                      keyboardType="email-address"
                      underlineColorAndroid="transparent"
                      onChangeText={email => setEmailState({email})}
                    />
                    <View style={styles.passwordContainer}>
                      <TextInput
                        ref={inputPass}
                        style={styles.inputPassword}
                        placeholder="Contraseña"
                        placeholderTextColor="rgba(0,0,0,0.5)"
                        secureTextEntry={seePasswordState}
                        underlineColorAndroid="transparent"
                        onChangeText={password => setPasswordState({password})}
                      />
                      <TouchableOpacity
                        style={{justifyContent: 'center'}}
                        onPress={() => {
                          setSeePasswordState(!seePasswordState);
                        }}>
                        <Icon
                          name={!seePasswordState ? 'ios-eye' : 'ios-eye-off'}
                          size={25}
                          color="#cccc"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.loginButton}>
                    <TouchableOpacity style={styles.button}>
                      <Text style={styles.textButton}>Log In</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.forgotPass}>
                    <Text style={styles.forgotText}>
                      Forgot your login details?{' '}
                      <Text style={styles.bold}>Get help signing in.</Text>
                    </Text>
                  </View>
                  <View style={styles.divisor}>
                    <View style={styles.line} />
                    <Text style={styles.or}> OR </Text>
                    <View style={styles.line} />
                  </View>
                  <View style={styles.multiLogin}>
                    <Icon name="logo-facebook" size={30} color="#335089" />
                    <Text style={styles.multiLoginText}>
                      Log in with Facebook
                    </Text>
                  </View>
                </View>

                <View style={styles.bottom}>
                  <Text style={styles.bottomText}>
                    Don't have an account?{' '}
                    <Text style={styles.bold}>Sign up.</Text>
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  top: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  language: {
    color: '#252525',
    opacity: 0.5,
  },
  middle: {
    width: width * 0.85,
  },
  logo: {
    width: '100%',
    height: 75,
  },
  inputsContainer: {},
  inputEmail: {
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    height: height * 0.07,
    borderWidth: 1,
    borderColor: '#cccc',
    borderRadius: 3,
    width: '100%',
    paddingHorizontal: 10,
    textAlignVertical: 'center',
    paddingVertical: 0,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccc',
    backgroundColor: '#FAFAFA',
    borderRadius: 3,
  },
  inputPassword: {
    backgroundColor: '#FAFAFA',
    height: height * 0.07,
    width: '90%',
    paddingLeft: 10,
    textAlignVertical: 'center',
    paddingVertical: 0,
  },
  seePass: {
    position: 'absolute',
    right: '3%',
  },
  image: {
    resizeMode: 'contain',
    height: 60,
    width: '100%',
  },
  loginButton: {},
  button: {
    backgroundColor: '#3D98F6',
    width: '100%',
    height: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  textButton: {
    color: 'white',
    fontWeight: '700',
  },
  forgotPass: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  forgotText: {
    fontSize: 12,
    color: '#252525',
    opacity: 0.5,
  },
  bold: {
    fontWeight: '700',
  },
  divisor: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#9999',
    width: '45%',
  },
  or: {
    color: '#9999',
    textAlignVertical: 'bottom',
    paddingBottom: 0,
    fontSize: 14,
    fontWeight: '700',
  },
  multiLogin: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  multiLoginText: {
    paddingLeft: 5,
    color: '#335089',
    fontWeight: '700',
  },
  bottom: {
    borderTopWidth: 1,
    borderTopColor: '#cccc',
    width: width,
    alignItems: 'center',
    paddingVertical: 15,
  },
  bottomText: {
    fontSize: 12,
    color: '#252525',
    opacity: 0.5,
  },
});

export default LoginScreen;
