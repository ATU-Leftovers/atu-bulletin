'use client';

import { createClientOnBrowser } from '@/lib/supabase/client';
import { User } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { signout } from '@/functions/auth';
import { getUser } from "@the-leftovers/supabase"

export default function LoginLogoutButton() {
  const [user, setUser] = useState<User | null>(null);
  const supabase = createClientOnBrowser();

  useEffect(() => {
    (async () =>  {
      const user = await getUser(supabase)
      setUser(user)
    })()
  }, [supabase]);

  return user ? <LogoutButton setUser={setUser} /> : <LoginButton />;
}

function LoginButton() {
  const router = useRouter();

  return (
    <Button variant="outline" onClick={() => router.push('/login')}>
      Log in
    </Button>
  );
}

function LogoutButton({ setUser }: { setUser: (user: User | null) => void }) {
  return (
    <Button
      variant="outline"
      onClick={() => {
        signout();
        setUser(null);
      }}
    >
      Log out
    </Button>
  );
}
