"use client"

import type { Provider } from "@supabase/supabase-js";
import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { oAuthSignIn } from "@/actions/auth";

type OAuthProvider = {
    type: Provider,
    displayName: string,
    icon?: JSX.Element
}

export function OAuthButtons() {
    const providers: OAuthProvider[] = [
        {
            type: "github",
            displayName: "GitHub",
            icon: <Github className="size-5" />
        }
    ]

    return <div>
        {providers.map((provider) => (
            <Button key={provider.type} variant="default" onClick={async () => {
                await oAuthSignIn(provider.type)
            }} className="w-full">
                {provider.icon}
                Log in with {provider.displayName}
            </Button>
        ))}
    </div>
}