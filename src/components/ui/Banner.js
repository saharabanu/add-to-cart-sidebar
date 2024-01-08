import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";


const Banner = () => {
    return (
        <div className="flex justify-center items-center pt-7">
           <div className="space-y-3">
            <h2 className="text-red-500 uppercase text-2xl font-semibold text-center">Chicken crisper <span className="border rounded-full h-4 ring-1 ring-red-500">r</span> combos</h2>

            <div>
                <ul className="flex justify-center items-center capitalize space-x-2">
                    <li className="text-red-500 hover:text-black">
                        <Link href="/"> Menu</Link>
                    </li>
                    <li className="hover:text-red-600 duration-300 delay-150 transition-all">
                        <Link href="/"><span className="flex items-center"><IoIosArrowForward />chicken</span></Link>
                    </li>
                    <li className="hover:text-red-600 duration-300 delay-150 transition-all">
                        <Link href="/">crisper</Link>
                    </li>
                    <li className="hover:text-red-600 duration-300 delay-150 transition-all">
                        <Link href="/">combos</Link>
                    </li>
                </ul>
            </div>
            <p className="font-medium">Find everything from our Big Mouth Burgers, our always sizzling, Full-on-Fajitas and our famous Chicken Crispers</p>
           </div>
        </div>
    );
};

export default Banner;