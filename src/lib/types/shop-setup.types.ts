export type ShopSetupStepId = "preferences" | "name" | "bank" | "ready";

export type ShopSetupStepStatus = "completed" | "current" | "upcoming";

export type ShopSetupStep = {
  id: ShopSetupStepId;
  label: string;
  href: string;
};
