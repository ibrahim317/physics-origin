import get_user_by_email from '@/src/lib/get_user_by_email';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react'


const page = async () => {


  const session = await getServerSession();
  if (!session) redirect("/login");

  if (session) {
    const user = get_user_by_email(session.user?.email) 
    if (!user.isAdmin) redirect("/");
    else {

      return (
        <html lang="en">
          <body>Adminnnnnnnnnnnnnnnnnnnnnnn</body>
        </html>
      )
    }
  }
}

export default page