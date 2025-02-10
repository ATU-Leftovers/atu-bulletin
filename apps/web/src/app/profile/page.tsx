import { createClientOnServer } from "@/lib/supabase/server"
import { getUser, getUserProfile } from "@the-leftovers/supabase"
import { redirect } from "next/navigation";

export default async function ProfilePage() {
    const supabase = await createClientOnServer();
    const user = await getUser(supabase)

    if (!user) {
        return redirect('/login')
    }

    const profile = await getUserProfile(supabase, user.id)
    
    return (
        <div>
            {JSON.stringify(user, undefined, 2)}
            {JSON.stringify(profile, undefined, 2)}
        </div>
    )
}