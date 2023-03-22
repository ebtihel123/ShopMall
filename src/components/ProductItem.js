import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";

const ProductItem = (props) => {
  return (
    <View style={styles.productContainer}>
      <Image style={styles.productImage} source={{ uri: props.data.image }} />
      <View style={styles.productDetails}>
        <Text style={{ fontSize: 20, marginBottom: 10, color: "black" }}>
          {props.data.title}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
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
export default ProductItem;
