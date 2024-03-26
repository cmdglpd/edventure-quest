import { Box, Card, Avatar, Button } from "@mui/material";
import GuildHeader from "../../components/guild/GuildHeader";
import colors from "../../utils/colors";
import GuildPost from "../../components/guild/GuildPost";
import guildsBg from "../../assets/headerBgs/guilds.png"
import PointBalanceCard from "../../components/guild/PointBalanceCard";
import samplePostImage from "../../assets/samplePostImage.png"

const header = {
    title: "Stellar Scribes",
    subtitle: "147 guild members",
    icon: "",
    image: guildsBg,
    description: "Illuminate the universe with the Stellar Scribes Guild. Like celestial chroniclers of the cosmos, we record the grand narrative of the stars, translating the language of the heavens into the poetry of knowledge. Let's chart the constellations of understanding, weaving stories that span the vast expanse of the universe and inspire future generations.",
}

const posts = [
    {
        owner: "Carrot Slayer",
        date: "July 6, 2024",
        profileImage: "",
        contentImage: "",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus delectus eum deleniti eveniet aut qui ipsam fuga odit ea, cumque error aliquid rem. Iure laudantium ut suscipit minima possimus. Ipsam fuga odit ea, cumque error aliquid rem. Iure laudantium ut suscipit minima possimu"
    },
    {
        owner: "Azazel Bloodfallen",
        date: "February 10, 2024",
        image: "",
        contentImage: samplePostImage,
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus delectus eum deleniti eveniet aut qui ipsam fuga odit ea, cumque error aliquid rem. Iure laudantium ut suscipit minima possimus. Ipsam fuga odit ea, cumque error aliquid rem. Iure laudantium ut suscipit minima possimu"
    },
    {
        owner: "HalimawMagselos",
        date: "June 4, 2024",
        profileImage: "",
        contentImage: "",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero repellendus delectus eum deleniti eveniet aut qui ipsam fuga odit ea, cumque error aliquid rem. Iure laudantium ut suscipit minima possimus."
    }
]

export default function GuildPage({ }) {

    return (
        <>
            <Box component="div" sx={{pb: "4rem"}} >
                <Box component="div" sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
                    <GuildHeader
                        title={header.title}
                        subtitle={header.subtitle}
                        description={header.description}
                        icon={header.icon}
                        backgroundImg={header.image}
                    />
                </Box>

                <Box component="div" sx={{ bgcolor: "transparent", mx: { xs: "0", md: "2rem", lg: "4rem" }, mt: "2rem", display: { xs: "flex", lg: "grid" }, gridTemplateColumns: {xs: "1fr", lg: "2fr 1fr"}, flexDirection: "column", gap: 5 }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, order: {xs: 2, lg: 1} }}>
                        {posts.map(post => {
                            return <GuildPost key={Math.random()} owner={post.owner} date={post.date} content={post.content} contentImage={post.contentImage} />
                        })}
                    </Box>

                    <PointBalanceCard guildName={"Stellar Scribes"}  />
                </Box>
            </Box>
        </>
    );
}
