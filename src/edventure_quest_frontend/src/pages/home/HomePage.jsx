import { Box, Divider } from "@mui/material"
import { Outlet } from "react-router-dom"
import ProfileCard from "../../components/user/ProfileCard"
import MainPanel from "../MainPanel"
import GuildBulletin from "../../components/GuildBulletin"
import colors from "../../utils/colors"
import CustomButton from "../../components/buttons/CustomButton"

export default function HomePage({ }) {
    const buttons = [
        {
            name: "Guild Hall",
            route: "/guild-hall"
        },
        {
            name: "Quests",
            route: "/quests"
        },
        {
            name: "Carrot's Tavern",
            route: "/shop"
        },
        {
            name: "My Companions",
            route: "/my-companions"
        }
    ]

    return <Box component="div" sx={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "2rem", width: "100%", position: "relative" }}>
        <div className="w-full h-fit flex flex-col gap-4 sticky top-5">
            <ProfileCard />
            <Divider sx={{ backgroundColor: colors.primary, my: "1rem" }} />

            <div className="w-full flex flex-col gap-4">
                {buttons.map(btn => {
                    return <CustomButton key={btn.name} name={btn.name} route={btn.route} />
                })}
            </div>
        </div>
        <MainPanel>
            <Outlet />
        </MainPanel>
        <div className="w-full h-fit flex flex-col gap-4 sticky top-5">
            <GuildBulletin />
        </div>
    </Box>
}