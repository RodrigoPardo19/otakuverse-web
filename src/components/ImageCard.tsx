import Image from 'next/image';

interface Props {
	src: string;
}

export default function ImageCard({ src }: Props) {
	return (
		<div className="min-h-[200px] min-w-[300px] overflow-hidden rounded-lg border border-gray-600 bg-background">
			<Image className="object-cover" src={src} alt="itachi" width={300} height={200} />
		</div>
	);
}
