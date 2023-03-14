import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";

import { Entypo } from "@expo/vector-icons";

const PetMode = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.back()} style={styles.back}>
        <Entypo name="chevron-left" size={24} color="white" />
      </Pressable>
      <Text style={styles.welcomeText}>Welcome to the Pet-Mode Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  back: {
    position: "absolute",
    top: 50,
    left: 25,
    backgroundColor: "#2f3030",
    padding: 10,
    borderRadius: 5,
  },
});

export default PetMode;
