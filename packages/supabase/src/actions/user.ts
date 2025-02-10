import { SupabaseClient, User } from "@supabase/supabase-js";
import { Database } from "../database.types";
import { mightFail } from "might-fail"

export async function getUser(supabase: SupabaseClient<Database>): Promise<User | null> {
    const [error, result] = await mightFail(await supabase.auth.getUser())

    if (error) {
        console.log("🔥 ~ getUser ~ internal error:", error)
        return null
    }

    if (result.error) {
        console.log("🔥 ~ getUser ~ user error:", result.error)
        return null
    }

    return result.data.user
}