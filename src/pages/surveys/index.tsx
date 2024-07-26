import { useMutation } from "@apollo/client";
import { Box, Snackbar } from "@mui/material";
import { useState, type FC } from "react";
import type { SubmitHandler } from "react-hook-form";
import { MainTitle } from "components/titles/MainTitle";
import { CREATE_SURVEY } from "gql/mutations";
import type { SurveySchema } from "validations/surveys.shema";
import { Form } from "./Form";

export const Surveys: FC = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [create] = useMutation(CREATE_SURVEY);

  const onSubmit: SubmitHandler<SurveySchema> = (data) => {
    create({
      variables: {
        input: {
          name: data.name,
          body: data.notes,
          email: data?.select,
        },
      },
    })
      .then(() => setMessage("Survey was successfully created"))
      .catch(() => setMessage(`Something went wrong`))
      .finally(() => setOpen(true));
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <MainTitle>Create a survey</MainTitle>
      <Form {...{ onSubmit }} />
      <Snackbar
        onClose={() => setOpen(false)}
        open={open}
        autoHideDuration={6000}
        message={message}
      />
    </Box>
  );
};
