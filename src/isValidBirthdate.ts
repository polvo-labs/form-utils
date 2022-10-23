export function isValidBirthdate(date: Date) {
  const options = { minAge: 0, maxAge: 120 };
  const now = new Date();
  const diff = now.getFullYear() - date.getFullYear();

  return (
    date < now && diff >= options.minAge && diff <= options.maxAge
  );
}
