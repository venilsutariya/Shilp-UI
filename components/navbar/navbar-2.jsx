"use client";

import { motion } from "framer-motion";

const Navbar2 = () => {
    const logoSvg = <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0.5C8.05888 0.5 0 8.55888 0 18.5C0 28.4411 8.05888 36.5 18 36.5C27.9411 36.5 36 28.4411 36 18.5C36 8.55888 27.9411 0.5 18 0.5ZM18 30.5C11.3726 30.5 6 25.1274 6 18.5L30 18.5C30 25.1274 24.6274 30.5 18 30.5Z" fill="black" />
    </svg>


    return (
        <div>
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
        </div>
    );
}

export default Navbar2;