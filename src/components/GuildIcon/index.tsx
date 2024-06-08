import { Image, View } from "react-native";
import { styles } from "./styles";

export function GuildIcon() {
  const uri =
    "https://img.freepik.com/vetores-gratis/jogo-joystick-tecnologia-esportiva_138676-2045.jpg";

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={styles.image} resizeMode="cover" />
    </View>
  );
}
