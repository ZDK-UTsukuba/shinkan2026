import type { Organization } from "../types";
export const getOrganizations = async (staticDataUrl: string = import.meta.env.STATIC_DATA_URL) => {
  const organizationsUrl = `${staticDataUrl}/organizations.json`;
  const res = await fetch(organizationsUrl);
  const data = await res.json();
  return data as Organization[];
};
