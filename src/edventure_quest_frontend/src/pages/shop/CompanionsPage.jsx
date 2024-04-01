import ShopHeader from "../../components/headers/ShopHeader"
import CompanionCard from "../../components/shop/CompanionCard"
import image2 from "../../assets/story2.png"
import { useCompanions } from "../../hooks/useCompanions"

const header = {
    title: "Carrot's Tavern",
    type: "Companions",
    edventurePoints: 4700,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio, repellat, molestiae aliquid ratione veniam illum eos itaque maiores cum aliquam quae natus eius quam assumenda nihil voluptas exercitationem hic!"
}

export default function CompanionsPage({ }) {
    const {companions, loading, error} = useCompanions()

    if(loading){
        return <p>Fetching companions</p>
    }

    return <div className="w-full flex flex-col gap-4">
        <ShopHeader title={header.title} type={header.type} description={header.description} edventurePoints={header.edventurePoints} />

        <div className="w-full flex flex-col gap-2 mt-1">
            {companions.map((companion, index) => {
                return <CompanionCard key={index} name={companion.name} description={companion.description} effect={companion.effect} type={companion.type} edventurePoints={companion.price} companionImg={companion.companionImage} />
            })}
        </div>
    </div >
}