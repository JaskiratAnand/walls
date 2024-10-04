import DownloadPicture from "@/components/BottomSheet";
import { CarouselElement } from "@/components/CarouselElement";
import ParallaxScrollView from "@/components/ParallaxScrollView"
import { SplitView } from "@/components/SplitView";
import ThemedSafeAreaView from "@/components/ThemedSafeAreaView";
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers"
import { useState } from "react";

export default function Explore () {
    const wallpaper = useWallpapers();
    const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null);

    return (
        <ThemedSafeAreaView style={{flex: 1}}>
            <ParallaxScrollView 
                headerImage={
                    <CarouselElement />
                }
                headerBackgroundColor={{dark: "black", light: "white"}}
            >
                <SplitView wallpapers={wallpaper} toggleBottomSheet={setSelectedWallpaper} />
            </ParallaxScrollView>
            {selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} onClose={() => setSelectedWallpaper(null)} />}
        </ThemedSafeAreaView>
    )
}
