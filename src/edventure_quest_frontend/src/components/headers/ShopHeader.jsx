import { Typography, Button } from "@mui/material"
import colors from "../../utils/colors"
import { useContext } from "react"
import { UserContext } from "../../providers/UserProvider"
import ShopHeaderButton from "../buttons/ShopHeaderButton"

export default function ShopHeader({ title, description, type, edventurePoints, headerBtnLabel }) {
    const currentUser = useContext(UserContext)
    return <div className="card-theme-light flex flex-col justify-center gap-2">
        <div className="card-theme-dark flex flex-col justify-center">
            <Typography className="kavoon-font" variant="h6" sx={{ textAlign: "center", color: colors.textLight }}>{title}</Typography>
            <Typography variant="body2" sx={{ textAlign: "center", color: colors.textLight }}>{type.toUpperCase()}</Typography>
            <Typography variant="body2" sx={{ textAlign: "center", color: colors.textLight, mt: "1rem" }}>{description}</Typography>
        </div>

        <SubContent role={currentUser?.role} label={headerBtnLabel} edventurePoints={edventurePoints} />
    </div>
}

function SubContent({ role, label, edventurePoints }) {
    switch (role) {
        case "guild member":
            return <Typography variant="overline" sx={{ fontWeight: "bold", textAlign: "center", color: colors.tertiary, mx: "0.5rem" }}>{`Edventure Tokens: ${edventurePoints} EVT`}</Typography>

        case "guild master":
            return <Typography variant="overline" sx={{ fontWeight: "bold", textAlign: "center", color: colors.tertiary, mx: "0.5rem" }}>{`Edventure Tokens: ${edventurePoints} EVT`}</Typography>

        case "grand council":
            return <ShopHeaderButton label={label} />

        default:
            break;
    }
}