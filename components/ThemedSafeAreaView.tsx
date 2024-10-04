import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ThemedSafeAreaView ({ children, style }: { 
    children: React.ReactNode, 
    style?: any 
}) {
    const theme = useColorScheme() ?? "light";

    return (
        <SafeAreaView 
            style={{ 
                flex: 1, 
                backgroundColor: Colors[theme].background, 
                ...style 
            }}
        >
            {children}
        </SafeAreaView>
    )
}