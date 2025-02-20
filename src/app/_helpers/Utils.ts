export function isComplexPassword(password) {
  // Define your validation rules using regular expressions
  const lengthRegex = /^.{8,}$/; // Minimum 8 characters
  const lowercaseRegex = /[a-z]/; // At least one lowercase letter
  const uppercaseRegex = /[A-Z]/; // At least one uppercase letter
  const digitRegex = /\d/; // At least one digit
  const specialCharRegex = /[!@#$%^&*]/; // At least one special character (you can extend this list)

  // Check if the password meets all the rules
  return (
    lengthRegex.test(password) &&
    lowercaseRegex.test(password) &&
    uppercaseRegex.test(password) &&
    digitRegex.test(password) &&
    specialCharRegex.test(password)
  );

}
export function quotationValidator(control) {
  const value = control.value;
  if (value && (value.includes('"') || value.includes("'"))) {
    return { quotation: true };
  }
  return null;
}
export function handleErrors(statusCode: number, statusText: string) {

  switch (statusCode) {
    case 200:
      return "OK !";
    case 201:
      return "Success !";
    case 401:
      return "You are not authorized";
    case 404:
      return "Not found";
    case 409:
      return "Already Exist";
    case 500:
      return "Internal server error";
    case 503:
      return "Server not Available";
    case 504:
      return "Time out";
    default:
      if (statusCode === 0 && statusText === "Unknown Error") {
        return "Network error occurred";
      }
      return "An error occurred";
  }
}

