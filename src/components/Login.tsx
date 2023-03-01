'use client';

import axios from 'axios';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';

export const Login = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      try {
        axios.get(
          `/api/post-google-credentials?username=${session.user?.name}`,
        );
      } catch (error) {
        console.log(error);
      }
    }
  }, [session?.user?.name]);

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
