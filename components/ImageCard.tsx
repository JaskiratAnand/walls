import { Image, View, StyleSheet } from "react-native";
import { Wallpaper } from "@/hooks/useWallpapers";

export default function ImageCard ({wallpaper}: { 
    wallpaper: Wallpaper
}) {
    return (
        <View>
            <Image source={{uri: wallpaper.url}} style={styles.image}></Image>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 200
    }
});