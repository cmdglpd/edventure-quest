import { Outlet } from "react-router-dom"
import ShopButtons from "../../components/buttons/ShopButtons"

export default function MarketplacePage({ }) {
    return <div className="w-full flex flex-col gap-4">
        <ShopButtons />

        <div className="w-full">
            <Outlet />
        </div>
    </div>
}