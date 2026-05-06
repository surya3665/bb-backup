export function validateShopName(shopName: string) {
  return /^[A-Za-z0-9]{4,20}$/.test(shopName);
}
