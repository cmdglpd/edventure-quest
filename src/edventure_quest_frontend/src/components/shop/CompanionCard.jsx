import { Typography, Divider, Button } from "@mui/material"
import colors from "../../utils/colors"
import CompanionDialog from "../dialogs/CompanionDialog"
import { useState } from "react"

export default function CompanionCard({ name, edventurePoints, type, companionImg, description, effect }) {
    const [open, setOpen] = useState(false)

    return <>
        <CompanionDialog open={open} handleClose={() => setOpen(false)} name={name} type={type} effect={effect} companionImg={companionImg} description={description} edventurePoints={edventurePoints} />

        <div className="card-theme-light flex gap-4">
            <div className="w-[10rem]">
                <img src={companionImg} alt="cover image" style={{ width: "100%", height: "6rem", objectFit: "cover", objectPosition: "center", borderRadius: "10px", border: `4px solid ${colors.secondary}`, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }} />
            </div>

            <div className="w-full flex flex-col gap-2">
                <div>
                    <Typography variant="body1" className="kavoon-font" sx={{ fontWeight: "bold", color: colors.tertiary }}>{`${name} the ${type?.toUpperCase()}`}</Typography>
                    <Typography variant="body2" sx={{ color: colors.tertiary }}>{`PRICE: ${edventurePoints} EVT`}</Typography>
                    <Typography variant="body2" sx={{ color: colors.tertiary, mt: "0.5rem", display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden', textOverflow: 'ellipsis' }}>{description}</Typography>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <Divider sx={{ backgroundColor: colors.secondary }} />
                    <Button onClick={() => setOpen(true)} size="small" variant="contained" color="brownLight" sx={{ fontWeight: "bold", borderRadius: "10px", maxWidth: "fit-content", ml: "auto", color: colors.tertiary }}>Details</Button>
                </div>
            </div>
        </div>
    </>
}