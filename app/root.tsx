import { Outlet } from "react-router";

export async function loader() {
  return null;
}

export default function Root() {
  return <Outlet />;
}
