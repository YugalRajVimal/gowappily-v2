import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0 h-full" aria-label="GoWappily">
      <img src="/logo.png" alt="GoWappily Logo" className="h-[90%] rounded-md m-1" />
    </Link>
  );
}
