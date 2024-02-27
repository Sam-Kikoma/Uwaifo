import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import video4 from "../assets/video4.mp4";

const Portfolio = () => {
	const [autoplay, setAutoplay] = useState(true);

	useEffect(() => {
		const handleTouchStart = () => {
			setAutoplay(false);
		};

		const handleTouchEnd = () => {
			setAutoplay(true);
		};

		document.addEventListener("touchstart", handleTouchStart);
		document.addEventListener("touchend", handleTouchEnd);

		return () => {
			document.removeEventListener("touchstart", handleTouchStart);
			document.removeEventListener("touchend", handleTouchEnd);
		};
	}, []);

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: autoplay,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					arrows: false,
				},
			},
		],
	};

	return (
		<div className="w-full flex justify-center my-8 h-full p-4" id="portfolio">
			<div className="max-w-screen-lg w-full">
				<h2 className=" text-white text-center text-2xl md:text-4xl mb-8 portfolio">Portfolio</h2>
				<Slider {...settings} className="w-full">
					<div className="flex justify-center items-center h-screen">
						<video controls className="w-full h-full" style={{ width: "100%", height: "100%" }}>
							<source src={video1} type="video/mp4" />
						</video>
					</div>
					<div className="flex justify-center items-center h-screen">
						<video controls className="w-full h-full" style={{ width: "100%", height: "100%" }}>
							<source src={video2} type="video/mp4" />
						</video>
					</div>
					<div className="flex justify-center items-center h-screen">
						<video controls className="w-full h-full" style={{ width: "100%", height: "100%" }}>
							<source src={video3} type="video/mp4" />
						</video>
					</div>
					<div className="flex justify-center items-center h-screen">
						<video controls className="w-full h-full" style={{ width: "100%", height: "100%" }}>
							<source src={video4} type="video/mp4" />
						</video>
					</div>
				</Slider>
			</div>
		</div>
	);
};

export default Portfolio;
