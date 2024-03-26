import { Outlet } from "react-router-dom"
import QuestTypeButtons from "../../components/buttons/QuestTypeButtons"

export default function QuestPage({ }) {
    return <div className="w-full flex flex-col gap-4">
        <QuestTypeButtons />

        <div className="w-full">
            <Outlet />
        </div>
    </div>
}