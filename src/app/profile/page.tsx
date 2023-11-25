"use client"; // may
import { useSession, signOut, signIn } from "next-auth/react"

const profile = () => {

  const { data: session } = useSession(); // tells if you have a session or not (logged in or not)

  if (session) { // if logged in
    return (
      <>
        <h1 className="text-3xl text-center text-black">You are logged in!</h1>
        <button onClick={() => signOut()} className="text-xl text-black">Sign out</button>
      </>
    )
  }

  return ( // if NOT logged in
  <>
    <h1 className="text-3xl text-center text-black">You are NOT logged in!</h1>
    <button onClick={() => signIn()} className="text-xl text-center text-black">Sign in</button>
  </>
  )

}

export default profile