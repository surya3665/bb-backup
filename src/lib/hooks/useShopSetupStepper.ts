import { SHOP_SETUP_STEPS } from "@/lib/constants/shop-setup-steps";
import type {
  ShopSetupStep,
  ShopSetupStepId,
  ShopSetupStepStatus,
} from "@/lib/types/shop-setup.types";

export function useShopSetupStepper(activeStep: ShopSetupStepId) {
  const activeIndex = SHOP_SETUP_STEPS.findIndex((step) => step.id === activeStep);

  return SHOP_SETUP_STEPS.map(
    (step, index): ShopSetupStep & { status: ShopSetupStepStatus } => ({
      ...step,
      status:
        index < activeIndex
          ? "completed"
          : index === activeIndex
            ? "current"
            : "upcoming",
    })
  );
}
