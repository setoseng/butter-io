"use client";
import { useRef, useState } from "react";
import { churnRequest } from "../actions";
import { useFormState, useFormStatus } from "react-dom";

import { Text } from "./Text";
import { Input, Radio, RadioGroup, Button } from "@nextui-org/react";
import { inter } from "../fonts";

const defaultState = {
  phoneSelected: "",
  securitySelected: "",
  backupSelected: "",
  paperlessSelected: "",
  monthlyCharges: 0,
  totalCharge: 0,
  internetService: "",
  contract: "",
};

export function PredictOption() {
  const [prediction, setPrediction] = useState(null);
  const [state, formAction] = useFormState(churnRequest, defaultState);
  const { pending } = useFormStatus();
  const formRef = useRef();
  console.log(prediction);

  function getPredictionResult() {
    if (prediction === null) return;
    return (
      <div className="flex flex-col items-center h-[50vh]">
        <Text className="text-primary text-2xl sm:text-4xl" fontType="serif">
          Prediction Result
        </Text>
        <div className="flex justify-center sm:px-[5rem]">
          <Text fontType="sans" className="text-md sm:text-md mt-5">
            {prediction === 0
              ? "The customer is likely to leave"
              : "The customer is likely to stay"}
          </Text>
        </div>
      </div>
    );
  }

  return (
    <>
      {prediction === null && (
        <form
          ref={formRef}
          action={async (formData) => {
            //formRef.current?.reset();

            const response = await churnRequest(formData);
            if (response.error) {
              alert("Error from server", response.error);
            }
            await setPrediction(response.prediction);
          }}
        >
          <div className="grid grid-cols-2 sm:gap-1 content-center gap-2">
            <div className="grid grid-row-2">
              <h3 className="text-black text-md">Tenure</h3>
              <div className="sm:w-[20rem] mr-2">
                <Input
                  name="tenure"
                  label="Years of Service"
                  color="default"
                  labelPlacement="inside"
                  size="sm"
                  type="number"
                  variant="bordered"
                  classNames={{
                    input: "bg-neutral",
                  }}
                  isRequired={true}
                />
              </div>
            </div>
            <RadioGroup
              label="Phone Service"
              orientation="horizontal"
              name="phoneService"
              isRequired={true}
            >
              <Radio value="Yes">Yes</Radio>
              <Radio value="No">No</Radio>
            </RadioGroup>
            <RadioGroup
              label="Online Security"
              orientation="horizontal"
              name="onlineSecurity"
              isRequired={true}
            >
              <Radio value="Yes">Yes</Radio>
              <Radio value="No">No</Radio>
            </RadioGroup>
            <RadioGroup
              label="Online Backup"
              orientation="horizontal"
              name="onlineBackup"
              isRequired={true}
            >
              <Radio value="Yes">Yes</Radio>
              <Radio value="No">No</Radio>
            </RadioGroup>
            <RadioGroup
              label="Paperless Billing"
              orientation="horizontal"
              name="paperlessBilling"
              isRequired={true}
            >
              <Radio value="Yes">Yes</Radio>
              <Radio value="No">No</Radio>
            </RadioGroup>
            <div className="grid grid-row-2">
              <h3 className="text-black text-md">Monthly Charges</h3>
              <div className="sm:w-[20rem] mr-2">
                <Input
                  label="Cost"
                  color="default"
                  labelPlacement="inside"
                  size="sm"
                  variant="bordered"
                  type="number"
                  name="monthlyCharges"
                  isRequired={true}
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                  classNames={{
                    input: "bg-neutral",
                  }}
                />
              </div>
            </div>
            <div className="grid grid-row-2">
              <h3 className="text-black text-md">Total Charges</h3>
              <div className="sm:w-[20rem] mr-2">
                <Input
                  label="Cost"
                  color="default"
                  labelPlacement="inside"
                  size="sm"
                  variant="bordered"
                  name="totalCharges"
                  type="number"
                  isRequired={true}
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                  classNames={{
                    input: "bg-neutral",
                  }}
                />
              </div>
            </div>
            <RadioGroup
              label="Internet Service"
              orientation="horizontal"
              name="internetService"
              isRequired={true}
            >
              <Radio value="DSL">DSL</Radio>
              <Radio value="Fiber optic">Fiber Optics</Radio>
              <Radio value="No service">No Service</Radio>
            </RadioGroup>
            <RadioGroup
              label="Contract"
              orientation="horizontal"
              name="contract"
              isRequired={true}
            >
              <Radio value="Month-to-month">Month to Month</Radio>
              <Radio value="One year">1 Year</Radio>
              <Radio value="Two year">2 Years</Radio>
            </RadioGroup>
            <RadioGroup
              label="Payment Method"
              orientation="horizontal"
              name="paymentMethod"
              isRequired={true}
            >
              <Radio value="Bank transfer (automatic)">
                Bank transfer (automatic)
              </Radio>
              <Radio value="Credit card (automatic)">
                Credit card (automatic)
              </Radio>
              <Radio value="Electronic check">Electronic check</Radio>
              <Radio value="Mailed check">Mailed check</Radio>
            </RadioGroup>
          </div>
          <div className="flex justify-center my-10 sm:mt-10">
            <Button
              size="lg"
              color="primary"
              type="submit"
              aria-disabled={pending}
              disabled={pending}
              radius="none"
              className="w-[10rem] sm:w-[20rem]"
            >
              <Text className="text-white uppercase">Predict</Text>
            </Button>
          </div>
        </form>
      )}
      {getPredictionResult()}
    </>
  );
}
