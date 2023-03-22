import React, { useState } from "react";
import { View } from "react-native";
import CustomButton from "../../components/CustomButton";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import colors from "../../constants/colors";
import Icon from "react-native-vector-icons/Feather";
import normalize from "react-native-normalize";

const Profile = (props) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <>
      {!showLogin && !showRegister && (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <CustomButton
            onPress={() => {
              setShowLogin(true);
            }}
            title="Connexion"
          />
          <CustomButton
            onPress={() => {
              setShowRegister(true);
            }}
            title="Creér un compte"
          />
        </View>
      )}
      {(showLogin || showRegister) && (
        <Icon
          name="arrow-left"
          size={normalize(35)}
          color={colors.primary}
          onPress={() => {
            setShowLogin(false);
            setShowRegister(false);
          }}
          style={{ marginLeft: normalize(20), marginTop: normalize(20) }}
        />
      )}
      {showLogin && <Login />}
      {showRegister && <Register />}
    </>
  );
};

export default Profile;
