import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';

type Props = {
    url?: string,
}

const Icons = (props: Props) => {
  return (
    <View style={tw`h-50 w-50`}>
      <Image
        source={{
          uri:props.url,
        }}
        // style={tw`object-cover w-[10px] h-[200px]`}
        />
    </View>
  )
}

export default Icons