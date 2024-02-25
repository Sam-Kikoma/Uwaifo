import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const navToggle = () => {
		setNav(!nav);
	};

	return (
		<nav className="h-20 max-w-[1240px] mx-auto flex justify-between p-8 text-slate-300">
			<h1>LOGO</h1>
			<ul className="cursor-pointer hidden md:flex">
				<li className="px-8">HOME</li>
				<li className="px-8">PORTFOLIO</li>
				<li className="px-8">ABOUT</li>
				<li className="px-8">CONTACT</li>
			</ul>
			<div className="md:hidden" onClick={navToggle}>
				{nav ? <IoMdClose /> : <GiHamburgerMenu />}
			</div>
			<div
				className={
					nav
						? "fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-1000 md:hidden"
						: "fixed left-[-100%] ease-in-out duration-1000"
				}
			>
				<ul className="p-8 text-center">
					<li className="py-4 border-b-[3px]">HOME</li>
					<li className="py-4 border-b-[3px]">PORTFOLIO</li>
					<li className="py-4 border-b-[3px]">ABOUT</li>
					<li className="py-4 ">CONTACT</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
