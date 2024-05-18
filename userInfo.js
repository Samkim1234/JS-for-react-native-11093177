// userInfo.js

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        id: index + 1,
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}

// Example usage
const originalNames = ["Ansong", "Bright", "Chris", "Elizabeth", "Daniel"];
const modifiedNames = ["ANSONG", "BRIGHT", "CHRIS", "ELIZABETH", "DANIEL"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
/* Output:
[
  { id: 1, originalName: 'Ansong', modifiedName: 'ANSONG' },
  { id: 2, originalName: 'Bright', modifiedName: 'BRIGHT' },
  { id: 3, originalName: 'Chris', modifiedName: 'CHRIS' },
  { id: 4, originalName: 'Elizabeth', modifiedName: 'ELIZABETH' },
  { id: 5, originalName: 'Daniel', modifiedName: 'DANIEL' }
]
*/

module.exports = { createUserProfiles };
