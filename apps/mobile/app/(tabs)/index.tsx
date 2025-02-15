
import { Text, View, Pressable, ScrollView, Modal, Image } from "react-native";
import { Link } from 'expo-router';
import  {useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import WeekGlanceModal from "@/components/weekGlanceModal"
import YourPinsModal from "@/components/yourPinsModal";
import GenericListModal from "@/components/genericListModal";

export default function Home() {


  const [weekGlanceVisible, setWeekGlanceVisible] = useState(false)
  const [yourPinsVisible, setYourPinsVisible] = useState(false)
  const [genericListVisible, setGenericListVisible] = useState(false)
  const [genericListTitle, setGenericListTitle] = useState('')

 

  return (

    <SafeAreaView className="flex-1 ">
      {/* Navigation Header */}
      <View className="z-10 flex-row justify-between py-1 bg-atu-green-headerl/75">
        <Link href="/search" asChild className="p-1 border-2 border-white rounded-full left-3 bg-atu-green-headerl/50">
          <Pressable>
            <MaterialCommunityIcons name="magnify" size={24} color="white" />
          </Pressable>
        </Link>
        <Link href="/map" asChild className="p-1 border-2 border-white rounded-full right-3 bg-atu-green-headerl/50">
          <Pressable>
            <MaterialCommunityIcons name="map-search-outline" size={24} color="white" />
          </Pressable>
        </Link>
      </View>

      {/* Objects that scroll */}
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">

        {/* Your Pins Container */}

        <View className="items-start">
          <View style={{ boxShadow: '7 7px 5px rgba(0, 0, 0, 0.2)' }} className="w-9/12 m-5 origin-center rotate-3 shadow-black bg-atu-gold-v ">
            <Text className="pt-3 pl-5 text-2xl font-bold">Your Pins</Text>
            <Link href="/eventDetail" asChild>
              <Pressable style={{ alignItems: 'center' }} className="flex flex-row h-24 p-2 m-2 align-middle rounded-md bg-atu-gold-vl">
                <View><Image className="bg-gray-600 h-3/4 aspect-square" source={require('../../assets/images/Pickle.png')} /></View>
                <View className="justify-start w-4/5 p-2">
                  <Text numberOfLines={1} ellipsizeMode='tail' className="text-lg font-bold">Tidsaaaaaaaaa aaadasdadadaddatlefsghuf=gsfd</Text>
                  <Text numberOfLines={4} ellipsizeMode='tail'>Summauhifdfosgfasiofguiasfgduasgfiary</Text>
                </View>
              </Pressable>
            </Link>

            <View className='items-end px-2 pb-2'>
              <View className="px-5 rounded-full bg-atu-gold-vd">
                <Pressable onPress={() => {setYourPinsVisible(true)}}>
                  <Text className="text-base font-bold text-white">View Pins</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        {/* Week at a glance Container */}
        <View className="items-end">
          <View style={{ boxShadow: '-7 7px 5px rgba(0, 0, 0, 0.2)' }} className="float-right w-9/12 m-5 -rotate-3 shadow-black bg-atu-green-vl">
            <Text className="pt-3 pl-5 text-2xl font-bold">Week at a Glance</Text>
            <Link href="/newsDetail" asChild>
              <Pressable style={{ alignItems: 'center' }} className="flex flex-row h-24 p-2 m-2 rounded-md bg-atu-green-vl2">
                <View><Image className="bg-gray-600 h-3/4 aspect-square" source={require('../../assets/images/Pickle.png')} /></View>
                <View className="justify-start w-4/5 p-2">
                  <Text numberOfLines={1} ellipsizeMode='tail' className="text-lg font-bold">Tidsaaaaaaaaa aaadasdadadaddatlefsghuf=gsfd</Text>
                  <Text numberOfLines={4} ellipsizeMode='tail'>Summauhifdfosgfasiofguiasfgduasgfiary</Text>
                </View>
              </Pressable>
            </Link>
            <Pressable onPress={() => {setWeekGlanceVisible(true)}} className='items-end px-2 pb-2'>
              <View className="px-5 rounded-full bg-atu-gold-vd">
                <Text className="text-base font-bold text-white">View Week</Text>
              </View>
            </Pressable>
          </View>
        </View>

        {/* Popular Container */}
        <View className="items-start">
          <View style={{ boxShadow: '7 7px 5px rgba(0, 0, 0, 0.2)' }} className="object-right w-9/12 m-5 rotate-3 shadow-black bg-atu-green-vl ">
            <Text className="pt-3 pl-5 text-2xl font-bold">Popular</Text>
            <Link href="/eventDetail" asChild>
              <Pressable style={{ alignItems: 'center' }} className="flex flex-row h-24 p-2 m-2 rounded-md bg-atu-green-vl2">
              <View><Image className="bg-gray-600 h-3/4 aspect-square" source={require('../../assets/images/Pickle.png')} /></View>
                <View className="justify-start w-4/5 p-2">
                  <Text numberOfLines={1} ellipsizeMode='tail' className="text-lg font-bold">Tidsaaaaaaaaa aaadasdadadaddatlefsghuf=gsfd</Text>
                  <Text numberOfLines={4} ellipsizeMode='tail'>Summauhifdfosgfasiofguiasfgduasgfiary</Text>
                </View>
              </Pressable>
            </Link>
            <Pressable onPress={() => {setGenericListTitle('Popular'), setGenericListVisible(true)}} className='items-end px-2 pb-2'>
              <View className="px-5 rounded-full bg-atu-gold-vd">
                <Text className="text-base font-bold text-white">View Popular</Text>
              </View>
            </Pressable>
          </View>
        </View>

        {/* Whats New Container */}
        <View className="items-end">
          <View style={{ boxShadow: '-7 7px 5px rgba(0, 0, 0, 0.2)' }} className="object-right w-9/12 m-5 -rotate-3 shadow-black bg-atu-green-vl ">
            <Text className="pt-3 pl-5 text-2xl font-bold">Whats New</Text>
            <Link href="/eventDetail" asChild>
            <Pressable style={{ alignItems: 'center' }} className="flex flex-row h-24 p-2 m-2 rounded-md bg-atu-green-vl2">
            <View><Image className="bg-gray-600 h-3/4 aspect-square" source={require('../../assets/images/Pickle.png')} /></View>
                <View className="justify-start w-4/5 p-2">
                  <Text numberOfLines={1} ellipsizeMode='tail' className="text-lg font-bold">Tidsaaaaaaaaa aaadasdadadaddatlefsghuf=gsfd</Text>
                  <Text numberOfLines={4} ellipsizeMode='tail'>Summauhifdfosgfasiofguiasfgduasgfiary</Text>
                </View>
            </Pressable>
            </Link>
            <Pressable onPress={() => {setGenericListTitle('Whats New'), setGenericListVisible(true)}} className='items-end px-2 pb-2'>
              <View className="px-5 rounded-full bg-atu-gold-vd">
                <Text className="text-base font-bold text-white">View New</Text>
              </View>
            </Pressable>
          </View>
        </View>

        <GenericListModal isVisible={genericListVisible} close={()=>{setGenericListVisible(false)}} title={genericListTitle}/>
        <YourPinsModal isVisible={yourPinsVisible} close={()=>{setYourPinsVisible(false)}}/>
        <WeekGlanceModal isVisible={weekGlanceVisible} close={()=>{setWeekGlanceVisible(false)}}/>
      </ScrollView>
    </SafeAreaView>
  );
}
