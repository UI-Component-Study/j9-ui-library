import TestButton from "./components/test/TestButton";
// import CustomTooltip from "./components/ui/CustomTooltip";
import CustomTooltip from "@/stories/CustomTooltip";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";

function App() {
  return (
    <>
      <div className="text-blue-400">qwe</div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {/* <Button>qwe</Button> */}
            <div className="h-[500px] w-[500px] bg-red-400"></div>
          </TooltipTrigger>
          <TooltipContent side="right" className="top-[-50px]">
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div id="right" className="text-center my-8">
        <CustomTooltip
          tooltipContent={<TestButton />}
          tooltipContentClassName={
            "transition-opacity duration-1000 ease-in-out"
          }
          tooltipColor={"red"}
          isShowTooltipByClick={true}
          // tooltipColor={"#f87171"}
          // tooltipSpacing={20}
        >
          <div
            onClick={() => console.log(2)}
            className="h-[500px] w-[500px] border bg-green-200"
          >
            right
          </div>
        </CustomTooltip>
      </div>
      <div id="top" className="text-center my-8">
        <CustomTooltip
          tooltipSide={"top"}
          tooltipContent={
            <div onClick={() => console.log(444)} className="w-[200px]">
              top
            </div>
          }
          tooltipContentClassName={""}
          tooltipColor={"red"}
          // tooltipColor={"#f87171"}
        >
          <div className="h-[500px] w-[500px] border bg-green-200">top</div>
        </CustomTooltip>
      </div>
      <div className="text-center my-8">
        <CustomTooltip
          tooltipSide={"bottom"}
          tooltipContent={"qweqwe"}
          tooltipContentClassName={"text-black"}
          tooltipColor={"#888"}
        >
          <div className="h-[500px] w-[500px] border bg-green-200">bottom</div>
        </CustomTooltip>
      </div>
      <div className="text-center my-8">
        <CustomTooltip
          tooltipSide={"left"}
          tooltipContent={<div className="w-[200px]">left</div>}
          tooltipContentClassName={""}
          isShowTooltipByClick={true}
        >
          <div className="h-[500px] w-[500px] border bg-green-200">left</div>
        </CustomTooltip>
      </div>
    </>
  );
}

export default App;
