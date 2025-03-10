import { Image, View } from "react-native"
import { ThemedText } from "./ThemedText"


export function TRIDENTLogo() {
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center"
        }}>
            <Image source={require('@/assets/images/trident_transparent.png')} style={{ alignSelf: 'center', width: 80, height: 80 }} />
            <ThemedText style={{
                fontFamily: "SplineSans",
                paddingTop: 20,
                fontSize: 50,
                fontWeight: 'bold',
                lineHeight: 50,}}>
                    TRIDENT
        </ThemedText>
        </View>
    )
}