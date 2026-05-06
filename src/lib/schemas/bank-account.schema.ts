type BankAccountForm = {
  accountNumber: string;
  confirmAccountNumber: string;
};

export function validateBankAccountForm({
  accountNumber,
  confirmAccountNumber,
}: BankAccountForm) {
  const normalizedAccountNumber = accountNumber.trim();
  const normalizedConfirmAccountNumber = confirmAccountNumber.trim();
  const accountNumbersMatch =
    normalizedAccountNumber !== "" &&
    normalizedAccountNumber === normalizedConfirmAccountNumber;

  return {
    isValid:
      normalizedAccountNumber.length >= 6 &&
      normalizedConfirmAccountNumber.length >= 6 &&
      accountNumbersMatch,
    mismatchMessage:
      normalizedConfirmAccountNumber !== "" && !accountNumbersMatch
        ? "Account numbers must match."
        : "",
  };
}
