interface User {
    username: string;
    preferred_activities: Set<string>;
}

interface UserData {
    users: User[];
}

const jsonData: UserData = require('./UserInputs.json'); // Assuming the JSON file is named data.json and is in the same directory

const users: User[] = jsonData.users;

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

function stringSet(set1: Set<string>){
    var output: string = "";
    // for (let i = 0; i < set1.size; i++) {
    //     output += set1[i] + " ";
    // }
    set1.forEach(value=>{
        output += value + "\n";
    });
    return output;
}

export function processUserInputs(userInputs: any): any {
    var result: Set<string> = new Set([]);
    var inputsVec: string[] = userInputs.activities.split(", ");
    var inputs:Set<string> = new Set(inputsVec);
    console.log(inputs);
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
    return "result: " + stringSet(newResult);
}