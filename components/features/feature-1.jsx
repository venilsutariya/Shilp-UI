"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

const Feature1 = () => {
    const router = useRouter();

    const vector = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8.6 14.6L15.65 7.55L14.25 6.15L8.6 11.8L5.75 8.95L4.35 10.35L8.6 14.6ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z" fill="#28A745" />
    </svg>

    const rightArr = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M17.8164 13.3438H4.5V11.1562H17.8164L11.6914 5.03125L13.25 3.5L22 12.25L13.25 21L11.6914 19.4688L17.8164 13.3438Z" fill="white" />
    </svg>

    const bookSvg = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <path d="M12 6.54201C10.3516 5.06337 8.2144 4.24695 6 4.25001C4.948 4.25001 3.938 4.43001 3 4.76201V19.012C3.96362 18.672 4.97816 18.4989 6 18.5C8.305 18.5 10.408 19.367 12 20.792M12 6.54201C13.6483 5.06328 15.7856 4.24686 18 4.25001C19.052 4.25001 20.062 4.43001 21 4.76201V19.012C20.0364 18.672 19.0218 18.4989 18 18.5C15.7856 18.497 13.6484 19.3134 12 20.792M12 6.54201V20.792" stroke="#424655" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    const materialSvg = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M12.1819 3.30469L11.8772 3.44531L4.3772 6.82031L3.93188 7.00781V16.5234L4.30688 16.7344L11.8069 20.9062L12.1819 21.1172L12.5569 20.9062L20.0569 16.7344L20.4319 16.5234V7.00781L19.9866 6.82031L12.4866 3.44531L12.1819 3.30469ZM12.1819 4.94531L17.9475 7.52344L12.1819 10.4062L6.41626 7.52344L12.1819 4.94531ZM5.43188 8.71875L11.4319 11.7188V18.9609L5.43188 15.6328V8.71875ZM18.9319 8.71875V15.6328L12.9319 18.9609V11.7188L18.9319 8.71875Z" fill="#424655" />
    </svg>

    const taskSvg = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7.71973 3.96973L5.25 6.43945L4.28027 5.46973L3.21973 6.53027L5.25 8.56055L8.78027 5.03027L7.71973 3.96973ZM10.5 5.25V6.75H21V5.25H10.5ZM10.5 11.25V12.75H21V11.25H10.5ZM10.5 17.25V18.75H21V17.25H10.5Z" fill="#424655" />
    </svg>

    return (
        <div id="features" className="px-5 lg:px-10 py-5">
            <div
                id="booking"
                className="py-20 my-20"
                style={{ boxShadow: "0px 387px 108px 0px rgba(0, 85, 211, 0.00), 0px 248px 99px 0px rgba(0, 85, 211, 0.01), 0px 139px 84px 0px rgba(0, 85, 211, 0.02), 0px 62px 62px 0px rgba(0, 85, 211, 0.03), 0px 15px 34px 0px rgba(0, 85, 211, 0.04)", borderBottomLeftRadius: "28px", borderBottomRightRadius: "28px" }}
            >
                <div className="grid px-3 lg:px-[84px] grid-cols-1 lg:grid-cols-2 gap-4"
                >
                    <div className="w-full lg:pt-[40px] flex flex-col md:order-1 order-2">
                        <div className="text-2xl md:text-3xl lg:text-[36px] font-medium" style={{ letterSpacing: "-1.44px" }}>Effective Booking Tracking</div>
                        <div className="my-7 text-xl lg:text-2xl text-[#424655]" style={{ letterSpacing: "-0.6px", lineHeight: "135%" }}>
                            <div className="hidden md:block">
                                <div>Sitenote provides Booking channel</div>
                                <div>to effectively manage and track</div>
                                <div>properties and booking.</div>
                            </div>
                            {/* for mobile */}
                            <div className="block md:hidden">
                                Sitenote provides Booking channel to effectively manage and track properties and booking.
                            </div>
                        </div>
                        <div className="flex flex-wrap text-lg lg:text-xl items-center text-[#191B24] font-[425] gap-x-[48px]">
                            <div>
                                <div className="flex mb-1 items-center gap-x-[8px] sm:mb-[20px]">{vector} Add properties</div>
                                <div className="flex mb-1 items-center gap-x-[8px]">{vector} Ownership Details</div>
                            </div>
                            <div>
                                <div className="flex mb-1 items-center gap-x-[8px] sm:mb-[20px]">{vector} Mark Sold/Unsold</div>
                                <div className="flex items-center gap-x-[8px]">{vector} Individual Payment</div>
                            </div>
                        </div>
                        <div className="my-7 flex flex-wrap items-center gap-x-[24px]">
                            <button
                                className="gap-x-[10px] rounded-full mb-3 md:mb-0 py-[10px] px-[14px] lg:py-[15px] lg:px-[24px] bg-[#0066FA] text-white hover:bg-[#0066FA]/90 inline-flex items-center justify-center whitespace-nowrap lg:text-xl"
                            >
                                Start free trial {rightArr}
                            </button>
                            <button
                                className="gap-x-[10px] rounded-full mb-3 md:mb-0 px-[14px] py-[10px] lg:py-[15px] lg:px-[24px] lg:text-xl border border-[#727687]"
                            >
                                Request a Demo
                            </button>
                        </div>
                        <div className="flex text-md gap-x-[12px] text-[#424655] items-center">{bookSvg} 10000+ Properties added in FY23</div>
                    </div>
                    <div className="flex justify-end sm:order-1">
                        <img
                            src={"/images/framebook.png"}
                            alt="booking image"
                            className="lg:h-[600px]"
                        />
                    </div>
                </div>
                <div id="task" className="h-[0.5px] my-20 lg:mb-20 mx-3 lg:mx-[84px] bg-[#C2C6D8]" />
                <div className="grid px-3 lg:px-[84px] grid-cols-1 lg:grid-cols-2 gap-4"
                >
                    <div className="flex justify-start lg:h-[600px] sm:order-1">
                        <img
                            src={"/images/frametask.png"}
                            alt="booking image"
                            className="h-full"
                        />
                    </div>
                    <div className="w-full lg:pt-[40px] flex flex-col md:order-1 order-2">
                        <div className="text-2xl md:text-3xl lg:text-[36px] font-medium" style={{ letterSpacing: "-1.44px" }}>Effective Task Management</div>
                        <div className="my-7 text-xl lg:text-2xl text-[#424655]" style={{ letterSpacing: "-0.6px", lineHeight: "135%" }}>
                            <div className="hidden md:block">
                                <div>Sitenote provides Tasks channel to</div>
                                <div>effectively manage daily tasks at</div>
                                <div>the site and office.</div>
                            </div>
                            {/* for mobile */}
                            <div className="block md:hidden">
                                Sitenote provides Tasks channel to effectively manage daily tasks at the site and office.
                            </div>
                        </div>
                        <div className="flex flex-wrap text-lg lg:text-xl items-center text-[#191B24] font-[425] gap-x-[48px]">
                            <div>
                                <div className="flex mb-1 items-center gap-x-[8px] sm:mb-[20px]">{vector} Create tasks</div>
                                <div className="flex mb-1 md:mb-0 items-center gap-x-[8px]">{vector} Real-time updates</div>
                            </div>
                            <div>
                                <div className="flex mb-1 items-center gap-x-[8px] sm:mb-[20px]">{vector} Assign tasks</div>
                                <div className="flex items-center gap-x-[8px]">{vector} Chat channel</div>
                            </div>
                        </div>
                        <div className="my-7 flex flex-wrap items-center gap-x-[24px]">
                            <button
                                className="gap-x-[10px] rounded-full mb-3 md:mb-0 py-[10px] px-[14px] lg:py-[15px] lg:px-[24px] bg-[#0066FA] text-white hover:bg-[#0066FA]/90 inline-flex items-center justify-center whitespace-nowrap lg:text-xl"
                            >
                                Start free trial {rightArr}
                            </button>
                            <button
                                className="gap-x-[10px] rounded-full mb-3 md:mb-0 px-[14px] py-[10px] lg:py-[15px] lg:px-[24px] lg:text-xl border border-[#727687]"
                            >
                                Request a Demo
                            </button>
                        </div>
                        <div className="flex text-md gap-x-[12px] text-[#424655] items-center">{taskSvg} 1000+ Tasks created in FY23</div>
                    </div>
                </div>
                <div id="material" className="h-[0.5px] my-20 lg:mb-20 mx-3 lg:mx-[84px] bg-[#C2C6D8]" />
                <div className="grid px-3 lg:px-[84px] grid-cols-1 lg:grid-cols-2 gap-4"
                >
                    <div className="w-full lg:pt-[40px] flex flex-col md:order-1 order-2">
                        <div className="text-2xl md:text-3xl lg:text-[36px] font-medium" style={{ letterSpacing: "-1.44px" }}>Seamless Material Management</div>
                        <div className="my-7 text-xl lg:text-2xl text-[#424655]" style={{ letterSpacing: "-0.6px", lineHeight: "135%" }}>
                            <div className="hidden md:block">
                                <div>Sitenote provides Material channel to</div>
                                <div>manage All the material on sites very </div>
                                <div>seamlessly.</div>
                            </div>
                            {/* for mobile */}
                            <div className="block md:hidden">
                                Sitenote provides Material channel to
                                manage All the material on sites very seamlessly.
                            </div>
                        </div>
                        <div className="flex flex-wrap text-lg lg:text-xl items-center text-[#191B24] font-[425] gap-x-[48px]">
                            <div>
                                <div className="flex mb-1 items-center gap-x-[8px] sm:mb-[20px]">{vector} Material request</div>
                                <div className="flex mb-1 items-center gap-x-[8px]">{vector} Material data</div>
                            </div>
                            <div>
                                <div className="flex mb-1 items-center gap-x-[8px] sm:mb-[20px]">{vector} Material order status</div>
                                <div className="flex items-center gap-x-[8px]">{vector} Invite suppliers </div>
                            </div>
                        </div>
                        <div className="my-7 flex flex-wrap items-center gap-x-[24px]">
                            <button
                                className="gap-x-[10px] rounded-full mb-3 md:mb-0 py-[10px] px-[14px] lg:py-[15px] lg:px-[24px] bg-[#0066FA] text-white hover:bg-[#0066FA]/90 inline-flex items-center justify-center whitespace-nowrap lg:text-xl"
                            >
                                Start free trial {rightArr}
                            </button>
                            <button
                                className="gap-x-[10px] rounded-full mb-3 md:mb-0 px-[14px] py-[10px] lg:py-[15px] lg:px-[24px] lg:text-xl border border-[#727687]"
                            >
                                Request a Demo
                            </button>
                        </div>
                        <div className="flex text-md gap-x-[12px] text-[#424655]">{materialSvg} 1000+ Material requests created in FY23</div>
                    </div>
                    <div className="flex justify-end lg:h-[600px] sm:order-1">
                        <img
                            src={"/images/framemate.png"}
                            alt="booking image"
                            className="h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feature1;