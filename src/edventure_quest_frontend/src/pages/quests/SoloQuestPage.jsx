import { Box } from "@mui/material"

import DefaultHeader from "../../components/headers/DefaultHeader"
import SoloQuestCard from "../../components/quests/SoloQuestCard"
import colors from "../../utils/colors"
import LabeledDivider from "../../components/LabeledDivider"
import SearchBar from "../../components/SearchBar"

const dailyQuest = {
    name: "Eco-Innnovator Challenge",
    type: "Solo Quest",
    difficulty: "Easy",
    points: 10,
    description: "Participants are tasked with creating an innovative, eco-friendly solution to a common environmental problem. This could range from designing a simple waste reduction tool to proposing a plan for renewable energy use at home or in school. Participants will submit a detailed plan or prototype description, including potential impacts and implementation strategies. This challenge encourages students to think critically about sustainability and environmental science.",
    isCompleted: false,
    isDaily: true
}

const quests = [
    {
        name: "Historical Detective",
        type: "Solo Quest",
        difficulty: "Easy",
        points: 10,
        description: "In this challenge, students become detectives of history, researching a lesser-known historical event, figure, or innovation from a list provided. They'll create a compelling presentation (written, video, or multimedia) to share their findings, highlighting the significance of the event or person and its impact on today's world. This challenge aims to deepen students' research skills and appreciation for history's complexities and nuances.",
        isCompleted: false,
        isDaily: false
    },
    {
        name: "Eco-Innnovator Challenge",
        type: "Solo Quest",
        difficulty: "Medium",
        points: 15,
        description: "Participants are tasked with creating an innovative, eco-friendly solution to a common environmental problem. This could range from designing a simple waste reduction tool to proposing a plan for renewable energy use at home or in school. Participants will submit a detailed plan or prototype description, including potential impacts and implementation strategies. This challenge encourages students to think critically about sustainability and environmental science.",
        isCompleted: false,
        isDaily: false
    },
    {
        name: "Historical Detective",
        type: "Solo Quest",
        difficulty: "Hard",
        points: 25,
        description: "In this challenge, students become detectives of history, researching a lesser-known historical event, figure, or innovation from a list provided. They'll create a compelling presentation (written, video, or multimedia) to share their findings, highlighting the significance of the event or person and its impact on today's world. This challenge aims to deepen students' research skills and appreciation for history's complexities and nuances.",
        isCompleted: false,
        isDaily: false
    }
]

const header = {
    title: "Solo Quests",
    subtitle: "147 available quests",
    icon: "",
    description: "Embark on a personal journey of discovery and growth with Solo Quests. Each day brings new challenges designed to test your knowledge, spark your creativity, and enhance your well-being. From trivia puzzles to daily reflections, Solo Quests are your opportunity to learn, achieve, and earn rewards at your own pace. Dive in and explore a world of knowledge that's just waiting to be unlocked!",
    buttons: [
        {
            name: "All",
            icon: "",
            func: () => console.log("Edit Details"),
        },
        {
            name: "Easy",
            icon: "",
            func: () => console.log("Edit Details"),
        },
        {
            name: "Medium",
            icon: "",
            func: () => console.log("Edit Details"),
        },
        {
            name: "Hard",
            icon: "",
            func: () => console.log("Edit Details"),
        },
    ]
}

export default function SoloQuestPage({ }) {
    return <Box component="div" sx={{ backgroundColor: colors.secondaryBackground, pb: "2rem" }}>
        <DefaultHeader
            title={header.title}
            subtitle={header.subtitle}
            description={header.description}
            icon={header.icon}
            buttons={header.buttons}
        />

        <div className={`bg-[${colors.secondaryBackground}] xs:mx-0 md:mx-4 lg:mx-16 mt-2 md:mt-3 flex flex-col gap-3`}>
            <SearchBar />
        </div>

        <LabeledDivider withDivider={true} label="Daily Quest" />
        <div className={`bg-[${colors.secondaryBackground}] xs:mx-0 md:mx-4 lg:mx-16 mt-2 md:mt-3 flex flex-col gap-3`}>
            <SoloQuestCard
                questName={dailyQuest.name}
                difficulty={dailyQuest.difficulty}
                description={dailyQuest.description}
                status={dailyQuest.isCompleted}
                isDaily={dailyQuest.isDaily}
                points={dailyQuest.points}
            />
        </div>

        <LabeledDivider withDivider={true} label="147 Quests" />
        <div className={`bg-[${colors.secondaryBackground}] xs:mx-0 md:mx-4 lg:mx-16 mt-2 md:mt-3 flex flex-col gap-3`}>
            {quests.map(quest => {
                return <SoloQuestCard
                    key={Math.random()}
                    questName={quest.name}
                    difficulty={quest.difficulty}
                    description={quest.description}
                    status={quest.isCompleted}
                    isDaily={quest.isDaily}
                    points={quest.points}
                />
            })}
        </div>
    </Box>
}