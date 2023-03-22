import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "../screens/Tabs/Home";
import Categories from "../screens/Tabs/Categories";
import Shops from "../screens/Tabs/Shops";
import Profile from "../screens/Tabs/Profile";
import colors from "../constants/colors";
const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <View style={styles.screen}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let IconName;
            if (route.name === "Home") {
              IconName = "home";
            } else if (route.name === "Categories") {
              IconName = "search";
            } else if (route.name === "Boutiques") {
              IconName = "shopping-bag";
            } else if (route.name === "Profil") {
              IconName = "user";
            }
            return (
              <Icon
                style={{
                  color: focused ? colors.third : colors.primary,
                  marginTop: focused ? 5 : 15,
                }}
                name={IconName}
                size={20}
              />
            );
          },
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.primary,
          tabBarStyle: {
            backgroundColor: colors.primary,
            height: 80,
          },
          tabBarItemStyle: {
            backgroundColor: colors.background,
            height: 100,
            width: 80,
            paddingBottom: 35,
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Boutiques" component={Shops} />
        <Tab.Screen name="Profil" component={Profile} />
      </Tab.Navigator>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default BottomNavigation;
