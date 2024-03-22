import { Box, Card, Avatar, Button } from "@mui/material";
import GuildHeader from "../../components/guild/GuildHeader";
import guildBg from "../../assets/banners/guildBg.png"
import colors from "../../utils/colors";
import GuildPost from "../../components/guild/GuildPost";

const header = {
    name: "Stellar Scribes Guild",
    description: "Illuminate the universe with the Stellar Scribes Guild. Like celestial chroniclers of the cosmos, we record the grand narrative of the stars, translating the language of the heavens into the poetry of knowledge. Let's chart the constellations of understanding, weaving stories that span the vast expanse of the universe and inspire future generations.",
    image: guildBg,
    memberCount: 147
}

const posts = [
    {
        owner: "Carrot Slayer",
        date: "July 6, 2024",
        image: "",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus delectus eum deleniti eveniet aut qui ipsam fuga odit ea, cumque error aliquid rem. Iure laudantium ut suscipit minima possimus. Ipsam fuga odit ea, cumque error aliquid rem. Iure laudantium ut suscipit minima possimu"
    },
    {
        owner: "Azazel Bloodfallen",
        date: "February 10, 2024",
        image: "",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus delectus eum deleniti eveniet aut qui ipsam fuga odit ea."
    },
    {
        owner: "HalimawMagselos",
        date: "June 4, 2024",
        image: "",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus delectus eum deleniti eveniet aut qui ipsam fuga odit ea, cumque error aliquid rem. Iure laudantium ut suscipit minima possimus."
    }
]

export default function GuildPage({ }) {

    return (
        <>
            <Box component="div" >
                <Box component="div" sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
                    <GuildHeader
                        name={header.name}
                        description={header.description}
                        image={header.image}
                        memberCount={header.memberCount}
                    />
                </Box>

                <div className={`xs:mx-0 md:mx-4 lg:mx-16 mt-3 pb-6 flex flex-col gap-3`}>
                    {posts.map(post => {
                        return <GuildPost key={Math.random()} owner={post.owner} date={post.date} content={post.content} />
                    })}
                </div>
            </Box>
        </>
    );
}
