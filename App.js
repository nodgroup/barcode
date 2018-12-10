import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import dbLayer from './dbLayer'

import HomeScreen from './screens/HomeScreen'
import History from './History'

export default class App extends React.Component {
  componentDidMount() {
    dbLayer.createTableIfNotExists()
  }

  render() {
    return (
      <View style={styles.container}>
        <HomeScreen>
          <History />
        </HomeScreen>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
})
