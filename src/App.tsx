import { Button } from "./components/ui/button";
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
      <Button>qwe</Button>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="h-[500px] w-[500px] bg-red-400"></div>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}

export default App;
