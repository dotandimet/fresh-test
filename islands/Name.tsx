/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { faker, GenderType } from 'https://cdn.skypack.dev/@faker-js/faker@7.3.0?dts';

interface NameProps {
  gender?: GenderType
}

export default function Counter(props: NameProps) {
  const findName = faker.name.findName  
  const [name, setName] = useState(findName(undefined, undefined, props.gender));
  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
  return (
    <div class={tw`flex gap-2 w-full`}>
      <p class={tw`flex-grow-1 font-bold text-xl`}>{name}</p>
      <button
        class={btn}
        onClick={() => setName(findName(undefined, undefined, 'male'))}
        disabled={!IS_BROWSER}
      >
        boy
      </button>
      <button
        class={btn}
        onClick={() => setName(findName(undefined, undefined, 'female'))}
        disabled={!IS_BROWSER}
      >
        girl
      </button>
    </div>
  );
}
