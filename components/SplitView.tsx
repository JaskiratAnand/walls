import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { ThemedView } from "./ThemedView";
import { Wallpaper } from "@/hooks/useWallpapers";
import { StyleSheet, View } from "react-native";
import ImageCard from "./ImageCard";


export function SplitView ({wallpapers, toggleBottomSheet }: { 
    wallpapers: Wallpaper[],
    toggleBottomSheet?: React.Dispatch<React.SetStateAction<Wallpaper | null>>
}) {
    

    return (
        <>
            <FlatList 
                data={
                    Array.from({ length: Math.ceil(wallpapers.length / 2) }, (_, index) => 
                        [wallpapers[index * 2], wallpapers[index * 2 + 1]]
                    )
                }
                renderItem={({item: [first, second]}) => 
                    <ThemedView style={styles.container}>
                        <ThemedView style={styles.innerContainer}>
                            <View style={styles.imageContainer}>
                                <ImageCard wallpaper={first} onPress={() => {
                                    toggleBottomSheet && toggleBottomSheet(first);
                                }} />
                            </View>
                        </ThemedView>
                        {second && <ThemedView style={styles.innerContainer}>
                            <View style={styles.imageContainer}>
                                <ImageCard wallpaper={second} onPress={() => {
                                    toggleBottomSheet && toggleBottomSheet(second);
                                }} />
                            </View>
                        </ThemedView>}
                    </ThemedView>
                }
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        paddingTop: 5
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 10
    },
    imageContainer: {
        paddingVertical: 10
    }
})
