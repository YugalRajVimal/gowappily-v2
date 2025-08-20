import Link from "next/link";
import Image from "next/image";

export default function HighLogo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="GoWappily">
      <img src="/highLogo.png" alt="GoWappily Logo" width={100} height={100} />
    </Link>
  );
}
