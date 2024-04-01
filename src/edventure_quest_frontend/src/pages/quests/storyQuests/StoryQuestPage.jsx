import QuestHeader from "../../../components/headers/QuestHeader"
import StoryQuestCard from "../../../components/questCards/storyQuests/StoryQuestCard"
import story1 from "../../../assets/story1.jpg"
import { useStories } from "../../../hooks/useStories"

const header = {
    title: "Story Quests",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio, repellat, molestiae aliquid ratione veniam illum eos itaque maiores cum aliquam quae natus eius quam assumenda nihil voluptas exercitationem hic!"
}

export default function StoryQuestPage({ }) {
    const {stories, loading, error} = useStories()

    if(stories.length === 0){
        return <p>Loading</p>
    }

    return <div className="w-full flex flex-col gap-4">
        <QuestHeader title={header.title} description={header.description} />
        <div className="w-full flex flex-col gap-4 mt-3">
            {stories.map((story) => {
                return <StoryQuestCard key={story.storyId} storyId={story.storyId} title={story.title} coverImg={story1} type={story.type} synopsis={story.synopsis} />
            })}
        </div>
    </div>
}