import { SupabaseClient } from "@supabase/supabase-js";
import { Database, Tables } from "../database.types";
import { mightFail } from "might-fail";

export async function getAllEvents(supabase: SupabaseClient<Database>): Promise<Tables<'events'>[] | null> {
    const [error, result] = await mightFail(await supabase
        .from('events')
        .select('*')
    )

    if (error) {
        console.log("🔥 ~ getAllEvents ~ internal error:", error)
        return null
    }

    if (result.error) {
        console.log("🔥 ~ getAllEvents ~ error:", result.error)
        return null
    }

    return result.data
}