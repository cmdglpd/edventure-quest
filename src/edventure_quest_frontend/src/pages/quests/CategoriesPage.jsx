import { Divider } from "@mui/material"
import SoloQuestCategoryCard from "../../components/quests/SoloQuestCategoryCard"

import dionysusImg from "../../assets/quests/dionysus.png"
import heraImg from "../../assets/quests/hera.png"
import hadesImg from "../../assets/quests/hades.png"
import nikeImg from "../../assets/quests/nike.png"
import artemisImg from "../../assets/quests/artemis.png"
import apolloImg from "../../assets/quests/apollo.png"
import aphroditeImg from "../../assets/quests/aphrodite.png"
import demeterImg from "../../assets/quests/demeter.png"

import logicalMathematicalIcon from "../../assets/categoryIcons/logical-mathematical.png"
import linguisticIcon from "../../assets/categoryIcons/linguistic.png"
import intrapersonalIcon from "../../assets/categoryIcons/intrapersonal.png"
import bodilyKinestheticIcon from "../../assets/categoryIcons/bodily-kinesthetic.png"
import spatialIcon from "../../assets/categoryIcons/spatial.png"
import musicalIcon from "../../assets/categoryIcons/musical.png"
import interpersonalIcon from "../../assets/categoryIcons/interpersonal.png"
import naturalistIcon from "../../assets/categoryIcons/naturalist.png"

const quests = [
    {
        name: "Hera's Lexicon Legends: Tales of Language Mastery",
        image: heraImg,
        icon: linguisticIcon,
        character: "hera",
        type: "Linguistic",
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        description: "Embark on an epic linguistic quest with Hera, the queen of the gods and patron of language and communication. Dive into a world of words, where every sentence is a verse waiting to be crafted, and every dialogue is a story waiting to unfold. From ancient myths to modern marvels, test your linguistic prowess with riddles, wordplay, and literary challenges. Only those who can weave words with the grace of a queen can rise to become legends in Hera's Lexicon."
    },
    {
        name: "Dionysus' Mind Mazes: Conundrums of the Divine",
        image: dionysusImg,
        icon: logicalMathematicalIcon, 
        character: "dionysus",
        type: "Logical-Mathematical",
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        description: "Embark on a perplexing journey with Dionysus, the god of revelry and ecstasy, as you navigate through intricate mind mazes filled with enigmatic conundrums. Delve into the depths of divine mysteries as you decipher cryptic puzzles and unravel the complexities of the cosmos. Test your logical prowess and mathematical acumen as you confront the challenges that lie ahead. In Dionysus' Mind Mazes, only those with a keen intellect and an insatiable thirst for knowledge can unlock the secrets of the divine."
    },
    {
        name: "Artemis' Wilderness Odyssey: Navigating Nature's Tapestry",
        image: artemisImg,
        icon: spatialIcon,
        character: "artemis",
        type: "Spatial",
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        description: "Embark on a wilderness odyssey with Artemis, the goddess of the hunt and wilderness, as your guide through the untamed realms of nature. Traverse dense forests, scale towering mountains, and cross roaring rivers as you navigate through the intricate tapestry of the natural world. Sharpen your senses, hone your tracking skills, and embrace the spirit of the huntress as you explore the wonders of Artemis' domain. In Artemis' Wilderness Odyssey, only those who can navigate nature's labyrinth can uncover its hidden treasures."
    },
    {
        name: "Hades' Depths: Journey to the Self",
        image: hadesImg,
        icon: intrapersonalIcon,
        character: "hades",
        type: "Intrapersonal",
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        description: "Descend into the depths of Hades' realm, where shadows conceal the truths that lie within. Embark on a solitary journey of self-discovery as you confront the depths of your own psyche. Navigate through the labyrinth of your innermost thoughts and emotions, facing challenges that demand introspection, introspection, and self-awareness. Confront your fears, embrace your strengths, and unlock the hidden potential that lies dormant within. In Hades' Depths, only those who can confront their inner demons and embrace their true selves can emerge transformed and empowered."
    },
    {
        name: "Apollo's Harmonic Odyssey: Melodies of Olympus",
        image: apolloImg,
        icon: musicalIcon,
        character: "apollo",
        type: "Musical",
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        description: "Embark on a musical odyssey with Apollo, the god of music and poetry, as he orchestrates a symphony of divine melodies. Immerse yourself in the enchanting world of music, where every note tells a story and every rhythm pulses with life. From celestial ballads to earthly anthems, explore a diverse range of musical styles and genres. Master the art of harmony, rhythm, and expression as you join Apollo's ensemble and contribute to the grand symphony of Olympus. Only those with a true passion for music can unlock the secrets of Apollo's Harmonic Odyssey and bask in its celestial beauty."
    },
    {
        name: "Nike's Arena of Champions: Trials of Agility",
        image: nikeImg,
        icon: bodilyKinestheticIcon,
        character: "nike",
        type: "Bodily-Kinesthetic",
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        description: "Enter the legendary arena of Nike, the goddess of victory, where champions are forged through trials of agility and skill. Test your physical prowess in a series of athletic challenges, from feats of strength to tests of speed and coordination. Sprint, jump, and leap your way to victory as you strive to become the ultimate champion of Nike's Arena. In this arena of glory, only those who can push their bodies to the limit and embody the spirit of victory can emerge triumphant."
    },
    {
        name: "Demeter's Garden of Growth: Nature's Bounty",
        image: demeterImg,
        icon: naturalistIcon,
        character: "demeter",
        type: "Naturalist",
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        description: "Enter the verdant domain of Demeter, the goddess of agriculture and fertility, where the cycle of life flourishes in abundance. Explore the wonders of the natural world as you immerse yourself in the splendor of flora and fauna. From cultivating crops to observing wildlife, embark on a journey of discovery that celebrates the beauty and diversity of nature. Delve into the secrets of ecology, conservation, and sustainability as you learn to harmonize with the rhythms of the earth. In Demeter's Garden, only those who honor and respect the natural world can unlock its boundless treasures."
    },
    {
        name: "Aphrodite's Realm of Relationships: Bonds of Connection",
        image: aphroditeImg,
        icon: interpersonalIcon,
        character: "aphrodite",
        type: "Interpersonal",
        questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        description: "Journey into the realm of Aphrodite, the goddess of love and beauty, where the threads of relationships intertwine to form the fabric of human connection. Explore the complexities of interpersonal dynamics as you navigate through challenges that require empathy, communication, and understanding. Forge bonds with allies, resolve conflicts with diplomacy, and cultivate harmonious relationships that transcend boundaries. In Aphrodite's Realm, only those who can nurture the flame of love and compassion can find true connection and belonging."
    }
]

export default function CategoriesPage({ }) {
    return <>
        <Divider />
        {quests.map(quest => {
            return <SoloQuestCategoryCard
                key={Math.random()}
                name={quest.name}
                type={quest.type}
                description={quest.description}
                image={quest.image}
                icon={quest.icon}
                questions={quest.questions}
                character={quest.character}
                withIcon={true}
                withButton={true}
            />
        })}
    </>
}