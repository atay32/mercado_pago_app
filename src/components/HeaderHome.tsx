import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from "@expo/vector-icons/Ionicons";
import MCIcon from "@expo/vector-icons/MaterialCommunityIcons";

const NAME = "Luciano";

export default function HeaderHome() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top + 4 }]}>
      <View style={styles.logo}>
        <MCIcon name="handshake" size={18} color="#2d6cdf" />
      </View>
      <Text style={styles.name}>Hola, {NAME}</Text>
      <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
        <Icon name="search-outline" size={22} color="#1d1d2b" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { marginLeft: 8 }]} activeOpacity={0.8}>
        <Icon name="notifications-outline" size={22} color="#1d1d2b" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFE600",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 14,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "#1a2a8f",
    justifyContent: "center",
    alignItems: "center",
  },
  name: { flex: 1, marginLeft: 12, fontSize: 20, fontWeight: "700", color: "#1d1d2b" },
  btn: {
    width: 40,
    height: 40,
    borderRadius: 13,
    backgroundColor: "#FFF4A6",
    justifyContent: "center",
    alignItems: "center",
  },
});
