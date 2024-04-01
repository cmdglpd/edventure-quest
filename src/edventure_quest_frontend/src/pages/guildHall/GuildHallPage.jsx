import { Outlet } from "react-router-dom"
import GuildHallButtons from "../../components/buttons/GuildHallButtons"

export default function GuildHallPage({ }) {
    return <div className="w-full flex flex-col gap-4 relative">
        <GuildHallButtons />

        <div className="w-full">
            <Outlet />
        </div>
    </div>
}