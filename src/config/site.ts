export interface NavItem {
	href: string;
	label: string;
}

export interface Social {
	label: string;
	href: string;
}

export interface SiteConfig {
	name: string;
	description: string;
	navItems: NavItem[];
	socials: Social[];
}

export const siteConfig: SiteConfig = {
	name: "Sonoran IT Solutions",
	description: "Expert IT Consulting & Managed Services for Phoenix Businesses",
	navItems: [
		{ label: "Home", href: "/" },
		{ label: "About", href: "/about" },
		{ label: "Services", href: "/services" },
	],
	socials: [
		{
			label: "GitHub",
			href: "https://github.com/Sonoran-IT-Solutions",
		},
	],
};
