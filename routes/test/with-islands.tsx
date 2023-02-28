import { Head } from "$fresh/runtime.ts";
import CheckDuplication from "../../islands/CheckDuplication.tsx";
import InsertCssrules from "../../islands/InsertCssrules.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>

      <div class="p-4">
        <h1 class="text-5xl italic font-bold text-blue-600 ">Hello Twind!</h1>
        <CheckDuplication></CheckDuplication>
        <InsertCssrules></InsertCssrules>
      </div>
    </>
  );
}
