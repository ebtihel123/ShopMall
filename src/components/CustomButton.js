import { Pressable, StyleSheet, Text } from "react-native";
import normalize from "react-native-normalize";
import colors from "../constants/colors";

const CustomButton = (props) => {
  return (
    <Pressable
      {...props}
      style={{ ...styles.button, ...props.style }}
      onPress={props.onPress}
    >
      <Text style={styles.title}>{props.title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "75%",
    height: normalize(50, "height"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: normalize(10),
    backgroundColor: colors.button,
    marginVertical: normalize(10, "height"),
  },
  title: {
    color: colors.text,
    fontWeight: "400",
    fontSize: normalize(16),
  },
});

export default CustomButton;
