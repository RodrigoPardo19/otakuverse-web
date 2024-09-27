import {koulen} from "@/utils/fonts";

interface Props {
	text: string
}

export default function Header({text}: Props) {
	return (
		<h1 className={`${koulen.className} text-primary font-bold text-6xl`}>{text}</h1>
	)
}
