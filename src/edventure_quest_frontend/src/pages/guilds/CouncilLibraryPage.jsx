import LibraryHeader from "../../components/headers/LibraryHeader"
import LibraryPost from "../../components/guildHall/LibraryPost"
import post1 from "../../assets/story1.jpg"
import post2 from "../../assets/story2.png"

const header = {
    title: "Carrot's Tome",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio, repellat, molestiae aliquid ratione veniam illum eos itaque maiores cum aliquam quae natus eius quam assumenda nihil voluptas exercitationem hic!"
}

const posts = [
    {
        title: "Exploring the Cosmos: A Beginner's Guide to Astronomy",
        type: "Non-fiction educational guide",
        synopsis: "This book offers a comprehensive introduction to the wonders of the universe, covering topics such as the solar system, stars, galaxies, and black holes. Packed with stunning visuals and clear explanations, it is perfect for aspiring astronomers of all ages.",
        coverImg: post2
    },
    {
        title: "Math Adventures: Fun Activities for Young Mathematicians",
        type: "Educational workbook",
        synopsis: '"Math Adventures" is a hands-on workbook filled with engaging puzzles, games, and exercises designed to develop fundamental math skills in children. From addition and subtraction to geometry and problem-solving, this book makes learning mathematics enjoyable and accessible.',
        coverImg: post1
    },
    {
        title: "The Story of World History: From Ancient Civilizations to Modern Times",
        type: "Non-fiction historical narrative",
        synopsis: "This captivating narrative takes readers on a journey through the major events, cultures, and personalities that have shaped human history. With vivid storytelling and insightful analysis, it offers a comprehensive overview of the past, making history come alive for readers of all backgrounds.",
        coverImg: post2
    },
    {
        title: "Biology Basics: A Student's Guide to Life Science",
        type: "Educational textbook",
        synopsis: '"Biology Basics" provides a clear and concise overview of key concepts in biology, including cell biology, genetics, evolution, ecology, and more. With helpful diagrams, review questions, and real-life examples, this book serves as an essential resource for students seeking to deepen their understanding of the natural world.',
        coverImg: post1
    },
]

export default function CouncilLibraryPage({ }) {
    return <div className="w-full flex flex-col gap-4">
        <LibraryHeader title={header.title} description={header.description} />
        <div className="w-full flex flex-col gap-4 mt-3">
            {posts.map((post, index) => {
                return <LibraryPost key={index} title={post.title} type={post.type} synopsis={post.synopsis} coverImg={post.coverImg} />
            })}
        </div>
    </div>
}