import React from 'react';
import { View, Text, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import tw from 'twrnc';
import SpotifyPlayer from 'react-spotify-player';
import Statistic from '../components/Statistic';
import Icons from '../components/Icons';
import { isLoaded, useFonts } from 'expo-font';


const Home = () => {
  const size = {
    width: '100%',
    height: '100%',
  };
  const [isLoaded]=useFonts({
    Sfui:require('../assets/fonts/sfui-regular.ttf'),
  })
  if (!isLoaded){
    return null;
  }
  if (isLoaded){
    console.log("Font Loaded")
  }
  else{
    console.log("Font Not Loaded")
  }
  const view = 'coverart'; // or 'coverart'
  const theme = 'black'; // or 'white'

  return (
    <View style={tw`flex`}>
      <View style={tw`flex-row justify-between`}>
        <View style={tw`w-3.95/10 bg-gray-800 rounded-2xl`}>
          <View style={tw`justify-center items-center`}>
            <Image
              source={{
                uri:
                  'https://th.bing.com/th/id/R.bc160016b3c363a3e858ef296c50a59c?rik=%2fp1h%2foAkMqYwgg&pid=ImgRaw&r=0',
              }}
              style={tw`object-cover mt-5 w-60 h-24 rounded-none`}
            />
            <View style={tw`flex-row justify-between mt-2`}>
              <Text style={tw`text-white font-medium text-xl mb-5 mt-5 text-sm`}>Honda Fit</Text>
            </View>
            <Progress.Bar progress={0.7} width={400} height={10} animationType='timing' color='#34bd6d' unfilledColor='#271c23' borderWidth={0}/>
            <View style={tw`flex-row`}>
              <Statistic figure={204.5} subMessage='Remaining' uom='km'/>
              <Statistic figure={128.7} subMessage='Average' uom='Wh/km'/>
              <Statistic figure={35.8} subMessage='Full capacity' uom='kWh'/>
            </View>
            {/* Other components */}
            <View style={tw`flex-row justify-between`}>
              {/* Status and accessories */}
              <View style={tw`flex-[0.5] text-left p-5 bg-gray-500 rounded-2xl`}>
                <Text style={tw`text-white font-medium text-sm mb-5`}>Speed</Text>
                <Text style={tw`text-white font-bold font-Sfui text-7xl mb-5 tracking-[-4px]`}>103</Text>
                <Text style={tw`text-white font-medium text-sm`}>km/h</Text>
              </View>
              {/* Status and accessories */}
              <View style={tw``}>
                <View style={tw`flex-[0.5]`}>
                  <Icons url='./assets/icons/abs.png'/>
                  <Icons url='./assets/icons/abs.png'/>
                  <Icons url='./assets/icons/abs.png'/>
                  <Icons url='./assets/icons/abs.png'/>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={tw`w-5.9/10`}>
          <View style={tw`w-[100%] h-[300px] bg-gray-500 mb-5 rounded-2xl`}>
            <Text style={tw`text-white font-bold text-3xl`}>Google Map</Text>
          </View>
          <View style={tw`flex-row justify-between`}>
            <View style={tw`bg-gray-500 rounded-2xl w-4.9/10`}>
              <SpotifyPlayer
                uri="https://open.spotify.com/playlist/4HXMPRVKOAfzoUwws8fqHW?si=d023c852298d4024"
                size={size}
                view={view}
                theme={theme}
              />
            </View>
            <View style={tw`bg-gray-500 h-48 rounded-2xl w-4.9/10 p-4`}></View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
