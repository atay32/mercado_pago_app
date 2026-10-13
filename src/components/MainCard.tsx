import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

const ACTIONS = [
  { title: "Ingresar", icon: "arrow-down-circle-outline" },
  { title: "Transferir", icon: "cash-outline" },
  { title: "Tus alias", icon: "id-card-outline" },
] as const;

export default function MainCard() {
  const [tab, setTab] = useState<"pesos" | "reservas">("pesos");
  const [hidden, setHidden] = useState(false);
  const pesos = tab === "pesos";

  return (
    <View>
      <View style={styles.yellow} />
      <View style={styles.tabs}>
        {(["pesos", "reservas"] as const).map((t) => (
          <TouchableOpacity
            key={t}
            activeOpacity={0.8}
            onPress={() => setTab(t)}
            style={[styles.tab, tab === t && styles.tabOn]}
          >
            <Text style={styles.tabText}>{t === "pesos" ? "Pesos" : "Reservas"}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={[styles.card, !pesos && { borderTopLeftRadius: 28 }]}>
        <View style={styles.balRow}>
          {hidden ? (
            <Text style={styles.amount}>$ ••••</Text>
          ) : (
            <>
              <Text style={styles.amount}>{pesos ? "$ 115" : "US$ 0"}</Text>
              <Text style={styles.cents}>{pesos ? "53" : "00"}</Text>
            </>
          )}
          <TouchableOpacity onPress={() => setHidden(!hidden)} style={{ marginLeft: 10 }}>
            <Icon name={hidden ? "eye-off-outline" : "eye-outline"} size={24} color="#3F43E8" />
          </TouchableOpacity>
          <View style={{ flex: 1 }} />
          <Icon name="chevron-forward" size={22} color="#3F43E8" />
        </View>
        <Text style={styles.yield}>
          {pesos ? "Los últimos 12 meses rindió " : "Todavía no tenés reservas"}
          {pesos && <Text style={styles.green}>$ 32,80</Text>}
        </Text>

        <View style={styles.actions}>
          {ACTIONS.map((a) => (
            <TouchableOpacity key={a.title} activeOpacity={0.8} style={styles.action}>
              <Icon name={a.icon} size={28} color="#3F43E8" />
              <Text style={styles.actionText}>{a.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  yellow: { position: "absolute", top: 0, left: 0, right: 0, height: 150, backgroundColor: "#FFE600" },
  tabs: { flexDirection: "row", paddingHorizontal: 16 },
  tab: { paddingHorizontal: 12, height: 39, justifyContent: "center", borderTopLeftRadius: 16, borderTopRightRadius: 16 },
  tabOn: { backgroundColor: "#fff" },
  tabText: { fontSize: 16, fontWeight: "600", color: "#1d1d2b" },
  card: {
    backgroundColor: "#fff",
    marginHorizontal: 16,
    borderRadius: 28,
    borderTopLeftRadius: 0,
    padding: 17,
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    marginBottom: 28,
  },
  balRow: { flexDirection: "row", alignItems: "center" },
  amount: { fontSize: 28, fontWeight: "700", color: "#1d1d2b" },
  cents: { fontSize: 14, fontWeight: "700", alignSelf: "flex-start", marginTop: 4, marginLeft: 2, color: "#1d1d2b" },
  yield: { fontSize: 13, color: "#1d1d2b", marginTop: 4 },
  green: { color: "#1f8a2d", fontWeight: "600" },
  actions: { flexDirection: "row", gap: 9, marginTop: 14 },
  action: {
    flex: 1,
    height: 87,
    borderRadius: 23,
    backgroundColor: "#E9EFFF",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  actionText: { fontSize: 13, fontWeight: "600", color: "#3F43E8" },
});
