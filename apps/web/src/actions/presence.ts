import { PresenceOrganization } from "@/types/presence"

export async function getOrganizationList(): Promise<PresenceOrganization[]> {
    const data = await fetch('https://api.presence.io/atu/v1/organizations/')

    return (await data.json())
}

export async function getOrganizationDetails(uri: string) {
    const data = await fetch(`https://api.presence.io/atu/v1/organizations//${uri}`)

    return (await data.json())
}

export async function getOrganizationEvents(uri: string) {
    const data = await fetch(`https://api.presence.io/atu/v1/organizations/events/${uri}`)

    return (await data.json())
}