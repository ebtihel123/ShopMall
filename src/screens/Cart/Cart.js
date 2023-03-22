
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import CartItem from "../../components/CartItem";

const Cart = () => {
  const data = [
    {
      title: "robe",
      image: "image",
    },
    {
      title: "robe1",
      image: "image1",
    },
    {
      title: "robe2",
      image: "image2",
    },
  ];
  return (
    <View>
      <FlatList
        data={data}
        renderItem={(item) => <CartItem data={item.item} />}
      />
    </View>
  );
};

export default Cart;
