import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <View style={styles.container}>
      <Link href="/details" asChild>
        <Text style={{ fontSize: 14, color:"#0020f1ff" }}>Detail page</Text>
      </Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})