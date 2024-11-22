import { siteMetaData, viewportData } from "@/lib/config/siteConfig";
import { fonts } from "@/styles/tailwind/fonts";
import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import "@/styles/customGlobal.css";

export const metadata: Metadata = siteMetaData;
export const viewport: Viewport = viewportData;

import { RootProvider } from "@/components/Providers/root-provider";
import { FeatureFlag } from "@/components/utils/featureFlag";

import { SimpleFooter } from "@/components/navigation/footer";
import { SiteHeader } from "@/components/navigation/site-header";
// components
import { ModeSelector } from "@/components/ui/themeSelector";
import { cn } from "@/lib/utils";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn("page-transition-easing font-sans", fonts)}>
				<RootProvider>
					<div data-wrapper="" className="">
						<div className="mx-auto flex min-h-screen w-full flex-col border-border/40 min-[1800px]:max-w-[1536px] min-[1800px]:border-x dark:border-border">
							<SiteHeader />
							<main className="flex-1">{children}</main>
							<SimpleFooter className="mt-auto" />
						</div>
					</div>
					<FeatureFlag featureFlag={["NEXT_THEME", "THEME_BUTTON"]}>
						<ModeSelector className="fixed right-2 bottom-2 z-[1005] " />
					</FeatureFlag>
				</RootProvider>
			</body>
		</html>
	);
}
