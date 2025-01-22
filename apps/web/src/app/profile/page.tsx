import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function Profile() {
    const supabase = await createClient()

    const {
        data: { user }
    } = await supabase.auth.getUser()

    if (!user) {
        redirect("/login")
    }

    const {
        data
    } = await supabase.from("events").select("*").match({
        created_by: user.id
    })

    return (
        <>
        <pre>{JSON.stringify(user, undefined, 2)}</pre>
        <h2>Hosted Events</h2>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
        </>
    )
}