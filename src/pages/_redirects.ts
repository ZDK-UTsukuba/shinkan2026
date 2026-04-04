import { getOrganizations } from '../lib/organizations';

const redirects: Record<string, string> = {};
const orgs = await getOrganizations();

for (const org of orgs) {
    if (org.old_id) {
        redirects[ `/orgs/${org.old_id}` ] = `/orgs/${org.id}`;
    }
}

const fileContent = Object.entries(redirects)
    .map(([oldPath, newPath]) => `${oldPath} ${newPath} 301`)
    .join("\n");

export async function GET() {
    return new Response(fileContent);
}

