import '@styles/profile.scss';
import { getSession } from '@auth0/nextjs-auth0';

async function ProfileServer() {
  const session = await getSession();
  const user = session?.user;

  if (!user) {
    return null;
  }

  return user ? (
    <div className="profile-page">
      <div className="profile-header">
        <div className="avatar">
          <img src={user.picture} alt="Avatar" />
        </div>
        <h1>{user.name}</h1>
        <p className="username">{user.nickname}</p>
      </div>

      <div className="profile-stats">
        <div className="stat">
          <h3>{user.email}</h3>
        </div>
      </div>
    </div>
  ) : (
    <div>No user logged in!</div>
  );
}
export default ProfileServer;
