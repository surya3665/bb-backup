import { validateShopName } from "@/lib/schemas/shop-setup.schema";

export function useShopNameCheck(shopName: string) {
  const trimmedName = shopName.trim();
  const isLengthValid =
    trimmedName.length >= 4 && trimmedName.length <= 20;
  const isFormatValid = /^[A-Za-z0-9]+$/.test(trimmedName);
  const isAvailable = validateShopName(trimmedName);

  return {
    isLengthValid,
    isFormatValid,
    isAvailable,
    isValid: isLengthValid && isFormatValid && isAvailable,
  };
}
