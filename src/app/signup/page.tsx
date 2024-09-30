import ImageCard from '@/components/ImageCard';
import SignUpForm from '@/shared/components/SignUpForm';
import { koulen } from '@/utils/fonts';

export default function Signup() {
	return (
		<main className="relative z-0 mt-8 flex flex-col items-center justify-center gap-8 md:mt-0 md:flex-row">
			<div className="flex w-full flex-col md:basis-3/5">
				<h1 className={`${koulen.className} text-6xl text-primary md:text-8xl`}>
					Join to Otakuverse and become part of the community!
				</h1>
				<div className="relative my-8 flex h-80 gap-2">
					<ImageCard
						src="/images/goku.jpeg"
						width={210}
						height={300}
						className="absolute left-1/3 -translate-x-1/3 -rotate-12 shadow-2xl"
					/>
					<ImageCard
						src="/images/kurapika.jpeg"
						width={210}
						height={300}
						className="absolute left-1/2 z-10 -translate-x-1/2 shadow-2xl"
					/>
					<ImageCard
						src="/images/kakashi_hatake.jpeg"
						width={210}
						height={300}
						className="absolute right-1/3 translate-x-1/3 rotate-12 shadow-2xl"
					/>
				</div>
			</div>
			<SignUpForm />
		</main>
	);
}
