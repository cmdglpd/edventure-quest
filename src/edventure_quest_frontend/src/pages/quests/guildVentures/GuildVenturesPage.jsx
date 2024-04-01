import QuestHeader from "../../../components/headers/QuestHeader"
import GuildVenturesQuestCard from "../../../components/questCards/guildVentures/GuildVenturesQuestCard"
import story1 from "../../../assets/story1.jpg"
import story2 from "../../../assets/story2.png"
import story3 from "../../../assets/story3.png"

const header = {
    title: "Guild Ventures",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio, repellat, molestiae aliquid ratione veniam illum eos itaque maiores cum aliquam quae natus eius quam assumenda nihil voluptas exercitationem hic!"
}

const quest = {
    title: "Warrior of the CatNap Inn",
    image: story2,
    reward: 1500,
    type: "Bodily-Kinesthetic",
    description: "In the land of Evershade, where magic flowed through every tree and whispered secrets danced upon the wind, there lived an adventurer named Alaric. His heart was burdened with a terminal illness, his body weakened by its relentless grasp. Yet, hope flickered within him, for tales spoke of a legendary Golden Egg, said to be the cure hidden within the mysterious Duck Village."

}

export default function GuildVenturesPage({ }) {

    return <div className="w-full flex flex-col gap-4">
        <QuestHeader title={header.title} description={header.description} />
        <div className="w-full flex flex-col gap-4 mt-3">
            <GuildVenturesQuestCard eward={quest.reward} title={quest.title} coverImg={quest.image} type={quest.type} description={quest.description} />
        </div>
    </div>
}