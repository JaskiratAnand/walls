import DownloadPicture from "@/components/BottomSheet";
import { SplitView } from "@/components/SplitView"
import { useLikedWallpapers, Wallpaper } from "@/hooks/useWallpapers"
import { useState } from "react";
import { View } from "react-native"

export default function Liked () {
    const wallpapers = useLikedWallpapers();
    const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null)

    return <View style={{flex: 1}}>
        <SplitView wallpapers={wallpapers} toggleBottomSheet={setSelectedWallpaper} />
        {selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} onClose={() => setSelectedWallpaper(null)} />}
    </View>
}