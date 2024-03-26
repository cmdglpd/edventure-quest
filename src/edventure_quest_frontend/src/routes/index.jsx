import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/home/HomePage";
import QuestPage from "../pages/quests/QuestPage";
import StoryQuestPage from "../pages/quests/storyQuests/StoryQuestPage";
import QuestDetailsPage from "../pages/quests/storyQuests/QuestDetailsPage";

const soloQuest = {
  path: "/quests",
  element: <StoryQuestPage />
}

const questDetails = {
  path: "/quests/quest-details",
  element: <QuestDetailsPage />
}

const quests = {
  path: "/quests",
  element: <QuestPage />,
  children: [soloQuest, questDetails]
}

const home = {
  path: "/",
  element: <HomePage />,
  children: [quests]
}

const root = {
  element: <Root />,
  children: [home],
};

const routes = [root];

export default createBrowserRouter(routes);
