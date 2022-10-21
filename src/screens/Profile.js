// import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../utils/theme";
import { Ionicons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Profile = () => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="person-circle-outline"
        size={150}
        color={theme.colors.mediumBlack}
        style={styles.icon}
      />
      <Text style={styles.name}>Luiz Inácio Lula da Silva</Text>
      <View style={styles.box}>
        <View style={styles.insideBox1}>
          <Text style={styles.texts}>Tipo sanguíneo:</Text>
          <Text style={styles.texts}>Data de nascimento:</Text>
          <Text style={styles.texts}>Idade:</Text>
          <Text style={styles.texts}>Número de doações:</Text>
        </View>
        <View style={styles.insideBox2}>
          <Text style={styles.texts}>O-</Text>
          <Text style={styles.texts}>30/10/1975</Text>
          <Text style={styles.texts}>46</Text>
          <Text style={styles.texts}>13</Text>
        </View>
      </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    justifyContent: "flex-start",
  },
  icon: {
    alignSelf: "center",
  },
  name: {
    fontSize: 25,
    textAlign: "center",
    color: theme.colors.mediumBlack,
  },
  texts: {
    fontSize: 20,
    color: theme.colors.mediumBlack,
    marginVertical: windowHeight * 0.01,
  },
  box: {
    marginHorizontal: windowWidth * 0.1,
    marginTop: windowHeight * 0.03,
    borderWidth: 1,
    padding: windowWidth * 0.02,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  insideBox1: {
    width: windowWidth * 0.5,
    alignSelf: "left",
  },
  insideBox: {
    width: windowWidth * 0.2,
    alignSelf: "rigth",
  },
});
