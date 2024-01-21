import Link from "next/link";
import { Text } from "./Text";
import { Button } from "./Button";

export function NavBar() {
  return (
    <div className="navbar flex justify-between bg-base-100 px-20">
      <div className="">
        <Link href="/">
          <Text variant="brand" fontType="serif" className="text-primary">
            Butter
          </Text>
        </Link>
      </div>
      <div className="">
        <div className="menu menu-horizontal px-1 justify-center items-center gap-10">
          <Link href="/">
            <Text className="text-lg">Newstand</Text>
          </Link>
          <Link href="/whoweare">
            <Text className="text-lg">Who We Are</Text>
          </Link>
          <Link href="/">
            <Text className="text-lg">Our Profiles</Text>
          </Link>

          <Button href="/predict">
            <Text variant="primary" className="text-lg text-white">
              Predict
            </Text>
          </Button>
        </div>
      </div>
    </div>
  );
}
