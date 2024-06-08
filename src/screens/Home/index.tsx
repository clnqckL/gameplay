import { SafeAreaView, View, FlatList, Text } from "react-native";
import { styles } from "./styles";
import {
  Background,
  Profile,
  ButtonAdd,
  CategorySelect,
  ListHeader,
  Appointment,
} from "../../components";
import { useState } from "react";
import { ListDivider } from "../../components/ListDivider";
import { useAppNavigation } from "../../utils/useAppNavigation";

export function Home() {
  const navigation = useAppNavigation();
  const [category, setCategory] = useState("");
  const appointments = [
    {
      id: 2,
      guild: {
        id: 1,
        name: "Counter Strike 2",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "24/04 às 20:30h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: 3,
      guild: {
        id: 1,
        name: "FiFa 24",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "26/04 às 15:00h",
      description: "É hoje e dia de play rapaziada",
    },
    {
      id: 4,
      guild: {
        id: 1,
        name: "Valorant",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "24/04 às 19:45h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: 4,
      guild: {
        id: 1,
        name: "League of Legends",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "24/04 às 22:30h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: 4,
      guild: {
        id: 1,
        name: "Fortnite",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "25/04 às 21:30h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: 4,
      guild: {
        id: 1,
        name: "Dota 2",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "24/04 às 18:00h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: 4,
      guild: {
        id: 1,
        name: "Rainbow Six Siege",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "25/04 às 21:00h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: 4,
      guild: {
        id: 1,
        name: "Minecraft",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "26/04 às 14:30h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: 4,
      guild: {
        id: 1,
        name: "F1 2024",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "27/04 às 20:30h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: 4,
      guild: {
        id: 1,
        name: "GTA 5",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "24/04 às 20:00h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: 4,
      guild: {
        id: 1,
        name: "Rocket League",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "24/04 às 21:45h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: 4,
      guild: {
        id: 1,
        name: "Forza Horizon",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/04 às 19:40h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
    {
      id: 4,
      guild: {
        id: 1,
        name: "Fallout 4",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "24/04 às 22:30h",
      description:
        "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    },
  ];

  const handleCategorySelect = (categoryId: string) => {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  };

  const didTapAppointmentDetails = () => {
    navigation.navigate("AppointmentDetails");
  };

  const didTapBtnCreate = () => {
    navigation.navigate("AppointmentCreate");
  };

  return (
    <Background>
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Profile />
            <ButtonAdd onPress={didTapBtnCreate} />
          </View>
          <CategorySelect
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
          <View style={styles.listHeader}>
            <ListHeader title="Partidas agendadas" subtitle="Total: 12" />
          </View>
          <FlatList
            data={appointments}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Appointment data={item} onPress={didTapAppointmentDetails} />
            )}
            ItemSeparatorComponent={ListDivider}
            showsVerticalScrollIndicator={false}
            style={styles.matches}
            contentContainerStyle={{ paddingBottom: 40 }}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}
