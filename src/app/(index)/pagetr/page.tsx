import { AppWindow, ArrowRightLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

import Link from "next/link";
import { TransitionLink } from "@/components/utils/TransitionLink";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link className="flex items-center space-x-2" href="/">
              <AppWindow className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">
                Next.js 15 Bun Starter
              </span>
            </Link>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 flex flex-col items-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Transition Test page
        </h1>
        <div className="text-center mb-8">
          <div className="mb-4">
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              to edit the transion duration go to{" "}
            </p>
            <code>src/components/utils/TransitionLink.tsx</code>
          </div>
          <div>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground ">
              to edit the transion styling go to{" "}
            </p>
            <code>src/styles/customGlobal.css</code>
          </div>
        </div>

        <Button size="sm" asChild>
          <TransitionLink href="/" className="flex items-center gap-2">
            <ArrowRightLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Home</span>
          </TransitionLink>
        </Button>
      </main>
    </div>
  );
}