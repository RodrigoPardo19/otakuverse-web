export default function Home() {
	return (
		<div className="max-w-screen-2xl min-h-screen mx-auto flex justify-center items-center relative">
			<div className="relative w-screen h-screen flex justify-center items-center">
				<div className="w-96 h-96 bg-gradient-to-br from-white to-gray-600 rounded-full blur-[250px]"></div>
				<div className="absolute flex flex-col justify-center items-center">
					<h1 className="text-primary font-bold text-6xl">Otakuverse</h1>
					<p className="text-white">A platform for anime and manga reviews</p>
					<p className="text-secondary font-semibold text-xl">Soon</p>
				</div>
			</div>
		</div>
	);
}


