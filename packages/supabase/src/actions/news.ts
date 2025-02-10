import { SupabaseClient } from "@supabase/supabase-js";
import { Database, Tables } from "../database.types";
import { mightFail } from "might-fail";

export async function getAllNews(supabase: SupabaseClient<Database>): Promise<Tables<'news'>[] | null> {
    const [error, result] = await mightFail(await supabase
        .from('news')
        .select('*')
    )

    if (error) {
        console.log("🔥 ~ getAllNews ~ internal error:", error)
        return null
    }

    if (result.error) {
        console.log("🔥 ~ getAllNews ~ error:", result.error)
        return null
    }

    return result.data
}