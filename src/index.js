import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import Modal from "react-native-modal";
import constants from "./Utils/constants";
import AppButton from "./Components/AppButton/AppButton";
import colors from "./Utils/customColors";
import { ht, fs, wt, months } from "./Utils/constants";

const { width } = Dimensions.get("window");
const ITEM_HEIGHT = ht(50);
const VISIBLE_ITEMS = 3;

const DatePickerModal = ({
  isVisible,
  onClose,
  date,
  onChange,
  isStartDate,
  modalStyle,
  modalContentStyle,
  modalTitleStyle,
  selectionOverlayStyle,
  buttonContainerStyle,
  cancelButtonStyle,
  confirmButtonStyle,
  showYear,
  title,
}) => {
  const getYears = (startYear = 1950, endYear = 2050) => {
    return Array.from(
      { length: endYear - startYear + 1 },
      (_, i) => startYear + i
    );
  };
  const getDaysInMonth = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return Array.from({ length: daysInMonth }, (_, i) => i + 1);
  };

  const [years] = useState(getYears());
  const [dates, setDates] = useState([]);

  const [selectedDate, setSelectedDate] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedYear, setSelectedYear] = useState(1950);

  const monthScrollViewRef = useRef(null);
  const dateScrollViewRef = useRef(null);
  const yearScrollViewRef = useRef(null);

  // Update dates when month or year changes
  useEffect(() => {
    const newDates = getDaysInMonth(selectedYear, selectedMonth);
    setDates(newDates);

    // Adjust selected date if it exceeds the number of days in the new month
    if (selectedDate > newDates.length) {
      setSelectedDate(newDates.length);
    }
  }, [selectedMonth, selectedYear]);

  useEffect(() => {
    if (isVisible) {
      const initialDate = date || new Date();
      const initialYear = initialDate.getFullYear();
      const initialMonth = initialDate.getMonth();
      const initialDay = initialDate.getDate();

      // Ensure the initial values are within valid ranges
      const validYear = Math.max(
        Math.min(initialYear, years[years.length - 1]),
        years[0]
      );
      const validMonth = Math.max(Math.min(initialMonth, 11), 0);
      const validDay = Math.max(
        Math.min(initialDay, getDaysInMonth(validYear, validMonth).length),
        1
      );

      setSelectedYear(validYear);
      setSelectedMonth(validMonth);
      setSelectedDate(validDay);
    }
  }, [isVisible, date, years]);

  // Scroll to correct positions when date changes
  useEffect(() => {
    if (isVisible) {
      requestAnimationFrame(() => {
        monthScrollViewRef.current?.scrollTo({
          y: selectedMonth * ITEM_HEIGHT,
          animated: false,
        });

        dateScrollViewRef.current?.scrollTo({
          y: (selectedDate - 1) * ITEM_HEIGHT,
          animated: false,
        });

        yearScrollViewRef.current?.scrollTo({
          y: years.indexOf(selectedYear) * ITEM_HEIGHT,
          animated: false,
        });
      });
    }
  }, [isVisible, selectedMonth, selectedDate, selectedYear, years]);

  const handleScroll = (event, setter, data) => {
    const y = event.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    if (index >= 0 && index < data.length) {
      setter(data[index]);
    }
  };

  const confirmSelection = () => {
    const finalDate = new Date(selectedYear, selectedMonth, selectedDate);
    onChange(finalDate);
    onClose();
  };

  const renderPickerItems = (data, current, setter, scrollViewRef) => (
    <ScrollView
      ref={scrollViewRef}
      showsVerticalScrollIndicator={false}
      snapToInterval={ITEM_HEIGHT}
      decelerationRate="fast"
      scrollEventThrottle={16}
      onMomentumScrollEnd={(event) => handleScroll(event, setter, data)}
      contentContainerStyle={styles.pickerContent}
    >
      {data.map((item, index) => (
        <View key={index} style={[styles.pickerItem]}>
          <Text
            style={[
              styles.pickerText,
              current === item ? styles.selectedText : styles.unselectedText,
            ]}
          >
            {item}
          </Text>
        </View>
      ))}
    </ScrollView>
  );

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={[styles.modal, modalStyle]}
    >
      <View style={[styles.modalContent, modalContentStyle]}>
        <Text style={[styles.modalTitle, modalTitleStyle]}>
          {title || (isStartDate ? "From Date" : "To Date")}
        </Text>
        <View style={styles.pickerContainer}>
          <View style={styles.picker}>
            {renderPickerItems(
              dates,
              selectedDate,
              setSelectedDate,
              dateScrollViewRef
            )}
          </View>

          <View style={styles.picker}>
            {renderPickerItems(
              months,
              months[selectedMonth],
              (month) => setSelectedMonth(months.indexOf(month)),
              monthScrollViewRef
            )}
          </View>

          {showYear && (
            <View style={styles.picker}>
              {renderPickerItems(
                years,
                selectedYear,
                setSelectedYear,
                yearScrollViewRef
              )}
            </View>
          )}
        </View>
        <View style={styles.selectedDateView}>
          <View
            style={[
              showYear ? styles.selectionOverlay2 : styles.selectionOverlay,
              selectionOverlayStyle,
            ]}
            pointerEvents="none"
          />
          <View
            style={[
              showYear ? styles.selectionOverlay2 : styles.selectionOverlay,
              selectionOverlayStyle,
            ]}
            pointerEvents="none"
          />

          {showYear && (
            <View
              style={[
                showYear ? styles.selectionOverlay2 : styles.selectionOverlay,
                selectionOverlayStyle,
              ]}
              pointerEvents="none"
            />
          )}
        </View>
        <View style={[styles.buttonContainer, buttonContainerStyle]}>
          <AppButton
            title={"Cancel"}
            style={[styles.button, styles.cancelButton, cancelButtonStyle]}
            onPress={onClose}
          />
          <AppButton
            title={"Confirm"}
            style={[styles.button, styles.confirmButton, confirmButtonStyle]}
            onPress={confirmSelection}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: ht(15),
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: ht(350),
  },
  modalTitle: {
    fontSize: fs(20),
    fontWeight: "bold",
    marginBottom: ht(15),
    color: "black",
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
  },
  picker: {
    width: wt(width / 3 - 20),
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    overflow: "hidden",
    top: ht(20),
  },
  pickerContent: {
    paddingVertical: ITEM_HEIGHT,
  },
  pickerItem: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  pickerText: {
    fontSize: fs(20),
  },
  selectedText: {
    fontWeight: "500",
    color: colors.black,
  },
  unselectedText: {
    color: colors.gray,
  },
  selectionOverlay: {
    height: ITEM_HEIGHT,
    backgroundColor: colors.cottonGray,
    zIndex: -1000,
    borderRadius: 10,
    width: wt(170),
  },
  selectionOverlay2: {
    height: ITEM_HEIGHT,
    backgroundColor: colors.cottonGray,
    zIndex: -1000,
    borderRadius: 10,
    width: wt(100),
  },
  buttonContainer: {
    flexDirection: "row",
    gap: wt(20),
    marginHorizontal: wt(10),
    flexGrow: 1,
  },
  button: {
    flexGrow: 1,
    flex: 1,
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: colors.errorRed,
    backgroundColor: "transparent",
    top: ht(20),
  },
  confirmButton: {
    backgroundColor: colors.lightBlue,
    top: ht(20),
  },
  selectedDateView: {
    top: ht(132),
    height: ITEM_HEIGHT,
    zIndex: -1000,
    borderRadius: 10,
    top: ht(132),
    position: "absolute",
    flexDirection: "row",
    gap: ht(20),
  },
});

export { DatePickerModal };
