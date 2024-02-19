import { View,TextInput } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'
const Screen = ({value}) => {
    return (
        <View style={styles.textContainer}>
            <TextInput placeholder='0' value={value} style={styles.textInput} />
        </View>
    )
}

export default Screen