import ShopHeader from "../../components/headers/ShopHeader"
import ServiceCard from "../../components/shop/ServiceCard"
import image1 from "../../assets/story2.png"
import { useServices } from "../../hooks/useServices"

const header = {
    title: "Carrot's Tavern",
    type: "Services",
    edventurePoints: 4700,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio, repellat, molestiae aliquid ratione veniam illum eos itaque maiores cum aliquam quae natus eius quam assumenda nihil voluptas exercitationem hic!"
}

export default function ServicesPage({ }) {
    const {services, loading, error} = useServices()

    if(loading){
        return <p>Loading Services</p>
    }

    return <div className="w-full flex flex-col gap-4">
        <ShopHeader title={header.title} type={header.type} description={header.description} edventurePoints={header.edventurePoints} headerBtnLabel="Add New Service" />

        <div className="w-full flex flex-col gap-2 mt-1">
            {services.map((service, index) => {
                return <ServiceCard key={index} name={service.name} description={service.description} edventurePoints={service.price} serviceImg={service.serviceImage} />
            })}
        </div>
    </div >
}