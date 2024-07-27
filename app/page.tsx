// pages/index.tsx
"use client"; // This directive is needed for Next.js 13 and beyond to enable client-side rendering.

import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext'; // Ensure the path is correct (adjust if necessary)
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  const { user } = useAuth(); // Ensure this hook is used within the AuthContextProvider

  useEffect(() => {
    // Redirect based on authentication state
    if (user) {
      router.push('/center'); // Use lowercase paths to match convention
    } else {
      router.push('/login'); // Use lowercase paths to match convention
    }
  }, [user, router]);

  return null; // This page only handles redirection, so nothing is rendered
};

export default Home;
