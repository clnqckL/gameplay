import {
  FlatList,
  ImageBackground,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import {
  Background,
  ButtonIcon,
  Header,
  ListHeader,
  Member,
} from "../../components";
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import BannerImg from "../../assets/banner.png";
import { styles } from "./styles";
import { ListDivider } from "../../components/ListDivider";

export function AppointmentDetails() {
  const members = [
    {
      id: 1,
      username: "Carl1n",
      avatar_url:
        "https://static.wikia.nocookie.net/silly-cat/images/4/4d/Mr._Fresh.png/revision/latest?cb=20240117170647",
      status: "online",
    },
    {
      id: 2,
      username: "Hendo_sousa13",
      avatar_url:
        "https://www.adrenaline.com.br/wp-content/uploads/2024/04/Fallout-New-Vegas-continua-sendo-canonico-confirma-Todd-Howard.jpg",
      status: "online",
    },
    {
      id: 3,
      username: "N3v1nho",
      avatar_url:
        "https://www.esports.net/br/wp-content/uploads/sites/3/2023/10/ghost-warzone.webp",
      status: "online",
    },
    {
      id: 4,
      username: "Lucas1",
      avatar_url:
        "https://lh4.googleusercontent.com/szniLqN1LX8nIL4vXgfm3yZu6PVjxYuI0TgCtRRO7okFIh6jOsTqUdAW7q3g4yuHCKqW5MhWntcNrk4bt3x03xk5TFgf4mEL88yzztQBE_VCDqqM5See-u35xeAId6GAqYu6dt-R",
      status: "online",
    },
    {
      id: 5,
      username: "Vyrgulk",
      avatar_url:
        "https://static.wikia.nocookie.net/roblox/images/3/3e/FLOPPA-1.png/revision/latest/thumbnail/width/360/height/360?cb=20220430143343",
      status: "online",
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" color={theme.colors.primary} size={18} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Servidores</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos jogar aquela play!
          </Text>
        </View>
      </ImageBackground>

      <View style={styles.contentTitle}>
        <ListHeader title="Jogadores" subtitle="Total: 5" />
      </View>
      <FlatList
        data={members}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={ListDivider}
        style={styles.members}
        showsVerticalScrollIndicator={false}
      />
      <SafeAreaView>
        <View style={styles.footer}>
          <ButtonIcon title="Entrar no servidor do Discord" />
        </View>
      </SafeAreaView>
    </Background>
  );
}
