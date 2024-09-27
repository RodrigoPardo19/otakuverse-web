import Image from "next/image";

interface Props {
	src: string;
}

export default function ImageCard({ src }: Props) {
	return (
		<div className="bg-background border border-gray-600 rounded-lg overflow-hidden min-w-[300px] min-h-[200px]">
			<Image className="object-cover" src={src} alt="itachi" width={300} height={200} />
		</div>
	);
}
