// plans.ts

export const planPricing = {
  starter: {
    monthly: 2000,
    quarterly: 5000,
    biannual: 9000,
    annual: 16500,
  },
  syncPlus: {
    monthly: 5000,
    quarterly: 13000,
    biannual: 25000,
    annual: 48000,
  },
  syncPro: {
    monthly: 13000,
    quarterly: 30000,
    biannual: 58000,
    annual: 110000,
  },
};

export const freePlanData = {
  title: "Free Plan",
  price: {
    amount: "0",
    currency: "₦",
    period: "Month",
  },
  features: [
    { name: "1 User", available: true },
    { name: "50 Orders", available: true },
    { name: "No Attendant", available: true },
    { name: "Unlimited Sales", available: true },
    { name: "200 Inventory", available: true },
    { name: "100 Customers per Month", available: true },
    { name: "Track Income & Expenses", available: true },
    { name: "Supplier Management", available: true },
    { name: "In-Store Checkout Software (Point of Sale)", available: true },
    { name: "Bulk SMS/Emails", available: true },
    { name: "Wallet", available: true, comingSoon: true },
  ],
  backgroundColor: "bg-amber-50",
  buttonText: "Choose Plan",
};

export const starterPlanData = {
  title: "Starter Plan",
  price: {
    amount: planPricing.starter.monthly.toString(),
    currency: "₦",
    period: "Month",
  },
  features: [
    { name: "1 User", available: true },
    { name: "No Attendant", available: true },
    { name: "Unlimited Sales", available: true },
    { name: "200 Inventory", available: true },
    { name: "100 Customers per Month", available: true },
    { name: "Track Income & Expenses", available: true },
    { name: "Supplier Management", available: true },
    { name: "In-Store Checkout Software (Point of Sale)", available: true },
    { name: "Bulk SMS/Emails", available: true },
    { name: "Wallet", available: true, comingSoon: true },
  ],
  backgroundColor: "bg-amber-50",
  buttonText: "Choose Plan",
};

export const syncPlusPlanData = {
  title: "Sync Plus Plan",
  price: {
    amount: planPricing.syncPlus.monthly.toString(),
    currency: "₦",
    period: "Month",
  },
  features: [
    { name: "1 User", available: true },
    { name: "5 Attendant", available: true },
    { name: "Unlimited Sales", available: true },
    { name: "Unlimited Customer Registration", available: true },
    { name: "1000 Inventory Products", available: true },
    { name: "100 Customers per Month", available: true },
    { name: "Track Income & Expenses", available: true },
    { name: "Automated Bank Expense Tracking", available: true },
    { name: "Supplier Management", available: true },
    { name: "In-Store Checkout Software (Point of Sale)", available: true },
    { name: "Bulk SMS/Emails", available: true },
    { name: "Wallet", available: true, comingSoon: true },
    { name: "Unlimited Invoice", available: true, comingSoon: true },
  ],
  backgroundColor: "bg-[#B4CBB4]",
  buttonText: "Choose Plan",
};

export const syncProPlanData = {
  title: "Sync Pro Plan",
  price: {
    amount: planPricing.syncPro.monthly.toString(),
    currency: "₦",
    period: "Month",
  },
  features: [
    { name: "2 User", available: true },
    { name: "10 Attendant", available: true },
    {
      name: "Up to 3 Outlets additional store attracts ₦20000",
      available: true,
    },
    { name: "Unlimited Sales", available: true },
    { name: "Unlimited Customer Registration", available: true },
    { name: "2500 Inventory Products", available: true },
    { name: "100 Customers per Month", available: true },
    { name: "Track Income & Expenses", available: true },
    { name: "Automated Bank Expense Tracking", available: true },
    { name: "Supplier Management", available: true },
    { name: "In-Store Checkout Software (Point of Sale)", available: true },
    { name: "Bulk SMS/Emails", available: true },
    { name: "Wallet", available: true, comingSoon: true },
    { name: "Unlimited Invoice", available: true, comingSoon: true },
  ],
  backgroundColor: "bg-[#9595B8]",
  buttonText: "Choose Plan",
};
