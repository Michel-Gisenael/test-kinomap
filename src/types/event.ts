import { KeyboardEvent, MouseEvent } from "react";

export type ClickEventHandlerType = (
  e: KeyboardEvent<HTMLElement> | MouseEvent<HTMLElement>
) => void