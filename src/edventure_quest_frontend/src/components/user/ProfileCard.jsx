import { Avatar, Typography, LinearProgress, Divider } from "@mui/material"
import colors from "../../utils/colors"

export default function ProfileCard({ }) {
    return <div className="card-wrapper flex flex-col gap-4">
        <div className="w-full card-theme-neutral flex gap-4">
            <Avatar sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", border: `2px solid ${colors.secondary}` }} />
            <div className="flex flex-col w-full">
                <div>
                    <Typography variant="body1" sx={{ fontWeight: "bold", color: colors.tertiary }}>Carrot Slayer</Typography>
                </div>
                <div className="mt-2">
                    <LinearProgress color="brownDark" variant="determinate" value={30} sx={{ borderRadius: "50px", backgroundColor: colors.primary, height: "5px", color: colors.tertiary }} />
                    <div className="flex justify-between">
                        <Typography variant="caption" sx={{ fontWeight: "bold", color: colors.tertiary }}>Lv. 7</Typography>
                        <Typography variant="caption" sx={{ fontWeight: "bold", color: colors.tertiary }}>500/1500 XP</Typography>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full card-theme-light flex gap-4">
            <Avatar sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", border: `2px solid ${colors.secondary}` }} />
            <div className="flex flex-col w-full">
                <div>
                    <Typography variant="body1" sx={{ fontWeight: "bold", color: colors.tertiary }}>GIFT: Poseidon's Barrier</Typography>
                    <Typography variant="caption" sx={{ fontWeight: "bold", color: colors.tertiary }}>Command</Typography>
                </div>
            </div>
        </div>

        <div className="w-full card-theme-light flex gap-2 flex-col">
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", color: colors.tertiary }}>Remaining Balance</Typography>
            <Divider sx={{ color: colors.tertiary, backgroundColor: colors.secondary }} />
            <div className="w-full flex justify-between">
                <Typography variant="body2" sx={{ color: colors.tertiary }}>Edventure points</Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold", color: colors.tertiary }}>147 pts</Typography>
            </div>
            <div className="w-full flex justify-between">
                <Typography variant="body2" sx={{ color: colors.tertiary }}>Guild points</Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold", color: colors.tertiary }}>1006 pts</Typography>
            </div>
        </div>
    </div >
}