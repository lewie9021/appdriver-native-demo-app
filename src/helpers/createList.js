const createList = (count) => {
  let result = [];

  for (let i = 0; i < count; i += 1) {
    result.push({
      key: i.toString(),
      text: `Item ${i + 1}`
    });
  }

  return result;
};

export default createList;