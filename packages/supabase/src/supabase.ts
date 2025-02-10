import { createClient as _createClient, SupabaseClientOptions } from "@supabase/supabase-js";
import { Database } from "./database.types";

type SupabaseEnv = {
    URL: string,
    AnonKey: string,
}

export function createClient(config: SupabaseEnv & SupabaseClientOptions<"public">) {
    return _createClient<Database>(
        config.URL,
        config.AnonKey,
        {
            ...config
        }
    )
}