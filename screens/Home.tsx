import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Progress from 'react-native-progress';
import Statistic from '../components/Statistic';
import tw from 'twrnc';

type Props = {}

const Home = (props: Props) => {
  return (
    <View>
      <View style={styles.main_container}>
        <View className="left" style={styles.container_left}>
            <View style={styles.leftInnerTop}>
              <img 
                src="https://th.bing.com/th/id/R.bc160016b3c363a3e858ef296c50a59c?rik=%2fp1h%2foAkMqYwgg&pid=ImgRaw&r=0" height={100} width={200}/>
              <View style={styles.inner_container}>
                  <Text style={styles.h1}>Honda Fit</Text>
                  {/* <CircleInformation/> */}
              </View>
              <View>
              <Progress.Bar progress={0.7} width={400} height={10} animationType='timing' color='#34bd6d' unfilledColor='#271c23' borderWidth={0}/>
              </View>
              <View style={styles.states}>
                <Statistic figure={204} subMessage='Remaining' uom='km'/>
                <Statistic figure={128} subMessage='Average' uom='Wh/km'/>
                <Statistic figure={35} subMessage='Full capacity' uom='kwH'/>
              </View>
            </View>
        </View>
        <View className="right" style={styles.container_right}>
          <Text style={tw`text-gray-500`}>Testing tailwind</Text>
        </View>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  main_container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
   
  },
  container_left: {
    flex: 0.33,
    padding:30,
    backgroundColor: '#35363f',
    borderRadius:20,
  },
  inner_container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20,
  },
  container_right:{
    flex: 0.65,
    padding:30,
    backgroundColor: 'red',
    borderRadius:20,
  },
  leftInnerTop:{
    justifyContent:'center',
    alignItems:'center',
  },

  h1:{
    fontSize:20,
    fontWeight:'800',
    fontFamily:'sans-serif',
    color:'white',
  },
  leftInnerBottom:{

  },
  states:{
    flexDirection:'row',
    // justifyContent:'space-around',
    // marginTop:20,

  }

})