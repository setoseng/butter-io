import Link from "next/link";
import Image from "next/image";
import { Text, Button, Section } from "./components";

import Churn from "../../public/churn.webp";
import Butter from "../../public/butter.webp";

export default function Home() {
  return (
    <>
      <Section className="py-32 sm:py-48 lg:py-56">
        <div className="mx-auto">
          <div className="text-center">
            <Text
              className="text-4xl font-bold text-primary sm:text-6xl"
              fontType="serif"
            >
              Butter
            </Text>
            <p className="mt-6 text-2xl sm:text-4xl leading-8 text-grey">
              The smoothest AI tool to boost customer retention.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button href="/">
                <Text className="text-md sm:text-lg text-white">
                  Try The Spread
                </Text>
              </Button>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="mx-auto flex flex-col sm:flex-row justify-between gap-4">
          <Image
            src={Churn}
            alt="Picture of butter churning"
            width={600}
            height={600}
          />
          <Image
            src={Butter}
            alt="Picture of butter"
            width={600}
            height={600}
          />
        </div>
      </Section>
      <Section className="flex flex-col sm:grid py-10 sm:py-48 lg:py-56">
        <div className="flex flex-col sm:flex-row w-full px-0 sm:px-[5rem] items-center justify-between gap-5 text-center sm:text-left">
          <Text variant="primary" className="text-2xl sm:text-3xl uppercase">
            About our Service
          </Text>
          <Text className="text-grey text-2xl">
            Let us take the hard work out of predicting churn. From our
            developers to your table we offer the leading AI tool's giving you
            accurate information in real time.
          </Text>
        </div>
      </Section>
    </>
  );
}
