import SkillCard from "../../components/shop/SkillCard"
import colors from "../../utils/colors"
import LabeledDivider from "../../components/LabeledDivider"
import poseidon from "../../assets/gifts/poseidon.png"
import zeus from "../../assets/gifts/zeus.png"
import ares from "../../assets/gifts/ares.png"
import hades from "../../assets/gifts/hades.png"
import apollo from "../../assets/gifts/apollo.png"
import hermes from "../../assets/gifts/hermes.png"
import themis from "../../assets/gifts/themis.png"
import aphrodite from "../../assets/gifts/aphrodite.png"
import athena from "../../assets/gifts/athena.png"
import demeter from "../../assets/gifts/demeter.png"
import meduza from "../../assets/gifts/meduza.png"
import hephaestus from "../../assets/gifts/hephaestus.png"
import eros from "../../assets/gifts/eros.png"
import atlas from "../../assets/gifts/atlas.png"
import prometheus from "../../assets/gifts/prometheus.png"

const gifts = [
    {
        name: "Poseidon's Barrier",
        type: "Guard",
        color: colors.gifts.poseidon,
        image: poseidon,
        price: 2500,
    },
    {
        name: "Zeus' Thunderbolt",
        type: "Command",
        color: colors.gifts.zeus,
        image: zeus,
        price: 2500,
    },
    {
        name: "Ares' Fortress",
        type: "Guard",
        color: colors.gifts.ares,
        image: ares,
        price: 2500,
    },
    {
        name: "Hades' Shadow",
        type: "Command",
        color: colors.gifts.hades,
        image: hades,
        price: 2500,
    },
    {
        name: "Apollo's Guidance",
        type: "Command",
        color: colors.gifts.apollo,
        image: apollo,
        price: 2500,
    },
    {
        name: "Hermes' Agility",
        type: "Boost",
        color: colors.gifts.hermes,
        image: hermes,
        price: 2500,
    },
    {
        name: "Themis' Justice",
        type: "Guard",
        color: colors.gifts.themis,
        image: themis,
        price: 2500,
    },
    {
        name: "Aphrodite's Embrace",
        type: "Command",
        color: colors.gifts.aphrodite,
        image: aphrodite,
        price: 2500,
    },
    {
        name: "Athena's Shield",
        type: "Guard",
        color: colors.gifts.athena,
        image: athena,
        price: 2500,
    },
    {
        name: "Demeter's Blessing",
        type: "Command",
        color: colors.gifts.demeter,
        image: demeter,
        price: 2500,
    },
    {
        name: "Atlas' Resolve",
        type: "Command",
        color: colors.gifts.atlas,
        image: atlas,
        price: 2500,
    },
    {
        name: "Prometheus' Gfit",
        type: "Boost",
        color: colors.gifts.prometheus,
        image: prometheus,
        price: 2500,
    },
    {
        name: "Eros' Enchantment",
        type: "Guard",
        color: colors.gifts.eros,
        image: eros,
        price: 2500,
    },
    {
        name: "Hephaestus' Forge",
        type: "Guard",
        color: colors.gifts.hephaestus,
        image: hephaestus,
        price: 2500,
    },
    {
        name: "Meduza's Gaze",
        type: "Guard",
        color: colors.gifts.meduza,
        image: meduza,
        price: 2500,
    },
]

export default function SkillPage({ }) {
    return <>
        <LabeledDivider withDivider={true} label="147 Quests" />
        <div className={`bg-[${colors.secondaryBackground}] mx-[1rem] md:mx-4 lg:mx-16 mt-2 md:mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-3 xl:gap-4`}>
            {gifts.map(gift => {
                return <SkillCard
                    key={Math.random()}
                    color={gift.color}
                    name={gift.name}
                    image={gift.image}
                    type={gift.type}
                    price={gift.price}
                />
            })}
        </div>
    </>
}