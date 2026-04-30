import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-center text-3xl font-semibold">Apple-style Button (Web Realistic Target)</h1>
      <div className="flex flex-wrap items-center gap-4">
        <Button>Continue</Button>
        <Button variant="appleSubtle">Learn More</Button>
        <Button disabled>Disabled</Button>
      </div>
    </main>
  );
}
