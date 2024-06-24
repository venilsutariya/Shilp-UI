"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar1 = () => {
    return (
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
        </div>
    );
}

export default Navbar1;