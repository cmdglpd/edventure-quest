import colors from "../../utils/colors"
import ares from "../../assets/gifts/ares.png"
import LabeledDivider from "../../components/LabeledDivider"
import ItemCard from "../../components/shop/ItemCard"

const items = [
    {
        name: "Time Freeze",
        type: "Guard",
        color: colors.gifts.ares,
        image: ares,
        price: 2500,
    }
]

export default function ItemPage({ }) {
    return <>
        <LabeledDivider withDivider={true} label="147 Quests" />
        <div className={`bg-[${colors.secondaryBackground}] mx-[1rem] md:mx-4 lg:mx-16 mt-2 md:mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-3 xl:gap-4`}>
            {items.map(item => {
                return <ItemCard
                    key={Math.random()}
                    color={item.color}
                    name={item.name}
                    image={item.image}
                    type={item.type}
                    price={item.price}
                />
            })}
        </div>
    </>
}