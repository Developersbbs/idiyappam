import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon,
  BookOpen
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "Projects",
      menus: [
        {
          href: "/app",
          label: "Projects",
          icon: LayoutGrid,
          submenus: [],
          active: pathname === "/app" || pathname.startsWith("/app/projects"),
        },
        {
          href: "/app/workspace",
          label: "Workspace",
          icon: SquarePen
        },
        {
          href: "/app/archives",
          label: "Archives",
          icon: Tag
        }
      ]
    },
    {
      groupLabel: "Account",
      menus: [
        {
          href: "/app/account",
          label: "Account",
          icon: Users
        },
        {
          href: "/app/settings",
          label: "Settings",
          icon: Settings
        }
      ]
    },
    {
      groupLabel: "Help & Support",
      menus: [
        {
          href: "/app/tutorials",
          label: "Tutorials",
          icon: BookOpen
        }
      ]
    }
  ];
}
