import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PagerView from "react-native-pager-view";
import Icon from "react-native-vector-icons/MaterialIcons";

const dzikirList = [
  {
    judul: "Membaca Ta'awudz",
    arab: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    latin: "Audzubillahi minasy syaithonir rojim",
    arti: "“Aku berlindung kepada Allah dari setan yang terkutuk”",
  },
  {
    judul: "Basmalah",
    arab: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم",
    latin: "Bismillahirrahmanirrahim",
    arti: "“Dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang”",
  },
];

export default function DzikirScreen() {
  const [showLatin, setShowLatin] = useState(true);
  const [fontSize, setFontSize] = useState(20);
  const [counters, setCounters] = useState(dzikirList.map(() => 0));
  const [currentPage, setCurrentPage] = useState(0);

  const updateCounter = (index: any, value: any) => {
    const newCounters = [...counters];
    newCounters[index] = Math.max(0, newCounters[index] + value);
    setCounters(newCounters);
  };

  return (
    <View style={styles.container}>
      <PagerView
        style={{ flex: 1 }}
        initialPage={0}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
      >
        {dzikirList.map((item, index) => (
          <View key={index} style={{ padding: 16 }}>
            <Text style={styles.subtitle}>{item.judul}</Text>

            <View style={styles.iconRow}>
              <TouchableOpacity>
                <Icon name="volume-up" size={24} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setFontSize((prev) => prev + 2)}>
                <Icon name="text-fields" size={24} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowLatin(!showLatin)}>
                <Icon name="menu-book" size={24} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="content-copy" size={24} />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.content}>
              <Text style={[styles.arabic, { fontSize: fontSize + 6 }]}>
                {item.arab}
              </Text>
              {showLatin && (
                <Text style={[styles.text, { fontSize, fontStyle: "italic" }]}>{item.latin}</Text>
              )}
              <Text style={[styles.text, { fontSize }]}>{item.arti}</Text>
            </ScrollView>

            <View style={styles.counterContainer}>
              <TouchableOpacity
                onPress={() => updateCounter(index, -counters[index])}
              >
                <Icon name="refresh" size={24} />
              </TouchableOpacity>
              <Text style={styles.counter}>{counters[index]}</Text>
              <TouchableOpacity onPress={() => updateCounter(index, 1)}>
                <Icon name="add" size={24} />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </PagerView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          {`${currentPage + 1} / ${dzikirList.length}`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingBottom: 32, backgroundColor: "#E0F4F2" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  toggle: { color: "blue" },
  title: { fontSize: 18, fontWeight: "bold" },
  subtitle: { marginBottom: 10, fontWeight: "bold", fontSize: 16 },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  content: { flex: 1 },
  arabic: { textAlign: "center", marginVertical: 8 },
  text: { textAlign: "center", marginVertical: 4 },
  counterContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    marginTop: 10,
  },
  counter: { fontSize: 20, marginHorizontal: 10 },
  footer: {
    alignItems: "center",
    paddingVertical: 10,
  },
  footerText: {
    color: "#555",
    fontWeight: "500",
  },
});
