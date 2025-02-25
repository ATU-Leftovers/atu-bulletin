import { useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';






const dark = {
    'theme' : '#343434',
    'DWhiteLBlack' : '#ffffff',
    'DBlackLWhite' : '#000000',
    'atu-gold': '#ffcd00',
    'atu-green': '#115740',
    'atu-green-headerl': '#4b7f52',
    'atu-green-headerl/.75': '#4b7f52bf',
    'atu-green-headerl/.50': '#4b7f5280',
    'atu-green-vl': '#578a65',
    'atu-green-vl2' : '#76a884',
    'atu-gold-vl': '#d5b23f',
    'atu-gold-v': '#c49f2a',
    'atu-gold-vd': '#ddb42e',
    'gray-placeholder' : '#6c6d72',
    'gray' : '#6b7280',
    'red' : '#D22B2B'
}

const light = {
    'theme' : '#ffffff',
    'DWhiteLBlack' : '#000000',
    'DBlackLWhite' : '#ffffff',
    'atu-gold': '#ffcd00',
    'atu-green': '#115740',
    'atu-green-headerl': '#4b7f52',
    'atu-green-headerl/.75': '#4b7f52bf',
    'atu-green-headerl/.50': '#4b7f5280',
    'atu-green-vl': '#8db798',
    'atu-green-vl2' : '#a5c6ae',
    'atu-gold-vl': '#e9d79b',
    'atu-gold-v': '#ddbf5f',
    'atu-gold-vd': '#d4af37',
    'gray-placeholder' : '#6c6d72',
    'gray' : '#6b7280',
    'red' : '#D22B2B'
}


export const ThemeColors = (theme: string | null | undefined) => {
    
    if(theme == 'light')
    {
        return light
    }
    else{
        return dark
    }
}




