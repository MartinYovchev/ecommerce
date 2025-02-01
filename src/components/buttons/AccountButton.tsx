import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import '@styles/account-button.scss';
import Link from 'next/link';

const AccountButton = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="account-button">
      <Link href="../account" passHref legacyBehavior>
        <Image
          src="/images_website/user.png"
          alt="User Avatar"
          width={50}
          height={50}
          className="account-button__avatar"
        />
      </Link>

      <span className="account-button__name">{user.name}</span>
      <button
        onClick={() => (window.location.href = '/api/auth/logout')}
        className="account-button__logout"
      >
        Logout
      </button>
    </div>
  );
};

export default AccountButton;
