import { Avatar, Typography, LinearProgress, Button, Divider } from "@mui/material"
import colors from "../../utils/colors"
import { useState, useContext } from "react"
import {UserContext} from "../../providers/UserProvider"

export default function ProfileCard({ }) {
    const [character, setCharacter] = useState("knight")
    const [movement, setMovement] = useState("idle")

    const currentUser = useContext(UserContext)

    const attack = () => {
        setMovement("attack")
        setTimeout(() => {
            setMovement("idle")
        }, 500);
    }

    const jump = () => {
        setMovement("jump")
        setTimeout(() => {
            setMovement("idle")
        }, 500);
    }

    const buttons = [
        {
            name: "attack",
            func: attack
        },
        {
            name: "jump",
            func: jump
        }
    ]

    return <div className="card-wrapper flex flex-col gap-4">
        <div className="w-full card-theme-neutral flex gap-4">
            <Avatar sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", border: `2px solid ${colors.secondary}` }} />
            <div className="flex flex-col w-full">
                <div>
                    <Typography className="kavoon-font" variant="body1" sx={{ fontWeight: "bold", color: colors.tertiary }}>{currentUser?.username}</Typography>
                </div>
                <div className="mt-2">
                    <LinearProgress color="brownDark" variant="determinate" value={(currentUser?.expPoints/1500)*100} sx={{ borderRadius: "50px", backgroundColor: colors.primary, height: "5px", color: colors.tertiary }} />
                    <div className="flex justify-between">
                        <Typography variant="caption" sx={{ fontWeight: "bold", color: colors.tertiary }}>Lv. 7</Typography>
                        <Typography variant="caption" sx={{ fontWeight: "bold", color: colors.tertiary }}>{`${currentUser?.expPoints !== undefined ? currentUser.expPoints : 0}/1500 XP`}</Typography>
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full card-theme-light flex flex-col gap-2">
            <div className="container mx-auto">
                <div className="wrapper">
                    <div className={`character-${character}-${movement}`}></div>
                </div>
            </div>
            <div className="flex flex-col w-full gap-2">
                <div>
                    <Typography className="kavoon-font" variant="body1" sx={{ fontWeight: "bold", color: colors.tertiary }}>{`The ${character.toUpperCase()}`}</Typography>
                    <Typography variant="body2" sx={{ color: colors.tertiary }}>Gift: Paladin's Protection</Typography>
                </div>
                <Divider sx={{backgroundColor: colors.secondary}}/>

                <div className="w-full flex gap-2">
                    {buttons.map(btn => <Button key={btn.name} onClick={btn.func} variant="contained" color="brownLight" size="small">{btn.name}</Button>)}
                </div>
 
            </div>
        </div>

        {/* <div className="w-full card-theme-light flex gap-2 flex-col">
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
        </div> */}
    </div >
}