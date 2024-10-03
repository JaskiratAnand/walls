import { View, Text, Button } from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import library from "../library";
import liked from "../liked";

const Tab = createMaterialTopTabNavigator();

export default function ForYou () {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Suggested" component={HomeScreen} />
            <Tab.Screen name="Library" component={library} />
            <Tab.Screen name="Liked" component={liked} />
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