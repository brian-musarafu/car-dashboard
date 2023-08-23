import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Float } from 'react-native/Libraries/Types/CodegenTypes'

type Props = {
    figure?: Float,
    subMessage?: string,
    uom?: string,
}

const Statistic = (props: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.detail_wrapper}>
        {/* icon */}
        <View style={styles.stat}>
            <Text style={styles.figure}>{props.figure}</Text>
            <Text style={styles.subMessage}>{props.subMessage}</Text>
        </View>
        <Text style={styles.subMessage}>{props.uom}</Text>
      </View>
    </View>
  )
}

export default Statistic

const styles = StyleSheet.create({
    wrapper:{
        margin:25,
    },
    stat:{
        marginRight: 5
    },
    detail_wrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    figure:{
        fontSize:20,
        color:'#fff',
        fontWeight:'800',
    },
    subMessage:{
        fontSize:12,
        color:'#fff',
    }
})