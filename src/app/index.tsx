import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../components/Header";
import Colors from "../../constants/Colors";
import { TASKS } from "../../constants/tasks";

export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <FlatList
        data={TASKS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 18 }}>{item.title}</Text>
        )}
        ListHeaderComponent={
          <>
            {/* Header */}
            <Header />
            {/* DateLabel */}
            {/* Filters */}
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
