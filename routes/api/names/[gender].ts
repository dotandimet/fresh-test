
import { HandlerContext } from "$fresh/server.ts";

import { faker, GenderType } from 'https://cdn.skypack.dev/@faker-js/faker@7.3.0?dts';


export const handler = (_req: Request, _ctx: HandlerContext): Response => {
  const gender :GenderType = _ctx.params.gender 
  const name = faker.name.findName(undefined, undefined, gender )
  return new Response(name);
};
