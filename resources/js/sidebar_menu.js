import {
  mdiDesktopMac,
  mdiBasket,
  mdiCart,
  mdiShape,
  mdiViewDashboard,
  mdiPlus,
  mdiDiamondOutline,
  mdiImage,
  mdiTableChair,
  mdiForum,
  mdiStar,
  mdiBell,
  mdiGift,
  mdiSourceBranch,
  mdiCog,
  mdiAccountPlus,
  mdiFilterVariant,
  mdiStarOutline,
  mdiAccount,
  mdiFilter,
  mdiAndroidMessages,
  mdiAlertCircleOutline,
  mdiTruckDelivery,
  mdiWallet,
  mdiBadgeAccount,
  mdiLayers,
  mdiCash,
  mdiCash100,
  mdiSend,
  mdiFacebook,
  mdiContactlessPayment,
  mdiMail,
  mdiMessage,
  mdiAndroid,
  mdiCard,
  mdiKey,
  mdiBook,
  mdiImageAlbum,
  mdiPoliceBadge,
  mdiAlert,
  mdiIncognito,
  mdiHome,
  mdiBank,
} from "@mdi/js";

export default {
  admin: [
    "General",
    [
      {
        route: "admin.dashboard",
        icon: mdiDesktopMac,
        label: "Dashboard",
      },
    ],

    "Order Section",
    [
      {
        label: "Orders",
        icon: mdiCart,
      },
      {
        label: "Dispatch Management",
        icon: mdiCart,
        menu: [
          {
            label: "Searching Delivery Man",
          },
          {
            label: "Ongoing Orders",
          },
        ],
      },
    ],
    "Restaurant Management",
    [
      {
        label: "Delivery Zone",
        icon: mdiTruckDelivery,
      },
      {
        label: "Restaurants",
        icon: mdiTableChair,
      },
    ],
    "Food Management",
    [
      {
        label: "Category",
        subLabel: "Category",
        icon: mdiShape,
        menu: [
          {
            label: "Category",
          },
          {
            label: "Sub Category",
          },
        ],
      },
      {
        label: "Attributes",
        icon: mdiViewDashboard,
      },
      {
        label: "Add On",
        icon: mdiPlus,
      },
      {
        label: "Foods",
        icon: mdiDiamondOutline,
      },
    ],
    "Marketing Section",
    [
      {
        label: "Campaigns",
        icon: mdiLayers,
        menu: [{ label: "Basic Campaign" }, { label: "Food Campaign" }],
      },
      {
        label: "Banners",
        icon: mdiImage,
      },
    ],
    "Delivery Man Section",
    [
      {
        label: "Add Delivery Man",
        icon: mdiAccountPlus,
      },
      {
        label: "Delivery Men",
        icon: mdiFilterVariant,
      },
      {
        label: "Reviews",
        icon: mdiStarOutline,
      },
    ],
    "Customer Section",
    [
      {
        label: "Customer List",
        icon: mdiAccount,
      },
      {
        label: "Customer Wallet",
        icon: mdiWallet,
        menu: [
          {
            label: "Add Fund",
          },
          {
            label: "Report",
          },
        ],
      },
      {
        label: "Customer Loyality Point",
        icon: mdiBadgeAccount,
        menu: [
          {
            label: "Report",
          },
        ],
      },
      {
        label: "Subscribed Emails",
        icon: mdiAndroidMessages,
      },
      {
        label: "Customer Settings",
        icon: mdiCog,
      },
    ],
    "Business Section",
    [
      {
        label: "Restaurant Withdraws",
        icon: mdiCash,
      },
      {
        label: "Collect Cash",
        icon: mdiCash100,
      },
      {
        label: "Distribute DM Earnings",
        icon: mdiSend,
      },
    ],
    "Business Settings",
    [
      {
        label: "Business Setup",
        icon: mdiCog,
      },
      {
        label: "Social Media",
        icon: mdiFacebook,
      },
      {
        label: "Payment Methods",
        icon: mdiContactlessPayment,
      },
      {
        label: "Mail Config",
        icon: mdiMail,
      },
      {
        label: "Sms Module",
        icon: mdiMessage,
      },
      {
        label: "Notification Settings",
        icon: mdiBell,
      },
    ],
    "Web & App Settings",
    [
      {
        label: "App Settings",
        icon: mdiAndroid,
      },
      {
        label: "Landing Page Setting",
        icon: mdiCard,
      },
      {
        label: "Third Party Apis",
        icon: mdiKey,
      },
      {
        label: "Page Setup",
        icon: mdiBook,
        menu: [
          {
            label: "Terms & Conditions",
          },
          {
            label: "Privacy policy",
          },
          {
            label: "About Us",
          },
        ],
      },
      {
        label: "Gallery",
        icon: mdiImageAlbum,
      },
      {
        label: "Recaptcha",
        icon: mdiPoliceBadge,
      },
    ],
    "Reports And Analytics",
    [
      {
        label: "Day Wise Report",
        icon: mdiAlertCircleOutline,
      },
      {
        label: "Food Wise Report",
        icon: mdiAlert,
      },
    ],
    "Employee Section",
    [
      {
        label: "Employee Role",
        icon: mdiIncognito,
      },
      {
        label: "Employees",
        icon: mdiAccount,
      },
    ],
  ],
  restaurant: [
    "General",
    [
      {
        icon: mdiDesktopMac,
        label: "Dashboard",
      },
    ],
    "Pos Section",
    [
      {
        label: "POS",
        icon: mdiBasket,
        menu: [
          {
            label: "Pos",
          },
          {
            label: "Orders",
          },
        ],
      },
    ],
    "Food Management",
    [
      {
        label: "Category",
        subLabel: "Category",
        icon: mdiShape,
        menu: [
          {
            label: "Category",
          },
          {
            label: "Sub Category",
          },
        ],
      },
      {
        label: "Add On",
        icon: mdiPlus,
      },
      {
        label: "Foods",
        icon: mdiDiamondOutline,
      },
    ],
    "Marketing Section",
    [
      {
        label: "Campaigns",
        icon: mdiLayers,
        menu: [{ label: "List" }],
      },
    ],
    "Business Section",
    [
      {
        label: "Restaurant Config",
        icon: mdiCog,
      },
      {
        label: "My Restaurant",
        icon: mdiHome,
      },
      {
        label: "Bank Info",
        icon: mdiBank,
      },
      {
        label: "My Wallet",
        icon: mdiWallet,
      },
      {
        label: "Reviews",
        icon: mdiStar,
      },
    ],
    "Employee Section",
    [
      {
        label: "Employee Role",
        icon: mdiIncognito,
      },
      {
        label: "Employees",
        icon: mdiAccount,
      },
    ],
  ],
};
