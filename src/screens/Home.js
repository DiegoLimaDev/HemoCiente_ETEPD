import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../utils/theme";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";
import { TextInput } from "react-native-web";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Home = () => {
  const navigation = useNavigation();

  return (
    // <View style={styles.container}>
    <LinearGradient
      colors={[theme.colors.white, theme.colors.primaryColor]}
      style={styles.container}
    >
      <Text style={styles.brand}>HCIENTE</Text>
      <Ionicons
        name="water-outline"
        size={100}
        color={theme.colors.primaryColor}
      />
      <View>
        <TextInput style={styles.textInput} type="text" placeholder="Email" />
        <TextInput
          style={styles.textInput}
          type="text"
          placeholder="Senha"
          secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.push("profile")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.rowIcons}>
        <AntDesign
          name="google"
          size={50}
          style={styles.icon}
          color={theme.colors.white}
        />
        <FontAwesome
          name="facebook"
          size={50}
          style={styles.icon}
          color={theme.colors.white}
        />
      </View>
    </LinearGradient>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: theme.colors.primaryColor,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  brand: {
    fontSize: 40,
    color: theme.colors.primaryColor,
    fontWeight: "bold",
    marginTop: windowHeight * 0.1,
  },
  title: {
    fontSize: 30,
    color: theme.colors.primaryColor,
    fontWeight: "bold",
    marginTop: windowHeight * 0.1,
  },
  textInput: {
    backgroundColor: theme.colors.white,
    marginTop: windowHeight * 0.05,
    height: windowHeight * 0.03,
    borderRadius: 5,
    width: windowWidth * 0.55,
    paddingHorizontal: windowWidth * 0.02,
  },
  button: {
    backgroundColor: theme.colors.green,
    height: windowHeight * 0.05,
    width: windowWidth * 0.4,
    borderRadius: 5,
    marginTop: windowHeight * 0.05,
    textAlign: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 25,
    color: theme.colors.white,
  },
  rowIcons: {
    display: "flex",
    flexDirection: "row",
    marginTop: windowHeight * 0.05,
    alignItems: "center",
  },
  icon: {
    marginHorizontal: windowWidth * 0.08,
  },
  forgotPassword: {
    fontSize: 10,
    textDecorationLine: "underline",
    alignSelf: "flex-end",
    marginTop: windowHeight * 0.01,
    color: theme.colors.white,
  },
});
