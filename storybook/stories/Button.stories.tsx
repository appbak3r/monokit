import { Button, ButtonProps } from "@monokit/button";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    isFluid: { control: "boolean" },
  },
} as Meta;

export const ButtonDefault = (props: ButtonProps) => <Button {...props}>Button</Button>;
