import { Colors } from '@/constants/Colors';
import FontAwesome from '@expo/vector-icons/FontAwesome6';
import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function TabLayout() {
  const theme = useColorScheme() ?? "light";

    return (
        <Tabs 
            screenOptions={{ 
                tabBarActiveTintColor: "#e67e22",
                headerShown: false,
                tabBarStyle: { 
                backgroundColor: theme === "light" ? Colors.light.background : Colors.dark.background,
                borderTopColor: 'transparent',
                },
            }}
        >
            <Tabs.Screen
                name="foryou"
                options={{
                title: 'For You',
                tabBarIcon: ({ color }) => <FontAwesome size={24} name="house" color={color} />,
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                title: 'Explore',
                tabBarIcon: ({ color }) => <FontAwesome size={24} name="earth-americas" color={color} />,
                }}
            />
            <Tabs.Screen
                name="account"
                options={{
                title: 'Account',
                tabBarIcon: ({ color }) => <FontAwesome size={24} name="user" color={color} />,
                }}
            />
        </Tabs>
    );
}
