globalThis.process ??= {}; globalThis.process.env ??= {};
const getOrganizations = async (staticDataUrl = process.env.STATIC_DATA_URL) => {
  const organizationsUrl = `${staticDataUrl}/organizations.json`;
  const res = await fetch(organizationsUrl);
  const data = await res.json();
  return data;
};

export { getOrganizations as g };
