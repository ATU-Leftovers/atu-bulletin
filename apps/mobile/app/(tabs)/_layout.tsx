import { Home, Calendar, Users, User } from "@/components/icons"
import { Tabs } from "expo-router"
import { JSX } from "react"

interface Screen {
    route: string
    title: string
    icon: ({ size, color }: { size: number; color: string }) => JSX.Element
}

const screens: Screen[] = [
    {
        route: "home/index",
        title: "Home",
        icon: ({ size, color }) => <Home size={size} color={color} />
    },
      {
        route: "events/index",
        title: "Events",
        icon: ({ size, color }) => <Calendar size={size} color={color} />
      },
      {
        route: "organizations/index",
        title: "Organizations",
        icon: ({ size, color }) => <Users size={size} color={color} />
      },
      {
        route: "profile/index",
        title: "Profile",
        icon: ({ size, color }) => <User size={size} color={color} />
      }
]

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#ffcd00',
            tabBarInactiveTintColor: '#fff',
            tabBarStyle: { backgroundColor: '#4b7f52' },
            tabBarLabelStyle: { fontWeight: 'bold' }
        }}>
            {screens.map((screen) => (
                <Tabs.Screen
                    key={screen.route}
                    name={screen.route}
                    options={{
                        title: screen.title,
                        tabBarIcon: ({ color }) => {
                            return <screen.icon size={24} color={color} />;
                        },
                    }}
                />
            ))}
        </Tabs>
    );
}