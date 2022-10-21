import React, { useState } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./src/screens/Home";
import { Profile } from "./src/screens/Profile";
import { theme } from "./src/utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { Modal, TouchableOpacity, View } from "react-native-web";
import { Dimensions, StyleSheet, Text } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Stack = createNativeStackNavigator();

const OptionsComponent = () => {
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View>
      {visible ? (
        <Modal transparent={true} animationType="fade">
          <View
            style={{
              height: windowHeight * 1,
              width: windowWidth * 0.6,
              backgroundColor: theme.colors.primaryColor,
            }}
          >
            <Ionicons
              name="close"
              size={40}
              onPress={() => setVisible(!visible)}
              style={{ marginTop: 10 }}
              color={theme.colors.white}
            />
            <Text style={styles.title}>
              HCIENTE
              <Ionicons
                name="water-outline"
                size={25}
                color={theme.colors.white}
              />
            </Text>
            <Text style={styles.options}>Meu perfil</Text>
            <View style={styles.separator} />
            <Text style={styles.options}>Doações</Text>
            <View style={styles.separator} />
            <Text style={styles.options}>Locais de doação</Text>
            <View style={styles.separator} />
            <Text style={styles.options}>Vidas salvas</Text>
            <View style={styles.separator} />
            <TouchableOpacity
              onPress={() => {
                setVisible(!visible);
                navigation.push("home");
              }}
            >
              <Text style={styles.options}>Sair</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      ) : (
        <Ionicons
          name="menu"
          size={40}
          onPress={() => setVisible(!visible)}
          color={theme.colors.white}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: theme.colors.white,
    textAlign: "center",
    fontSize: 30,
    marginVertical: windowHeight * 0.05,
  },
  separator: {
    borderBottomColor: theme.colors.white,
    width: "100%",
    borderBottomWidth: 1,
  },
  options: {
    fontSize: 20,
    color: theme.colors.white,
    textAlign: "center",
    marginVertical: windowHeight * 0.02,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerShown: false,
            animation: true,
            animationTypeForReplace: "push",
          }}
        />
        <Stack.Screen
          name="profile"
          component={Profile}
          options={{
            title: "Perfil",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: "bold",
              color: theme.colors.white,
            },
            headerStyle: { backgroundColor: theme.colors.primaryColor },
            headerLeft: () => <OptionsComponent />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
