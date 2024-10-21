import { getServerSession } from 'next-auth';

import options from '@/config/auth';
import requireAuth from '@/config/require-auth';

export default async function Profile() {
  await requireAuth();
  const session = (await getServerSession(options))!;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>{session.user?.name}</p>
      <p>{session.user?.email}</p>
    </div>
  );
}
