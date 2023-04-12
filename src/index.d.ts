declare module "svelte-collapsible" {
  import { SvelteComponentTyped } from "svelte";
  export class Accordion extends SvelteComponentTyped<{
    duration: number;
    easing: string;
    key: object;
  }> {}
  export class AccordionItem extends SvelteComponentTyped<{
    key: object;
  }> {}
  export class CollapsibleCard extends SvelteComponentTyped<{
    open: boolean;
    duration: number;
    easing: string;
  }> {}
}
