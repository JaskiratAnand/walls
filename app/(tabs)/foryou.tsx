import { View, Text, Button } from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function ForYou () {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Suggested" component={HomeScreen} />
            <Tab.Screen name="Liked" component={SettingsScreen} />
            <Tab.Screen name="Library" component={SettingsScreen} />
        </Tab.Navigator>
    )
}

function HomeScreen() {
    return (
      <View>
        <Text>Home!</Text>
      </View>
    );
}

function SettingsScreen() {
    return (
      <View>
        <Text>Settings!</Text>
      </View>
    )
}