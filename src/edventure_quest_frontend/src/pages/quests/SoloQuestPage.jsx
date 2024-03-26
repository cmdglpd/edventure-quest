import { Box, Divider } from "@mui/material"

import SoloQuestHeader from "../../components/quests/SoloQuestHeader"
import colors from "../../utils/colors"
import LabeledDivider from "../../components/LabeledDivider"
import soloQuestBg from "../../assets/headerBgs/solo_quest.jpg"
import { Outlet } from "react-router-dom"

const dailyQuest = {
    name: "Eco-Innnovator Challenge",
    type: "Solo Quest",
    difficulty: "Easy",
    points: 10,
    description: "Participants are tasked with creating an innovative, eco-friendly solution to a common environmental problem. This could range from designing a simple waste reduction tool to proposing a plan for renewable energy use at home or in school. Participants will submit a detailed plan or prototype description, including potential impacts and implementation strategies. This challenge encourages students to think critically about sustainability and environmental science.",
    isCompleted: false,
    isDaily: true
}

const header = {
    title: "Solo Quests",
    subtitle: "147 available quests",
    icon: "",
    image: soloQuestBg,
    description: "Embark on a personal journey of discovery and growth with Solo Quests. Each day brings new challenges designed to test your knowledge, spark your creativity, and enhance your well-being. From trivia puzzles to daily reflections, Solo Quests are your opportunity to learn, achieve, and earn rewards at your own pace. Dive in and explore a world of knowledge that's just waiting to be unlocked!",
}

export default function SoloQuestPage({ }) {
    return <Box component="div" sx={{ backgroundColor: "transparent", pb: "2rem" }}>
        <SoloQuestHeader
            title={header.title}
            subtitle={header.subtitle}
            description={header.description}
            icon={header.icon}
            backgroundImg={header.image}
        />

        {/* <LabeledDivider withDivider={true} label="147 Quests" /> */}
        <Box component="div" sx={{ bgcolor: "transparent", mx: { xs: "1rem", md: "2rem", lg: "4rem" }, mt: "2rem", display: "flex", flexDirection: "column", gap: 5 }}>
            <Outlet />
        </Box>
    </Box>
}