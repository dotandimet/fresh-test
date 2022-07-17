/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

type GenderType = 'male' | 'female'
interface NameProps {
  gender?: GenderType
}

const getName = async (gender :GenderType) => await fetch(`/api/names/${gender}`).then((r) => r.text())

export default function Counter(props: NameProps) {
  const gender = props.gender || 'male'  
  const [name, setName] = useState('Bob');
  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
  return (
    <div class={tw`flex gap-2 w-full`}>
      <p class={tw`flex-grow-1 font-bold text-xl`}>{name}</p>
      <button
        class={btn}
        onClick={async () => setName(await getName('male'))}
        disabled={!IS_BROWSER}
      >
        boy
      </button>
      <button
        class={btn}
        onClick={async () => setName(await getName('female'))}
        disabled={!IS_BROWSER}
      >
        girl
      </button>
    </div>
  );
}
