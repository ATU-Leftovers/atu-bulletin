import { SupabaseClient, User } from "@supabase/supabase-js";
import { Database, Tables } from "../database.types";
import { mightFail } from "might-fail"

export async function getUserProfile(supabase: SupabaseClient<Database>, userId: User['id']): Promise<Tables<'profiles'> | null> {
    const [error, result] = await mightFail(await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()
    )

    if (error) {
        console.log("🔥 ~ getUserProfile ~ internal error:", error)
        return null
    }

    if (result.error) {
        console.log("🔥 ~ getUserProfile ~ error:", result.error)
        return null
    }

    return result.data
}