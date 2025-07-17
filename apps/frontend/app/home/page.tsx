
import { redirect } from 'next/navigation';
import getSessionInServer from '../Providers/session-server';
import { NEXT_PUBLIC_URL } from '../lib/config';

export default async function Home() {
const token = await getSessionInServer();
  
  if (!token) {
    redirect('/login');
  }
 
  return (
    <div className="flex min-h-screen bg-[#182636] min-w-fit">
     <p>dashboard</p>
    </div>
  );
}

