import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import BottomNavigation from "./BottomNavigation";
import Login from "../screens/Authentication/Login";
import Register from "../screens/Authentication/Register";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Cart from "../screens/Cart/Cart";
const Stack = createStackNavigator();

function StackNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: Platform.OS === "android" ? "modal" : null,
      }}
      cardStyle={{ backgroundColor: "transparent" }}
    >
      <Stack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{
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
                onPress={() => {
                  navigation.navigate("Cart");
                }}
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
        }}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
