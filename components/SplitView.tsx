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
            <ThemedView style={styles.container}>
                <ThemedView style={styles.innerContainer}>
                    <FlatList 
                        data={wallpapers.filter((_, index) => index % 2 === 0)}
                        renderItem={({item}) => 
                            <View style={styles.imageContainer}>
                                <ImageCard wallpaper={item} onPress={() => {
                                    toggleBottomSheet && toggleBottomSheet(item);
                                }} />
                            </View>
                        }
                        keyExtractor={(item) => item.name}
                    />
                </ThemedView>
                <ThemedView style={styles.innerContainer}>
                    <FlatList 
                        data={wallpapers.filter((_, index) => index % 2 === 1)}
                        renderItem={({item}) => 
                            <View style={styles.imageContainer}>
                                <ImageCard wallpaper={item} onPress={() => {
                                    toggleBottomSheet && toggleBottomSheet(item);
                                }} />
                            </View>
                        }
                        keyExtractor={(item) => item.name}
                    />
                </ThemedView>
            </ThemedView>
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
