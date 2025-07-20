import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name?: string;
      role: string;
      status: string;
      brandName?: string;
    };
  }

  interface User {
    role: string;
    status: string;
    brandName?: string;
    password?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role: string;
    status: string;
    brandName?: string;
  }
}