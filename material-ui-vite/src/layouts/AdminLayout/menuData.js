const menuData = [
  {
    label: "Dashboard",
    icon: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Settings",
    icon: "Settings",
    children: [
      {
        label: "Profile",
        icon: "AccountCircle",
        link: "/settings/profile",
      },
      {
        label: "Account",
        icon: "Build",
        children: [
          {
            label: "Security",
            icon: "Build",
            link: "/settings/account/security",
          },
        ],
      },
    ],
  },
];

export default menuData;
