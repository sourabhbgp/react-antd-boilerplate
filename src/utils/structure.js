import _ from "lodash";

const addKey = data => {
  const DATA = [...data];
  _.map(DATA, (d, i) => (DATA[i].key = ++i));
  return DATA;
};

export { addKey };
