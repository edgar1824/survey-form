import { type FC } from "react";
import { MainTitle } from "../../components/titles/MainTitle";
import { Form } from "./blocks/Form";
import type { SubmitHandler } from "react-hook-form";
import type { SurveySchema } from "../../validations/surveys.shema";
import { Box } from "@mui/material";
import { gql, useMutation } from "@apollo/client";

const ADD_COUNTRY = gql`
  mutation AddCountry($code: String!, $name: String!, $emoji: String!) {
    addCountry(code: $code, name: $name, emoji: $emoji) {
      code
      name
      emoji
    }
  }
`;
export const Surveys: FC = () => {
  const [createCountry] = useMutation(ADD_COUNTRY);

  const onSubmit: SubmitHandler<SurveySchema> = (data) => {
    // createCountry({
    //   variables: {
    //     code: data.,
    //   }
    // })
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <MainTitle>Surveys</MainTitle>
      <Form {...{ onSubmit }} />
    </Box>
  );
};
