"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const ShilpBoard = () => {
    const playSvg = <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14" viewBox="0 0 11 14" fill="none">
        <path d="M0 14V0L11 7L0 14Z" fill="#E6E6E6" />
    </svg>

    return (
        <div className="relative tracking-tight">
            <div className=" absolute top-0 right-0 p-20 md:p-28 lg:p-60 z-[-10]" style={{ backgroundImage: "linear-gradient(to bottom left,#89a8ff38 0%,#00000000 50%,#fff 50%,#fff 100%)" }} />
            <div className=" absolute top-0 left-0 herogrd p-20 md:p-28 lg:p-60 z-[-10]" style={{ backgroundImage: "linear-gradient(to bottom right,#89a8ff38 0%,#00000000 50%,#fff 50%,#fff 100%)" }} />
            <div className="lg:max-w-[2000px] mx-auto">
                <header>
                    {/* navbar */}
                    <div className="flex justify-between items-center px-5 lg:px-10 py-5">
                        <div className="flex items-center gap-x-[8px]">
                            <motion.div
                                initial={{ rotate: 0 }}
                                animate={{ rotate: "360deg" }}
                                transition={{ delay: 0.5, duration: 1 }}
                            >
                                <Image
                                    src={"/images/shilpboard.png"}
                                    alt="logo"
                                    height={40}
                                    width={40}
                                />
                            </motion.div>
                            <div className="text-[#1A1A1A] text-[24px] font-[600]">ShilpBoard</div>
                        </div>
                        <div className="hidden lg:flex font-[600] text-xl items-center gap-x-[2.25rem]">
                            <div className="flex items-center cursor-pointer gap-x-[8px]">
                                Product <ChevronDown />
                            </div>
                            <div className="cursor-pointer">Changelog</div>
                            <div className="cursor-pointer">Pricing</div>
                            <div className="cursor-pointer">Login</div>
                            <button
                                className="py-[10px] px-[16px] bg-[#333] text-white rounded-[6px] hover:opacity-95"
                            >Get Started</button>
                        </div>
                    </div>
                </header>
                <section className="mt-[100px]">
                    <div
                        className="flex justify-center"
                    >
                        <motion.button
                            initial={{ opacity: 0, filter: "blur(5px)" }}
                            animate={{ opacity: 1, filter: "blur(0px)" }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="flex items-center overflow-hidden gap-x-[10px] bg-[#E6E6E6] rounded-full px-[12px] py-[8px] font-[500]"
                        >
                            <div className="bg-[#333] p-[8px] rounded-full w-[30px] flex justify-center items-center">
                                {playSvg}
                            </div>
                            Watch demo
                        </motion.button>
                    </div>
                    <div className="mt-[24px] flex flex-col overflow-hidden items-center">
                        <motion.div
                            initial={{ rotateY: "45deg", opacity: 0, y: 100 }}
                            animate={{ rotateY: "0deg", opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="lg:max-w-[593px] text-5xl lg:text-[56px] font-[600] tracking-tighter text-center"
                            style={{ lineHeight: "135%" }}
                        >
                            Rev up your university portal with ShilpBoard
                        </motion.div>
                    </div>
                    <div className="flex justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="mt-[30px] font-[500] text-center text-xl text-[#333] lg:max-w-[522px]">
                            Effortlessly Design Stunning, User-Friendly Dashboards to Elevate the Experience for Students and Faculty.
                        </motion.div>
                    </div>
                    <div className="mt-[30px] flex justify-center">
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="px-[14px] lg:px-[24px] py-[10px] lg:py-[12px] text-[24px] font-[500] bg-[#0064E5] rounded-[12px] text-white flex items-center gap-x-[8px] hover:opacity-95">
                            Get started for free <ArrowRight />
                        </motion.button>
                    </div>
                    <div className="flex justify-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 1 }}
                            className="lg:w-[85%]"
                        >
                            <Image
                                src={"/images/shilpboardhero.png"}
                                alt="dashboard"
                                width={100}
                                height={100}
                                layout="responsive"
                                loading="lazy"
                                className="hidden lg:block"
                            />
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default ShilpBoard;