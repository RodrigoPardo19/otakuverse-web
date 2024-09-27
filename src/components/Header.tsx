import { koulen } from '@/utils/fonts';

interface Props {
	text: string;
}

export default function Header({ text }: Props) {
	return <h1 className={`${koulen.className} text-6xl font-bold text-primary`}>{text}</h1>;
}
