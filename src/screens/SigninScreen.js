import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import {Button, Text, Input} from 'react-native-elements';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text h4 style={styles.titleText}>
          SignIn for Trackers
        </Text>
        <View style={styles.emailPasswordWrapper}>
          <Input
            disabledInputStyle={{background: 'yellow'}}
            inputContainerStyle={styles.inputContainerStyle}
            errorMessage={emailError}
            inputStyle={styles.inputStyle}
            label="Email"
            labelStyle={styles.labelStyle}
            placeholder="Enter Email"
            value={email}
            onChangeText={txt => {
              setEmail(txt);
            }}
          />

          <Input
            disabledInputStyle={{background: '#ddd'}}
            inputContainerStyle={styles.inputContainerStyle}
            errorMessage={passwordError}
            inputStyle={styles.inputStyle}
            label="Password"
            labelStyle={styles.labelStyle}
            placeholder="Enter Password"
            value={password}
            onChangeText={txt => {
              setPassword(txt);
            }}
            secureTextEntry
          />
          <Button
            containerStyle={styles.SignInButton}
            onPress={() => alert('click')}
            title="Sign In"
          />
          <View style={styles.textWrapper}>
            <Text style={{...styles.textStyle}}>
              Don't have an account?{'\n'}
            </Text>
            <View style={styles.signUpButtonWrapper}>
              <Text style={{...styles.textStyle}}>Go back to</Text>
              <Button
                onPress={() => navigation.navigate('Signup')}
                title="Sign Up"
                titleStyle={styles.signUpButtonTitle}
                type="clear"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: '25%',
    marginHorizontal: '10%',
  },
  titleText: {
    fontWeight: 'bold',
    marginHorizontal: '3%',
  },
  emailPasswordWrapper: {
    marginTop: '10%',
  },
  emailPasswordText: {
    fontWeight: 'bold',
  },
  inputContainerStyle: {borderWidth: 1, marginTop: '2%', borderColor: 'black'},
  inputStyle: {marginLeft: '2%', fontWeight: 'bold'},
  labelStyle: {color: 'black'},
  SignInButton: {margin: 5},
  textStyle: {
    color: 'blue',
    fontSize: 15,
    justifyContent: 'center',
    alignContent: 'center',
  },
  textWrapper: {alignItems: 'center', marginTop: '5%'},
  signUpButtonTitle: {
    fontSize: 15,
    color: 'blue',
  },
  signUpButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -25,
  },
});

export default SignInScreen;
