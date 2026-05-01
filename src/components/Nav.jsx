"use client";
import { Link, Button } from "@heroui/react";
import ThemingSwitch from "./ThemingSwitch";
import { signOut, useSession } from "@/lib/auth-client";
import { usePathname } from "next/navigation";

export default function nav() {
  let path = usePathname();
  let { data, isPending } = useSession();
  let user = data?.user;
  // console.log(user, isPending);

  let li = (
    <>
      <li>
        <Link
          className={
            path === "/"
              ? "border-b-2  border-green-500 rounded-none no-underline"
              : "no-underline"
          }
          href="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={
            path === "/wanteat"
              ? "border-b-2  border-green-500 rounded-none no-underline"
              : "no-underline"
          }
          href="/wanteat"
        >
          Do you Want to Eat
        </Link>
      </li>
      <li>
        <Link
          className={
            path === "/lentil"
              ? "border-b-2  border-green-500 rounded-none no-underline"
              : "no-underline"
          }
          href="/lentil"
        >
          Lentil
        </Link>
      </li>
      <li>
        <Link
          className={
            path === "/meat"
              ? "border-b-2  border-green-500 rounded-none no-underline"
              : "no-underline"
          }
          href="/meat"
        >
          Meat
        </Link>
      </li>
      <li>
        <Link
          className={
            path === "/sold"
              ? "border-b-2  border-green-500 rounded-none no-underline"
              : "no-underline"
          }
          href="/sold"
        >
          Sold
        </Link>
      </li>
      <li>
        <Link
          className={
            path === "/rice"
              ? "border-b-2  border-green-500 rounded-none no-underline"
              : "no-underline"
          }
          href="/rice"
        >
          Rice
        </Link>
      </li>
    </>
  );
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg ">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <p className="font-bold">ACME</p>
        </div>
        <ul className="flex items-center gap-4">{li}</ul>
        <div className="flex justify-center items-center gap-5 font-bold">
          {user ? (
            <div>
              <h1>Wellcome: {user.name}</h1>
              <button
                className=" bg-red-500 px-4 text-white py-1 rounded-2xl "
                onClick={() => signOut()}
              >
                Sing Out
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-5">
              <Link href="/biriyani/singin">
                <Button className="btn-primary">Sing In</Button>
              </Link>
              <Link href="/biriyani/singup">
                <Button className="btn-primary">Sing Up</Button>
              </Link>
            </div>
          )}
          <ThemingSwitch></ThemingSwitch>
        </div>
      </header>
    </nav>
  );
}
