const getKeys = object => {
  const iter = (o, p) => {
    if (Array.isArray(o)) {
      return;
    }
    if (o && typeof o === "object") {
      const keys = Object.keys(o);
      if (keys.length) {
        keys.forEach(k => iter(o[k], p.concat(k)));
      }
      return;
    }
    const concatKey = p.join(".");
    result[concatKey] = eval("jsonData." + concatKey);
  };
  const result = {};
  iter(object, []);
  return result;
};

console.log(getKeys(jsonData));
