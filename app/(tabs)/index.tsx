import DownloadPicture from "@/components/BottomSheet";
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { SplitView } from "@/components/SplitView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers"
import { useState } from "react";
import { Image, StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function explore () {
    const wallpaper = useWallpapers();
    const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null);

    return (
        <SafeAreaView style={{flex: 1}}>
            <ParallaxScrollView 
                headerImage={
                    <Image style={{flex: 1}} source={{uri: wallpaper[0]?.url}}/>
                }
                headerBackgroundColor={{dark: "black", light: "white"}}
            >
                <SplitView wallpapers={wallpaper} toggleBottomSheet={setSelectedWallpaper} />
            </ParallaxScrollView>
            {selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} onClose={() => setSelectedWallpaper(null)} />}
        </SafeAreaView>
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