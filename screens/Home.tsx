import React from 'react';
import { View, Text, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import tw from 'twrnc';
import SpotifyPlayer from 'react-spotify-player';
import Statistic from '../components/Statistic';

const Home = () => {
  const size = {
    width: '100%',
    height: '100%',
  };
  const view = 'coverart'; // or 'coverart'
  const theme = 'black'; // or 'white'

  return (
    <View style={tw`flex`}>
      <View style={tw`flex-row justify-between`}>
        <View style={tw`w-3.4/10 p-6 bg-gray-800 rounded-lg`}>
          <View style={tw`justify-center items-center`}>
            <Image
              source={{
                uri:
                  'https://th.bing.com/th/id/R.bc160016b3c363a3e858ef296c50a59c?rik=%2fp1h%2foAkMqYwgg&pid=ImgRaw&r=0',
              }}
              style={tw`h-16 object-cover w-36`}
            />
            <View style={tw`flex-row justify-between mt-2`}>
              <Text style={tw`text-white font-bold text-xl`}>Honda Fit</Text>
            </View>
            <Progress.Bar progress={0.7} width={400} height={10} animationType='timing' color='#34bd6d' unfilledColor='#271c23' borderWidth={0}/>
            <View style={tw`flex-row`}>
              <Statistic figure={204.5} subMessage='Remaining' uom='km'/>
              <Statistic figure={128.7} subMessage='Average' uom='Wh/km'/>
              <Statistic figure={35.8} subMessage='Full capacity' uom='kWh'/>
            </View>
            {/* Other components */}
          </View>
        </View>
        <View style={tw`w-6.5/10 p-6 rounded-lg`}>
          <View style={tw`w-[100%] h-[300px] bg-gray-500 mb-5`}>
            <Text style={tw`text-white font-bold text-3xl`}>Google Map</Text>
          </View>
          <View style={tw`flex-row`}>
            <View style={tw`bg-gray-500 h-48 rounded-lg w-1/2 p-4`}>
              <SpotifyPlayer
                uri="https://open.spotify.com/playlist/4HXMPRVKOAfzoUwws8fqHW?si=d023c852298d4024"
                size={size}
                view={view}
                theme={theme}
              />
            </View>
            <View style={tw`bg-gray-500 h-48 rounded-lg w-1/2 p-4`} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
