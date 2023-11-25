"use client"; // may change
import { useSession, signOut, signIn } from "next-auth/react"
import { redirect } from "next/navigation";


const profile = () => {

  const { data: session } = useSession(); // tells if you have a session or not (logged in or not)

  if (!session) { // if NOT logged in
      return (
          redirect("/login")
      )
  }

  return ( // if logged in
        <>
          <h1 className="text-3xl text-center text-black">You are logged in!</h1>
          <button onClick={() => signOut()} className="text-xl text-black">Sign out</button>
        </>
      )
  

}

export default profile