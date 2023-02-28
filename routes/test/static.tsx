import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <div class="p-4">
        <h1 class="text-5xl italic font-bold text-blue-600 ">Hello Twind!</h1>
      </div>
    </>
  );
}
