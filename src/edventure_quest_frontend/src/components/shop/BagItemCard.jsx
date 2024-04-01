import { Typography, Divider, Button } from "@mui/material"
import colors from "../../utils/colors"

export default function BagItem({ name, purchaseDate }) {
    return <div className="card-theme-light flex gap-4">
        <div className="w-[10rem] h-[6rem]">
            <img src={companionImg} alt="cover image" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", borderRadius: "10px", border: `4px solid ${colors.secondary}`, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }} />
        </div>

        <div className="w-full h-[6rem] flex flex-col justify-between">
            <div>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: colors.tertiary }}>{name}</Typography>
                <Typography variant="body2" sx={{ color: colors.tertiary }}>{`PURCHASE DATE: ${purchaseDate}`}</Typography>
            </div>

            <div className="w-full flex flex-col gap-2">
                <Divider sx={{ backgroundColor: colors.secondary }} />
                <Button size="small" variant="contained" color="brownLight" sx={{ fontWeight: "bold", borderRadius: "10px", maxWidth: "fit-content", ml: "auto", color: colors.tertiary }}>Buy</Button>
            </div>
        </div>
    </div>
}