'use client';

import LoginButton from '../navButtons/LoginButton';
import LogoutButton from '../navButtons/LogoutButton';
import SignupButton from '../navButtons/SignupButton';
import { useUser } from '@auth0/nextjs-auth0/client';

const AccountButton = () => {
  const { user } = useUser();
  return (
    <div>
      {!user && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {user && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};

export default AccountButton;
