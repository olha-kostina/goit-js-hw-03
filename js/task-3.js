"use strict";

const findBestEmployee = function(employees) {
    let maxKey = '';
    let maxValue = 0;
    let keys = Object.keys(employees);
    for (const key of keys) {
        if (employees[key] > maxValue) {
            maxValue = employees[key];
            maxKey = key;
        }
    }
    return maxKey;
  };
  
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  );
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  );
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  );