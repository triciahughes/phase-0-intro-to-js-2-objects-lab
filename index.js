// Write your solution in this file!
const employee = {
    name: "name value",
    streetAddress: "address value",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj) {
   let newEmployee = {...obj};
   delete newEmployee.name;
   return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(obj) {
    delete obj.name;
    return obj;
}