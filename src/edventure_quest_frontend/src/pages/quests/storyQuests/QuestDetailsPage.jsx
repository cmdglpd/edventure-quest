import StoryQuestHeader from "../../../components/headers/StoryQuestHeader"
import PrologueCard from "../../../components/questCards/PrologueCard"
import QuestDetailsCard from "../../../components/questCards/QuestDetailsCard"
import chapter1 from "../../../assets/chapter1.png"
import chapter2 from "../../../assets/chapter2.png"
import story1 from "../../../assets/story1.jpg"

const header = {
    title: "Journey to the Duck Village",
    type: "Interpersonal",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio, repellat, molestiae aliquid ratione veniam illum eos itaque maiores cum aliquam quae natus eius quam assumenda nihil voluptas exercitationem hic!"
}

const story = {
    title: "The Journey Begins",
    image: story1,
    synopsis: "In the land of Evershade, where magic flowed through every tree and whispered secrets danced upon the wind, there lived an adventurer named Alaric. His heart was burdened with a terminal illness, his body weakened by its relentless grasp. Yet, hope flickered within him, for tales spoke of a legendary Golden Egg, said to be the cure hidden within the mysterious Duck Village."
}

const quests = [
    {
        title: "The Call of Adventure",
        image: chapter1,
        edventurePoints: 25,
        guildPoints: 50
    },
    {
        title: "The Mystical Forest",
        image: chapter2,
        edventurePoints: 10,
        guildPoints: 35
    }
]

export default function QuestDetailsPage({ }) {
    return <div className="w-full flex flex-col gap-4">
        <StoryQuestHeader title={header.title} type={header.type} description={header.description} />

        <div className="w-full flex flex-col gap-4 mt-3">
            <PrologueCard title={story.title} coverImg={story.image} synopsis={story.synopsis} />
            {quests.map((quest, index) => {
                return <QuestDetailsCard key={index} title={quest.title} edventurePoints={quest.edventurePoints} guildPoints={quest.guildPoints} chapter={index + 1} coverImg={quest.image} />
            })}
        </div>
    </div >
}