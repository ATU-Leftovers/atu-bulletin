import { getOrganizationList } from "@/actions/presence";
import Link from "next/link";

export default async function OrganizationsPage() {
    const organizations = await getOrganizationList()

    return (
        <ul>
            {organizations.map((org) => (
                <li key={org.uri}>
                    <Link href={`/organizations/${org.uri}`}>{org.name}</Link>
                </li>
            ))}
        </ul>
    )
}