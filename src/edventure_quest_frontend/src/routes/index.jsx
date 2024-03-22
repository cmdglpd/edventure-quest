import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/home/HomePage";
import SoloQuestPage from "../pages/quests/SoloQuestPage";
import ShopPage from "../pages/shop/ShopPage"
import SkillPage from "../pages/shop/SkillPage";
import ItemPage from "../pages/shop/ItemPage";
import GuildPage from "../pages/guild/GuildPage";

const soloQuests = {
  path: "/solo-quests",
  element: <SoloQuestPage />,
};

const skills = {
  path: "/shop/gifts",
  element: <SkillPage />,
};

const items = {
  path: "/shop",
  element: <ItemPage />,
};

const guild = {
  path: "/guild",
  element: <GuildPage />,
};

// const communities = {
//   path: "/communities",
//   element: <CommunitiesPage />,
// };

// const joinRequests = {
//   path: "/join-requests/:communityId",
//   element: <JoinRequestsPage />,
// };

// const eventDetails = {
//   path: "/event-details/:communityId/:eventId",
//   element: <EventDetailsPage />,
// };

// const communityDetails = {
//   path: "/community-details/:communityId",
//   element: <CommunityDetailsPage />,
// };

// const profile = {
//   path: "/profile/:userId",
//   element: <ProfilePage />,
// };

// const analytics = {
//   path: "/analytics",
//   element: <EventAnalytics />,
// };

// const messages = {
//   path: "/messages",
//   element: <MessagesPage />,
// };

const shop = {
  path: "/shop",
  element: <ShopPage />,
  children: [skills, items]
};

const home = {
  path: "/",
  element: <HomePage />,
  children: [soloQuests, shop, guild]
};

// const root = {
//   element: <Root />,
//   children: [home, communities, savedEvents],
// };

const root = {
  element: <Root />,
  children: [home],
};

const routes = [root];

export default createBrowserRouter(routes);
