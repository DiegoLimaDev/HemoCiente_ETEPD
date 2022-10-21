import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-web";
import { data } from "../components/mock";
import { theme } from "../utils/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Donations = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.box}>
        <Text style={styles.text}>local</Text>
        <Text style={styles.text}>data</Text>
        <Text style={styles.text}>Tipo</Text>
        <Text style={styles.text}>Direcionado</Text>
      </View> */}
      <ScrollView>
        {data.map((e) => (
          <View key={e.id} style={styles.box}>
            <Text style={styles.text}>{e.location}</Text>
            <Text style={styles.text}>{e.date}</Text>
            <Text style={styles.text}>{e.type}</Text>
            <Text style={styles.text}>{e.direction}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: theme.colors.white,
  },
  box: {
    borderWidth: 1,
    borderColor: theme.colors.mediumBlack,
    display: "flex",
    borderRadius: 5,
    // flexDirection: "row",
    padding: 5,
    width: windowWidth * 0.9,
    marginVertical: windowHeight * 0.01,
  },
  text: {
    fontSize: 20,
    marginHorizontal: windowWidth * 0.05,
    color: theme.colors.mediumBlack,
  },
});
