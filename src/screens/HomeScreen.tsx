import React from "react";
import { View, StatusBar, ScrollView } from "react-native";
import AppServices from "../components/AppServices";
import CardInfo from "../components/CardInfo";
import HeaderHome from "../components/HeaderHome";
import ImageCarousel from "../components/ImageCarousel";
import LastActivity from "../components/LastActivity";
import MainCard from "../components/MainCard";
import SuscribeCard from "../components/SuscribeCard";

export default function HomeScreen() {
  return (
    <>
      <StatusBar backgroundColor="#FFE600" barStyle="dark-content" />
<ScrollView
  showsVerticalScrollIndicator={false}
  style={{ flex: 1, backgroundColor: "#fff" }}
  contentContainerStyle={{ paddingBottom: 110 }}
>
  <HeaderHome />
  <MainCard />
  <CardInfo
    title="Préstamos"
    description="Consultá las opciones de financiamiento disponibles para vos o tu negocio."
  />
  <SuscribeCard title="Suscribite al nivel 6 por $ 499/mes" />
  <AppServices />
  <ImageCarousel />
  <LastActivity />
</ScrollView>
    </>
  );
}
