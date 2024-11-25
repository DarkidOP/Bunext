import { ArrowRightLeft, Github, Plus, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { TransitionLink } from "@/components/utils/TransitionLink";
import {
	AppWindow,
	Flag,
	Layers,
	Moon,
	Palette,
	Search,
	Shapes,
	ShieldCheck,
	SlidersHorizontal,
	Type,
	Wand2,
	Zap,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
	const features = [
		{
			title: "Next.js 15 App Directory",
			icon: AppWindow,
			description:
				"Utilizing the latest Next.js features for optimal performance.",
		},
		{
			title: "Tailwind CSS",
			icon: Palette,
			description: "Utility-first CSS framework for rapid UI development.",
		},
		{
			title: "Shadcn Components",
			icon: Layers,
			description:
				"Beautiful and accessible components built with Radix UI and Tailwind CSS.",
		},
		{
			title: "Custom Font Optimization",
			icon: Type,
			description: "Using Next Font for optimized font loading and display.",
		},
		{
			title: "Lucide React Icons",
			icon: Zap,
			description: "Beautiful, consistent, and customizable icons.",
		},
		{
			title: "Next Theme Provider",
			icon: Moon,
			description: "Easy implementation of dark and light mode.",
		},
		{
			title: "Metadata Generator",
			icon: Search,
			description: "SEO optimization including apple-touch-icon generation.",
		},
		{
			title: "Feature Flags",
			icon: Flag,
			description: "Implement and manage feature toggles with ease.",
		},
		{
			title: "Zod Validation",
			icon: ShieldCheck,
			description:
				"Runtime type checking and validation for JavaScript and TypeScript.",
		},
		{
			title: "Page Transitions",
			icon: ArrowRightLeft,
			description:
				"Per-link page transitions without any additional libraries.",
		},
		{
			title: "Fluid Tailwind",
			icon: Wand2,
			description: "Easier responsive design with fluid utilities.",
		},
		{
			title: "Biome",
			icon: SlidersHorizontal,
			description:
				"Modern linting and formatting for JavaScript and TypeScript.",
		},
		{
			title: "Utility Functions",
			icon: SlidersHorizontal,
			description:
				"QR code generation, string shortening, unique code generation, and more.",
		},
	];

	return (
		<div className="container mx-auto px-4 py-8">
			<section className="mb-12 text-center">
				<h1 className="mb-4 text-5xl font-clash font-medium tracking-tight">
					Next.js 15 Bun Starter Template
				</h1>
				<p className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl">
					Jumpstart your Next.js projects with this feature-packed starter
					template. Built with performance, accessibility, and developer
					experience in mind.
				</p>
				<Button size="sm" asChild>
					<TransitionLink href="/pagetr" className="flex items-center gap-2">
						<ArrowRightLeft className="h-4 w-4" />
						<span className="">Page Transition</span>
						{/* <span className="hidden sm:inline">Page Transition</span> */}
					</TransitionLink>
				</Button>
			</section>
			<section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{features.map((feature, index) => (
					<Card key={index}>
						<CardHeader>
							<CardTitle className="flex items-center gap-2">
								<feature.icon className="h-8 w-8" />
								{feature.title}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription>{feature.description}</CardDescription>
						</CardContent>
					</Card>
				))}
				<Card className="text-foreground/30">
					<CardHeader></CardHeader>
					<CardContent className="text-center">
						<div className="flex items-center justify-center gap-2 -ml-3">
							<Plus className="h-8 w-8" />
							<h1 className="text-2xl font-bold">Loading?..</h1>
						</div>
						<CardDescription className="text-foreground/30">
							More features coming soon... *probably
						</CardDescription>
					</CardContent>
				</Card>
			</section>
		</div>
	);
}
