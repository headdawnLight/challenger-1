import QueryStatsIcon from "@mui/icons-material/QueryStats";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import ForumIcon from "@mui/icons-material/Forum";
import EarbudsIcon from "@mui/icons-material/Earbuds";
import AssessmentIcon from "@mui/icons-material/Assessment";

const MENU_BOX_DATA = [
  {
    id: 0,
    icon: <QueryStatsIcon />,
    title: "SUMMARY",
    links: [
      {
        id: 0,
        title: "link",
        url: "/",
      },
    ],
  },
  {
    id: 1,
    icon: <PublishedWithChangesIcon />,
    title: "PUBLISH",
    links: [
      {
        id: 0,
        title: "Compose",
        url: "/",
      },
      {
        id: 1,
        title: "Feed",
        url: "/",
      },
    ],
  },
  {
    id: 2,
    icon: <ForumIcon />,
    title: "ENGAGE",
    links: [
      {
        id: 0,
        title: "link",
        url: "/",
      },
    ],
  },
  {
    id: 3,
    icon: <EarbudsIcon />,
    title: "LISTEN",
    links: [
      {
        id: 0,
        title: "link",
        url: "/",
      },
    ],
  },
  {
    id: 4,
    icon: <AssessmentIcon />,
    title: "REPORT",
    links: [
      {
        id: 0,
        title: "link",
        url: "/",
      },
    ],
  },
];

export default MENU_BOX_DATA;
