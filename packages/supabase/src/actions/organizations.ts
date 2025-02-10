import { SupabaseClient } from "@supabase/supabase-js";
import { Database, Tables, Enums } from "../database.types";
import { mightFail } from "might-fail";

export async function getOrganizations(supabase: SupabaseClient<Database>) {
    const members = await getOrganizationMembers(supabase)
    const news = await getOrganizationNews(supabase)

    if (!members || !news) return []

    const orgsMap = new Map<string, {
        id: string,
        name: string,
        created_at: string,
        description: string,
        members: Array<{
            membership: Enums<'OrganizationMembership'> | null,
            profile: Tables<'profiles'>
        }>
        news: Tables<'news'>[]
    }>()

    for (const member of members) {
        const orgId = member.organization_id
        if (!orgsMap.has(orgId)) {
            orgsMap.set(orgId, {
                id: orgId,
                name: member.organizations.name,
                created_at: member.organizations.created_at,
                description: member.organizations.description,
                members: [],
                news: []
            })
        }
        orgsMap.get(orgId)!.members.push({
            membership: member.membership,
            profile: member.profiles
        })
    }

    for (const article of news) {
        const orgId = article.organization_id
        if (!orgsMap.has(orgId)) {
            orgsMap.set(orgId, {
                id: orgId,
                name: article.organizations.name,
                created_at: article.organizations.created_at,
                description: article.organizations.description,
                members: [],
                news: []
            })
        }
        orgsMap.get(orgId)!.news.push(article.news)
    }

    return Array.from(orgsMap.values())
}

async function getOrganizationMembers(supabase: SupabaseClient<Database>) {
    const [error, result] = await mightFail(await supabase
        .from('organization_members')
        .select('*, profiles (*), organizations (*)')
    )

    if (error) {
        console.log("🔥 ~ getOrganizationMembers ~ internal error:", error)
        return null
    }

    if (result.error) {
        console.log("🔥 ~ getOrganizationMembers ~ error:", result.error)
        return null
    }

    return result.data
}

async function getOrganizationNews(supabase: SupabaseClient<Database>) {
    const [error, result] = await mightFail(await supabase
        .from('organization_news')
        .select('*, news (*), organizations (*)')
    )

    if (error) {
        console.log("🔥 ~ getOrganizationNews ~ internal error:", error)
        return null
    }

    if (result.error) {
        console.log("🔥 ~ getOrganizationNews ~ error:", result.error)
        return null
    }

    return result.data
}