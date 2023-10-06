import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0">
      <Link href={"/"}>
        <Image
          src={"/public/logo.svg"}
          fill
          alt='logo'
        />
      </Link>
        <button>test</button>
    </div>
  );
};

export default Header;
