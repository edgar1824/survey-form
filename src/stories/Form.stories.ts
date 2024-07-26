import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "../pages/surveys/Form";

const meta = {
  title: "Example/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    onSubmit: {},
  },
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;
