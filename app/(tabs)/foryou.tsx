import { useColorScheme } from "react-native"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Suggested from "../suggested";
import Library from "../library";
import Liked from "../liked";
import { Colors } from "@/constants/Colors";
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";

const Tab = createMaterialTopTabNavigator();

export default function ForYou () {
    const theme = useColorScheme() ?? "light";

    return (
        <ThemedSafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator
                initialRouteName="Library"
                screenOptions={{
                tabBarActiveTintColor: (theme === "light") ? "black" : "white",
                tabBarInactiveTintColor: 'gray',
                tabBarPressColor: "#e67e22",
                tabBarLabelStyle: { fontSize: 15, fontWeight: 500 },
                tabBarStyle: { backgroundColor: (theme === "light") ? Colors.light.background : Colors.dark.background },
                tabBarIndicatorStyle: { backgroundColor: "#e67e22" }
                }}
            >
                <Tab.Screen name="Suggested" component={Suggested} />
                <Tab.Screen name="Library" component={Library} />
                <Tab.Screen name="Liked" component={Liked} />
            </Tab.Navigator>
        </ThemedSafeAreaView>
    )
}
