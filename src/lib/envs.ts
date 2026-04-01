const staticDataUrl = import.meta.env.STATIC_DATA_URL;

if (!staticDataUrl) {
  throw new Error("STATIC_DATA_URL is not defined in the environment variables.");
}

export const imageUrl = (path: string) => `${staticDataUrl}/${path}`;
