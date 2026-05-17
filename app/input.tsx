import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Input() {
  const [selectedDown, setSelectedDown] = useState(20);
  const [selectedMonth, setSelectedMonth] = useState(48);

  const downPayments = [5, 10, 15, 20, 25];
  const months = [24, 36, 48, 60, 72];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.carBody}>
          <View style={styles.glass} />

          <View style={styles.lightLeft} />
          <View style={styles.lightRight} />

          <View style={styles.line1} />
          <View style={styles.line2} />
        </View>
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.title}>คำนวณค่างวดรถ</Text>

        {/* ราคารถ */}
        <Text style={styles.label}>ราคารถ (บาท)</Text>

        <TextInput
          placeholder="เช่น 850000"
          style={styles.input}
          keyboardType="numeric"
        />

        {/* เงินดาวน์ */}
        <Text style={styles.label}>เลือกเงินดาวน์ (%)</Text>

        <View style={styles.optionContainer}>
          {downPayments.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.optionButton,
                selectedDown === item && styles.activeButton,
              ]}
              onPress={() => setSelectedDown(item)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedDown === item && styles.activeText,
                ]}
              >
                {item}%
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ระยะเวลา */}
        <Text style={styles.label}>ระยะเวลาผ่อน (งวด)</Text>

        <View style={styles.optionContainer}>
          {months.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.optionButton,
                selectedMonth === item && styles.activeButton,
              ]}
              onPress={() => setSelectedMonth(item)}
            >
              <Text
                style={[
                  styles.optionText,
                  selectedMonth === item && styles.activeText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ดอกเบี้ย */}
        <Text style={styles.label}>ดอกเบี้ย (% ต่อปี)</Text>

        <TextInput
          placeholder="เช่น 2.59"
          style={styles.input}
          keyboardType="numeric"
        />

        {/* ปุ่ม */}
        <TouchableOpacity style={styles.calculateButton}>
          <Text style={styles.calculateText}>คำนวณค่างวด</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  header: {
    height: 230,
    backgroundColor: "#ff4d4d",
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },

  carBody: {
    width: 260,
    height: 160,
    backgroundColor: "#ff4d4d",
    alignItems: "center",
    justifyContent: "center",
  },

  glass: {
    width: 140,
    height: 60,
    backgroundColor: "#aee3f8",
    borderRadius: 10,
    marginBottom: 30,
  },

  lightLeft: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: "gold",
    position: "absolute",
    left: 10,
    bottom: 20,
  },

  lightRight: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: "gold",
    position: "absolute",
    right: 10,
    bottom: 20,
  },

  line1: {
    width: 110,
    height: 12,
    borderRadius: 10,
    backgroundColor: "#cc3333",
    marginBottom: 15,
  },

  line2: {
    width: 70,
    height: 10,
    borderRadius: 10,
    backgroundColor: "#cc3333",
  },

  card: {
    backgroundColor: "#f2f2f2",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 22,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#1f2a44",
    marginBottom: 30,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4a5568",
    marginBottom: 10,
    marginTop: 10,
  },

  input: {
    height: 58,
    backgroundColor: "#e9edf2",
    borderRadius: 14,
    paddingHorizontal: 18,
    fontSize: 18,
    marginBottom: 20,
  },

  optionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },

  optionButton: {
    width: 58,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e9edf2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    marginBottom: 12,
  },

  activeButton: {
    backgroundColor: "#1f2a44",
  },

  optionText: {
    color: "#718096",
    fontWeight: "600",
  },

  activeText: {
    color: "#ffffff",
  },

  calculateButton: {
    height: 60,
    backgroundColor: "#2962ff",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },

  calculateText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
