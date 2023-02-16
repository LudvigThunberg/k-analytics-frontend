'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export const Login = () => {
  const { data: session } = useSession();

  let button = (
    <button type="button" onClick={() => signIn()}>
      Sign In
    </button>
  );
  if (session) {
    button = (
      <button type="button" onClick={() => signOut()}>
        Sign Out
      </button>
    );
  }

  return button;
};
