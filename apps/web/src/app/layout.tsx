import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { cn, getInitials } from "@/lib/utils";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { PinIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import SignoutButton from "@/components/signout-button";
import LoginButton from "@/components/login-button";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ATU Bulletin",
  description: "An online bulletin system for Arkansas Tech University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn('antialiased font-rubik', rubik.variable)}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

async function Header() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="w-full px-4 lg:px-6 h-14 flex items-center">
      <Link href="/" className="flex items-center justify-center">
        <span className="sr-only">ATU Bulletin</span>
        <PinIcon />
        <span className="ml-2 text-lg font-semibold">ATU Bulletin</span>
      </Link>

      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/events">Events</Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/organizations">Organizations</Link>
      </nav>

      <div className="ml-auto flex items-center space-x-4">
        {user !== null && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.user_metadata.avatar_url} alt={user.user_metadata.full_name} />
                  <AvatarFallback>{getInitials(user.user_metadata.full_name)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user.user_metadata.full_name}</p>
                  <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">My Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <SignoutButton className="w-full" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {user === null && (
          <LoginButton />
        )}
      </div>
    </header>
  )
}