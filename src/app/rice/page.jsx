import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function RicePage() {
  let sectction = await auth.api.getSession({
    headers: await headers(),
  });
  let user = sectction?.user;
  if (!user) {
    redirect("/biriyani/singin");
    return;
  }
  return <div>Rice Page</div>;
}
