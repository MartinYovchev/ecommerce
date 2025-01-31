import { getSession } from '@auth0/nextjs-auth0';
import ProfileClient from './components/user-client';
import ProfileServer from './components/user-server';
import { redirect } from 'next/navigation';

async function Profile() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    redirect('/');
  }

  return (
    <div>
      <div>
        <h1>Client Component</h1>
        <ProfileClient />
      </div>
      <div>
        <h1>Server Component</h1>
        <ProfileServer />
      </div>
    </div>
  );
}
export default Profile;
