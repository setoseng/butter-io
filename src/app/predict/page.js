import { Text, Section, PredictOption } from "../components";
import { Divider } from "@nextui-org/react";

export default function Predict() {
  return (
    <Section className="flex flex-col gap-3 h-[100vh]">
      <div className="flex justify-start sm:px-[5rem]">
        <Text className="text-primary text-2xl sm:text-4xl" fontType="serif">
          What is Butter?
        </Text>
      </div>
      <div className="flex justify-center sm:px-[5rem]">
        <Text fontType="serif" className="text-md sm:text-lg">
          Butter is a machine learning model trained with the goal of increasing
          customer retention by predicting churn. The model effectively predicts
          if a customer will leave a company&apos;s service with up to 80%
          accuracy. After rigorous testing, we narrowed down the 10 features
          that provided the best accuracy and reliability for live applications
          and present to you Butter
        </Text>
      </div>
      <Divider className="px-5 sm:px-20 my-4" />
      <PredictOption />
    </Section>
  );
}
