'use client';

import { Button } from '@/components/ui/button';
import { signInWithGithub } from '@/functions/auth';

export default function SignInWithGithubButton() {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full"
      onClick={() => signInWithGithub()}
    >
      Login with Github
    </Button>
  );
}
