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
  {
    id: "1",
    category: "work",
    title: "Task 1",
    time: "10:00 AM",
    status: "Done",
    icon: { name: "grid", backgroundColor: "#4ADE80" },
  },
  {
    id: "2",
    category: "work",
    title: "Task 2",
    time: "11:00 AM",
    status: "In-Progress",
    icon: { name: "grid", backgroundColor: "#f59e0b" },
  },
  {
    id: "3",
    category: "work",
    title: "Task 3",
    time: "12:00 PM",
    status: "To-do",
    icon: { name: "arrow-down-circle", backgroundColor: "#FF6BBA" },
  },
  {
    id: "4",
    category: "work",
    title: "Task 4",
    time: "1:00 PM",
    status: "To-do",
    icon: { name: "arrow-down-circle", backgroundColor: "#4ADE80" },
  },
];
