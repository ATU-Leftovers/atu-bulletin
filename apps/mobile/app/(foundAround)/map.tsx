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

      <Pressable className="absolute z-20 w-40 h-8 top-2 left-3">
        <View className="w-full h-full px-3 py-1 bg-white border-2 rounded-full border-gray-placeholder">
          <FontAwesome name="search" size={16} />
        </View>
      </Pressable>
      <Pressable className="absolute z-20 w-40 h-8 top-2 right-3">
        <View className="h-full px-3 py-1 bg-white border-2 rounded-full border-atu-gold-vd">
          <Text className="text-center text-atu-gold-vd">Filter</Text>
        </View>
      </Pressable>

      <View className="absolute items-center justify-center flex-1 w-full top-9 h-11 z-21">
        <Pressable className="absolute z-20 items-center">
          <View className="w-1/2 h-full px-3 py-1 rounded-full bg-atu-gold-vd">
            <Text className="text-center text-white">Search Area</Text>
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

      <View className="absolute bottom-0 items-center justify-center flex-1 w-full bg-white opacity-75 h-11 z-21">
        <Pressable className="absolute z-20 w-40 h-5 bottom-3">
          <View className="w-full h-full rounded-full bg-atu-gold-vd"></View>
        </Pressable>
      </View>

      <Modal visible={openModal} transparent>
        <Pressable onPress={() => { setOpenModal(false) }} className="items-center justify-center flex-1">
          <View className=" bg-gray-100/50">
            <TouchableWithoutFeedback>
              <View className="w-10/12 p-2 m-20 bg-white border-8 shadow-2xl border-atu-green-vl rounded-2xl shadow-black">
                <Text className="text-2xl font-bold">Title</Text>
                <Text style={{ opacity: 0.65 }}>Location</Text>
                <Text className="pt-1 pb-3">
                  Description
                  adasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdadadasdasdasdad
                </Text>
                <View
                  className="flex-row"
                  style={{ justifyContent: "space-between" }}
                >
                  <Text className="font-bold"> Date, Time</Text>
                  <Pressable>
                    <View className="px-3 py-1 rounded-full bg-atu-gold-vd">
                      <Text className="text-white">Learn More</Text>
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
  map: {
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  actionButton: {
    position: "absolute",
    width: 20,
    height: 20,
    bottom: 10,
    justifyContent: "center",
    zIndex: 999,
  },
});
