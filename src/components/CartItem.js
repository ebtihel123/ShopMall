import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";

const CartItem = (props) => {
  const [quantity1, setQuantity1] = useState(0);

  const incrementQuantity1 = () => {
    setQuantity1(quantity1 + 1);
  };

  const decrementQuantity1 = () => {
    if (quantity1 > 1) {
      setQuantity1(quantity1 - 1);
    }
  };
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
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Quantity: {quantity1}
      </Text>
      <View style={{ flexDirection: "row", marginBottom: 10 }}>
        <Button title="-" onPress={decrementQuantity1} />
        <Button title="+" onPress={incrementQuantity1} />
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
  productQuantity: {
    fontSize: 18,
    fontWeight: "bold",
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 10,
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "flex-end",
  },
});
export default CartItem;
