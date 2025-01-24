import { useEffect } from 'react'
import { router } from 'expo-router'
import { supabase } from '@/lib/supabase'

export default function LandingScreen() { 
  useEffect(() => {
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        if (session) {
          router.replace('/(tabs)/home')
        }
      })

    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.replace('/(tabs)/home')
      } else {
        router.replace('/(auth)/login')
      }
    })
  }, [])
}