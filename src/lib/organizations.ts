import type { Organization } from "../types";

const organizationRequests = new Map<string, Promise<Organization[]>>();

export const getOrganizations = async (staticDataUrl: string = import.meta.env.STATIC_DATA_URL) => {
  let request = organizationRequests.get(staticDataUrl);
  if (!request) {
    request = fetch(`${staticDataUrl}/organizations.json`)
      .then((res) => res.json())
      .then((data) => data as Organization[])
      .catch((error) => {
        organizationRequests.delete(staticDataUrl);
        throw error;
      });
    organizationRequests.set(staticDataUrl, request);
  }

  return request;
};
