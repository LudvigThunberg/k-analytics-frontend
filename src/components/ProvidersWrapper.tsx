import { SessionProvider } from 'next-auth/react';

export const ProvidersWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => <SessionProvider>{children}</SessionProvider>;
