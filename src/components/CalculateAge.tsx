export default function calculateAge(dateOfBirth: string): number {
  const birthDate = new Date(dateOfBirth);
  const difference = Date.now() - birthDate.getTime();
  const ageDate = new Date(difference);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
