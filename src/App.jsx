import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
	return (
		<>
			<header id="header" className="bg-cover">
				<Navbar />
				<Hero />
			</header>
			<Portfolio />
			<About />
			<Contact />
		</>
	);
};

export default App;
