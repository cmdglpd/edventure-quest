import { useState } from "react"
import { Avatar, Card, CardContent, CardActions, Divider, Box, Stepper, Step, StepLabel, StepContent, StepButton, Button, Typography, Paper } from "@mui/material"
import SoloQuestCategoryCard from "../../components/quests/SoloQuestCategoryCard"
import dionysusImg from "../../assets/quests/dionysus.png"
import logicalMathematicalIcon from "../../assets/categoryIcons/logical-mathematical.png"
import QuestList from "../../components/quests/QuestList"
import colors from "../../utils/colors"


const category = {
    name: "Dionysus' Mind Mazes: Conundrums of the Divine",
    image: dionysusImg,
    icon: logicalMathematicalIcon,
    character: "dionysus",
    type: "Logical-Mathematical",
    questions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    description: "Embark on a perplexing journey with Dionysus, the god of revelry and ecstasy, as you navigate through intricate mind mazes filled with enigmatic conundrums. Delve into the depths of divine mysteries as you decipher cryptic puzzles and unravel the complexities of the cosmos. Test your logical prowess and mathematical acumen as you confront the challenges that lie ahead. In Dionysus' Mind Mazes, only those with a keen intellect and an insatiable thirst for knowledge can unlock the secrets of the divine."
}

const quests = [
    {
        title: "Fibonacci's Nature Trail",
        subtitle: "Discovering Patterns",
        questDetails: "Embark on a journey to uncover the Fibonacci sequence in the natural world. Identify 5 examples, such as in the arrangement of leaves, flowers, or shells. Capture their essence through photos and provide a detailed explanation of your findings, connecting each to the divine sequence.",
        difficulty: "medium",
        points: 15
    },
    {
        title: "Puzzle of the Stars",
        subtitle: "Cosmic Alignment",
        questDetails: "Dionysus challenges you to solve the ancient puzzle of celestial navigation. Using a star map, plot a course that aligns with 5 major constellations. Document your path and explain the mathematical significance of each alignment. Your journey through the stars awaits!",
        difficulty: "hard",
        points: 25
    },
    {
        title: "The Golden Ratio Quest",
        subtitle: "Beauty's Secret Code",
        questDetails: "The divine proportion, or Phi, is hidden in art, architecture, and even human anatomy. Your quest is to find 3 instances where the Golden Ratio is used in famous works of art or architecture. Capture these instances through sketches or photographs and explain the significance and mathematical beauty behind each.",
        difficulty: "medium",
        points: 15
    },
    {
        title: "Cryptic Codes of Dionysus",
        subtitle: "Decipher the Divine",
        questDetails: "Dionysus has left cryptic messages encoded in numbers. Your task is to decipher a series of 3 messages using provided mathematical keys. Each solution will reveal a piece of ancient wisdom. Document your decoding process and the final messages uncovered.",
        difficulty: "hard",
        points: 25
    },
    {
        title: "Sacred Geometry Scavenger Hunt",
        subtitle: "Shapes of the Gods",
        questDetails: "Embark on a scavenger hunt to find examples of sacred geometry in your surroundings. Identify 5 shapes or patterns that are considered sacred or divine, such as spirals, pentagrams, or fractals, in nature or human-made structures. Describe each find and its mathematical and spiritual significance.",
        difficulty: "medium",
        points: 15
    },
    {
        title: "Mythical Mazes",
        subtitle: "Labyrinths of Logic",
        questDetails: "The gods challenge you to navigate through 3 different mythical mazes. Each maze is more complex than the last, with puzzles and obstacles that require keen logic and spatial reasoning. Document your strategy and the mathematical principles used to conquer these labyrinths.",
        difficulty: "hard",
        points: 25
    },
    {
        title: "Harmony of Numbers",
        subtitle: "Musical Mathematics",
        questDetails: "Discover the mathematical foundations of music by creating a simple melody using the principles of frequency ratios and scales. Compose a short piece that demonstrates these concepts, explaining how mathematics and music are divinely connected through harmony.",
        difficulty: "easy",
        points: 10
    },
    {
        title: "Architects of Olympus",
        subtitle: "Building the Divine",
        questDetails: "Dionysus invites you to design a temple worthy of the gods using geometric principles. Sketch a plan that incorporates elements of sacred geometry, symmetry, and proportion. Explain how your design reflects mathematical beauty and divine aesthetics.",
        difficulty: "medium",
        points: 15
    },
    {
        title: "Divine Dimensions",
        subtitle: "Exploring Fractals",
        questDetails: "Fractals are infinite patterns that are self-similar across different scales. Your quest is to explore and identify 2 natural or digital fractals. Analyze their patterns and explain how they demonstrate the concept of infinity in mathematics and the divine complexity of the universe.",
        difficulty: "medium",
        points: 15
    },
    {
        title: "Quantum Quandaries",
        subtitle: "Particles and Gods",
        questDetails: "Dive into the quantum realm where the gods play with particles. Describe 3 principles of quantum mechanics in simple terms and provide examples of how they manifest in the natural world. Explain how these principles challenge and expand our understanding of the universe and the divine.",
        difficulty: "hard",
        points: 25
    }
];

function CustomStepIcon() {
    return <Avatar sx={{ width: 35, height: 35 }} src={category.icon} />
}

export default function SingleCategoryPage({ }) {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    return <>
        <Card elevation={0} sx={{ borderRadius: 3, p: "1rem", bgcolor: "rgba(7,7,7,0.5)" }}>
            <SoloQuestCategoryCard
                name={category.name}
                type={category.type}
                description={category.description}
                image={category.image}
                icon={category.icon}
                questions={category.questions}
                character={category.character}
                withButton={false}
                withIcon={false}
            />
        </Card>

        <QuestList quests={quests} character={category.character} icon={category.icon}></QuestList>


        {/* <Box>
            <Stepper nonLinear activeStep={activeStep} orientation="vertical">
                {quests.map((quest, index) => (
                    <Step key={quest.title}>
                        <StepButton color="inherit" onClick={handleStep(index)}>
                            <StepLabel StepIconComponent={CustomStepIcon}><Typography variant="body2" sx={{ fontWeight: "bold" }}>{quest.title}</Typography></StepLabel>
                        </StepButton>
                        <StepContent sx={{bgcolor: "rgba(7,7,7,0.5)", borderTopRightRadius: "0.75rem", borderBottomRightRadius: "0.75rem"}}>
                            <CardContent
                                sx={{
                                    display: "flex",
                                    gap: "1rem",
                                    alignItems: "center",
                                }}
                            >
                                <Card
                                    variant="outlined"
                                    sx={{
                                        p: "1rem",
                                        width: "4rem",
                                        height: "4rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderColor: "white",
                                        bgcolor: "transparent",
                                        borderRadius: 3,
                                    }}
                                >
                                    <p className="text-lg font-bold text-white">
                                        {quest.points}
                                    </p>
                                    <p className="text-xs text-white">
                                        POINTS
                                    </p>
                                </Card>
                                <Box>
                                    <Typography
                                        variant="body1"
                                        sx={{ fontWeight: "bold", textAlign: "left" }}
                                    >
                                        {quest.subtitle}
                                    </Typography>
                                    <Typography variant="caption">Difficulty: {quest.difficulty.toUpperCase()}</Typography>
                                </Box>
                            </CardContent>
                            <CardContent sx={{ py: "0", mb: "1rem" }}>
                                <Typography variant="body2" sx={{ textAlign: "left", color: colors.whiteTextContrast }}>{quest.questDetails}</Typography>
                            </CardContent>

                            <Divider />

                            <CardActions
                                sx={{
                                    display: "flex",
                                    gap: "0.25rem",
                                    px: "1rem"
                                }}
                            >
                                {true && (
                                    <Typography
                                        variant="subtitle2"
                                        sx={{ fontStyle: "italic", mr: "auto", color: "gray", fontWeight: "bold" }}
                                    >
                                        Completed
                                    </Typography>
                                )}

                                <Button
                                    size="small"
                                    variant="text"
                                    sx={{
                                        ml: "auto",
                                    }}
                                >
                                    <p
                                        variant="body2"
                                        style={{
                                            fontWeight: "bold",
                                            color: "white"
                                        }}
                                    >
                                        Details
                                    </p>
                                </Button>
                            </CardActions>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === quests.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
        </Box> */}
    </>
}