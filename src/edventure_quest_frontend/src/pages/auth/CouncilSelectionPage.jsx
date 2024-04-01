import {Typography, Button, Divider} from "@mui/material"
import { useGrandCouncils } from "../../hooks/useGrandCouncils"
import { useNavigate } from "react-router-dom"
import colors from "../../utils/colors"
import image from "../../assets/story3.png"

export default function CouncilSelectionPage({ }) {
    const navigate = useNavigate()
    const { grandCouncils, error, loading } = useGrandCouncils()

    const redirect = (path) => {
        return navigate(path)
    }

    if (loading) {
        return <p>Fetching Grand Councils</p>
    }

    return <div className="flex flex-col gap-4">
    <div className="w-full card-theme-neutral">
        <Typography className="kavoon-font" variant="h6" sx={{ color: colors.tertiary, textAlign: "center" }}>Select your organization</Typography>
    </div>

    <div className="w-full flex flex-col gap-4">
        {grandCouncils?.map((grandCouncil, index) => {
            return <div key={index} className="card-theme-light flex gap-4">
                <div className="w-[10rem]">
                    <img src={image} alt="cover image" style={{ width: "100%", height: "6rem", objectFit: "cover", objectPosition: "center", borderRadius: "10px", border: `4px solid ${colors.secondary}`, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }} />
                </div>

                <div className="w-full flex flex-col gap-2">
                    <div>
                        <Typography variant="body1" className="kavoon-font" sx={{ fontWeight: "bold", color: colors.tertiary }}>{grandCouncil.name}</Typography>
                        <Typography variant="body2" sx={{ color: colors.tertiary, mt: "0.5rem" }}>{grandCouncil.description}</Typography>
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <Divider sx={{ backgroundColor: colors.secondary }} />
                        <Button onClick={() => redirect(`/register/${grandCouncil.grandCouncilId}/guild-selection`)} size="small" variant="contained" color="brownLight" sx={{ fontWeight: "bold", borderRadius: "10px", maxWidth: "fit-content", ml: "auto", color: colors.tertiary }}>Select</Button>
                    </div>
                </div>
            </div>
        })}
    </div>
</div>
}