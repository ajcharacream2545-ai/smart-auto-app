import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/input");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/smart auto loan.png")}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Smart Auto Loan</Text>

      <Text style={styles.subtitle}>วางแผนออกรถฉบับมือโปร</Text>

      <ActivityIndicator size="small" color="#ffffff" style={styles.loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e2a3a",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#9aa7b8",
    marginTop: 10,
  },

  loading: {
    marginTop: 50,
  },
});
