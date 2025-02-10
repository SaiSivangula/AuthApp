import LoginForm from "@/Components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from 'next-auth';
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session  = await getServerSession(authOptions);

  if(session) redirect("/dashboard");
  return <main>
    <LoginForm/>
  </main>
}
