import { Card, CardContent, Box, Typography } from "@mui/material"
import colors from "../../utils/colors"

export default function SkillCard({ color, image, name, price, type }) {
    return <Card elevation={0} sx={{
        borderRadius: "0.5rem", backgroundColor: "transparent", '&:hover': {
            transform: "scale(1.1)", transition: "0.15s"
        }, position: "relative"
    }}>
        <Box component="div" sx={{ borderRadius: "0.5rem 0 0.5rem 0", display: "flex", alignItems: "center", bgcolor: colors.background, position: "absolute", top: 0, left: 0, px: 1, py: 0.5 }}><Typography variant="body2" sx={{ fontWeight: "bold" }}>{price}</Typography><p className="text-xs">pts</p></Box>

        <Card sx={{ borderRadius: "0.5rem" }}>
            <CardContent sx={{ display: "flex", justifyContent: "center", backgroundImage: `linear-gradient(${color}, ${colors.background})`, py: "2rem" }}>
                <img src={image} alt="item image" className="max-w-20 max-h-20" />
            </CardContent>
        </Card>
        <Card sx={{ borderRadius: "0.5rem" }}>
            <div className="bg-[#111111] pt-2 pb-4 px-1">
                <p className="text-sm text-center font-bold line-clamp-1 m-0 p-0">{name}</p>
                <p className="text-xs text-center m-0 p-0">{type}</p>
            </div>
        </Card>
    </Card>
}