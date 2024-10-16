import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

import colors from "../../Utils/customColors";
import styles from "./style";

const AppButton = ({
  title = "Demo Button",
  onPress,
  style,
  textStyle,
  disabled,
  isLoadingLoader,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.container,
        { backgroundColor: disabled ? "grey" : colors.primary },
        style,
      ]}
    >
      <View style={styles.flexRow}>
        {isLoadingLoader && (
          <ActivityIndicator
            style={styles.indicatorStyle}
            size="small"
            color={colors.white}
          />
        )}
        <Text style={[styles.text, textStyle]} allowFontScaling={false}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;
