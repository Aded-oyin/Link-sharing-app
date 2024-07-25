// pages/_app.tsx
import { AuthContextProvider } from '@/context/AuthContext'; // Ensure the path is correct
import '../globals.css'; // Import your global styles

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <AuthContextProvider>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

export default MyApp;
