import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";

// Define the props interface for the DatePickerModal component
export interface DatePickerModalProps {
  /** Determines if the modal is visible */
  isVisible: boolean;

  /** Callback when the modal is closed */
  onClose: () => void;

  /** Currently selected date (optional) */
  date?: Date;

  /** Callback when the date is changed */
  onChange: (date: Date) => void;

  /** Indicates if this is the start date (optional) */
  isStartDate?: boolean;

  /** Style for the modal container */
  modalStyle?: StyleProp<ViewStyle>;

  /** Style for the modal content */
  modalContentStyle?: StyleProp<ViewStyle>;

  /** Style for the modal title */
  modalTitleStyle?: StyleProp<ViewStyle>;

  /** Style for the selection overlay */
  selectionOverlayStyle?: StyleProp<ViewStyle>;

  /** Style for the button container */
  buttonContainerStyle?: StyleProp<ViewStyle>;

  /** Style for the cancel button */
  cancelButtonStyle?: StyleProp<ViewStyle>;

  /** Style for the confirm button */
  confirmButtonStyle?: StyleProp<ViewStyle>;

  /** Whether to show the year selector (optional) */
  showYear?: boolean;

  /** Title for the modal */
  title?: string;
}

/**
 * DatePickerModal Component
 * Displays a date picker modal with customizable styles and callbacks.
 */
export declare const DatePickerModal: React.FC<DatePickerModalProps>;
