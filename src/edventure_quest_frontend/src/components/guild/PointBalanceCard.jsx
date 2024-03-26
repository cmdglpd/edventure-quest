import { Card, Divider, Typography, Box, Avatar } from "@mui/material"
import guildPointIcon from "../../assets/pointBalance/guildCoinIcon.png"
import personalPointIcon from "../../assets/pointBalance/personalCoinIcon.png"
import guildPointCard from "../../assets/pointBalance/guildPointsCard.png"
import personalPointCard from "../../assets/pointBalance/personalPointsCard.png"

export default function PointBalanceCard({ guildName }) {
    return <Card elevation={0} sx={{ bgcolor: "transparent", order: { xs: 1, lg: 2 }, mx: {xs: "1rem", md: 0} }}>
        <Divider />
        <Typography variant="body2" sx={{ fontWeight: "bold", my: "0.5rem" }}>POINT BALANCES</Typography>
        <Box sx={{display: "flex", gap: 1, flexDirection: { xs: "row", lg: "column" }}}>
            <Card elevation={0} sx={{ p: "1rem", mb: "0.5rem", borderRadius: 3, backgroundImage: `url(${guildPointCard})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: {xs: "50%", lg: "100%"} }}>
                <Typography variant="overline">{guildName}</Typography>
                <Box sx={{ display: "flex", gap: 1, mt: "5rem" }}>
                    <Avatar src={guildPointIcon} sx={{ width: 25, height: 25 }} />
                    <div className="flex items-end gap-1">
                        <Typography variant="body1" sx={{ fontWeight: "bold", my: 0, py: 0 }}>147</Typography>
                        <Typography variant="caption" sx={{ my: 0, py: 0 }}>GUILD POINTS</Typography>
                    </div>
                </Box>
            </Card>

            <Card elevation={0} sx={{ p: "1rem", mb: "0.5rem", borderRadius: 3, backgroundImage: `url(${personalPointCard})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: {xs: "50%", lg: "100%"} }}>
                <Typography variant="overline">My Balance</Typography>
                <Box sx={{ display: "flex", gap: 1, mt: "5rem" }}>
                    <Avatar src={personalPointIcon} sx={{ width: 25, height: 25 }} />
                    <div className="flex items-end gap-1">
                        <Typography variant="body1" sx={{ fontWeight: "bold", my: 0, py: 0 }}>147</Typography>
                        <Typography variant="caption" sx={{ my: 0, py: 0 }}>OLYMPUS COINS</Typography>
                    </div>
                </Box>
            </Card>
        </Box>
    </Card>
}