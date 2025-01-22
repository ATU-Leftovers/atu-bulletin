import { createClient } from "@/lib/supabase/server";

export default async function EventsPage() {
    const supabase = await createClient()

    const { data: events } = await supabase.from("events").select()

    return (
        <div>
            <pre>{JSON.stringify(events, null, 2)}</pre>
        </div>
    )
}