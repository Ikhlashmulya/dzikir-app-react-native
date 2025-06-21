import { Dzikir } from "@/types/dzikir";
import { setStringAsync } from "expo-clipboard";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import PagerView from "react-native-pager-view";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function DzikirLayout({ dzikirList }: { dzikirList: Dzikir[] }) {
  const [showLatin, setShowLatin] = useState(true);
  const [fontSize, setFontSize] = useState(20);
  const [counters, setCounters] = useState(dzikirList.map(() => 0));
  const [currentPage, setCurrentPage] = useState(0);

  const updateCounter = (index: any, value: any) => {
    const newCounters = [...counters];
    newCounters[index] = Math.max(0, newCounters[index] + value);
    setCounters(newCounters);
  };

  const increaseFontSize = () => {
    if (fontSize >= 30) return;
    setFontSize((prev) => prev + 2);
  };

  const decreaseFontSize = () => {
    if (fontSize <= 14) return;
    setFontSize((prev) => prev - 2);
  };

  const copyToClipboard = async (text: string) => {
    await setStringAsync(text);
    ToastAndroid.showWithGravity(
      "Copied to clipboard",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#E0F4F2" }}>
      <PagerView
        style={{ flex: 1, marginBottom: 32 }}
        initialPage={0}
        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
      >
        {dzikirList.map((item, index) => (
          <View key={index} style={{ padding: 16 }}>
            <Text
              style={{ marginBottom: 10, fontWeight: "bold", fontSize: 16 }}
            >
              {item.judul}
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginVertical: 10,
              }}
            >
              <TouchableOpacity>
                <Icon name="volume-up" size={24} />
              </TouchableOpacity>
              <TouchableOpacity onPress={increaseFontSize}>
                <Icon name="zoom-in" size={24} />
              </TouchableOpacity>
              <TouchableOpacity onPress={decreaseFontSize}>
                <Icon name="zoom-out" size={24} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setShowLatin(!showLatin)}>
                <Icon name="menu-book" size={24} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  copyToClipboard(
                    item.arab + "\n" + item.latin + "\n" + item.arti
                  )
                }
              >
                <Icon name="content-copy" size={24} />
              </TouchableOpacity>
            </View>

            <ScrollView style={{ flex: 1 }}>
              <Text
                style={{ textAlign: "center", marginVertical: 8, fontSize }}
              >
                {item.arab}
              </Text>
              {showLatin && (
                <Text
                  style={{
                    textAlign: "center",
                    marginVertical: 4,
                    fontSize,
                    fontStyle: "italic",
                  }}
                >
                  {item.latin}
                </Text>
              )}
              <Text
                style={{ textAlign: "center", marginVertical: 4, fontSize }}
              >
                {item.arti}
              </Text>
            </ScrollView>

            {item.jumlah > 1 && (
              <View
                style={{
                  flexDirection: "row",
                  gap: 20,
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <TouchableOpacity
                  onPress={() => updateCounter(index, -counters[index])}
                >
                  <Icon name="refresh" size={30} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>{counters[index]}</Text>
                <TouchableOpacity onPress={() => updateCounter(index, 1)}>
                  <Icon name="add" size={30} />
                </TouchableOpacity>
              </View>
            )}

            <View
              style={{
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  color: "#555",
                  fontWeight: "500",
                }}
              >{`${currentPage + 1} / ${dzikirList.length}`}</Text>
            </View>
          </View>
        ))}
      </PagerView>
    </View>
  );
}
