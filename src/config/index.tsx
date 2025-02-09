import { ReactNode, Suspense } from "react";
import Loader from "../components/loader/Loader";

export const SuspenseContainer = ({ children }: { children: ReactNode }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};
