interface User {
    username: string;
    preferred_activities: Set<string>;
}

interface UserData {
    users: User[];
}

const jsonData: UserData = require('./UserInputs.json'); // Assuming the JSON file is named data.json and is in the same directory

const users: User[] = jsonData.users;

// users.forEach(user => {
//     console.log(`Username: ${user.username}`);
//     console.log("Preferred Activities:");
//     user.preferred_activities.forEach(activity => {
//         console.log(activity);
//     });
//     console.log("--------------");
// });

function difference(set1: Set<string>, set2: Set<string>): Set<string> {
    const differenceSet = new Set<string>();
    set1.forEach(value =>{
        if (!set2.has(value)) {
            differenceSet.add(value);
        }
    });
    return differenceSet;
}

function union(set1: Set<string>, set2: Set<string>): Set<string> {
    const result = new Set<string>();

    set1.forEach((value) => {
        result.add(value);
    });

    set2.forEach((value) => {
        result.add(value);
    });

    return result;
}

export function processUserInputs(userInputs: any): any {
    var result: Set<string> = new Set([]);
    var inputs: Set<string> = new Set([userInputs.activity1, userInputs.activity2]);
    users.forEach(user => {
        var commonTerms: number = 0;
        user.preferred_activities.forEach(activity => {
            if (inputs.has(activity)){
                commonTerms += 1;
            }
        });
        if (commonTerms >= inputs.size) {
            result = union(result, user.preferred_activities);
            console.log(result);
        }
        
        console.log("--------------");
    });
    var newResult: Set<string> = difference(result, inputs);
    console.log(newResult);
    return "result: " + userInputs.activity1 + userInputs.activity2;
}