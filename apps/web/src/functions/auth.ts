'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { createClientOnServer } from '@/lib/supabase/server';

export async function login(formData: FormData) {
  const supabase = await createClientOnServer();

  // FIXME: Type-casting for convenience, should use Zod to validate
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signup(formData: FormData) {
  const supabase = await createClientOnServer();

  // FIXME: Type-casting for convenience, should use Zod to validate
  const firstName = formData.get('first-name') as string;
  const lastName = formData.get('last-name') as string;

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    options: {
      data: {
        full_name: `${firstName} ${lastName}`,
        email: formData.get('email') as string,
      },
    },
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect('/error');
  }

  revalidatePath('/', 'layout');
  redirect('/');
}

export async function signout() {
  const supabase = await createClientOnServer();

  const { error } = await supabase.auth.signOut();

  if (error) {
    redirect('/error');
  }

  redirect('/logout');
}

export async function signInWithGithub() {
  const supabase = await createClientOnServer();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
  });

  if (error) {
    redirect('/error');
  }

  redirect(data.url);
}
