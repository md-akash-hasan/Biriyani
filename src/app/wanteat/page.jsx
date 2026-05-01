import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function WantEatPage() {
  let Section = await auth.api.getSession({
    headers: await headers(),
  });
  let user = Section?.user;
  if (!user) {
    redirect("/biriyani/singin");
    return;
  }
  return (
    <div className="flex justify-center items-center h-[80vh]  font-bold text-2xl flex-col gap-5">
      <h1>Yes tomi biriyani Khete parbe Mr: </h1>
      <h1>{user.name}</h1>
    </div>
  );
}
