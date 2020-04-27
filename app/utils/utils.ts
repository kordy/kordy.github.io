export const isEmailValid = (email: string): boolean => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);

export const getUniqueNumber = (() => {
  let cnt = 0;
  return () => cnt++
})()

export const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
