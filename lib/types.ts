export interface Anchor {
	label: string
	href: string
}

export interface ProseNavLink extends Anchor {
	direction: 'previous' | 'next'
}

export interface MetaLink extends Anchor {
	isExternal?: boolean
}

export type NavItems = Array<Anchor>
