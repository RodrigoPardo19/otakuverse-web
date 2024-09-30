import { koulen } from '@/utils/fonts';
import { Button, Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import Link from 'next/link';
import Divider from '@/shared/components/Divider';

const menu = [
	{
		name: 'Anime',
		paths: [
			{ name: 'Top All Time', url: '' },
			{ name: 'Top Airing', url: '' },
			{ name: 'Top Uncoming', url: '' },
			{ name: 'Top by Seasons', url: '' },
			{ name: 'Top Episodes', url: '' },
		],
	},
	{
		name: 'Manga',
		paths: [
			{ name: 'Top All Time', url: '' },
			{ name: 'Top Airing', url: '' },
			{ name: 'Top Uncoming', url: '' },
			{ name: 'Top by Seasons', url: '' },
			{ name: 'Top Episodes', url: '' },
		],
	},
	{
		name: 'News',
		paths: [{ name: 'Top All Time', url: '' }],
	},
	{
		name: 'Your Lists',
		paths: [{ name: 'Top All Time', url: '' }],
	},
];

export default function NavBar() {
	return (
		<nav className="flex justify-between border-b border-slate-600 py-4">
			<ul className="flex gap-8">
				{menu.map((el) => (
					<li key={el.name}>
						<Popover className="relative">
							<PopoverButton
								className={`${koulen.className} text-lg focus:outline-none data-[active]:text-primary data-[hover]:text-primary`}>
								{el.name}
							</PopoverButton>
							<PopoverPanel
								transition
								anchor="bottom"
								className="flex flex-col divide-y divide-border rounded border border-border bg-background px-4 transition duration-200 ease-in-out">
								{el.paths.map((path) => (
									<Link key={path.name} href={path.url} className="p-4">
										{path.name}
									</Link>
								))}
							</PopoverPanel>
						</Popover>
					</li>
				))}
			</ul>
			<div className="flex gap-4">
				<Link href="/login">Login</Link>
				<Divider position="vertical" />
				<Link href="/signup">Sign up</Link>
			</div>
		</nav>
	);
}
