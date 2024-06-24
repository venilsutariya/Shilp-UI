"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const HuMan = () => {
    const logoSvg = <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0.5C8.05888 0.5 0 8.55888 0 18.5C0 28.4411 8.05888 36.5 18 36.5C27.9411 36.5 36 28.4411 36 18.5C36 8.55888 27.9411 0.5 18 0.5ZM18 30.5C11.3726 30.5 6 25.1274 6 18.5L30 18.5C30 25.1274 24.6274 30.5 18 30.5Z" fill="black" />
    </svg>

    return (
        <div className="bg-[#F3F3F7] tracking-tight">
            <header>
                {/* navbar */}
                <div className="flex justify-between items-center px-5 lg:px-28 py-5">
                    <div className="flex items-center gap-x-[16px]">
                        <motion.div
                            initial={{ rotate: "180deg" }}
                            animate={{ rotate: "0deg" }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            {logoSvg}
                        </motion.div>
                        <div className="text-[#1A1A1A] text-[24px] font-[600]">HuMan</div>
                    </div>
                    <div className="hidden lg:flex font-[600] text-[20px] items-center gap-x-[2.25rem]">
                        <div className="cursor-pointer">About</div>
                        <div className="cursor-pointer">Our work</div>
                        <div className="cursor-pointer">Contact</div>
                        <button
                            className="py-[10px] px-[16px] border border-[#333] rounded-[8px] hover:opacity-95"
                        >Work with us</button>
                    </div>
                </div>
            </header>
            <div className="mt-[100px] px-5 lg:px-28">
                <div className="overflow-hidden">
                    <motion.div
                        initial={{ rotateY: "45deg", opacity: 0, y: 100 }}
                        animate={{ rotateY: "0deg", opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="lg:max-w-[770px] text-4xl lg:text-6xl font-[600] tracking-tighter" style={{ lineHeight: "130%" }}>
                        Every day, we strive to create a brighter future for all.
                    </motion.div>
                </div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="my-[48px] lg:max-w-[525px] text-xl font-[500]" style={{ lineHeight: "140%" }}>
                    Welcome to HuMan, TX-based non-profit organization, where every day is dedicated to making a meaningful difference for both people and the environment.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex items-center gap-x-[24px] gap-y-[24px] text-xl font-[500] flex-wrap">
                    <button className="bg-[#1A1A1A] rounded-[12px] text-white flex items-center gap-x-[8px] px-[24px] py-[12px]">
                        Discover how <ArrowRight />
                    </button>
                    <button className="rounded-[12px] border border-[#333] flex items-center gap-x-[8px] px-[24px] py-[12px]">
                        Our mission
                    </button>
                </motion.div>
            </div>
            <div className="mt-[100px]">
                <div className="grid lg:grid-cols-4">
                    <div className="col-span-3">
                        <Image
                            src={"/images/human.png"}
                            height={100}
                            width={100}
                            layout="responsive"
                        />
                    </div>
                    <div className="col-span-1 flex">
                        <div className="text-start lg:text-end mt-5 lg:mt-0 ps-5 lg:ps-12 font-[600] text-2xl">
                            <div>2023</div>
                            <div>Annual</div>
                            <div>meetup</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HuMan;