import React, { useCallback, useRef } from 'react';
import { View, Text, StyleSheet, Image, useColorScheme, Pressable } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import { FontAwesome6 } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';

const DownloadPicture = ({ onClose, wallpaper }: {
    onClose: () => void;
    wallpaper: Wallpaper;
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const theme = useColorScheme() ?? "light";

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
      <BottomSheet
        onClose={onClose}
        snapPoints={["90%"]}
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        handleIndicatorStyle={{ display: "none" }}
        handleStyle={{ display: "none" }}
        backgroundStyle={{ backgroundColor: (theme === "dark") ? Colors.dark.background : Colors.light.background }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Image source={{ uri: wallpaper.url }} style={styles.image} />
          <View style={styles.topbar}>
            <FontAwesome6 
              onPress={onClose}
              size={28}
              name="circle-xmark"
              color={theme === "light" ? Colors.light.icon : Colors.dark.icon} 
            />
            <View style={styles.topbarInner}>
              <FontAwesome6 
                size={28}
                name="share"
                color={theme === "light" ? Colors.light.icon : Colors.dark.icon} 
              />
              <FontAwesome6
                size={28} 
                name="heart"
                color={theme === "light" ? Colors.light.icon : Colors.dark.icon} 
              />
            </View>
          </View>
          <ThemedText style={styles.textContainer}>
            {wallpaper.name}
          </ThemedText>

          <DownloadButton url={wallpaper.url} />
        </BottomSheetView>
      </BottomSheet>
  );
};

function DownloadButton({url}: {url: string}) {

  return (
    <Pressable
      onPress={async () => {
        let date = new Date().getTime();
        let fileUri = FileSystem.documentDirectory + `${date}.jpg`;

        try {
          await FileSystem.downloadAsync(url, fileUri);
          const response = await MediaLibrary.requestPermissionsAsync(true);
          if (response.granted) {
            MediaLibrary.createAssetAsync(fileUri);
            alert("Image downloaded successfully");
          } else {
            console.error("Permission denied");
          }
        } catch (err) {
          console.error("unable to download image");
        }
      }}
      style={{
        backgroundColor: "black",
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#333",
        width: "80%",
        marginHorizontal: "auto",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <FontAwesome6 
        size={20} 
        name="download" 
        color="white"
      /> 
      <Text style={{
        color: "white",
        fontSize: 20,
        fontWeight: "600",
        padding: 10,
      }}>
        Download Wallpaper
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1
  },
  image: {
    height: "80%",
    borderRadius: 15,
    marginBottom: 10
  },
  topbar: {
    position: "absolute",
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  topbarInner: {
    display: "flex",
    flexDirection: "row",
    gap: 15
  },
  textContainer: {
    fontSize: 25,
    fontWeight: "500",
    marginBottom: 10,
    paddingTop: 10,
    textAlign: "center"
  }
});

export default DownloadPicture;