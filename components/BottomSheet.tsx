import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Image, Button, useColorScheme, Pressable } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from '@/hooks/useWallpapers';
import { FontAwesome6 } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';

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
        backgroundStyle={{ backgroundColor: "#fff" }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Image source={{ uri: wallpaper.url }} style={styles.image} />
          <View style={styles.topbar}>
            <FontAwesome6 
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
          <Text style={styles.textContainer}>
            {wallpaper.name}
          </Text>

          <DownloadButton />
        </BottomSheetView>
      </BottomSheet>
  );
};

function DownloadButton() {
  const theme = useColorScheme() ?? "light";

  return (
    <Pressable
      style={{
        backgroundColor: "black",
        borderRadius: 15,
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
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center"
  }
});

export default DownloadPicture;