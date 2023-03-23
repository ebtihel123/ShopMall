
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import FavorieItem from "../../components/FavorieItem";
const Favorie = () => {
    
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
            renderItem={(item) => < FavorieItem data={item.item} />}
          />
        </View>
      );
    };
    

export default Favorie;
