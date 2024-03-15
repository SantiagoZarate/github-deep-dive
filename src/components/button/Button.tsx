import { ComponentProps } from "react";

export function Button(args : ComponentProps<'button'>){
  return (
    <button {...args} />
  )
}
