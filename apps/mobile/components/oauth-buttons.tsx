import * as React from 'react'

import type { Provider } from "@supabase/supabase-js";
import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

interface IOAuthProvider {
    type: Provider,
    displayName: string,
    icon?: JSX.Element
}

const providers: IOAuthProvider[] = [
    {
        type: "github",
        displayName: "GitHub",
        icon: <Github className="size-5" />
    }
]

export function OAuthButtons({ signInWithProvider }) {
    return (
        <>
            {providers.map((provider) => (
                <Button key={provider.type} onPress={() => signInWithProvider(provider.type)}>
                    <Text>Sign in with {provider.displayName}</Text>
                </Button>
            ))}
        </>
    )
}