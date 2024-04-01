import GuildHallHeader from "../../components/headers/GuildHallHeader"
import GuildPost from "../../components/guildHall/GuildPost"
import post1 from "../../assets/story1.jpg"
import post2 from "../../assets/story2.png"
import {useContext} from "react"
import {UserContext} from "../../providers/UserProvider"
import { useGuild } from "../../hooks/useGuild"

const header = {
    guildName: "Stellar Scribes",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio, repellat, molestiae aliquid ratione veniam illum eos itaque maiores cum aliquam quae natus eius quam assumenda nihil voluptas exercitationem hic!"
}

const posts = [
    {
        user: "Carrot Slayer",
        date: "July 6, 2023",
        contentText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio, repellat, molestiae aliquid ratione veniam illum eos itaque maiores cum aliquam quae natus eius quam assumenda nihil voluptas exercitationem hic!"
    },
    {
        user: "Azazel Bloodfallen",
        date: "July 6, 2023",
        contentText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio, repellat, molestiae aliquid ratione veniam illum eos itaque maiores cum aliquam quae natus eius quam assumenda nihil voluptas exercitationem hic!",
        contentImg: post1
    },
    {
        user: "Carrot Slayer",
        date: "July 6, 2023",
        contentImg: post2
    },
    {
        user: "Azazel Bloodfallen",
        date: "July 6, 2023",
        contentText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio, repellat, molestiae aliquid ratione veniam illum eos itaque maiores cum aliquam quae natus eius quam assumenda nihil voluptas exercitationem hic!",
    },
    {
        user: "Carrot Slayer",
        date: "July 6, 2023",
        contentText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio, repellat, molestiae aliquid ratione veniam illum eos itaque maiores cum aliquam quae natus eius quam assumenda nihil voluptas exercitationem hic!",
    },
]

export default function GuildPostPage({ }) {
    const currentUser = useContext(UserContext)
    const {guild, error, loading} = useGuild(currentUser?.guildId)

    if(loading){
        return <p>Fetching Guild</p>
    }
    return <div className="w-full flex flex-col gap-4">
        <GuildHallHeader title={guild.name} description={guild.description} />
        <div className="w-full flex flex-col gap-4 mt-3">
            {posts.map((post, index) => {
                return <GuildPost key={index} user={post.user} date={post.date} contentText={post.contentText} contentImg={post.contentImg} />
            })}
        </div>
    </div>
}