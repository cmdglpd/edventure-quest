import { Box } from "@mui/material"

import SoloQuestHeader from "../../components/quests/SoloQuestHeader"
import SoloQuestCategoryCard from "../../components/quests/SoloQuestCategoryCard"
import colors from "../../utils/colors"
import LabeledDivider from "../../components/LabeledDivider"
import dionysusImg from "../../assets/quests/dionysus.png"
import soloQuestBg from "../../assets/headerBgs/solo_quest.jpg"

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
        name: "Dionysus' Enigmatic Garden: Maze of Illusions",
        image: dionysusImg,
        character: "dionysus",
        type: "Spatial",
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        description: "Step into the lush and vibrant realm of Dionysus' Enigmatic Garden, where reality and illusion intertwine in a mesmerizing dance. Navigate through twisting pathways, optical illusions, and spatial puzzles that challenge your perception and spatial awareness. Discover hidden treasures, unlock secret passages, and unravel the mysteries of this surreal landscape. Only those who can see beyond the veil of illusion can navigate the maze and revel in the ecstasy of Dionysian discovery."
    }
]

const header = {
    title: "Solo Quests",
    subtitle: "147 available quests",
    icon: "",
    image: soloQuestBg,
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
    return <Box component="div" sx={{ backgroundColor: "transparent", pb: "2rem" }}>
        <SoloQuestHeader
            title={header.title}
            subtitle={header.subtitle}
            description={header.description}
            icon={header.icon}
            buttons={header.buttons}
            backgroundImg={header.image}
        />

        <LabeledDivider withDivider={true} label="147 Quests" />
        <div className={`bg-[${colors.secondaryBackground}] xs:mx-0 md:mx-4 lg:mx-16 mt-2 md:mt-3 flex flex-col gap-3`}>
            {quests.map(quest => {
                return <SoloQuestCategoryCard
                    key={Math.random()}
                    name={quest.name}
                    type={quest.type}
                    description={quest.description}
                    image={quest.image}
                    questions={quest.questions}
                    character={quest.character}
                />
            })}
        </div>
    </Box>
}