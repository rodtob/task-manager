export const getFormattedDate = (createdAt: Date) => {
  return createdAt.toLocaleString(undefined, {  
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}