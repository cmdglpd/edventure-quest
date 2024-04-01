import CustomButton from "./CustomButton";

export default function GuildHallButtons({ }) {
    const buttons = [
        {
            name: "lobby",
            route: "/guild-hall"
        },
        {
            name: "library",
            route: "/guild-hall/library"
        }
    ]
    return <div className="card-theme-neutral flex items-center justify-between gap-2 h-fit absolute bottom-0">
        {buttons.map(btn => {
            return <CustomButton key={btn.name} name={btn.name} route={btn.route} />
        })}
    </div>
}