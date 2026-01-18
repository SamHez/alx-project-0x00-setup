import Card from "@/components/Card"
import React from "react"

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <div className="flex gap-4 p-4 flex-wrap">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
export default Landing
