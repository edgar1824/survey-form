import { type FC } from "react";
import { MainTitle } from "../../components/titles/MainTitle";
import { Form } from "./blocks/Form";
import type { SubmitHandler } from "react-hook-form";
import type { SurveySchema } from "../../validations/surveys.shema";
import { Box } from "@mui/material";

export const Surveys: FC = () => {
  const onSubmit: SubmitHandler<SurveySchema> = (data) => {
    console.log(data);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <MainTitle>Surveys</MainTitle>
      <Form {...{ onSubmit }} />
    </Box>
  );
};
