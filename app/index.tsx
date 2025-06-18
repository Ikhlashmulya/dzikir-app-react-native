import { router } from "expo-router";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const menuItems = [
  {
    label: "Dzikir Pagi",
    icon: require("@/assets/images/pagi.png"),
    onclick: () => router.navigate("/dzikir-pagi"),
  },
  {
    label: "Dzikir Petang",
    icon: require("@/assets/images/petang.png"),
    onclick: () => alert("clicked"),
  },
];

export default function DzikirApp() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Kumpulan Dzikir Sesuai Sunnah</Text>

      <View style={styles.verseBox}>
        <Text style={styles.verse}>
          Maka bersabarlah kamu, karena sesungguhnya janji Allah itu benar, dan
          mohonlah ampunan untuk dosamu dan bertasbihlah seraya memuji Rabb-mu
          pada waktu petang dan pagi
        </Text>
        <Text style={styles.verseRef}>QS Al-Mu'min (40) Ayat 55</Text>
      </View>

      <View style={styles.menuGrid}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            style={styles.menuItem}
            key={index}
            onPress={item.onclick}
          >
            <Image source={item.icon} style={styles.menuIcon} />
            <Text style={styles.menuLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E0F4F2",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    color: "#21504B",
    marginBottom: 16,
  },
  verseBox: {
    backgroundColor: "#A6D3C8",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  verse: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginBottom: 8,
  },
  verseRef: {
    fontSize: 13,
    fontStyle: "italic",
    color: "#fff",
    textAlign: "center",
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  menuItem: {
    width: "50%",
    alignItems: "center",
    marginBottom: 20,
  },
  menuIcon: {
    width: 50,
    height: 50,
    marginBottom: 8,
    resizeMode: "contain",
  },
  menuLabel: {
    fontSize: 13,
    textAlign: "center",
    color: "#21504B",
  },
});
