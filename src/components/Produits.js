import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";

const Produits = (props) => {
  
  return (
    <View style={styles.productContainer}>
      <Image
        style={styles.productImage}
        source={{ uri: "https://via.placeholder.com/150" }}
      />
      <View style={styles.productDetails}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>
          {props.data.title}
        </Text>
        <Text style={styles.productPrice}>$99.99</Text>
      </View>
    </View>
  );
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: "#888",
  },
});
export default Produits;
