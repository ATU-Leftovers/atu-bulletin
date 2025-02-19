import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, { useEffect, useState } from 'react';
import { ThemeColors } from '@/constants/Colors';

type propValue =
    {
        data: []
        title: string;
        backgroundColor: 'atu-green-vl' | 'atu-gold-vl';
    }

export default function ListingComponent(props: propValue) {
    return (
        <>
            < View style={{ ...styles.flatListContainer, backgroundColor: ThemeColors[props.backgroundColor] }} >
                <Text style={styles.flatListHeader}>{props.title}</Text>
                {props.data.length == 0 && (
                    <View style={styles.flatListNoItemContainer}>
                        <Text >No {props.title}</Text>
                    </View>
                )}
                {props.data.length != 0 && (
                    <FlatList
                        style={styles.flatListStyle}
                        data={props.data}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            //Last Item Redirectr
                            if (index == props.data.length - 1) {
                                return (
                                    <View style={styles.flatListItemLastContainer}>
                                        <MaterialCommunityIcons name="plus-thick" size={24} color="white" />
                                        <Text style={styles.flatListItemLastText}>View More</Text>
                                    </View>
                                )
                            }
                            //Render Regular Items
                            else {
                                return (
                                    <View style={styles.flatListItemContainer}>
                                        <Image style={styles.flatListItemImage} source={require('../assets/images/Pickle.png')} />
                                        <View style={styles.flatListItemTextContainer}>
                                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.flatListItemDarkerText}>Autddddddddddddddddddddddddddddddddddddddddadsahor</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.flatListItemText}>Titdwadwwwwwwwwwwwwwwwwwwwwwwwwwwwwwle</Text>
                                            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.flatListItemDarkerText}>Publish:Date, Timewwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww</Text>
                                        </View>
                                    </View>
                                )
                            }
                        }}
                    />
                )}
            </View >
        </>
    )
}


const styles = StyleSheet.create({
    flatListContainer:
    {
        paddingVertical: 8,
        marginTop: 16,

        boxShadow: '0 7px 5px rgba(0, 0, 0, 0.2)',
    },
    flatListNoItemContainer:
    {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        width: '66%',
        padding: 16,
        margin: 20,
        borderRadius: 4,
        backgroundColor: 'white',
        height: 90

    },


    flatListHeader:
    {
        paddingLeft: 16,
        fontWeight: 900,
        color: 'white',
        fontSize: 18
    },
    flatListStyle:
    {
        paddingVertical: 4
    },
    flatListItemLastContainer:
    {
        backgroundColor: ThemeColors['gray'],
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
        height: 182,
        width: 112
    },
    flatListItemLastText:
    {
        fontWeight: 700,
        color: 'white'
    },
    flatListItemContainer:
    {
        marginLeft: 16,
        backgroundColor: ThemeColors['gray'],
        height: 182,
        width: 112

    },
    flatListItemImage:
    {
        height: 112,
        aspectRatio: 1 / 1
    },
    flatListItemTextContainer:
    {
        height: '100%',
        gap: 4,
        padding: 4
    },
    flatListItemDarkerText:
    {
        color: '#e5e7eb',
        fontSize: 12,
    },
    flatListItemText:
    {
        color: 'white',
        fontSize: 12,
    }
})