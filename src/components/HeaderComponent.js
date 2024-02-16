import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HeaderComponent = ({goBack, text}) => {
   const navigation = useNavigation()
  return (
    <View>
        <TouchableOpacity onPress={!!goBack? goBack:()=>navigation.goBack()} >
      <Text>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({})