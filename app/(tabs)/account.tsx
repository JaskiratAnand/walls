import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FontAwesome6 } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { View, Text, useColorScheme, Pressable, StyleSheet, Appearance, ColorSchemeName } from "react-native"
import AccountInfo from "../(nobottombar)/accountInfo";
import { Colors } from "@/constants/Colors";

export default function Account () {

    return (
        <ThemedSafeAreaView  style={{ flex: 1 }}>
            <ThemedView style={{ flex: 1 }}>
                <Topbar />
                <View style={styles.authContainer}>
                    <AuthButton label={"Sign in"} icon={"google"} />
                    <AuthButton label={"Sign in"} icon={"envelope"}  />
                </View>
                <ThemedView style={{marginTop: 10, paddingVertical: 20, paddingHorizontal: 30}}>
                    <ThemedText style={styles.settingsText}>Settings</ThemedText>
                    <ThemeSelector />
                </ThemedView>
                <ThemedView style={{ paddingHorizontal: 30 }}>
                    <ThemedText style={{textAlign: "center", fontWeight: "300"}}>Walls copyright 2024,</ThemedText>
                    <ThemedText style={{textAlign: "center", fontWeight: "300"}}>Walls Wallpaper Mobile App LLC.</ThemedText>
                </ThemedView>
                <ThemedView style={{ paddingHorizontal: 30, paddingVertical: 30 }}>
                    <ThemedText style={styles.settingsText}>About</ThemedText>
                    <About />
                </ThemedView>
                
            </ThemedView>
        </ThemedSafeAreaView>
    )
}

function Topbar () {
    return (
        <ThemedView style={styles.topbarContainer}>
            <ThemedText style={styles.headingText}>Walls</ThemedText>
            <ThemedText style={styles.subheadeingText}>Sign in to save your data</ThemedText>
        </ThemedView>
    )
}

function ThemeSelector () {
    return (
        <ThemedView style={{paddingVertical: 10}}>
            <ThemedText style={{fontWeight: 500}}>Theme</ThemedText>
            <View style={{paddingVertical: 10,flexDirection: "row", justifyContent: "space-between"}}>
                <ThemeButton label={"System"} selected={false} colorScheme={null} />
                <ThemeButton label={"Dark"} selected={false} colorScheme={"dark"} />
                <ThemeButton label={"Light"} selected={false} colorScheme={"light"} />
            </View>
        </ThemedView>
    )
}

function ThemeButton ({ label, selected, colorScheme }: {
    label: string, 
    selected: boolean,
    colorScheme: ColorSchemeName
}) {
    return (
        <Pressable 
            style={{
                alignItems: "center",
                borderRadius: 15,
                borderWidth: 1,
                borderColor: "#ddd",
                paddingVertical: 8,
                paddingHorizontal: 15,
            }}
            onPress={() => {
                Appearance.setColorScheme(colorScheme)
            }}
        >
            <ThemedText 
                style={{ 
                    fontSize: 18,
                    fontWeight: "600",
                    padding: 10,
                }}
            >{label}</ThemedText>
        </Pressable>
    )
}

function AuthButton({ label, icon }: {
    label: string, icon: string 
}) {
    const theme = useColorScheme() ?? "light";
  
    return (
        <Pressable
            style={{
            backgroundColor: (theme === "dark") ? "#ddf" : "#333",
            borderColor: (theme === "dark") ? "#aaa" : "#444",
            borderWidth: 1,
            borderRadius: 15,
            width: "80%",
            marginHorizontal: "auto",
            marginVertical: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
            }}
        >
            <FontAwesome6
                size={20} 
                name={icon}
                color={(theme === "dark") ? "black" : "#fdd"}
            />
            <Text style={{
                color: (theme === "dark") ? "black" : "#fdd",
                fontSize: 20,
                fontWeight: "600",
                padding: 10,
            }}>{label}</Text>
        </Pressable>
    )
}

const About = () => {
    const theme = useColorScheme() ?? "light";

    return <ThemedView style={{paddingTop: 10}}>
        <Pressable style={styles.aboutButtons}>
            <ThemedText>Account</ThemedText>
        </Pressable>
        <Pressable style={styles.aboutButtons}>
            <ThemedText>Privacy Policy</ThemedText>
        </Pressable>
        <Pressable style={styles.aboutButtons}>
            <ThemedText>Terms of Service</ThemedText>
        </Pressable>
        <Pressable style={styles.aboutButtons}>
            <ThemedText>Licences</ThemedText>
        </Pressable>
        <Pressable style={styles.aboutButtons}>
            <ThemedText>Version</ThemedText>
            <ThemedText>0.1.0</ThemedText>
        </Pressable>
   </ThemedView>
}

const styles = StyleSheet.create({
    topbarContainer: {
        paddingHorizontal: 25,
        paddingVertical: 30
    },
    headingText: {
        fontSize: 30,
        fontWeight: "bold",
        paddingTop: 10,
        color: "#e67e22"
    },
    subheadeingText: {
        fontSize: 15,
        fontWeight: "500"
    },
    authContainer: {
        paddingVertical: 20,
        marginHorizontal: 15,
        borderRadius: 20,
        backgroundColor: "#dadada",
    },
    settingsText: {
        fontSize: 26,
        paddingVertical: 5,
        fontWeight: "bold"
    },
    aboutButtons: {
        paddingVertical: 10,
        borderBottomColor: "#ddd"
    }
})