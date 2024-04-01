import { Outlet } from "react-router-dom"
import GuildButtons from "../../components/buttons/GuildButtons"

export default function GuildsPage({ }) {
    return <div className="w-full flex flex-col gap-4 relative">
        <GuildButtons />

        <div className="w-full">
            <Outlet />
        </div>
    </div>
}