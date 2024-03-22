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
  
  export default function MyGift({ gift}) {
    const currentUser = useContext(UserContext);
    const profilePagePath = `/profile/${currentUser?.userId}`;
  
    return (
      <>
        <Card
          elevation={0}
          sx={{
            mb: "0.5rem",
            backgroundImage: `linear-gradient(to right, #000000, ${gift.color})`
          }}
        >
          <CardHeader
            avatar={
              <>
                {gift ? (
                  gift?.image ? (
                    <Avatar
                      aria-label="profile"
                      src={gift.image}
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
                    <p className="font-bold text-sm">{gift?.name}</p>
                    <p className="text-xs">{gift?.type.toUpperCase()}</p>
                  </NavLink>
                </ListItemButton>
              </ListItem>
            }
            disableTypography
            sx={{
              flexDirection: "row",
              alignItems: "center",
              py: "0.75rem"
            }}
          />
        </Card>
      </>
    );
  }
  