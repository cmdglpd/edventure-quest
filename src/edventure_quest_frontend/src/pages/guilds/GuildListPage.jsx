import GuildHallHeader from "../../components/headers/GuildHallHeader"
import GuildCard from "../../components/guilds/GuildCard"
import post1 from "../../assets/story1.jpg"
import post2 from "../../assets/story2.png"
import {useContext} from "react"
import {UserContext} from "../../providers/UserProvider"
import { useGuild } from "../../hooks/useGuild"

const posts = [
    {
        name: "Stellar Scribes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio, repellat, molestiae aliquid ratione veniam illum eos itaque maiores cum aliquam quae natus eius quam assumenda nihil voluptas exercitationem hic!"
    },
    {
        name: "Carrot Crusaders",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio, repellat, molestiae aliquid ratione veniam illum eos itaque maiores cum aliquam quae natus eius quam assumenda nihil voluptas exercitationem hic!",
    },
    {
        name: "Aero Savants",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio, repellat, molestiae aliquid ratione veniam illum eos itaque maiores cum aliquam quae natus eius quam assumenda nihil voluptas exercitationem hic!",
    }
]

export default function GuildListPage({ }) {
    const currentUser = useContext(UserContext)
    const {guild, error, loading} = useGuild(currentUser?.guildId)

    if(loading){
        return <p>Fetching Guild</p>
    }
    return <div className="w-full flex flex-col gap-4">
        <GuildHallHeader title="Guild Rankings" description={guild.description} />
        <div className="w-full flex flex-col gap-4 mt-3">
            {posts.map((post, index) => {
                return <GuildCard key={index} name={post.name} description={post.description} guildLogo={""} />
            })}
        </div>
    </div>
}