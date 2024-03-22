import ProfileCard from "./ProfileCard";
import DrawerButtons from "./DrawerButtons";
import { Box, Divider } from "@mui/material";
import MyGift from "./MyGift"
import poseidon from "../../assets/poseidon.png"

const giftDetails = {
  name: "Poseidon's Barrier",
  type: "Guard",
  color: "#5BB5C5",
  image: poseidon
}

export default function DrawerItems({
  drawerButtons,
  gift
}) {
  return (
    <Box sx={{ padding: "0.5rem", overflow: "auto" }} role="presentation">
      <ProfileCard />

      <Divider />
      <p className="text-xs font-bold mt-2 mb-2 px-4">MY GIFT</p>
      <MyGift gift={giftDetails} />


      {drawerButtons.map(btns => {
        return <div key={Math.random()}>
          <Divider />
          <p className="text-xs font-bold mt-2 px-4">{btns.type.toUpperCase()}</p>
          <DrawerButtons buttons={btns.buttons} />
        </div>
      })}
      <Divider sx={{ mb: "1rem" }} />

      <Divider sx={{ mb: "1rem", mt: "0.25rem" }} />
      {/* <JoinedCommunityList communities={joinedCommunities} /> */}
    </Box>
  );
}