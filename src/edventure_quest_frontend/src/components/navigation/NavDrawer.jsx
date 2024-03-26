import {
  Box,
  Typography,
  Drawer,
  AppBar,
  Toolbar,
  CssBaseline,
  TextField,
  IconButton,
} from "@mui/material";
import { useState, useContext } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CastleIcon from '@mui/icons-material/Castle';
import CampaignIcon from '@mui/icons-material/Campaign';
import CottageIcon from '@mui/icons-material/Cottage';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import JoinFullIcon from '@mui/icons-material/JoinFull';
import PersonIcon from '@mui/icons-material/Person';
import Groups2Icon from '@mui/icons-material/Groups2';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import edventureQuestLogo from "../../assets/edventure_quest_logo.png"
import colors from "../../utils/colors";
import DrawerItems from "./DrawerItems"
import { UserContext } from "../../providers/UserProvider"

const drawerButtons = [
  {
    type: "General",
    buttons: [
      {
        name: "Guilds",
        icon: <CastleIcon />,
        path: "/",
        users: ["grandcouncil"],
      },
      {
        name: "Announcements",
        icon: <CampaignIcon />,
        path: "/",
        users: ["grandcouncil"],
      },
      {
        name: "Home",
        icon: <CottageIcon />,
        path: "/guild",
        users: ["guild member", "guildmaster"],
      },
      {
        name: "Guild Bulletin",
        icon: <CampaignIcon />,
        path: "/",
        users: ["guild member", "guildmaster"],
      },
      {
        name: "Guild Rankings",
        icon: <LeaderboardIcon />,
        path: "/",
        users: ["guild member", "guildmaster", "grandcouncil"],
      },
      {
        name: "Marketplace",
        icon: <LocalGroceryStoreIcon />,
        path: "/shop",
        users: ["guild member", "guildmaster", "grandcouncil"],
      },
      {
        name: "Mails",
        icon: <MarkEmailUnreadIcon />,
        path: "/",
        users: ["guild member"],
      },
      {
        name: "Rewards",
        icon: <EmojiEventsIcon />,
        path: "/",
        users: ["grandcouncil"],
      },
      {
        name: "Challenge Request",
        icon: <LocalFireDepartmentIcon />,
        path: "/",
        users: ["guildmaster"],
      },
      {
        name: "Quest Completion",
        icon: <AssignmentTurnedInIcon />,
        path: "/",
        users: ["guildmaster"],
      },
      {
        name: "Join Requests",
        icon: <JoinFullIcon />,
        path: "/",
        users: ["guildmaster"],
      },
    ]
  },
  {
    type: "Quests",
    buttons: [
      {
        name: "Solo Quests",
        icon: <PersonIcon />,
        path: "/solo-quests",
        users: ["guild member", "grandcouncil"],
      },
      {
        name: "Team Ventures",
        icon: <Groups2Icon />,
        path: "/",
        users: ["guild member", "guildmaster", "grandcouncil"],
      },
      {
        name: "Guild Conquests",
        icon: <SportsKabaddiIcon />,
        path: "/",
        users: ["guild member", "guildmaster"],
      },
      {
        name: "Monthly Guild Quest",
        icon: <CalendarMonthIcon />,
        path: "/",
        users: ["grandcouncil"],
      },
      {
        name: "Challenge Requests",
        icon: <LocalFireDepartmentIcon />,
        path: "/",
        users: ["guildmaster", "grandcouncil"],
      },
    ]
  }
];

const joinedCommunities = [
  {
    name: "Information and Communications Technology Development Unit",
    image: "/assets/spcf-ictdu.jpg",
  },
  {
    name: "College of Computing and Information Sciences",
    image: "/assets/spcf-ccis.jpg",
  },
  {
    name: "SPCF CCIS Student Council",
    image: "/assets/spcf-ccis-council.png",
  },
];

const drawerWidth = 300;

export default function NavDrawer({ children }) {
  const currentUser = useContext(UserContext);
  const [drawer, setDrawer] = useState(false);

  const handleSetDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <Box sx={{display: "flex"}}>
      <AppBar
        elevation={0}
        variant="outlined"
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: colors.background
        }}
      >
        <Toolbar disableGutters sx={{ px: "1rem" }}>
          <IconButton
            onClick={() => handleSetDrawer()}
            sx={{ mr: "0.5rem", display: { md: "none" } }}
          >
            <FontAwesomeIcon
              icon={faBars}
              size="sm"
              style={{ color: colors.primary }}
            />
          </IconButton>
          <img
            className="mr-2 ml-1"
            src={edventureQuestLogo}
            alt="logo"
            style={{ width: "40px", height: "40px" }}
          />
          <Typography
            color="white"
            variant="body1"
            noWrap
            component="div"
            sx={{ fontWeight: "bold", display: { xs: "none", md: "flex" } }}
          >
            EdventureQuest
          </Typography>
          <TextField
            sx={{ ml: "auto" }}
            id="search-bar"
            size="small"
            label="Search"
            variant="outlined"
          ></TextField>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={drawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: "none", md: "flex" },
          bgcolor: "rgba(7,7,7,0.5)"
        }}
      >
        <Toolbar />
        <DrawerItems
          userDetails={currentUser}
          drawerButtons={drawerButtons}
          joinedCommunities={joinedCommunities}
        />
      </Drawer>

      <Drawer
        variant="temporary"
        open={drawer}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          display: { xs: "flex", md: "none" },
          bgcolor: "rgba(7,7,7,0.75)"
        }}
      >
        <Toolbar />
        <DrawerItems
          userDetails={currentUser}
          drawerButtons={drawerButtons}
          joinedCommunities={joinedCommunities}
        />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
