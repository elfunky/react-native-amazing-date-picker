# React Native Amazing Date Picker

A customizable date picker modal for React Native applications.

## Installation

You can install `react-native-amazing-date-picker` via npm or Yarn:

```bash
npm install react-native-amazing-date-picker

or

yarn add react-native-amazing-date-picker

```

# Example Preview

### Here’s a preview of how the DatePickerModal looks when rendered:

![showYear prop to true it unable the year column.](https://raw.githubusercontent.com/elfunky/react-native-amazing-date-picker/main/src/assets/yearTrue.png)
![ Default view of the date picker modal.](https://raw.githubusercontent.com/elfunky/react-native-amazing-date-picker/main/src/assets/yearFalse.png)

## Dependencies

This package requires the following dependencies:

- [react-native-modal](https://github.com/react-native-modal/react-native-modal): For the modal functionality.

- [moment](https://github.com/moment/moment): A JavaScript date library for parsing, validating, manipulating, and formatting dates.

## Usage

Here is a simple example of how to use the `DatePickerModal` component in your React Native application:

```javascript
<DatePickerModal
  isVisible={isModalVisible}
  onClose={() => setModalVisible(false)}
  date={isStartDate ? startDate : endDate}
  onChange={onChange}
  isStartDate={isStartDate}
  showYear={false} // To show only date and month
  modalContentStyle={{ height: 350 }} // Example custom style
  modalTitleStyle={{ color: 'blue' }} // Example custom style
  selectionOverlayStyle={{ backgroundColor: 'rgba(0,0,0,0.2)' }} // Example custom style
  buttonContainerStyle={{ justifyContent: 'flex-end' }} // Example custom style
  cancelButtonStyle={{ backgroundColor: 'red' }} // Example custom style
  confirmButtonStyle={{ backgroundColor: 'green' }} // Example custom style
/>

Below is the complete example of how to use this component within a simple app:

import React, { useState } from "react";
import { View } from "react-native";
import { DatePickerModal } from "react-native-amazing-date-picker";
import moment from 'moment';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    const selectedDate = moment(date).format('DD MMM YY') // Or your desired format.
    setSelectedDate(selectedDate);
    setModalVisible(false);
  };

  return (
    <View>
      {/* Your component code */}
      <DatePickerModal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        date={selectedDate}
        onChange={handleDateChange}
        isStartDate={true} // Set to false if it's an end date picker
      />
    </View>
  );
};

export default App;
```

# Prop Usage

<div style="overflow-x: auto;">
  <table style="border-collapse: collapse; width: 100%;">
    <thead>
      <tr>
        <th style="border: 1px solid #dddddd; padding: 8px; text-align: left;">Prop</th>
        <th style="border: 1px solid #dddddd; padding: 8px; text-align: left;">Type</th>
        <th style="border: 1px solid #dddddd; padding: 8px; text-align: left;">Required</th>
        <th style="border: 1px solid #dddddd; padding: 8px; text-align: left;">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 8px;">isVisible</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">boolean</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Yes</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Controls the visibility of the date picker modal.</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 8px;">onClose</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">function</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Yes</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Callback function triggered when the modal is closed.</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 8px;">date</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Date</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Yes</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">The currently selected date.</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 8px;">onChange</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">function</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Yes</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Callback function triggered when the date is changed, providing the new date as an argument.</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 8px;">isStartDate</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">boolean</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">No</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Determines if the date picker is for the start date or end date.</td>
      </tr>
       <tr>
        <td style="border: 1px solid #dddddd; padding: 8px;">title</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">string</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Yes</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">It shows the title name of the modal.</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 8px;">showYear</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">boolean</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">No</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Enable the year column.</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 8px;">modalStyle</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">object</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">No</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Custom styles for the modal container.</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 8px;">modalContentStyle</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">object</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">No</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Custom styles for the modal content.</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 8px;">modalTitleStyle</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">object</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">No</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Custom styles for the modal title.</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 8px;">selectionOverlayStyle</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">object</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">No</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Custom styles for the selection overlay background.</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 8px;">buttonContainerStyle</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">object</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">No</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Custom styles for the button container.</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 8px;">cancelButtonStyle</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">object</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">No</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Custom styles for the cancel button.</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; padding: 8px;">confirmButtonStyle</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">object</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">No</td>
        <td style="border: 1px solid #dddddd; padding: 8px;">Custom styles for the confirm button.</td>
      </tr>
    </tbody>
  </table>
</div>

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
