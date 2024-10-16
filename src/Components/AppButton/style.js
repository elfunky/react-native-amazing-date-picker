import { StyleSheet } from "react-native";
import colors from "../../Utils/customColors";
import { wt, fs } from "../../Utils/constants";

const styles = StyleSheet.create({
  container: {
    width: "95%",
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: wt(12),
    borderRadius: 5,
    alignSelf: "center",
  },
  text: {
    fontSize: fs(16),
    color: "black",
    fontFamily: "Montserrat SemiBold",
  },
  flexRow: {
    flexDirection: "row",
  },
  indicatorStyle: {
    right: wt(5),
  },
});

export default styles;
