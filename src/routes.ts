import {
  IconChecklist,
  IconHome,
  IconList,
  IconListSearch,
} from "@tabler/icons-react";

export const routes = [
  {
    path: "quest-builder",
    label: "Account Lookup",
    icon: IconListSearch,
  },
  {
    path: "task-list-builder",
    label: "Task List Builder",
    icon: IconList,
  },
  {
    path: "premade",
    label: "Premade Lists",
    icon: IconChecklist,
  },
];
