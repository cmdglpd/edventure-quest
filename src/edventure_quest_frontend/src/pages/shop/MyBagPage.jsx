import MyBagHeader from "../../components/headers/MyBagHeader"
import BagItemCard from "../../components/shop/BagItemCard"
import { useBagItems } from "../../hooks/useBagItems"
import { UserContext } from "../../providers/UserProvider"
import { useContext } from "react"

const header = {
    title: "My Bag",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio, repellat, molestiae aliquid ratione veniam illum eos itaque maiores cum aliquam quae natus eius quam assumenda nihil voluptas exercitationem hic!"
}

export default function MyBagPage({}){
    const currentUser = useContext(UserContext)
    const {bagItems, error, loading} = useBagItems(currentUser?.purchasedItems)

    if(loading){
        return <p>Fetching bag items</p>
    }

    return <div className="w-full flex flex-col gap-4">
        <MyBagHeader title={header.title} description={header.description} />
        <div className="w-full flex flex-col gap-4 mt-1">
            {
                bagItems.map(item => {
                return <BagItemCard name={item.name} itemImg={item.mage} description={item.description} />
                })
            }
        </div>
    </div>
}