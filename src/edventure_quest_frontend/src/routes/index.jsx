import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/home/HomePage";
import QuestPage from "../pages/quests/QuestPage";
import StoryQuestPage from "../pages/quests/storyQuests/StoryQuestPage";
import QuestDetailsPage from "../pages/quests/storyQuests/QuestDetailsPage";
import GamePage from "../pages/game/GamePage"
import ShopPage from "../pages/shop/ShopPage";
import ProductsPage from "../pages/shop/ProductsPage";
import ServicesPage from "../pages/shop/ServicesPage";
import CompanionsPage from "../pages/shop/CompanionsPage";
import MyBagPage from "../pages/shop/MyBagPage";
import GuildVenturesPage from "../pages/quests/guildVentures/GuildVenturesPage";
import GuildHallPage from "../pages/guildHall/GuildHallPage";
import GuildPostPage from "../pages/guildHall/GuildPostPage";
import LibraryPage from "../pages/guildHall/LibraryPage";
import LoginPage from "../pages/auth/LoginPage";
import RegisterPage from "../pages/auth/RegisterPage";
import CouncilSelectionPage from "../pages/auth/CouncilSelectionPage";
import AccountInformationPage from "../pages/auth/AccountInformationPage";
import RoleSelectionPage from "../pages/auth/RoleSelection";
import GuildSelectionPage from "../pages/auth/GuildSelection";

const logIn = {
  path: "/login",
  element: <LoginPage />
}

const accountInformation = {
  path: "/register/:grandCouncilId/:guildId/account-information",
  element: <AccountInformationPage />
}

const guildSelection = {
  path: "/register/:grandCouncilId/guild-selection",
  element: <GuildSelectionPage />
}

const councilSelection = {
  path: "/register/council-selection",
  element: <CouncilSelectionPage />
}

const roleSelection = {
  path: "/register",
  element: <RoleSelectionPage />
}

const register = {
  path: "/register",
  element: <RegisterPage />,
  children: [roleSelection, councilSelection, guildSelection, accountInformation]
}

const guildPosts = {
  path: "/guild-hall",
  element: <GuildPostPage />
}

const library = {
  path: "/guild-hall/library",
  element: <LibraryPage />
}

const guildHall = {
  path: "/guild-hall",
  element: <GuildHallPage />,
  children: [guildPosts, library]
}

// SHOP ######################################
const products = {
  path: "/shop",
  element: <ProductsPage />,
}

const services = {
  path: "/shop/services",
  element: <ServicesPage />,
}

const companions = {
  path: "/shop/companions",
  element: <CompanionsPage />,
}

const myBag = {
  path: "/shop/my-bag",
  element: <MyBagPage />,
}

const shop = {
  path: "/shop",
  element: <ShopPage />,
  children: [products, services, companions, myBag]
}

// ##########################################

// QUESTS ###################################
const storyQuests = {
  path: "/quests",
  element: <StoryQuestPage />
}

const storyQuestDetails = {
  path: "/quests/story-quest-details/:storyId",
  element: <QuestDetailsPage />
}

const guildVentures = {
  path: "/quests/guild-ventures",
  element: <GuildVenturesPage />,
}

const quests = {
  path: "/quests",
  element: <QuestPage />,
  children: [storyQuests, storyQuestDetails, guildVentures]
}

// ##########################################

const home = {
  path: "/",
  element: <HomePage />,
  children: [quests, shop, guildHall]
}

const root = {
  element: <Root />,
  children: [logIn, register, home],
};

const routes = [root];

export default createBrowserRouter(routes);
