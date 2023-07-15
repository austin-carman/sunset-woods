export const showConfirmation = (setIsConfirmationOpen) => {
  setIsConfirmationOpen(true);
  setTimeout(() => {
    setIsConfirmationOpen(false);
  }, 1500);
};
