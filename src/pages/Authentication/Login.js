import React, { PureComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';

export default class LoginScreen extends PureComponent {

  state = {
    isLoading: false
  }

  submit = () => {
    this.setState({
      isLoading: true,
    }, () => setTimeout(() => {
      this.setState({
        isLoading: false
      })

      this.props.navigation.navigate('Home');
    }, 3000))
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return (
        <Loader />
      )
    }

    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />

        <View style={styles.alignCenter}>
          <Text style={[styles.bold, styles.font24]}>Welcome back!</Text>
          <Text>Enter your credentials to login</Text>
        </View>

        <View style={{ flex: 1, padding: 32 }}>
          <Input
            label="EMAIL"
            placeholder="your email"
            iconName="envelope"
          />
          <Input
            label="PASSWORD"
            placeholder="*****"
            iconName="key"
          />
          <Button
            textContent="LOGIN"
            primary={true}
            style={{ marginTop: 16 }}
            onPress={this.submit}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  font24: {
    fontSize: 24
  },

  bold: {
    fontWeight: 'bold'
  },

  alignCenter: {
    alignItems: 'center'
  }
});
