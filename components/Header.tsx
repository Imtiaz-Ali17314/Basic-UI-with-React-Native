import { Ionicons } from "@expo/vector-icons";
import { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../constants/Colors";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="chevron-back" size={22} color={Colors.textPrimary} />
        </TouchableOpacity>

        <Text style={styles.title}>Today's Tasks</Text>

        <TouchableOpacity style={styles.iconButton}>
          <Ionicons
            name="notifications-outline"
            size={22}
            color={Colors.textPrimary}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: Colors.surface,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.textPrimary,
  },
});
