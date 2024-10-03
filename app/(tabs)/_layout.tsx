import FontAwesome from '@expo/vector-icons/FontAwesome6';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
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
