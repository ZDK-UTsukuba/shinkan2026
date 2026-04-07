import { z, defineCollection } from "astro:content";

const timetableCollection = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      title: z.string(),
      orgPageId: z.string().nullable(),
      startsAt: z.string().time(),
      endsAt: z.string().time(),
      credits: z.array(z.string()).optional(),
    })
  ),
});

export const collections = {
  timetable: timetableCollection,
};
