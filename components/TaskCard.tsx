import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../constants/Colors";
import { Task } from "../constants/tasks";

const STATUS_COLORS = {
  "In-Progress": Colors.statusInProgress,
  "To-do": Colors.statusTodo,
  Done: Colors.statusDone,
};

export type TaskCardProps = {
  tasks: Task;
};

const TaskCard = ({ tasks }: TaskCardProps) => {
  const router = useRouter();

  const handlePress = () => {
    const courseTaskIds = ["1", "2", "3", "4"];

    if (courseTaskIds.includes(tasks.id)) {
      router.push({
        pathname: "/research/[id]",
        params: { id: tasks.id },
      });
    } else {
      console.log("Normal task clicked:", tasks.title);
    }
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.content}>
        <Text style={styles.category}>{tasks.category}</Text>
        <Text style={styles.title}>{tasks.title}</Text>

        <View style={styles.footer}>
          <View style={styles.timeRow}>
            <Ionicons name="time-outline" size={14} color={Colors.primary} />
            <Text style={styles.time}>{tasks.time}</Text>
          </View>

          <Text style={[styles.status, { color: STATUS_COLORS[tasks.status] }]}>
            {tasks.status}
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.iconBadge,
          { backgroundColor: tasks.icon.backgroundColor },
        ]}
      >
        <Ionicons name={tasks.icon.name as any} size={18} color={"#fff"} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 18,
    padding: 18,
    marginHorizontal: 20,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  content: {
    flex: 1,
  },
  category: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: Colors.textPrimary,
    marginBottom: 14,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  time: {
    fontSize: 12,
    color: Colors.textPrimary,
    fontWeight: "500",
  },
  status: {
    fontSize: 12,
    fontWeight: "500",
  },
  iconBadge: {
    width: 40,
    height: 40,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 14,
  },
});

export default TaskCard;
