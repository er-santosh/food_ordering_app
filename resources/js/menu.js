import {
  mdiAccountCircle,
  mdiDesktopMac,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiMonitorShimmer,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
} from "@mdi/js";

export default [
  "General",
  [
    {
      route: "admin.dashboard",
      icon: mdiDesktopMac,
      label: "Dashboard",
    },
  ],
  "Examples",
  /*     [
        {
            route: "/tables",
            label: "Tables",
            icon: mdiTable,
        },
        {
            route: "/forms",
            label: "Forms",
            icon: mdiSquareEditOutline,
        },
        {
            route: "/ui",
            label: "UI",
            icon: mdiTelevisionGuide,
        },
        {
            route: "/responsive",
            label: "Responsive",
            icon: mdiResponsive,
        },
        {
            route: "/",
            label: "Styles",
            icon: mdiPalette,
        },
        {
            route: "/profile",
            label: "Profile",
            icon: mdiAccountCircle,
        },
        {
            route: "/login",
            label: "Login",
            icon: mdiLock,
        },
        {
            route: "/error",
            label: "Error",
            icon: mdiAlertCircle,
        },
        {
            label: "Submenus",
            subLabel: "Submenus Example",
            icon: mdiViewList,
            menu: [
                {
                    label: "Sub-item One",
                },
                {
                    label: "Sub-item Two",
                },
            ],
        },
    ], */
  "About",
  [
    {
      href: "https://justboil.me/tailwind-admin-templates/vue-dashboard/",
      label: "Premium version",
      icon: mdiMonitorShimmer,
      target: "_blank",
    },
    {
      href: "https://github.com/justboil/admin-one-vue-tailwind",
      label: "GitHub",
      icon: mdiGithub,
      target: "_blank",
    },
  ],
];
