import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import normalize from "react-native-normalize";
const TableRow = ({ data }) => {
  return (
    <View style={styles.tableRow}>
      <Text style={styles.tableCell}>{data}</Text>
    </View>
  );
};

const Table = ({ tableData }) => {
  return (
    <View style={styles.table}>
      {tableData.map((rowData, index) => {
        return <TableRow key={index} data={rowData} />;
      })}
    </View>
  );
};

const Categories = () => {
  const tableData = ["NEW IN ", "DRESSES", "CLOTHING"];

  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData(
      "https://947d-102-169-30-23.eu.ngrok.io/theshopp/api/v1/all-shops"
    );
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerLargeTitle: true,
      headerTitle: "𝓜 𝓪 𝓹 𝓜 𝓪 𝓵𝓵",
      headerTitleAlign: "center",

      headerTitleStyle: {
        fontFamily: "special-font",
        fontSize: 20,
        color: "black",
        fontWeight: "bold",

        textDecoration: "underline",
      },

      headerRight: () => (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              marginRight: 15,
            }}
          >
            <AntDesign name="shoppingcart" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <AntDesign name="hearto" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              marginLeft: 15,
            }}
          >
            <FontAwesome name="envelope-o" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
      headerCenter: () => (
        <TouchableOpacity
          onPress={() => {}}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontStyle: "italic",
              fontFamily: "Helvetica",
              textDecoration: "underline",
              color: "purple",
            }}
          >
            MapMall
          </Text>
        </TouchableOpacity>
      ),
      headerSearchBarOptions: {
        placeholder: "Search",
        onChangeText: (event) => {
          searchFilterFunction(event.nativeEvent.text);
        },
      },
    });
  }, [navigation]);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
      setFilteredData(json.results);
      console.log(json.results);
    } catch (error) {
      console.error(error);
    }
  };

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = data.filter((item) => {
        const itemData = item.name.first
          ? item.name.first.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
    } else {
      setFilteredData(data);
    }
  };

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {}}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: normalize(60),
        }}
      >
        <Text
          style={{
            fontStyle: "italic",
            fontWeight: "bold",
            fontFamily: "Helvetica",
            textDecoration: "underline",
            color: "black",
          }}
        >
          WOMEN MEN KIDS CURVE+PLUS HOME{" "}
        </Text>
      </TouchableOpacity>

      <View style={styles.rectangle}>
        <Text style={styles.rectangleText}>Buy 2 GET 1 OF THEM 50% OFF</Text>
      </View>

      <View style={styles.container}>
        <Table tableData={tableData} />
        <Image
          source={require("../../../assets/photo.jpg")}
          style={{ width: "100%", height: 150 }}
        />
      </View>

      {filteredData.map((item, index) => {
        return (
          <View key={index} style={styles.itemContainer}>
            <Image source={{ uri: item.picture.large }} style={styles.image} />
            <View>
              <Text style={styles.textName}>
                {item.name.first} {item.name.last}
              </Text>
              <Text style={styles.textEmail}>{item.login.username}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};
export default Categories;

const styles = StyleSheet.create({
  textFriends: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 10,
    fontWeight: "light",
    marginTop: normalize(10),
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
  },
  rectangle: {
    backgroundColor: "#D7BDE2",

    marginTop: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },

  rectangleText: {
    color: "white",
    fontWeight: "light",
    fontSize: 18,
    textAlign: "center",
    paddingTop: 3,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
  },
  table: {
    borderWidth: 1,
    borderColor: "#ccc",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  tableCell: {
    padding: 12,
  },
  textName: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: "600",
  },
  textEmail: {
    fontSize: 14,
    marginLeft: 10,
    color: "grey",
  },
});
