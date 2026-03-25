import { ReactNode } from "react";

export default function ContentWrapper({ children }: { children: ReactNode }) {
  return <main>{children}</main>;
}
 