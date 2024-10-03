import { Image, View, StyleSheet, useColorScheme, Pressable } from "react-native";
import { Wallpaper } from "@/hooks/useWallpapers";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";
import { FontAwesome6 } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export default function ImageCard ({wallpaper, onPress}: { 
    wallpaper: Wallpaper,
    onPress: () => void
}) {
    const theme = useColorScheme() ?? "light";

    return (
        <Pressable onPress={onPress}>
            <ThemedView>
                <Image source={{uri: wallpaper.url}} style={styles.image}></Image>
                <View style={styles.labelContainer}>
                    <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
                    <View style={styles.iconContainer}>
                        <FontAwesome6 
                            size={18} 
                            name="heart"
                            color="white"
                        />
                    </View>
                </View>
            </ThemedView>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 250,
        borderRadius: 15
    },
    label: {
        color: "white"
    },
    labelContainer: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        bottom: 0,
        width: "100%",
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    iconContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});