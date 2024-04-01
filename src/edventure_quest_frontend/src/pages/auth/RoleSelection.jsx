import { Typography, Button, Divider } from "@mui/material"
import image from "../../assets/story3.png"
import colors from "../../utils/colors"
import { useNavigate } from "react-router-dom"

export default function RoleSelectionPage({ }) {
    const navigate = useNavigate()
    const roles = [
        {
            name: "Grand Council",
            path: "/register/grand-council-registration",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente magnam voluptatibus similique, pariatur laudantium esse nihil voluptatem optio asperiores accusantium est odit. Ratione aliquid sapiente ipsam sed saepe porro consequatur."
        },
        {
            name: "Guild Member",
            path: "/register/council-selection",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente magnam voluptatibus similique, pariatur laudantium esse nihil voluptatem optio asperiores accusantium est odit. Ratione aliquid sapiente ipsam sed saepe porro consequatur."
        }
    ]

    const redirect = (path) => {
        return navigate(path)
    }

    return <div className="flex flex-col gap-4">
        <div className="w-full card-theme-neutral">
            <Typography className="kavoon-font" variant="h6" sx={{ color: colors.tertiary, textAlign: "center" }}>Select your role</Typography>
        </div>

        <div className="w-full flex flex-col gap-4">
            {roles.map((role, index) => {
                return <div key={index} className="card-theme-light flex gap-4">
                    <div className="w-[10rem]">
                        <img src={image} alt="cover image" style={{ width: "100%", height: "6rem", objectFit: "cover", objectPosition: "center", borderRadius: "10px", border: `4px solid ${colors.secondary}`, boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }} />
                    </div>

                    <div className="w-full flex flex-col gap-2">
                        <div>
                            <Typography variant="body1" className="kavoon-font" sx={{ fontWeight: "bold", color: colors.tertiary }}>{role.name}</Typography>
                            <Typography variant="body2" sx={{ color: colors.tertiary, mt: "0.5rem" }}>{role.description}</Typography>
                        </div>

                        <div className="w-full flex flex-col gap-2">
                            <Divider sx={{ backgroundColor: colors.secondary }} />
                            <Button onClick={() => redirect(role.path)} size="small" variant="contained" color="brownLight" sx={{ fontWeight: "bold", borderRadius: "10px", maxWidth: "fit-content", ml: "auto", color: colors.tertiary }}>Select</Button>
                        </div>
                    </div>
                </div>
            })}
        </div>
    </div>
}