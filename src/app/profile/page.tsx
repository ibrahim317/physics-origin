"use client"; // may change
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const profile = () => {
  const router = useRouter();
  // const { data: session } = useSession(); // tells if you have a session or not (logged in or not)

  // if (!session) {
  //   // if NOT logged in
  //   return router.push("/login");
  // }

  return (
    // if logged in
    <>
      <h1 className="text-3xl text-center text-black">You are logged in!</h1>
      <button
        onClick={async () => await signOut()}
        className="text-xl text-black"
      >
        Sign out
      </button>
    </>
  );
};

export default profile;
