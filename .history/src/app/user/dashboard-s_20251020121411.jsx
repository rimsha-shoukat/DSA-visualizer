"use server";  // Explicitly mark as server (optional, but clear)
import { connectDB, Session, User } from '@/database';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ClientDashboard from './client-dashboard';  // Import the client component

export default async function Dashboard({ setBoard }) {
    const cookieStore = cookies();
    const sessionId = cookieStore.get('sessionId')?.value;

    if (!sessionId) {
        redirect('/');
    }

    await connectDB();
    const session = await Session.findOne({ sessionId });
    if (!session) {
        redirect('/');
    }

    const user = await User.findById(session.userId);
    if (!user) {
        redirect('/');
    }

    // Pass user data and setBoard to the client component
    return <ClientDashboard user={user} setBoard={setBoard} />;
}