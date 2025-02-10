import React from 'react'

import type { Provider } from '@supabase/supabase-js'
import { Button, Text } from 'react-native'

interface AuthProvider {
    type: Provider,
    name: string
}

const providers: AuthProvider[] = [
    {
        type: "github",
        name: "Github"
    }
]

type ProviderButtonsProps = {
    handler: (provider: Provider) => void
}

export function ProviderButtons({ handler }: ProviderButtonsProps) {
    return (
        <>
            {providers.map((provider) => <ProviderButton key={provider.type} handler={handler} provider={provider} />)}
        </>
    )
}

type ProviderButtonProps = {
    handler: ProviderButtonsProps['handler']
    provider: AuthProvider
}

function ProviderButton({ provider, handler }: ProviderButtonProps) {
    return (
        <Button title={`Sign in with ${provider.name}`} onPress={() => handler(provider.type)} />
    )
}