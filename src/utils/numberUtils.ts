// src/utils/numberUtils.ts

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(amount);
};

export const calculatePercentage = (part: number, whole: number): number => {
  return (part / whole) * 100;
};
