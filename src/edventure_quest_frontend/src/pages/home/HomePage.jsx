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
            name: "Carrot's Tavern",
            route: "/marketplace"
        },
        {
            name: "Quests",
            route: "/quests"
        }
    ]

    return <Box sx={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: "1.5rem", width: "100%" }}>
        <div className="w-full flex flex-col gap-4">
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
        <GuildBulletin />
    </Box>
}