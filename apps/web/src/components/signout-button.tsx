import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function SignoutButton({ className }: { className?: string }) {
    return (
        <form action="/auth/signout" method="post">
          <Button type="submit" className={cn(className)} variant="destructive" size="sm">
            Sign out
          </Button>
        </form>
    )
}