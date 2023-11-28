import { cn } from "../../lib/utils/cn.ts";

function Tooltip({ children, text}) {

  return (
    <div after-dynamic-value={text} className={cn("flex relative after:absolute after:bg-[rgba(0,0,0,.95)] after:text-white after:px-2 after:rounded-lg after:-top-7 after:-left-3 after:opacity-0 after:none hover:after:block hover:after:opacity-100 after:transition-opacity", "after:content-[attr(after-dynamic-value)]")}>
      {children}
    </div>
  );
}

export default Tooltip;
