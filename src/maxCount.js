let maxCount;
if (process.env.REACT_APP_MAX_VALUE) maxCount = process.env.REACT_APP_MAX_VALUE;
else maxCount = 1000;

export { maxCount };
