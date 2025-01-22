"use server"

import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import type { Provider } from "@supabase/supabase-js"

export async function oAuthSignIn(provider: Provider) {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
            redirectTo: "http://localhost:3000/auth/callback"
        }
    })

    if (error) {
        console.error(error)
    }

    if (data.url) {
        redirect(data.url)
    }
}