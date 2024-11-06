import { ClerkProvider, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <ClerkProvider>
      <div className="h-screen">
        <UserButton afterSignOutUrl='/' />
      </div>
    </ClerkProvider>
  );
}