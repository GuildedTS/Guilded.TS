import { MouseEventHandler, ReactNode } from 'react';
import { HiOutlineExternalLink } from 'react-icons/hi';

export default function NavExternalLink({
	children,
	href,
	onClick,
}: {
	children: ReactNode;
	href: string;
	onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="text-white rounded-md hover:bg-guilded-grey-dark py-2 px-3 text-sm font-semibold flex space-x-2"
			onClick={onClick}
		>
			<span>{children}</span>
			<HiOutlineExternalLink className="h-5 w-5" />
		</a>
	);
}
