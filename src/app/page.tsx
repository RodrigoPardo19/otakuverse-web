import Header from "@/components/Header";
import ImageCard from "@/components/ImageCard";

const carousel = [
	"/images/itachi.jpeg",
	"/images/sukuna.jpeg",
	"/images/kagurabachi.jpeg",
	"/images/nefero.jpeg",
	"/images/kaneki.jpg",
	"/images/chrollo.jpg",
	"/images/berserk.jpg",
	"/images/levi.jpg",
	"/images/itachi.jpeg",
	"/images/sukuna.jpeg",
	"/images/kagurabachi.jpeg",
	"/images/nefero.jpeg",
	"/images/kaneki.jpg",
	"/images/chrollo.jpg",
	"/images/berserk.jpg",
	"/images/levi.jpg",
];

export default function Home() {
	return (
		<div className="relative overflow-hidden">
			<div className="max-w-screen-2xl min-h-screen mx-auto flex justify-center items-center relative">
				<div className="relative w-screen h-screen flex justify-center items-center">
					<div className="w-96 h-96 bg-gradient-to-br from-white to-gray-600 rounded-full blur-[250px]"></div>
					<div className="absolute flex flex-col justify-center items-center gap-8">
						<div className=" relative flex flex-col justify-center items-center">
							<Header text="Otakuverse"/>
							<p className="text-white">A platform for anime and manga reviews</p>
							<p className="text-secondary font-semibold text-xl">Soon</p>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute top-2/3 flex flex-col bg-black bg-opacity-60 py-8">
				<div className="flex gap-4 flex-nowrap animate-infinite-scroll">
					{
						carousel.map((el, index) => (
							<ImageCard key={`${index}${el}`} src={el}/>
						))
					}
				</div>
			</div>
		</div>
	);
}


