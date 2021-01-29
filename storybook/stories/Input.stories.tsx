import { Input, InputProps } from "@monokit/input";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    isFluid: { control: "boolean" },
  },
} as Meta;

export const InputDefault = (props: InputProps) => <Input {...props} />;
