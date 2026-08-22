export type StatusBar = "Done" | "In-Progress" | "To-do";

export type Icon = {
  name: string;
  backgroundColor: string;
};

export type Task = {
  id: string;
  category: string;
  title: string;
  time: string;
  status: StatusBar;
  icon: Icon;
};

export const TASKS: Task[] = [
  // === WORK TASKS ===
  {
    id: "1",
    category: "work",
    title: "Complete project proposal",
    time: "9:00 AM",
    status: "Done",
    icon: { name: "briefcase-outline", backgroundColor: "#4ADE80" },
  },
  {
    id: "2",
    category: "work",
    title: "Team meeting with designers",
    time: "10:30 AM",
    status: "In-Progress",
    icon: { name: "people-outline", backgroundColor: "#f59e0b" },
  },
  {
    id: "3",
    category: "work",
    title: "Review pull requests",
    time: "11:45 AM",
    status: "To-do",
    icon: { name: "git-pull-request-outline", backgroundColor: "#3B82F6" },
  },
  {
    id: "4",
    category: "work",
    title: "Deploy app to production",
    time: "2:00 PM",
    status: "To-do",
    icon: { name: "rocket-outline", backgroundColor: "#8B5CF6" },
  },
  {
    id: "5",
    category: "work",
    title: "Write technical documentation",
    time: "3:30 PM",
    status: "Done",
    icon: { name: "document-text-outline", backgroundColor: "#EC4899" },
  },
  {
    id: "6",
    category: "work",
    title: "Client presentation",
    time: "5:00 PM",
    status: "In-Progress",
    icon: { name: "bar-chart-outline", backgroundColor: "#14B8A6" },
  },

  // === PERSONAL TASKS ===
  {
    id: "7",
    category: "personal",
    title: "Gym workout",
    time: "6:00 AM",
    status: "Done",
    icon: { name: "barbell-outline", backgroundColor: "#F97316" },
  },
  {
    id: "8",
    category: "personal",
    title: "Meditation & Yoga",
    time: "7:15 AM",
    status: "Done",
    icon: { name: "leaf-outline", backgroundColor: "#A3E635" },
  },
  {
    id: "9",
    category: "personal",
    title: "Grocery shopping",
    time: "12:30 PM",
    status: "To-do",
    icon: { name: "cart-outline", backgroundColor: "#F472B6" },
  },
  {
    id: "10",
    category: "personal",
    title: "Call mom",
    time: "6:30 PM",
    status: "In-Progress",
    icon: { name: "call-outline", backgroundColor: "#60A5FA" },
  },
  {
    id: "11",
    category: "personal",
    title: "Read 30 pages of book",
    time: "9:00 PM",
    status: "To-do",
    icon: { name: "book-outline", backgroundColor: "#A78BFA" },
  },
  {
    id: "12",
    category: "personal",
    title: "Plan weekend trip",
    time: "10:00 PM",
    status: "To-do",
    icon: { name: "map-outline", backgroundColor: "#34D399" },
  },

  // === STUDY TASKS ===
  {
    id: "13",
    category: "study",
    title: "Complete React Native course",
    time: "8:00 AM",
    status: "In-Progress",
    icon: { name: "code-outline", backgroundColor: "#06B6D4" },
  },
  {
    id: "14",
    category: "study",
    title: "Practice TypeScript exercises",
    time: "1:00 PM",
    status: "To-do",
    icon: { name: "terminal-outline", backgroundColor: "#6366F1" },
  },
  {
    id: "15",
    category: "study",
    title: "Prepare for technical interview",
    time: "4:00 PM",
    status: "Done",
    icon: { name: "bulb-outline", backgroundColor: "#F43F5E" },
  },
  {
    id: "16",
    category: "study",
    title: "Watch UI/UX design tutorial",
    time: "7:00 PM",
    status: "To-do",
    icon: { name: "layers-outline", backgroundColor: "#EAB308" },
  },
  {
    id: "17",
    category: "study",
    title: "Write blog post on Expo",
    time: "8:30 PM",
    status: "In-Progress",
    icon: { name: "create-outline", backgroundColor: "#22D3EE" },
  },

  // === HEALTH TASKS ===
  {
    id: "18",
    category: "health",
    title: "Drink 8 glasses of water",
    time: "8:00 AM",
    status: "In-Progress",
    icon: { name: "water-outline", backgroundColor: "#3B82F6" },
  },
  {
    id: "19",
    category: "health",
    title: "Walk 10,000 steps",
    time: "5:30 PM",
    status: "To-do",
    icon: { name: "walk-outline", backgroundColor: "#10B981" },
  },
  {
    id: "20",
    category: "health",
    title: "Eat healthy breakfast",
    time: "7:30 AM",
    status: "Done",
    icon: { name: "nutrition-outline", backgroundColor: "#EF4444" },
  },
  {
    id: "21",
    category: "health",
    title: "Sleep by 11 PM",
    time: "11:00 PM",
    status: "To-do",
    icon: { name: "moon-outline", backgroundColor: "#8B5CF6" },
  },

  // === SOCIAL TASKS ===
  {
    id: "22",
    category: "social",
    title: "Reply to important emails",
    time: "9:30 AM",
    status: "Done",
    icon: { name: "mail-outline", backgroundColor: "#F97316" },
  },
  {
    id: "23",
    category: "social",
    title: "Schedule meetup with friends",
    time: "12:00 PM",
    status: "In-Progress",
    icon: { name: "calendar-outline", backgroundColor: "#EC4899" },
  },
  {
    id: "24",
    category: "social",
    title: "Post on LinkedIn",
    time: "3:00 PM",
    status: "To-do",
    icon: { name: "share-outline", backgroundColor: "#0A66C2" },
  },
  {
    id: "25",
    category: "social",
    title: "Attend online webinar",
    time: "6:00 PM",
    status: "Done",
    icon: { name: "videocam-outline", backgroundColor: "#DC2626" },
  },

  // === FINANCE TASKS ===
  {
    id: "26",
    category: "finance",
    title: "Pay utility bills",
    time: "10:00 AM",
    status: "Done",
    icon: { name: "card-outline", backgroundColor: "#059669" },
  },
  {
    id: "27",
    category: "finance",
    title: "Check stock portfolio",
    time: "2:30 PM",
    status: "In-Progress",
    icon: { name: "trending-up-outline", backgroundColor: "#7C3AED" },
  },
  {
    id: "28",
    category: "finance",
    title: "Prepare monthly budget",
    time: "7:30 PM",
    status: "To-do",
    icon: { name: "wallet-outline", backgroundColor: "#F59E0B" },
  },
  {
    id: "29",
    category: "finance",
    title: "Transfer savings",
    time: "9:00 PM",
    status: "To-do",
    icon: { name: "cash-outline", backgroundColor: "#10B981" },
  },

  // === HOME TASKS ===
  {
    id: "30",
    category: "home",
    title: "Clean the house",
    time: "8:30 AM",
    status: "Done",
    icon: { name: "home-outline", backgroundColor: "#FCD34D" },
  },
  {
    id: "31",
    category: "home",
    title: "Fix broken shelf",
    time: "11:00 AM",
    status: "To-do",
    icon: { name: "construct-outline", backgroundColor: "#F87171" },
  },
  {
    id: "32",
    category: "home",
    title: "Water the plants",
    time: "6:30 AM",
    status: "Done",
    icon: { name: "flower-outline", backgroundColor: "#34D399" },
  },
  {
    id: "33",
    category: "home",
    title: "Cook dinner for family",
    time: "7:00 PM",
    status: "In-Progress",
    icon: { name: "restaurant-outline", backgroundColor: "#FB923C" },
  },
];

export const FILTERS = ["All", "Done", "In-Progress", "To-do"] as const;

export type FilterOptions = (typeof FILTERS)[number];
