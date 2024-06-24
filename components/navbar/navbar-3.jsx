"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

const Navbar3 = () => {
    return (
        <div className="flex justify-center tracking-tight">
            <header
                className="inline-block mt-[24px] px-[24px] py-[12px] rounded-full"
                style={{ boxShadow: "0px 5px 20px 10px rgba(26, 26, 26, 0.08)" }}
            >
                <div className="flex justify-between items-center gap-x-[36px]">
                    <div className="flex items-center gap-x-[8px]">
                        <motion.div
                            initial={{ rotate: 0 }}
                            animate={{ rotate: "360deg" }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            <Image
                                src={"/images/shilpboard.png"}
                                alt="logo"
                                height={36}
                                width={35}
                            />
                        </motion.div>
                        <div className="text-[#1A1A1A] text-2xl font-[600]">ShilpBoard</div>
                    </div>
                    <div>
                        <div className="hidden lg:flex font-[600] text-xl items-center gap-x-[24px]">
                            <div className="flex items-center cursor-pointer gap-x-[8px]">
                                Product <ChevronDown />
                            </div>
                            <div className="cursor-pointer">Changelog</div>
                            <div className="cursor-pointer">Pricing</div>
                            <div className="cursor-pointer">Login</div>
                        </div>
                    </div>
                    <div>
                        <button
                            className="py-[10px] px-[16px] bg-[#1A1A1A] text-[#FAFAFA] font-600 rounded-full text-xl hover:opacity-95"
                        >Get Started</button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar3;