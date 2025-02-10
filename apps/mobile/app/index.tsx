import { supabase } from "@/lib/supabase";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

/**
 * Attemps to onboard the user by fetching their Supabase session.
 * 
 * If their session exists (existing user), then redirect them to the home page.
 * Otherwise, show the onboarding view.
 */
export default function UserOnboardingScreen() {
  const [shouldOnboard, setShouldOnboard] = useState<boolean | null>(null)
  
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        router.replace('/(tabs)/home')
      } else {
        setShouldOnboard(true)
      }
    });

    return () => {
      listener.subscription.unsubscribe();
    }
  }, [])

  return (
    <View>
      <Text>Welcome to ATU Bulletin</Text>

      {shouldOnboard && (
        <Button
          onPress={() => router.replace('/(auth)/login')}
          title="Get Started"
        />
      )}
    </View>
  )
}