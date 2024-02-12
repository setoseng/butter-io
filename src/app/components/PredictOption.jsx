"use client";
import { useState } from "react";
import { Text } from "./Text";
import { Input, Radio, RadioGroup } from "@nextui-org/react";
import { inter } from "../fonts";

const defaultState = {
  phoneSelected: "",
  securitySelected: "",
  backupSelected: "",
  paperlessSelected: "",
  monthlyCharge: "",
  totalCharge: "",
  internetService: "",
  contract: "",
};

export function PredictOption() {
  const [phoneSelected, setPhoneSelected] = useState(
    defaultState.phoneSelected
  );
  const [securitySelected, setSecuritySelected] = useState(
    defaultState.securitySelected
  );
  const [backupSelected, setBackupSelected] = useState(
    defaultState.backupSelected
  );
  const [paperlessSelected, setPaperlessSelected] = useState(
    defaultState.paperlessSelected
  );
  const [monthlyCharge, setMonthlyCharge] = useState(
    defaultState.monthlyCharge
  );
  const [totalCharge, setTotalCharge] = useState(defaultState.totalCharge);
  const [internetService, setInternetService] = useState(
    defaultState.internetService
  );
  const [contract, setContract] = useState(defaultState.contract);

  return (
    <div className="grid grid-cols-2 sm:gap-1 content-center">
      <div className="grid grid-row-2">
        <h3 className="text-black text-md">Tenure</h3>
        <div className="w-[20rem]">
          <Input
            label="Years of Service"
            color="default"
            labelPlacement="inside"
            size="sm"
            type="number"
            variant="bordered"
            classNames={{
              input: "bg-neutral",
            }}
          />
        </div>
      </div>
      <RadioGroup
        label="Phone Service"
        orientation="horizontal"
        value={phoneSelected}
        onValueChange={setPhoneSelected}
      >
        <Radio value="Yes">Yes</Radio>
        <Radio value="No">No</Radio>
      </RadioGroup>
      <RadioGroup
        label="Online Security"
        orientation="horizontal"
        value={securitySelected}
        onValueChange={setSecuritySelected}
      >
        <Radio value="Yes">Yes</Radio>
        <Radio value="No">No</Radio>
      </RadioGroup>
      <RadioGroup
        label="Online Backup"
        orientation="horizontal"
        value={backupSelected}
        onValueChange={setBackupSelected}
      >
        <Radio value="Yes">Yes</Radio>
        <Radio value="No">No</Radio>
      </RadioGroup>
      <RadioGroup
        label="Paperless Billing"
        orientation="horizontal"
        value={paperlessSelected}
        onValueChange={setPaperlessSelected}
      >
        <Radio value="Yes">Yes</Radio>
        <Radio value="No">No</Radio>
      </RadioGroup>
      <div className="grid grid-row-2">
        <h3 className="text-black text-md">Monthly Charge</h3>
        <div className="w-[20rem]">
          <Input
            label=""
            color="default"
            labelPlacement="inside"
            size="sm"
            variant="bordered"
            type="number"
            value={monthlyCharge}
            onValueChange={setMonthlyCharge}
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
        <h3 className="text-black text-md">Total Charge</h3>
        <div className="w-[20rem]">
          <Input
            label=""
            color="default"
            labelPlacement="inside"
            size="sm"
            variant="bordered"
            value={totalCharge}
            onValueChange={setTotalCharge}
            type="number"
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
        value={internetService}
        onValueChange={setInternetService}
      >
        <Radio value="dsl">DSL</Radio>
        <Radio value="fiber">Fiber Optics</Radio>
        <Radio value="none">No Service</Radio>
      </RadioGroup>
      <RadioGroup
        label="Contract"
        orientation="horizontal"
        value={contract}
        onValueChange={setContract}
      >
        <Radio value="month_to_month">Month to Month</Radio>
        <Radio value="one_year">1 Year</Radio>
        <Radio value="two_year">2 Years</Radio>
      </RadioGroup>
    </div>
  );
}
