import { Meta, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./tooltip";

// 스토리북 메타데이터 설정
const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  subcomponents: { TooltipTrigger, TooltipContent, TooltipProvider },
  parameters: {
    layout: "centered",
  },
  argTypes: {
    side: {
      control: { type: "select", options: ["top", "right", "bottom", "left"] },
      description: "Tooltip position",
    },
    className: {
      control: { type: "text" },
      description: "CSS class for custom styling",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// 기본 템플릿 설정
const Template: StoryObj<typeof Tooltip> = (args) => (
  <TooltipProvider>
    <div className="p-4">
      <Tooltip>
        <TooltipTrigger>
          <button className="p-2 bg-blue-500 text-white rounded">
            Hover me
          </button>
        </TooltipTrigger>
        <TooltipContent {...args}>
          <div className="text-red-500">툴팁 박스</div>
        </TooltipContent>
      </Tooltip>
    </div>
  </TooltipProvider>
);

export const Default: Story = Template.bind({});
Default.args = {
  side: "right",
};

export const Top: Story = Template.bind({});
Top.args = {
  side: "top",
};

export const Bottom: Story = Template.bind({});
Bottom.args = {
  side: "bottom",
};

export const Left: Story = Template.bind({});
Left.args = {
  side: "left",
};

export const CustomClass: Story = Template.bind({});
CustomClass.args = {
  className: "bg-blue-500 text-white",
};
