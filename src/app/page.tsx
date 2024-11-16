import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">hello</h1>
      <Button><Link href={"/mamberPage"}> Click me</Link></Button>
    </div>
  );
}
