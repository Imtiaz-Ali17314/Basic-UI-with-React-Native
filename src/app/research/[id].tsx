import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../../constants/Colors";
import { Task, TASKS } from "../../../constants/tasks";

// Research content for each course task
const RESEARCH_CONTENT = {
  "1": {
    title: "Market Research",
    description:
      "Learn how to conduct effective market research for your grocery shopping app design.",
    keyPoints: [
      "Understand your target audience demographics",
      "Analyze competitor apps in the market",
      "Identify current market trends and gaps",
      "Gather user feedback through surveys",
      "Study user behavior and shopping patterns",
    ],
    resources: [
      "Market Research Guide PDF",
      "Competitor Analysis Template",
      "User Survey Form",
    ],
  },
  "2": {
    title: "Competitive Analysis",
    description:
      "Analyze your competitors to understand their strengths and weaknesses.",
    keyPoints: [
      "Identify top 5 competitors in grocery delivery",
      "Analyze their UI/UX design patterns",
      "Study their pricing and delivery models",
      "Identify their unique selling points",
      "Find opportunities for differentiation",
    ],
    resources: [
      "Competitive Analysis Template",
      "SWOT Analysis Guide",
      "Market Positioning Strategy",
    ],
  },
  "3": {
    title: "Low-fidelity Wireframe",
    description:
      "Create low-fidelity wireframes for your Uber Eats redesign challenge.",
    keyPoints: [
      "Start with paper sketches",
      "Create basic layout and structure",
      "Define user flow and navigation",
      "Place key UI elements",
      "Get feedback on early designs",
    ],
    resources: [
      "Wireframing Best Practices",
      "UI Pattern Library",
      "Design System Guide",
    ],
  },
  "4": {
    title: "Design Sprint Pitch",
    description:
      "Learn how to effectively pitch a Design Sprint to stakeholders.",
    keyPoints: [
      "Understand Design Sprint methodology",
      "Prepare compelling presentation",
      "Define clear objectives and outcomes",
      "Include timeline and resources needed",
      "Showcase expected ROI",
    ],
    resources: [
      "Design Sprint Guide",
      "Presentation Template",
      "Stakeholder Management Tips",
    ],
  },
};

export default function ResearchDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const task = TASKS.find((t: Task) => t.id === id);
  const content = RESEARCH_CONTENT[id as keyof typeof RESEARCH_CONTENT];

  if (!task || !content) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Research</Text>
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Task not found</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>
          {content.title}
        </Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Task Info */}
        <View style={styles.taskInfo}>
          <View style={styles.taskHeader}>
            <View
              style={[
                styles.iconBadge,
                { backgroundColor: task.icon.backgroundColor },
              ]}
            >
              <Ionicons name={task.icon.name as any} size={24} color="#fff" />
            </View>
            <View style={styles.taskMeta}>
              <Text style={styles.category}>{task.category}</Text>
              <Text style={styles.statusText}>Status: {task.status}</Text>
            </View>
          </View>
          <Text style={styles.timeText}>⏰ {task.time}</Text>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.description}>{content.description}</Text>
        </View>

        {/* Key Points */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Points</Text>
          {content.keyPoints.map((point, index) => (
            <View key={index} style={styles.bulletPoint}>
              <Text style={styles.bulletIcon}>•</Text>
              <Text style={styles.bulletText}>{point}</Text>
            </View>
          ))}
        </View>

        {/* Resources */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resources</Text>
          {content.resources.map((resource, index) => (
            <View key={index} style={styles.resourceItem}>
              <Ionicons
                name="document-text-outline"
                size={18}
                color={Colors.primary}
              />
              <Text style={styles.resourceText}>{resource}</Text>
            </View>
          ))}
        </View>

        {/* Action Button */}
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Start Research</Text>
          <Ionicons name="arrow-forward" size={20} color="#fff" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: Colors.primary,
  },
  backButton: {
    marginRight: 16,
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  taskInfo: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  taskHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  iconBadge: {
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  taskMeta: {
    flex: 1,
  },
  category: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontWeight: "500",
  },
  statusText: {
    fontSize: 14,
    color: Colors.textPrimary,
    fontWeight: "600",
    marginTop: 2,
  },
  timeText: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.textPrimary,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
  bulletPoint: {
    flexDirection: "row",
    marginBottom: 8,
    alignItems: "flex-start",
  },
  bulletIcon: {
    fontSize: 16,
    color: Colors.primary,
    marginRight: 10,
    marginTop: 2,
  },
  bulletText: {
    fontSize: 15,
    color: Colors.textPrimary,
    flex: 1,
    lineHeight: 22,
  },
  resourceItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.surface,
    padding: 12,
    borderRadius: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  resourceText: {
    fontSize: 15,
    color: Colors.textPrimary,
    marginLeft: 10,
  },
  startButton: {
    flexDirection: "row",
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 30,
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});
