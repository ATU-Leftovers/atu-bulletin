import React, { useEffect, useState } from "react";
import { Tabs } from "expo-router";

import { CalendarIcon, HomeIcon, UserIcon, UsersIcon } from "lucide-react-native"
import { supabase } from "@/lib/supabase";
import { Image } from "react-native";

interface Screen {
    route: string
    title: string
    icon: ({ size, color }: { size: number; color: string }) => JSX.Element
}

const screens: Screen[] = [
    {
        route: "home",
        title: "Home",
        icon: ({ size, color }) => <HomeIcon size={size} color={color} />
    },
    {
        route: "events",
        title: "Events",
        icon: ({ size, color }) => <CalendarIcon size={size} color={color} />
    },
    {
        route: "organizations/index",
        title: "Organizations",
        icon: ({ size, color }) => <UsersIcon size={size} color={color} />
    },
    {
        route: "profile",
        title: "Profile",
        icon: ({ size, color }) => <UserIcon size={size} color={color} />
    }
]

export default function TabsLayout() {
    const [profileImageUrl, setProfileImageUrl] = useState<string | null>(null)
    
    useEffect(() => {
        async function fetchProfileImage() {
            const { data: { user }, error } = await supabase.auth.getUser()

            if (error) {
                console.log("🔥 ~ fetchProfileImage:", error)
                return;
            }

            if (user) {
                setProfileImageUrl(user.user_metadata.avatar_url)
            }
        }

        fetchProfileImage()
    }, [])

    return (
        <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#ffcd00', tabBarInactiveTintColor: '#fff', tabBarStyle: { backgroundColor: '#4b7f52' }, tabBarLabelStyle: { fontWeight: 'bold' } }}>
            {screens.map((screen) => (
                <Tabs.Screen 
                    key={screen.route}
                    name={screen.route}
                    options={{
                        title: screen.title,
                        tabBarIcon: ({ color }) => {
                            if (screen.route === "profile" && profileImageUrl) {
                                return (
                                    <Image source={{ uri: profileImageUrl }} style={{ width: 24, height: 24, borderRadius: 12 }} />
                                )
                            }

                            return <screen.icon size={24} color={color} />
                        }
                    }}
                />

            ))}

            {/* Trick to exclude routes from the tab bar */}
            <Tabs.Screen name="organizations/[id]" options={{ href: null }}/>
        </Tabs>
    )
}