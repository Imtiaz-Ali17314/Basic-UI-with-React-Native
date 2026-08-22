import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DateSelector from "../../components/DateSelector";
import FIlterTabs from "../../components/FIlterTabs";
import Header from "../../components/Header";
import TaskCard from "../../components/TaskCard";
import Colors from "../../constants/Colors";
import { FilterOptions, TASKS } from "../../constants/tasks";

export default function Index() {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState<FilterOptions>("All");
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <FlatList
        data={TASKS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard tasks={item} />}
        ListHeaderComponent={
          <>
            {/* Header */}
            <Header />
            {/* DateLabel */}
            <DateSelector />
            {/* Filters */}
            <FIlterTabs selected={activeFilter} onSelect={setActiveFilter} />
          </>
        }
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});
