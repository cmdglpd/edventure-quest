import { useContext } from "react";
import CustomButton from "./CustomButton";
import { UserContext } from "../../providers/UserProvider";

export default function GuildButtons({ }) {
    const currentUser = useContext(UserContext)

    const libraryRoutes = {
        "guild member": "/guild-hall/library",
        "grand council": "/guilds/library"
    }

    const buttons = [
        {
            name: "guilds",
            route: "/guilds",
            users: ["guild member", "guild master", "grand council"]
        },
        {
            name: "lobby",
            route: "/guild-hall",
            users: ["guild member", "guild master"]
        },
        {
            name: "library",
            route: libraryRoutes[currentUser?.role],
            users: ["guild member", "guild master", "grand council"]
        }
    ]
    return <div className="card-theme-neutral flex items-center justify-between gap-2 h-fit absolute bottom-0">
        {buttons.map(btn => {
            if (btn.users.includes(currentUser?.role)) {
                return <CustomButton key={btn.name} name={btn.name} route={btn.route} />
            }
        })}
    </div>
}