import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { textColors } from "../components/classes.ts";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div class="flex gap-2 w-full">
      <p
        class={(() => {
          const m = count % 2 == 0;

          return `grow text-xl ${textColors} ${
            m ? "text-green-600 font-bold" : "text-red-600"
          }`;
        })()}
      >
        {count}
      </p>{" "}
      <Button onClick={() => setCount(count - 1)}>-1</Button>
      <Button onClick={() => setCount(count + 1)}>+1</Button>
    </div>
  );
}
