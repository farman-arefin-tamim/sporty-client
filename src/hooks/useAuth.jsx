"use client";

export function useAuth() {
  
  const user = null;

  return {
    user,
    isPending: false,
    signOut: async () => {},
  };
}