export const formatCurrency = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

export const categoryLabel = (categoryId, categories) =>
  categories.find((category) => category.id === categoryId)?.name ?? categoryId;
