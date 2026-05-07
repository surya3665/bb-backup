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
  const isAccountNumberNumeric = /^\d+$/.test(normalizedAccountNumber);
  const isConfirmAccountNumberNumeric = /^\d+$/.test(
    normalizedConfirmAccountNumber
  );
  const accountNumbersMatch =
    normalizedAccountNumber !== "" &&
    normalizedAccountNumber === normalizedConfirmAccountNumber;

  return {
    isValid:
      isAccountNumberNumeric &&
      isConfirmAccountNumberNumeric &&
      normalizedAccountNumber.length >= 6 &&
      normalizedConfirmAccountNumber.length >= 6 &&
      accountNumbersMatch,
    mismatchMessage:
      normalizedConfirmAccountNumber !== "" && !accountNumbersMatch
        ? "Account numbers must match."
        : "",
  };
}
