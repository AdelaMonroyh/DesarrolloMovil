import {Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles';
const Buttons = ({value,color,size,colorText,icon,fun}) => {
  return (
    <TouchableOpacity onPress={()=>fun()} style={[styles.button, { backgroundColor: color,width:size }]}>
        <Text style={[{color:colorText},styles.text]}>{icon || value}</Text>
    </TouchableOpacity>
  )
}

export default Buttons