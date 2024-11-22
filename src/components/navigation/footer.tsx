import { footerData, simpleFooterData } from "@/lib/data/footer-data";
export function simpleFooter() {
	return (
		<footer className="border-t border-border/40 py-6 dark:border-border md:px-8 md:py-0">
			<div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
				<p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
					{simpleFooterData?.texts.map((item, index) => (
						<>
							{item.pretext}{" "}
							<a
								key={index}
								href={item.url}
								target="_blank"
								rel="noreferrer"
								className="font-medium underline underline-offset-4"
							>
								{item.label}
							</a>
							.
						</>
					))}
				</p>
			</div>
		</footer>
	);
}
