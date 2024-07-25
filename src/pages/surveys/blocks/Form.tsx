import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  TextField,
} from "@mui/material";
import type { FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  surveySchema,
  type SurveySchema,
} from "../../../validations/surveys.shema";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface Props {
  onSubmit: SubmitHandler<SurveySchema>;
}

export const Form: FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SurveySchema>({
    resolver: zodResolver(surveySchema),
  });
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", gap: "32px", flexDirection: "column" }}
    >
      <FormControl variant="outlined">
        <InputLabel htmlFor="name-label">Survey name</InputLabel>
        <Input
          {...register("name")}
          id="name-label"
          aria-describedby="name-label"
          placeholder="e.g. ESG Assessment 2022"
          sx={{
            ":before": { borderRadius: "8px" },
            ":after": {
              borderRadius: "8px",
              //   transform: "scaleX(1)",
            },
          }}
        />
      </FormControl>

      <FormControl
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
            borderRadius: "8px",
          },
        }}
      >
        <InputLabel id="select-label">Form</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          label="Form"
          placeholder="Please select a form"
          {...register("select")}
          sx={{
            ":before": { borderRadius: "8px" },
            ":after": { borderRadius: "8px" },
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Recipients</FormLabel>
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="end"
            control={<Radio {...register("type")} />}
            label="One survey per user"
            labelPlacement="end"
          />
          <FormControlLabel
            value="end"
            control={<Radio {...register("type")} />}
            label="One survey per contributor"
            labelPlacement="end"
          />
        </FormGroup>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Deadline for responses</FormLabel>
        <DatePicker  />
      </FormControl>
    </form>
  );
};
