"use client";

import Image from "next/image";
import { useState } from "react";

const Feature4 = () => {
    const [text, setText] = useState("Unified dashboard");

    const cards = [
        {
            title: "Unified dashboard",
            description: "Gain comprehensive insights with a customizable dashboard that centralizes all your key metrics and data.",
            imageUrl: "https://www.shilp.co/_next/image?url=%2Fimages%2Fsitenote.webp&w=1920&q=75",
        },
        {
            title: "Collaborative workspace",
            description: "Enhance teamwork with real-time document sharing, editing, and built-in chat and video conferencing tools.",
            imageUrl: "https://www.shilp.co/_next/image?url=%2Fimages%2Fveriprod.webp&w=1920&q=75",
        },
        {
            title: "Smart automation",
            description: "Automate repetitive tasks with custom workflows to save time and ensure consistency in your processes.",
            imageUrl: "https://www.shilp.co/_next/image?url=%2Fimages%2Ffractionally.webp&w=1920&q=75",
        },
        {
            title: "Secure cloud storage",
            description: "Store your files securely with advanced encryption and access them from anywhere with reliable backups.",
            imageUrl: "https://www.shilp.co/_next/image?url=%2Fimages%2Fripen.webp&w=1920&q=75",
        },
    ]

    const [image, setImage] = useState(cards[0].imageUrl);

    const handleClick = (title, imageUrl) => {
        setText(title);
        setImage(imageUrl);
    }

    return (
        <div className="p-5 lg:p-10">
            <div className="font-[600] text-[48px] lg:max-w-[640px] tracking-tighter" style={{ lineHeight: "130%" }}>
                Unleash the full potential of portal in few minutes.
            </div>
            <p className="mt-[48px] mb-[64px] lg:max-w-[710px] tracking-tight text-2xl" style={{ lineHeight: "135%" }}>
                Our suite of powerful features is designed to elevate your business operations, enhance productivity, & drive growth.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[50px] gap-y-4">
                <div>
                    {cards.map((item, index) => (
                        <div onClick={() => handleClick(item.title, item.imageUrl)} key={index} className={`px-[24px] pt-[24px] pb-[48px] cursor-pointer hover:bg-[#E6E6E6] ${text === item.title && "bg-[#E6E6E6]"}`}>
                            <div className="text-[32px] tracking-tighter font-[500]">{item.title}</div>
                            <p className="text-lg font-[500] text-[#333] tracking-tight lg:max-w-[485px]" style={{ lineHeight: "135%" }}>{item.description}</p>
                        </div>
                    ))}
                </div>
                <Image
                    src={image}
                    alt={"image"}
                    height={100}
                    width={100}
                    layout="responsive"
                    className="h-full"
                />
            </div>
        </div>
    );
}

export default Feature4;