import colors from "../../utils/colors"
import { Typography, Divider, Button } from "@mui/material"

export default function QuestDetailsCard({ title, edventurePoints, guildPoints, coverImg, chapter }) {
    return <div className="card-theme-light flex gap-4">
        <div className="w-[10rem] h-[6rem]">
            <img src={coverImg} alt="cover image" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", borderRadius: "10px", border: `4px solid ${colors.secondary}`, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }} />
        </div>

        <div className="w-full h-[6rem] flex flex-col justify-between">
            <div>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: colors.tertiary }}>{`CHAPTER ${chapter}: ${title}`}</Typography>
                <Typography variant="body2" sx={{ color: colors.tertiary }}>{`REWARDS: ${edventurePoints} Edventure points | ${guildPoints} Guild points`}</Typography>
            </div>

            <div className="w-full flex flex-col gap-2">
                <Divider sx={{ backgroundColor: colors.secondary }} />
                <Button size="small" variant="contained" color="brownLight" sx={{ fontWeight: "bold", borderRadius: "10px", maxWidth: "fit-content", ml: "auto", color: colors.tertiary }}>Quest Details</Button>
            </div>
        </div>
    </div>
}