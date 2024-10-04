import { useCarouselWallpapers } from '@/hooks/useWallpapers';
import { LinearGradient } from 'expo-linear-gradient';
import * as React from 'react';
import { Dimensions, Image, useColorScheme, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { ThemedText } from './ThemedText';

export function CarouselElement() {
    const wallpapers = useCarouselWallpapers();
    const width = Dimensions.get('window').width;

    return (
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                autoPlay={false}
                data={wallpapers}
                scrollAnimationDuration={2000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item }) => (
                    <>
                        <View
                            style={{
                                flex: 1,
                                borderWidth: 1,
                                justifyContent: 'center',
                            }}
                        >
                            <Image
                                source={{ uri: item.url }}
                                style={{ width: '100%', height: '100%' }}
                                resizeMode="cover"
                            />
                        </View>
                        <LinearGradient
                            colors={['transparent', 'black']}
                            style={{
                                flex: 1,
                                position: 'absolute',
                                zIndex: 10,
                                height: 150,
                                width: '100%',
                                bottom: 0,
                            }}
                        >
                            <ThemedText style={{
                                paddingTop: 80,
                                textAlign: 'center',
                                fontSize: 30,
                                fontWeight: "600",
                                color: '#e67e22' 
                            }}>{item.name}</ThemedText>
                        </LinearGradient>
                    </>
                )}
            />
        </View>
    );
}
