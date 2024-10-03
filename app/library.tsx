import DownloadPicture from "@/components/BottomSheet";
import { SplitView } from "@/components/SplitView"
import { useWallpapers, Wallpaper } from "@/hooks/useWallpapers"
import { useState } from "react";
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function library () {
    const wallpapers = useWallpapers();
    const [selectedWallpaper, setSelectedWallpaper] = useState<Wallpaper | null>(null)

    return <View style={{flex: 1}}>
        <SplitView wallpapers={wallpapers} toggleBottomSheet={setSelectedWallpaper} />
        {selectedWallpaper && <DownloadPicture wallpaper={selectedWallpaper} onClose={() => setSelectedWallpaper(null)} />}
    </View>
}