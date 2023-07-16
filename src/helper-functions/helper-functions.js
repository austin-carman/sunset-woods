// Show confirmation message for specified amount of time
export const showConfirmation = (setIsConfirmationOpen) => {
  setIsConfirmationOpen(true);
  setTimeout(() => {
    setIsConfirmationOpen(false);
  }, 1500);
};
