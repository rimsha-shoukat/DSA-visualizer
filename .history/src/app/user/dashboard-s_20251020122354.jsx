"use server"; 
import { connectDB, Session, User } from '@/database';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ClientDashboard from './dashboard-c';  

export default async function Dashboard({ setBoard }) {
    const cookieStore = cookies();
    const sessionId = cookieStore.get('sessionId')?.value;

    await connectDB();
    const session = await Session.findOne({ sessionId });
    if (!session) {
        redirect('/');
    }

    const user = await User.findById(session.userId);
    if (!user) {
        redirect('/');
    }

    return <ClientDashboard user={user} setBoard={setBoard} />;
}