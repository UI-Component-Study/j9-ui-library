import type { Meta, StoryObj } from "@storybook/react";
import CustomTooltip from "./CustomTooltip";
import TestButton from "@/components/test/TestButton";

const meta: Meta<typeof CustomTooltip> = {
  title: "UI/CustomTooltip",
  component: CustomTooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tooltipColor: { control: "color" },
    tooltipSide: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
  },
  args: {
    isShowTooltipByClick: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ChildrenExampleComp = () => {
  return (
    <div className="relative h-[100px] bg-blue-400 flex items-center justify-center flex-col rounded-lg px-4">
      <h1>Hover or Click</h1>
    </div>
  );
};

export const Right: Story = {
  args: {
    tooltipContent: <TestButton />,
    tooltipSide: "right",
    tooltipSpacing: 15,
    tooltipColor: "#34d399",
    tooltipContentClassName: "text-red-500 rounded-3xl",
    children: <ChildrenExampleComp />,
  },
};
export const Top: Story = {
  args: {
    tooltipContent: "Top tooltip content",
    tooltipSide: "top",
    tooltipSpacing: 15,
    tooltipColor: "#f87171",
    tooltipContentClassName: "text-red-500",
    children: "Hover or Click",
  },
};

export const Bottom: Story = {
  args: {
    tooltipContent: <TestButton />,
    tooltipSide: "bottom",
    tooltipSpacing: 15,
    tooltipColor: "#60a5fa",
    tooltipContentClassName: "text-red-500",
    children: <ChildrenExampleComp />,
  },
};

export const Left: Story = {
  args: {
    tooltipContent: <TestButton />,
    tooltipSide: "left",
    tooltipSpacing: 15,
    tooltipColor: "#fbbf24",
    tooltipContentClassName: "text-red-500",
    children: <ChildrenExampleComp />,
  },
};
