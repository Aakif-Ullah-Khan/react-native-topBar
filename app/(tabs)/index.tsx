import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const index = () => {
  return (
    <View style={styles.container}>
      <Link href="/details">Details</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})