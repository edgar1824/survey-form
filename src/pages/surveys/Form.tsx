import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import dayjs from "dayjs";
import type { FC } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { surveySchema, type SurveySchema } from "validations/surveys.shema";

interface Props {
  onSubmit: SubmitHandler<SurveySchema>;
}

export const Form: FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm<SurveySchema>({
    resolver: zodResolver(surveySchema),
    defaultValues: {
      date: new Date(),
      checked: true,
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", gap: "32px", flexDirection: "column" }}
    >
      <FormControl error={!!errors?.name} variant="outlined">
        <InputLabel htmlFor="name-label">Survey name</InputLabel>
        <Input
          {...register("name")}
          id="name-label"
          aria-describedby="name-label"
          placeholder="e.g. ESG Assessment 2022"
          sx={{
            px: 2,
            ":before": { borderRadius: "8px" },
            ":after": {
              borderRadius: "8px",
              borderWidth: "0 0 0 2px",
            },
          }}
        />
        <FormHelperText>This will be presented to recipients</FormHelperText>
      </FormControl>

      <Controller
        control={control}
        name="select"
        render={({ field: { value, onChange } }) => (
          <FormControl
            error={!!errors?.select}
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
              label="Form"
              placeholder="Please select a form"
              value={value}
              onChange={onChange}
              sx={{
                ":before": { borderRadius: "8px" },
                ":after": { borderRadius: "8px" },
              }}
            >
              <MenuItem value={"Test1"}>Test1</MenuItem>
              <MenuItem value={"Test2"}>Test2</MenuItem>
              <MenuItem value={"Test3"}>Test3</MenuItem>
            </Select>
            <FormHelperText>
              Your survey recipients will be asked to fill in these form
            </FormHelperText>
          </FormControl>
        )}
      />

      <FormControl error={!!errors?.type}>
        <FormLabel>Recipients</FormLabel>
        <RadioGroup
          aria-labelledby="Recipients"
          defaultValue="per-user"
          name="radio-buttons-group"
          row
        >
          <FormControlLabel
            name="type"
            value={"per-user" as SurveySchema["type"]}
            control={<Radio {...register("type")} />}
            label="One survey per user"
            labelPlacement="end"
          />
          <FormControlLabel
            name="type"
            value={"per-contributor" as SurveySchema["type"]}
            control={<Radio {...register("type")} />}
            label="One survey per contributor"
            labelPlacement="end"
          />
        </RadioGroup>

        <FormControlLabel
          control={<Checkbox {...register("checked")} defaultChecked />}
          label="Send to all listed contributors and users via email"
        />
      </FormControl>

      <Controller
        control={control}
        name="date"
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <FormControl error={!!error}>
            <FormLabel>Deadline for responses</FormLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={dayjs(value || new Date())}
                onChange={(e) => onChange(e?.toDate())}
                sx={{
                  width: "189px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderTop: "none",
                    borderRight: "none",
                    borderLeft: "none",
                    borderRadius: "8px",
                  },
                }}
              />
            </LocalizationProvider>
          </FormControl>
        )}
      />
      <FormControl error={!!errors?.notes}>
        <FormLabel>Notes for recipients (optional)</FormLabel>
        <TextField
          multiline
          rows={4}
          maxLength={1000}
          inputProps={{
            maxLength: 1000,
          }}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderTop: "none",
              borderRight: "none",
              borderLeft: "none",
              borderRadius: "8px",
            },
          }}
          {...register("notes")}
        />
        <FormHelperText
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>
            These notes will appear in the email sent to your recipients
          </span>
          <span>{watch("notes")?.split("")?.length | 0} / 1000</span>
        </FormHelperText>
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        sx={{
          width: "189px",
          borderRadius: "100px",
          p: "10px 24px 10px 24px",
        }}
      >
        Create survey
      </Button>
    </form>
  );
};
