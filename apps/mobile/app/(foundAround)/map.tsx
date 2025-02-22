import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  Pressable,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ThemeColors } from "@/constants/Colors";

//35.2935600628583, -93.13574381577507
const INITIAL_REGION = {
  latitude: 35.2935600628583,
  longitude: -93.13574381577507,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

export default function App() {
  const [openModal, setOpenModal] = useState(false);
  const markers = [
    {
      //35.29183118218373, -93.13392559061211
      latitude: 35.29183118218373,
      longitude: -93.13392559061211,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
      name: "Alumni Office",
    },
  ];

  return (
    <View style={styles.container}>

      <Pressable style={styles.searchContainer}>
        <View style={styles.searchStyle}>
          <FontAwesome name="search" size={16} />
        </View>
      </Pressable>
      <Pressable style={styles.filterContainer}>
        <View style={styles.filterStyle}>
          <Text style={styles.filterText}>Filter</Text>
        </View>
      </Pressable>

      <View style={styles.searchAreaContainer}>
        <Pressable style={styles.searchAreaPressable}>
          <View style={styles.searchAreaStyle}>
            <Text style={styles.searchAreaText}>Search Area</Text>
          </View>
        </Pressable>
      </View>

      <MapView style={styles.map} initialRegion={INITIAL_REGION}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker}
            onPress={() => {
              setOpenModal(true);
            }}
          />
        ))}
      </MapView>
{/* 
      <View className="absolute bottom-0 items-center justify-center flex-1 w-full bg-white opacity-75 h-11 z-21">
        <Pressable className="absolute z-20 w-40 h-5 bottom-3">
          <View className="w-full h-full rounded-full bg-atu-gold-vd"></View>
        </Pressable>
      </View> */}

      <Modal visible={openModal} transparent>
        <Pressable onPress={() => { setOpenModal(false) }} style={styles.modalContainer}>
          <View style={styles.modalTransparentSpace}>
            <TouchableWithoutFeedback>
              <View style={styles.modalItemContainer}>
                <Text style={styles.modalItemTitle}>Title</Text>
                <Text style={{ opacity: 0.65 }}>Location</Text>
                <Text style={styles.modalItemDes}>
                  Description
                  adasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdad
                </Text>
                <View style={styles.modalItemBottomContainer}>
                  <Text style={styles.modalItemTime}> Date, Time</Text>
                  <Pressable>
                    <View style={styles.modalItemButtonContainer}>
                      <Text style={styles.modalItemButtonText}>Learn More</Text>
                    </View>
                  </Pressable>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </Pressable >
      </Modal >
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer:
  {
    position: 'absolute',
    zIndex: 20,
    width: 160,
    height: 32,
    top: 8,
    left: 12
  },
  searchStyle:
  {
    width: '100%',
    height: '100%',
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 999,
    borderColor: ThemeColors['gray-placeholder']
  },
  filterContainer:
  {
    position: 'absolute',
    zIndex: 20,
    width: 160,
    height: 32,
    top: 8,
    right: 12
  },
  filterStyle:
  {
    height: '100%',
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 999,
    borderColor: ThemeColors['atu-gold-vd']
  },
  filterText:
  {
    textAlign: 'center',
    color: ThemeColors['atu-gold-vd']
  },
  searchAreaContainer:
  {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
    top: 36,
    height: 44,
    zIndex: 21
  },
  searchAreaPressable:
  {
    position: 'absolute',
    zIndex: 20,
    alignItems: 'center'
  },
  searchAreaStyle:
  {
  
    height: '100%',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: ThemeColors['atu-gold-vd']
  },
  searchAreaText:
  {
    textAlign: 'center',
    color: 'white'
  },

  map: {
    width: "100%",
    height: "100%",
    zIndex: -1,
  },


  modalContainer:
  {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  modalTransparentSpace:
  {
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalItemContainer:
  {
    width: '83%',
    padding: 8,
    margin: 80,
    backgroundColor: 'white',
    borderWidth: 8,
    boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)',
    borderColor: ThemeColors['atu-green-vl'],
    borderRadius: 16,
  },
  modalItemTitle:
  {
    fontWeight: 700,
    fontSize: 24
  },
  modalItemDes:
  {
    paddingTop: 4,
    paddingBottom: 12
  },
  modalItemBottomContainer:
  {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modalItemTime:
  {
    fontWeight:700
  },
  modalItemButtonContainer:
  {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: ThemeColors['atu-gold-vd']
  },
  modalItemButtonText:
  {
    color: 'white'
  }
});
