import { Text, Section } from "../components";
export default function WhoWeAre() {
  return (
    <Section variant="narrow" className="flex flex-col gap-10 h-[100vh]">
      <div className="flex justify-center sm:px-[5rem]">
        <Text className="text-primary text-4xl sm:text-6xl" fontType="serif">
          Who We Are
        </Text>
      </div>
      <div className="flex justify-center sm:px-[5rem]">
        <Text fontType="serif" className="text-lg sm:text-xl">
          Two friends on a mission to bring successful tech solutions in a
          friendly package. Butter marks the first chapter in a collaborative
          effort of blending modern-day AI with eye-catching web development.
          The goal of our team is to always ensure your online presence is not
          only visually appealing but also technologically advanced. We hope you
          enjoy the journey with us!
        </Text>
      </div>
    </Section>
  );
}
