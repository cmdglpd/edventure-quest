import ShopHeader from "../../components/headers/ShopHeader"
import ProductCard from "../../components/shop/ProductCard"
import image1 from "../../assets/story3.png"
import { useProducts } from "../../hooks/useProducts"

const header = {
    title: "Carrot's Tavern",
    type: "Products",
    edventurePoints: 4700,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta odio, repellat, molestiae aliquid ratione veniam illum eos itaque maiores cum aliquam quae natus eius quam assumenda nihil voluptas exercitationem hic!"
}

export default function ProductsPage({ }) {
    const {products, loading, error} = useProducts()
    
    if(loading){
        return <p>Loading products</p>
    }

    return <div className="w-full flex flex-col gap-4">
        <ShopHeader title={header.title} type={header.type} description={header.description} edventurePoints={header.edventurePoints} />

        <div className="w-full flex flex-col gap-2 mt-1">
            {products.map((product, index) => {
                return <ProductCard key={index} name={product.name} description={product.description} edventurePoints={product.price} productImg={image1} />
            })}
        </div>
    </div >
}