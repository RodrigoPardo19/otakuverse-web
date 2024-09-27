import Header from '@/components/Header';
import ImageCard from '@/components/ImageCard';

const carousel = [
	'/images/itachi.jpeg',
	'/images/sukuna.jpeg',
	'/images/kagurabachi.jpeg',
	'/images/nefero.jpeg',
	'/images/kaneki.jpg',
	'/images/chrollo.jpg',
	'/images/berserk.jpg',
	'/images/levi.jpg',
	'/images/itachi.jpeg',
	'/images/sukuna.jpeg',
	'/images/kagurabachi.jpeg',
	'/images/nefero.jpeg',
	'/images/kaneki.jpg',
	'/images/chrollo.jpg',
	'/images/berserk.jpg',
	'/images/levi.jpg',
];

export default function Home() {
	return (
		<div className="relative overflow-hidden">
			<div className="relative mx-auto flex min-h-screen max-w-screen-2xl items-center justify-center">
				<div className="relative flex h-screen w-screen items-center justify-center">
					<div className="h-96 w-96 rounded-full bg-gradient-to-br from-white to-gray-600 blur-[250px]" />
					<div className="absolute flex flex-col items-center justify-center gap-8">
						<div className="relative flex flex-col items-center justify-center">
							<Header text="Otakuverse" />
							<p className="text-white">A platform for anime and manga reviews</p>
							<p className="text-xl font-semibold text-secondary">Soon</p>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute top-2/3 flex flex-col bg-black bg-opacity-60 py-8">
				<div className="flex animate-infinite-scroll flex-nowrap gap-4">
					{carousel.map((el, index) => (
						<ImageCard key={`${index}${el}`} src={el} />
					))}
				</div>
			</div>
		</div>
	);
}
