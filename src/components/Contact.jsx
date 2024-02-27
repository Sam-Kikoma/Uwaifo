const Contact = () => {
	return (
		<form
			action=""
			className="max-w-[600px] text-white md:grid grid-rows-4 grid-cols-2 h-2/4 m-auto flex flex-col p-6 gap-4"
			id="contact"
		>
			<h2 className="col-span-2 row-span-1 m-auto text-2xl md:text-4xl contact">Contact</h2>
			<label htmlFor="name" className="col-span-1 row-span-1 text-xl md:mb-2">
				Name
			</label>
			<input type="text" name="name" id="name" className="col-span-1 row-span-1 row-start-3 h-10" />
			<label htmlFor="email" className="col-span-1 row-span-1 text-xl ">
				Email
			</label>
			<input type="email" name="email" id="email" className="col-span-1 row-span-1 row-start-3 h-10" />
			<label htmlFor="message" className="text-xl ">
				Your message
			</label>
			<textarea name="message" id="message" className="row-start-5 col-span-2 md:h-44 mb-4 h-20"></textarea>
			<button className="row-start-6 col-span-2 mx-auto justify-center border-white border-2 w-[100px] p-2 rounded-md focus:border-blue-400 hover:bg-teal-400">
				SUBMIT
			</button>
		</form>
	);
};

export default Contact;
