import useClickOutsideHandler from "@/hooks/useClickOutsideHandler";
import { cn } from "@/lib/utils";
import { useState } from "react";

export interface CustomTooltipProps {
  /** Hover 트리거가될  <br/>  ( Text | Component | Tag ) */
  children: React.ReactNode;
  /** Tooltip이 될 컨텐츠 <br/>  ( Text | Component | Tag ) */
  // /** Tooltip이 될 컨텐츠 <br/>  ( Text | Component | Tag ) */
  tooltipContent: React.ReactNode;
  /** Tooltip이 보여질 방향 <br/> ( "top" | "right" | "bottom" | "left" ) */
  tooltipSide?: TooltipSideType;
  /** Tooltip에 추가적으로 넣을 css클래스명 */
  tooltipContentClassName?: string;
  /** Tooltip의 거리 (현재는 안씀 동작을안함;;) */
  tooltipSpacing?: 10 | 15 | 20; // 동작왜안하는거지..
  /** Tooltip의 색깔 & 삼각형화살표의 색깔 <br /> ex) #34d399 */
  tooltipColor?: string;
  /** Tooltip이 클릭이벤트로인해 고정할지 안할지 정하는 프롭스 */
  isShowTooltipByClick?: boolean;
}
type TooltipSideType = "top" | "right" | "bottom" | "left";

/**
 * CustomTooltip component
 */
const CustomTooltip = ({
  children,
  tooltipContent,
  tooltipSide = "right",
  tooltipContentClassName,
  // tooltipSpacing = 15,
  tooltipColor = "#fff",
  isShowTooltipByClick = false,
}: CustomTooltipProps) => {
  const [isTooltipOpenByClick, setisTooltipOenByClick] = useState(false);

  const handleTooltipByClick = () => {
    if (!isShowTooltipByClick) return;
    setisTooltipOenByClick(!isTooltipOpenByClick);
  };
  const outsideHandlerRef = useClickOutsideHandler({
    callback: handleTooltipByClick,
    isOpen: isTooltipOpenByClick,
  });

  const openTooltip = () => {
    if (!isShowTooltipByClick) return;
    setisTooltipOenByClick(true);
  };

  const getTooltipSideClassName = (side: TooltipSideType) => {
    switch (side) {
      case "top":
        return `top-[-15px] -translate-y-full left-1/2 -translate-x-1/2 before:top-[100%] before:w-full before:h-[15px]`;

      case "right":
        return `right-[-15px] translate-x-full top-1/2 -translate-y-1/2 before:left-[-15px] before:w-[15px] before:h-full`;
      case "bottom":
        return `bottom-[-15px] translate-y-full left-1/2 -translate-x-1/2 before:top-[-15px] before:w-full before:h-[15px]`;
      case "left":
        return `left-[-15px] -translate-x-full top-1/2 -translate-y-1/2 before:left-[100%] before:w-[15px] before:h-full`;
    }
  };

  const getTooltipTriangleClassName = (side: TooltipSideType) => {
    switch (side) {
      case "top":
        return "rotate-180 top-[calc(100%)] left-1/2 -translate-x-1/2";
      case "right":
        return "-rotate-90 right-[calc(100%-5px)] top-1/2 -translate-y-1/2";
      case "bottom":
        return "-rotate-360  bottom-[calc(100%)] left-1/2 -translate-x-1/2";
      case "left":
        return "rotate-90 left-[calc(100%-5px)] top-1/2 -translate-y-1/2";
    }
  };

  return (
    <>
      <div
        ref={outsideHandlerRef}
        className="relative inline-block group"
        onClick={openTooltip}
      >
        {children}
        <div
          className={cn(
            `opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out before:absolute before:inset-0 before:content-[''] absolute z-20 p-2 border shadow-2xl ${getTooltipSideClassName(tooltipSide)} ${isShowTooltipByClick && isTooltipOpenByClick ? "opacity-100 visible" : "opacity-0 invisible"} ${tooltipContentClassName}`
          )}
          style={{ backgroundColor: tooltipColor }}
        >
          {/* <div>{tooltipContent}</div> */}
          {tooltipContent}
          <span
            className={cn(
              `absolute z-[-1] w-0 h-0 shadow-2xl  ${getTooltipTriangleClassName(tooltipSide)}`
            )}
            style={{
              borderColor: tooltipColor,
              borderRightWidth: "8px",
              borderLeftWidth: "8px",
              borderBottomWidth: "8px",
              borderStyle: "solid",
              borderLeftColor: "transparent",
              borderRightColor: "transparent",
            }}
          ></span>
        </div>
      </div>
    </>
  );
};

export default CustomTooltip;
