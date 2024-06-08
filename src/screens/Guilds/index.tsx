import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { Guild, GuildProps } from "../../components";
import { ListDivider } from "../../components/ListDivider";

type Props = {
  didTapBtnGuild: (guild: GuildProps) => void;
};

export function Guilds({ didTapBtnGuild }: Props) {
  const guilds = [
    {
      id: 1,
      name: "Counter Strike 2",
      icon: "cs",
      owner: true,
    },
    {
      id: 2,
      name: "FIFA 24",
      icon: "cs",
      owner: true,
    },
    {
      id: 3,
      name: "Valorant",
      icon: "cs",
      owner: true,
    },
    {
      id: 4,
      name: "League of Legends",
      icon: "cs",
      owner: true,
    },
    {
      id: 5,
      name: "Fortnite",
      icon: "cs",
      owner: true,
    },
    {
      id: 6,
      name: "Dota 2",
      icon: "cs",
      owner: true,
    },
    {
      id: 7,
      name: "Rainbow Six Siege",
      icon: "cs",
      owner: false,
    },
    {
      id: 8,
      name: "Minecraft",
      icon: "cs",
      owner: false,
    },
    {
      id: 9,
      name: "F1 2024",
      icon: "cs",
      owner: true,
    },
    {
      id: 10,
      name: "GTA 5",
      icon: "cs",
      owner: true,
    },
    {
      id: 11,
      name: "Rocket League",
      icon: "cs",
      owner: true,
    },
    {
      id: 12,
      name: "Forza Horizon",
      icon: "cs",
      owner: true,
    },
    {
      id: 13,
      name: "Fallout 4",
      icon: "cs",
      owner: true,
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => didTapBtnGuild(item)} />
        )}
        ItemSeparatorComponent={ListDivider}
        showsVerticalScrollIndicator={false}
        style={styles.guilds}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </View>
  );
}
