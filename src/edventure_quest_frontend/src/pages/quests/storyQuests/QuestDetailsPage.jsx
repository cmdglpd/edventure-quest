import StoryQuestHeader from "../../../components/headers/StoryQuestHeader"
import PrologueCard from "../../../components/questCards/storyQuests/PrologueCard"
import QuestDetailsCard from "../../../components/questCards/storyQuests/QuestDetailsCard"
import chapter1 from "../../../assets/chapter1.png"
import story1 from "../../../assets/story1.jpg"
import { useContext } from "react"
import { UserContext } from "../../../providers/UserProvider"
import { useStoryQuests } from "../../../hooks/useStoryQuests"
import { useParams } from "react-router-dom"

export default function QuestDetailsPage({ }) {
    const currentUser = useContext(UserContext)
    const { storyId } = useParams()
    const { story, prologue, epilogue, storyQuests, loading, error } = useStoryQuests(storyId, currentUser?.userId)

    if (loading) {
        return <p>Loading Story Quests</p>
    }

    return <div className="w-full flex flex-col gap-4">
        <StoryQuestHeader title={story.title} type={story.type} description={story.synopsis} />

        <div className="w-full flex flex-col gap-2 mt-3">
            {prologue.storyQuestId !== undefined && <PrologueCard title={prologue.chapterTitle} coverImg={story1} story={prologue.story} />}
            
            {storyQuests.map((quest, index) => {
                return <QuestDetailsCard key={index} questId={quest.storyQuestId} chapterTitle={quest.chapterTitle} taskTitle={quest.taskTitle} description={quest.description} edventurePoints={quest.edventurePoints} guildPoints={quest.guildPoints} chapter={quest.chapter} coverImg={chapter1} />
            })}

            {epilogue.storyQuestId !== undefined && <QuestDetailsCard chapterTitle={epilogue.chapterTitle} taskTitle={epilogue.taskTitle} description={epilogue.description} edventurePoints={epilogue.edventurePoints} guildPoints={epilogue.guildPoints} chapter="epilogue" coverImg={chapter1} />}
        </div>
    </div >
}