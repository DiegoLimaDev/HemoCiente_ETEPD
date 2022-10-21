import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { theme } from "../utils/theme";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const Locations = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.row}>
          <Ionicons
            name="location-outline"
            size={30}
            color={theme.colors.primaryColor}
          />
          <Text style={styles.title}>IHENE</Text>
        </View>
        <Text style={styles.text}>R. Tabira, nº 54</Text>
        <Text style={styles.text}>Boa Vista, Recife/PE</Text>
        <Text style={styles.text}>50050-330</Text>
        <Text style={styles.text}>(81) 2138-3500</Text>
      </View>
      <View style={styles.box}>
        <View style={styles.row}>
          <Ionicons
            name="location-outline"
            size={30}
            color={theme.colors.primaryColor}
          />
          <Text style={styles.title}>HEMATO</Text>
        </View>
        <Text style={styles.text}>R. Dom Bosco, nº 723</Text>
        <Text style={styles.text}>Boa Vista, Recife/PE</Text>
        <Text style={styles.text}>52011-000</Text>
        <Text style={styles.text}>(81) 3182-4600</Text>
      </View>
      <View style={styles.box}>
        <View style={styles.row}>
          <Ionicons
            name="location-outline"
            size={30}
            color={theme.colors.primaryColor}
          />
          <Text style={styles.title}>IHENE</Text>
        </View>
        <Text style={styles.text}>R. Tabira, nº54</Text>
        <Text style={styles.text}>Boa Viste, Recife/PE</Text>
        <Text style={styles.text}>50070-070</Text>
        <Text style={styles.text}>(81) 3972-4050</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 30,
    color: theme.colors.primaryColor,
    fontWeight: "bold",
    textAlign: "center",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: windowHeight * 0.01,
  },
  text: {
    fontSize: 20,
    color: theme.colors.mediumBlack,
    textAlign: "center",
  },
  box: {
    marginVertical: windowHeight * 0.01,
  },
});
