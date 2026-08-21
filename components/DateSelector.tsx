import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";

export type DateItem = {
  month: string;
  day: number;
  weekDay: string;
  key: string;
};

const generateDateItems = (): DateItem[] => {
  const base = new Date(2026, 7, 21);
  return Array.from({ length: 5 }, (_, i) => {
    const date = new Date(base);
    date.setDate(base.getDate() + i);
    return {
      month: date.toLocaleString("en-US", { month: "short" }),
      day: date.getDate(),
      weekDay: date.toLocaleString("en-US", { weekday: "short" }),
      key: date.toISOString().split("T")[0],
    };
  });
};

const DATES = generateDateItems();
const DEFAULT_SELECTED_DATE = DATES[2].key;

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(DEFAULT_SELECTED_DATE);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {DATES.map((date) => {
        return (
          <TouchableOpacity
            key={date.key}
            style={[
              styles.dateItem,
              date.key === selectedDate && styles.dateItemSelected,
            ]}
            onPress={() => setSelectedDate(date.key)}
          >
            <Text
              style={[
                styles.month,
                date.key === selectedDate && styles.selectedText,
              ]}
            >
              {date.month}
            </Text>
            <Text
              style={[
                styles.day,
                date.key === selectedDate && styles.selectedText,
              ]}
            >
              {date.day}
            </Text>
            <Text
              style={[
                styles.weekDay,
                date.key === selectedDate && styles.selectedText,
              ]}
            >
              {date.weekDay}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
  },
  dateItem: {
    alignItems: "center",
    alignSelf: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    minWidth: 64,
  },
  dateItemSelected: {
    backgroundColor: Colors.primary,
  },
  month: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  day: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.textPrimary,
    marginBottom: 6,
  },
  weekDay: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  selectedText: {
    color: "#FAFAFA",
  },
});

export default DateSelector;
