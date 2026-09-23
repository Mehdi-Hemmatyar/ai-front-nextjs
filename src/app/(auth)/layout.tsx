import { auth } from "@/lib/auth";
import { SessionProvider } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }: LayoutProps<"/">) {
  const session = await auth();

  console.log(session);
  
  if(!session) redirect('/login')


  return <SessionProvider session={session}>{children}</SessionProvider>;
}
