
import { Text, View, Pressable, ScrollView, Image, StyleSheet } from "react-native";
import { Link } from 'expo-router';
import  {useState  } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import WeekGlanceModal from "@/components/weekGlanceModal"
import YourPinsModal from "@/components/yourPinsModal";
import GenericListModal from "@/components/genericListModal";

import { ThemeColors } from '@/constants/Colors';

export default function Home() {


  const [weekGlanceVisible, setWeekGlanceVisible] = useState(false)
  const [yourPinsVisible, setYourPinsVisible] = useState(false)
  const [genericListVisible, setGenericListVisible] = useState(false)
  const [genericListTitle, setGenericListTitle] = useState('')

 

  return (

    <SafeAreaView style={styles.container}>
      {/* Navigation Header */}
      <View style={styles.navigationHeaderContainer}>
        <Link href="/search" asChild style={styles.navigationHeaderLink}>
          <Pressable>
            <MaterialCommunityIcons name="magnify" size={24} color="white" />
          </Pressable>
        </Link>
        <Link href="/map" asChild style={styles.navigationHeaderLink}>
          <Pressable>
            <MaterialCommunityIcons name="map-search-outline" size={24} color="white" />
          </Pressable>
        </Link>
      </View>

      {/* Objects that scroll */}
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

        {/* Your Pins Container */}

        <View>
          <View style={{...styles.leftScrollObjectContainer, backgroundColor: ThemeColors['atu-gold-v']}}>
            <Text style={styles.scrollObjectHeaderText}>Your Pins</Text>
            <Link href="/eventDetail" asChild>
              <Pressable style={{...styles.internalScrollObjectContainer, backgroundColor: ThemeColors['atu-gold-vl']}}>
                <View><Image style={styles.scrollObjectImage} source={require('../../assets/images/Pickle.png')} /></View>
                <View style={styles.scrollObjectTextContainer}>
                  <Text numberOfLines={1} ellipsizeMode='tail' style={styles.scrollObjectTextContainerHeader}>Tidsaaaaaaaaa aaadasdadadaddatlefsghuf=gsfd</Text>
                  <Text numberOfLines={4} ellipsizeMode='tail'>Summauhifdfosgfasiofguiasfgduasgfiary</Text>
                </View>
              </Pressable>
            </Link>

            <View style={styles.scrollObjectButtonContainer}>
              <View style={styles.scrollObjectButton}>
                <Pressable onPress={() => {setYourPinsVisible(true)}}>
                  <Text style={styles.scrollObjectButtonText}>View Pins</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        {/* Week at a glance Container */}
        <View style={{alignItems: 'flex-end'}}>
          <View style={{...styles.rightScrollObjectContainer, backgroundColor: ThemeColors['atu-green-vl']}}>
            <Text style={styles.scrollObjectHeaderText}>Week at a Glance</Text>
            <Link href="/newsDetail" asChild>
              <Pressable style={{...styles.internalScrollObjectContainer, backgroundColor: ThemeColors['atu-green-vl2']}}>
                <View><Image style={styles.scrollObjectImage} source={require('../../assets/images/Pickle.png')} /></View>
                <View style={styles.scrollObjectTextContainer}>
                  <Text numberOfLines={1} ellipsizeMode='tail' style={styles.scrollObjectTextContainerHeader}>Tidsaaaaaaaaa aaadasdadadaddatlefsghuf=gsfd</Text>
                  <Text numberOfLines={4} ellipsizeMode='tail'>Summauhifdfosgfasiofguiasfgduasgfiary</Text>
                </View>
              </Pressable>
            </Link>
            <Pressable onPress={() => {setWeekGlanceVisible(true)}} style={styles.scrollObjectButtonContainer}>
              <View style={styles.scrollObjectButton}>
                <Text style={styles.scrollObjectButtonText}>View Week</Text>
              </View>
            </Pressable>
          </View>
        </View>

        {/* Popular Container */}
        <View>
          <View style={{...styles.leftScrollObjectContainer, backgroundColor: ThemeColors['atu-green-vl']}}>
            <Text style={styles.scrollObjectHeaderText}>Popular</Text>
            <Link href="/eventDetail" asChild>
              <Pressable style={{...styles.internalScrollObjectContainer, backgroundColor: ThemeColors['atu-green-vl2']}}>
              <View><Image style={styles.scrollObjectImage} source={require('../../assets/images/Pickle.png')} /></View>
                <View style={styles.scrollObjectTextContainer}>
                  <Text numberOfLines={1} ellipsizeMode='tail' style={styles.scrollObjectTextContainerHeader}>Tidsaaaaaaaaa aaadasdadadaddatlefsghuf=gsfd</Text>
                  <Text numberOfLines={4} ellipsizeMode='tail'>Summauhifdfosgfasiofguiasfgduasgfiary</Text>
                </View>
              </Pressable>
            </Link>
            <Pressable onPress={() => {setGenericListTitle('Popular'), setGenericListVisible(true)}} style={styles.scrollObjectButtonContainer}>
              <View style={styles.scrollObjectButton}>
                <Text style={styles.scrollObjectButtonText}>View Popular</Text>
              </View>
            </Pressable>
          </View>
        </View>

        {/* Whats New Container */}
        <View style={{alignItems: 'flex-end'}}>
          <View style={{...styles.rightScrollObjectContainer, backgroundColor: ThemeColors['atu-green-vl']}}>
            <Text style={styles.scrollObjectHeaderText}>Whats New</Text>
            <Link href="/eventDetail" asChild>
            <Pressable style={{...styles.internalScrollObjectContainer, backgroundColor: ThemeColors['atu-green-vl2']}}>
            <View><Image style={styles.scrollObjectImage} source={require('../../assets/images/Pickle.png')} /></View>
                <View style={styles.scrollObjectTextContainer}>
                  <Text numberOfLines={1} ellipsizeMode='tail' style={styles.scrollObjectTextContainerHeader}>Tidsaaaaaaaaa aaadasdadadaddatlefsghuf=gsfd</Text>
                  <Text numberOfLines={4} ellipsizeMode='tail'>Summauhifdfosgfasiofguiasfgduasgfiary</Text>
                </View>
            </Pressable>
            </Link>
            <Pressable onPress={() => {setGenericListTitle('Whats New'), setGenericListVisible(true)}} style={styles.scrollObjectButtonContainer}>
              <View style={styles.scrollObjectButton}>
                <Text style={styles.scrollObjectButtonText}>View New</Text>
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


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    navigationHeaderContainer:
    {
      zIndex: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 4,
      paddingVertical: 6,
      backgroundColor: ThemeColors['atu-green-headerl/.75'],
       
    },
    navigationHeaderLink:
    {
      padding: 2,
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 999,
      backgroundColor: ThemeColors['atu-green-headerl/.50']
    },

    leftScrollObjectContainer:
    {
      boxShadow: '7 7px 5px rgba(0, 0, 0, 0.2)',
      width: '75%',
      margin: 20,
      transformOrigin: 'center',
      transform: [{rotate: '3deg'}],
      shadowColor: 'black'
    },
    rightScrollObjectContainer:
    {
      boxShadow: '-7 7px 5px rgba(0, 0, 0, 0.2)',
      width: '75%',
      margin: 20,
      transformOrigin: 'center',
      transform: [{rotate: '-3deg'}],
      shadowColor: 'black'
    },
    scrollObjectHeaderText:
    {
      paddingTop: 12,
      paddingLeft: 20,
      fontSize: 24,
      fontWeight: 700,
    },

    internalScrollObjectContainer:
    {
      alignItems: 'center',
      flexDirection: 'row',
      height: 96, 
      padding: 4,
      margin: 8,
      verticalAlign: 'middle',
      borderRadius: 8,
    },
    scrollObjectImage:
    {
      height: '75%',
      aspectRatio: 1/1,
    },
    scrollObjectTextContainer:
    {
      justifyContent: 'flex-start',
      width: '80%',
      padding: 8,
    },
    scrollObjectTextContainerHeader:
    {
      fontSize: 18,
      fontWeight: 700
    },

    scrollObjectButtonContainer:
    {
      alignItems: 'flex-end',
      paddingHorizontal: 8,
      paddingBottom: 8
    },
    scrollObjectButton:
    {
      paddingHorizontal: 20,
      borderRadius: 999,
      backgroundColor: ThemeColors['atu-gold-vd']
    },
    scrollObjectButtonText:
    {
      fontSize:16,
      fontWeight: 700,
      color: 'white' 
    }
})