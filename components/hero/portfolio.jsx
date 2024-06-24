import Image from "next/image";

const Portfolio = () => {

    const work = [
        { name: "Sitenote", href: "/" },
        { name: "Wheatsville", href: "/" },
        { name: "Shilp", href: "/" },
        { name: "Fractionally", href: "/" },
        { name: "ShilpUI", href: "/" },
    ]

    return (
        <div className="px-5 lg:px-10 py-5 bg-[#F0F1EA] min-h-[100vh] tracking-tight text-[#333]">
            <header className="grid lg:grid-cols-5 items-center">
                <div className="col-span-1 font-[500] text-2xl">
                    <div>Jenil</div>
                    <div>Thummar</div>
                </div>
                <div className="col-span-3 hidden lg:flex justify-center gap-x-[36px] items-center">
                    <div className="cursor-pointer font-[500] text-2xl">Work</div>
                    <div className="cursor-pointer font-[500] text-2xl">About</div>
                    <div className="cursor-pointer font-[500] text-2xl">Blog</div>
                    <div className="cursor-pointer font-[500] text-2xl">Explorations</div>
                    <div className="cursor-pointer font-[500] text-2xl">Socials</div>
                </div>
                <div className="col-span-1 hidden lg:flex justify-end font-[500] text-2xl">
                    <button
                        style={{ boxShadow: "0px 5px 20px 0px rgba(26, 26, 26, 0.04)" }}
                        className="text-2xl font-[500] bg-[#1A1A1A] text-white py-[12px] px-[24px] rounded-[12px]">Get in touch</button>
                </div>
            </header>
            <div className="grid lg:grid-cols-5 mt-[100px]">
                <div className="lg:order-1 order-last col-span-1 font-[500] text-2xl">
                    <div className="mt-20 lg:mt-0 mb-10 lg:mb-[96px]">Product designer.</div>
                    <div>
                        <div className="mb-[36px]">Recent work</div>
                        {work.map((item, index) => (
                            <div key={index} className="flex">
                                <div className="border-b cursor-pointer border-[#333] mb-[24px]">{item.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:order-2 order-2 col-span-3 flex justify-center font-[500] text-2xl">
                    <div className="lg:max-w-[550px]">
                        <div>Hello! 👋 I'm Jenil Thummar, but you can call me Jenu :)</div>
                        <div className="mt-[24px]">
                            I&apos;m a product designer by passion, and I absolutely love solving problems—it&apos;s something I could do all day, honestly. By combining my design skills with my problem-solving, we at
                            <a href="https://shilp.co" target="_blank" className="bg-[#1A7EFF] text-white rounded mx-2 px-2">
                                <span className="mr-[4px] font-extrabold">&#x2197;</span>
                                <span>Shilp</span>
                            </a>
                            create beautiful and functional user interfaces (UI) and user experiences (UX).
                        </div>
                        <div className="mt-[24px]">
                            Crafting these thoughtful interfaces does take time, given the creative process involved, but the end results are always worth it.
                        </div>
                        <div className="mt-[24px] flex">
                            <div className="border-b border-[#333] cursor-pointer">Read more about me.</div>
                        </div>
                    </div>
                </div>
                <div className="lg:order-3 order-first col-span-1 flex flex-col lg:items-end mb-10 lg:mb-0">
                    <div className="mb-5 lg:mb-[105px]">
                        <Image
                            src={"/images/photo.png"}
                            alt="photo"
                            height={200}
                            width={200}
                        />
                    </div>
                    <div className="text-2xl lg:max-w-[200px] font-[500]">
                        I love to watch
                        movies & shows.
                    </div>
                    <div className="mt-[24px] text-2xl lg:max-w-[200px] font-[500]">
                        I am also on <span className=" bg-[#1A7EFF] px-2 rounded-[5px] text-white"> <span className="mr-[4px] font-extrabold">&#x2197;</span>letterboxd.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;