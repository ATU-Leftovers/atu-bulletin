import { getOrganizationDetails, getOrganizationEvents } from "@/actions/presence"

interface Props {
    params: Promise<{ uri: string }>
}

export default async function OrganizationDetailsPage({ params }: Props) {
    const uri = (await params).uri

    const organization = await getOrganizationDetails(uri)
    const events = await getOrganizationEvents(uri)

    return <>
        <h1>{JSON.stringify(organization, undefined, 2)}</h1>

        <h2 className="text-3xl font-bold">Events</h2>
        <p>{JSON.stringify(events, undefined, 2)}</p>
    </>
}