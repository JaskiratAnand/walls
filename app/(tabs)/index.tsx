import ImageCard from "@/components/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { ThemedView } from "@/components/ThemedView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers"
import { View, Text, Button, Image, StyleSheet } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context"

export default function explore () {
    const wallpaper = useWallpapers();

    return (
        <SafeAreaView style={{flex: 1}}>
            <ParallaxScrollView 
                headerImage={
                    <Image style={{flex: 1}} source={{uri: wallpaper[0]?.url}} />
                }
                headerBackgroundColor={{dark: "black", light: "white"}}
            >
                <ThemedView style={styles.container}>
                    <ThemedView style={styles.innerContainer}>
                        <FlatList 
                            data={wallpaper}
                            renderItem={({item}) => <ImageCard wallpaper={item} />}
                            keyExtractor={(item) => item.name}
                        />
                    </ThemedView>
                    <View style={styles.innerContainer}>
                        <FlatList 
                            data={wallpaper}
                            renderItem={({item}) => <ImageCard wallpaper={item} />}
                            keyExtractor={(item) => item.name}
                        />
                    </View>

                </ThemedView>

            </ParallaxScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1
    },
    innerContainer: {
        flex: 1,
        padding: 10
    }
})