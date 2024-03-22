import {
  Card,
  CardHeader,
  Avatar,
  Skeleton,
  ListItem,
  ListItemButton,
  LinearProgress
} from "@mui/material";

import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { UserContext } from "../../providers/UserProvider";
import colors from "../../utils/colors";

export default function ProfileCard({ }) {
  const currentUser = useContext(UserContext);
  const profilePagePath = `/profile/${currentUser?.userId}`;

  return (
    <>
      <Card
        elevation={0}
        sx={{
          backgroundColor: colors.navBackground,
          mb: "0.5rem",
        }}
      >
        <CardHeader
          avatar={
            <>
              {currentUser ? (
                currentUser?.profile_image ? (
                  <Avatar
                    aria-label="profile"
                    src={currentUser?.profile_image}
                    alt="avatar"
                  />
                ) : (
                  <Avatar />
                )
              ) : (
                <Skeleton variant="circular" width={40} height={40} />
              )}
            </>
          }
          title={
            <ListItem disablePadding>
              <ListItemButton sx={{ p: 0 }}>
                <NavLink to={profilePagePath}>
                  <p className="font-bold">{currentUser ? currentUser?.name : "Azazel Bloodfallen"}</p>
                </NavLink>
              </ListItemButton>
            </ListItem>
          }
          disableTypography
          sx={{
            flexDirection: "row",
            alignItems: "center",
          }}
        />
      </Card>

      <LinearProgress color="blueLight" variant="determinate" value={33} sx={{ borderRadius: "50px" }} />
      <div className="flex justify-between mx-4 mt-1 mb-4">
        <p className="text-xs font-bold">Level 7</p>
        <p className="text-xs">500/1500 XP</p>
      </div>
    </>
  );
}
