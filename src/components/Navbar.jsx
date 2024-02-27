import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const navToggle = () => {
		setNav(!nav);
	};

	return (
		<nav className="h-20 max-w-[1240px] mx-auto flex justify-between p-6 text-white text-xl">
			<h1 className="tracking-widest">KMG</h1>
			<ul className="cursor-pointer hidden md:flex">
				<li className="px-8 hover:underline">
					<a href="#hero">HOME</a>
				</li>
				<li className="px-8 hover:underline">
					<a href="#portfolio">PORTFOLIO</a>
				</li>
				<li className="px-8 hover:underline">
					<a href="#about">ABOUT</a>
				</li>
				<li className="px-8 hover:underline">
					<a href="#contact">CONTACT</a>
				</li>
			</ul>
			<div className="md:hidden" onClick={navToggle}>
				{nav ? <IoMdClose /> : <GiHamburgerMenu />}
			</div>
			<div
				className={
					nav
						? "fixed left-0 top-0 w-[80%] h-full border-r border-r-gray-900 bg-[#14213d] ease-in-out duration-1000 md:hidden z-50"
						: "fixed left-[-100%] ease-in-out duration-1000"
				}
			>
				<ul className="p-8 text-center divide-y-2">
					<li className="py-4">
						<a href="#hero" onClick={navToggle}>
							HOME
						</a>
					</li>
					<li className="py-4">
						<a href="#portfolio" onClick={navToggle}>
							PORTFOLIO
						</a>
					</li>
					<li className="py-4">
						<a href="#about" onClick={navToggle}>
							ABOUT
						</a>
					</li>
					<li className="py-4">
						<a href="#contact" onClick={navToggle}>
							CONTACT
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
