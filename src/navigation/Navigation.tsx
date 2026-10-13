import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ActivityScreen,
  HomeScreen,
  MoreScreen,
  NotificationsScreen,
  QRScreen,
} from "../screens";
import Icon from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get("window");

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        headerTitle: "",
        tabBarActiveTintColor: "#3F43E8",
        tabBarInactiveTintColor: "#1d1d2b",
        tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
        tabBarStyle: styles.barStyles,
        tabBarIcon: ({ color }) => {
          let iconName: string | any = "";

          switch (route.name) {
            case "HomeScreen":
              iconName = "business-outline";
              break;
            case "ActivityScreen":
              iconName = "card-outline";
              break;
            case "NotificationsScreen":
              iconName = "phone-portrait-outline";
              break;
            case "MoreScreen":
              iconName = "menu-outline";
              break;
          }

          return <Icon name={iconName} size={26} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Cuenta" }}
      />
      <Tab.Screen
        name="ActivityScreen"
        component={ActivityScreen}
        options={{
          title: "Tarjetas",
          tabBarItemStyle: { marginRight: 30 },
        }}
      />
      <Tab.Screen
        name="QRScreen"
        component={QRScreen}
        options={{
          title: "",
          tabBarItemStyle: styles.barItemQR,
          tabBarIconStyle: styles.barIconQR,
          tabBarIcon: () => (
            <Icon color="#fff" size={25} name="qr-code-outline" />
          ),
        }}
      />
      <Tab.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          title: "Servicios",
          tabBarItemStyle: { marginLeft: 30 },
        }}
      />
      <Tab.Screen
        name="MoreScreen"
        component={MoreScreen}
        options={{ title: "Más" }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  barStyles: {
    elevation: 8,
    borderTopWidth: 0,
    position: "absolute",
    height: 70,
    paddingBottom: 10,
    backgroundColor: "#fff",    
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
  },
  barItemQR: {
    backgroundColor: "#3F43E8",
    position: "absolute",
    width: 68,
    height: 68,
    left: width / 2 - 34,
    borderRadius: 34,
    bottom: 8,
    zIndex: 1,
    borderWidth: 0,
    borderColor: "#ECF9FF",
  },
  barIconQR: {
    textAlignVertical: "center",
    top: 8,
  },
});
