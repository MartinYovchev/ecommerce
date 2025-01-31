'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import '@styles/profile.scss';

function ProfileClient() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>IsLoading...</div>;
  if (error) return <div>{error.message}</div>;

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
export default ProfileClient;
