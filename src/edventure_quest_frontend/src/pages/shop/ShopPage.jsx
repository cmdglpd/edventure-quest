import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"

import DefaultHeader from "../../components/headers/DefaultHeader"
import colors from "../../utils/colors"
import SearchBar from "../../components/SearchBar"
import { useNavigate } from "react-router-dom"

export default function ShopPage({ }) {

    const navigate = useNavigate()
    const header = {
        title: "Marketplace",
        subtitle: "",
        icon: "",
        description: "Dive into the heart of EdventureQuest's vibrant community with our Marketplace, a dynamic space designed to enhance your quest for knowledge, reward your progress, and connect you with a myriad of educational resources and fun merchandise. Whether you're looking to gain an edge in your adventures, decorate your life with school spirit, or discover the tools you need for academic success, the Marketplace has something for everyone.",
        buttons: [
            {
                name: "Products",
                icon: "",
                func: () => console.log("Edit Details"),
            },
            {
                name: "Services",
                icon: "",
                func: () => console.log("Edit Details"),
            },
            {
                name: "Items",
                icon: "",
                func: () => navigate("/shop"),
            },
            {
                name: "Gifts",
                icon: "",
                func: () => navigate("/shop/gifts"),
            },
            {
                name: "Sell",
                icon: "",
                func: () => console.log("Edit Details"),
            },
            {
                name: "Purchases",
                icon: "",
                func: () => console.log("Edit Details"),
            },
        ]
    }

    return <Box component="div" sx={{ backgroundColor: "transparent", pb: "2rem" }}>
        <DefaultHeader
            title={header.title}
            subtitle={header.subtitle}
            description={header.description}
            icon={header.icon}
            buttons={header.buttons}
        />

        <div className={`bg-[${colors.secondaryBackground}] xs:mx-0 md:mx-4 lg:mx-16 mt-2 md:mt-3 flex flex-col gap-3`}>
            <SearchBar />
        </div>

        <Outlet />
    </Box>
}