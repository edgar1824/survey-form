import * as z from "zod";

export const surveySchema = z.object({
  name: z.string()?.min(1, "Name is required"),
  select: z.string()?.min(1, "Select is required"),
  type: z.enum(["per-user", "per-contributor"]),
  date: z.date().min(new Date(), "Date is required"),
});

export type SurveySchema = z.infer<typeof surveySchema>;