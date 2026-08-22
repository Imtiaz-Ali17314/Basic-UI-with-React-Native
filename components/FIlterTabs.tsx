import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/Colors";
import { FilterOptions, FILTERS } from "../constants/tasks";

type FilterTabsProp = {
  selected: FilterOptions;
  onSelect: (filter: FilterOptions) => void;
};

const FIlterTabs = ({ selected, onSelect }: FilterTabsProp) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {FILTERS.map((filter) => {
        const isSelected = filter === selected;
        return (
          <TouchableOpacity
            key={filter}
            style={[styles.tab, isSelected && styles.selectedTab]}
            onPress={() => onSelect(filter)}
          >
            <Text
              style={[styles.tabText, isSelected && styles.tabTextSelected]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    gap: 10,
  },
  tab: {
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 22,
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  selectedTab: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.textSecondary,
  },
  tabTextSelected: {
    color: "#FFFFFF",
    fontWeight: "600",
  },
});

export default FIlterTabs;
