import type { Meta, StoryObj } from "@storybook/react";
import { Form } from "../pages/surveys/Form";
import { fn } from "@storybook/test";
import { action } from "@storybook/addon-actions";

const meta = {
  title: "Example/Form",
  component: Form,

  argTypes: {
    onSubmit: fn(),
  },
} as Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (data) => {
      action("Form Submitted")(data);
    },
  },
};
