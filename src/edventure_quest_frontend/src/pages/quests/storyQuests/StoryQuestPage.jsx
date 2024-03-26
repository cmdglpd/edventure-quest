import QuestHeader from "../../../components/headers/QuestHeader"
import StoryQuestCard from "../../../components/questCards/StoryQuestCard"
import story1 from "../../../assets/story1.jpg"
import story2 from "../../../assets/story2.png"
import story3 from "../../../assets/story3.png"

const header = {
    title: "Solo Quests",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio, repellat, molestiae aliquid ratione veniam illum eos itaque maiores cum aliquam quae natus eius quam assumenda nihil voluptas exercitationem hic!"
}

const quests = [
    {
        title: "Journey to the Duck Village",
        image: story1,
        type: "Interpersonal",
        synopsis: "In the land of Evershade, where magic flowed through every tree and whispered secrets danced upon the wind, there lived an adventurer named Alaric. His heart was burdened with a terminal illness, his body weakened by its relentless grasp. Yet, hope flickered within him, for tales spoke of a legendary Golden Egg, said to be the cure hidden within the mysterious Duck Village."
    },
    {
        title: "Warrior of the CatNap Inn",
        image: story2,
        type: "Bodily-Kinesthetic",
        synopsis: "In the land of Evershade, where magic flowed through every tree and whispered secrets danced upon the wind, there lived an adventurer named Alaric. His heart was burdened with a terminal illness, his body weakened by its relentless grasp. Yet, hope flickered within him, for tales spoke of a legendary Golden Egg, said to be the cure hidden within the mysterious Duck Village."

    },
    {
        title: "Otherworldly Guests",
        image: story3,
        type: "Spatial",
        synopsis: "In the land of Evershade, where magic flowed through every tree and whispered secrets danced upon the wind, there lived an adventurer named Alaric. His heart was burdened with a terminal illness, his body weakened by its relentless grasp. Yet, hope flickered within him, for tales spoke of a legendary Golden Egg, said to be the cure hidden within the mysterious Duck Village."

    }
]

export default function StoryQuestPage({ }) {

    return <div className="w-full flex flex-col gap-4">
        <QuestHeader title={header.title} description={header.description} />
        <div className="w-full flex flex-col gap-4 mt-3">
            {quests.map((quest, index) => {
                return <StoryQuestCard key={index} title={quest.title} coverImg={quest.image} type={quest.type} synopsis={quest.synopsis} />
            })}
        </div>
    </div>
}