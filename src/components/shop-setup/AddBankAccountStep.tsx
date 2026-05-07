"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { validateBankAccountForm } from "@/lib/schemas/bank-account.schema";

import { ShopSetupLayout } from "./ShopSetupLayout";

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function AddBankAccountStep() {
  const router = useRouter();
  const [accountNumber, setAccountNumber] = useState("");
  const [confirmAccountNumber, setConfirmAccountNumber] = useState("");
  const [routingCode, setRoutingCode] = useState("");

  const { isValid, mismatchMessage } = validateBankAccountForm({
    accountNumber,
    confirmAccountNumber,
  });

  return (
    <ShopSetupLayout activeStep="bank" stepCaption="Add Bank Account">
      <div className="mx-auto flex max-w-[880px] flex-col items-center space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-[25px] font-semibold tracking-[-0.03em] text-[#17110f]">
            Add bank Account
          </h1>
          <p className="max-w-[720px] text-[1.1rem] leading-8 text-[#352f2b]">
            Connect your bank account to enable transactions and track your
            finances.
          </p>
        </div>

        <div className="w-full max-w-[600px] space-y-5">
          <Input
            value={accountNumber}
            onChange={(event) => setAccountNumber(digitsOnly(event.target.value))}
            placeholder="Account Number"
            className="h-[52px] text-lg"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
          />
          <Input
            value={confirmAccountNumber}
            onChange={(event) =>
              setConfirmAccountNumber(digitsOnly(event.target.value))
            }
            placeholder="Confirm Account Number"
            className="h-[52px] text-lg"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
          />
          <Input
            value={routingCode}
            onChange={(event) => setRoutingCode(event.target.value)}
            placeholder="Routing Code"
            className="h-[52px] text-lg"
          />
          {mismatchMessage ? (
            <p className="text-left text-sm text-[#a33441]">{mismatchMessage}</p>
          ) : null}
        </div>

        <div className="flex justify-center">
          <Button
            className="h-[46px] w-full px-0 py-0 text-[15px] leading-[18px] sm:w-[338px]"
            disabled={!isValid}
            onClick={() => {
              if (isValid) {
                router.push("/shop-setup/ready");
              }
            }}
          >
            Save &amp; Continue
          </Button>
        </div>
      </div>
    </ShopSetupLayout>
  );
}
