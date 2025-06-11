import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        className="hidden dark:flex"
        src="/la-logo.svg"
        width={70}
        height={70}
        alt="leul-abera-logo"
        priority
      />
      <Image
        className="dark:hidden"
        src="/la-logo-light.svg"
        width={70}
        height={70}
        alt="leul-abera-logo"
        priority
      />
    </Link>
  );
};

export default Logo;
