import { cookies } from 'next/headers';
import DashboardClient from './DashboardClient';

export default function DashboardPage() {
    const cookieStore = cookies();
    const username = cookieStore.get('username')?.value || null;

    return (
        <DashboardClient username={username} />
    );
}
