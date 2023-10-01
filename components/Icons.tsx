import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';

type Props = {
    url?: string,
}

const Icons = (props: Props) => {
  return (
    <View>
      <Image
        source={{
          uri:props.url,
        }}
        style={tw`object-cover w-[50px] h-[50px]`}
        />
    </View>
  )
}

export default Icons