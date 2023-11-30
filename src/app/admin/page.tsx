import { authOptions } from '@/src/lib/options'
import { getServerSession } from 'next-auth'
import React from 'react'

const page = () => {

    const session = getServerSession(authOptions)
    console.log(session);

  return (
    <div>Admin Stuff</div>
  )
}

export default page