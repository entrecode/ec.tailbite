const environment = Object.fromEntries(
  Object.entries(import.meta.env)
    .filter(([key]) => key.startsWith('VITE_'))
    .map(([key, value]) => {
      return [key.replace('VITE_', ''), value];
    }),
);

export default environment;
