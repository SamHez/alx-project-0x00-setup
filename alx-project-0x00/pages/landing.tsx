import Card from "@/components/Card"
import Button from "@/components/Button"
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

            <div className="p-4 flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Button Variations</h2>
                <div className="flex gap-4 items-center">
                    <Button title="Small Rounded" styles="bg-blue-500 text-white px-2 py-1 text-sm rounded-sm" />
                    <Button title="Medium Rounded" styles="bg-green-500 text-white px-4 py-2 text-md rounded-md" />
                    <Button title="Large Rounded" styles="bg-red-500 text-white px-6 py-3 text-lg rounded-full" />
                </div>
            </div>
        </div>
    )
}
export default Landing
