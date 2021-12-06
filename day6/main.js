const input = '2,1,1,4,4,1,3,4,2,4,2,1,1,4,3,5,1,1,5,1,1,5,4,5,4,1,5,1,3,1,4,2,3,2,1,2,5,5,2,3,1,2,3,3,1,4,3,1,1,1,1,5,2,1,1,1,5,3,3,2,1,4,1,1,1,3,1,1,5,5,1,4,4,4,4,5,1,5,1,1,5,5,2,2,5,4,1,5,4,1,4,1,1,1,1,5,3,2,4,1,1,1,4,4,1,2,1,1,5,2,1,1,1,4,4,4,4,3,3,1,1,5,1,5,2,1,4,1,2,4,4,4,4,2,2,2,4,4,4,2,1,5,5,2,1,1,1,4,4,1,4,2,3,3,3,3,3,5,4,1,5,1,4,5,5,1,1,1,4,1,2,4,4,1,2,3,3,3,3,5,1,4,2,5,5,2,1,1,1,1,3,3,1,1,2,3,2,5,4,2,1,1,2,2,2,1,3,1,5,4,1,1,5,3,3,2,2,3,1,1,1,1,2,4,2,2,5,1,2,4,2,1,1,3,2,5,5,3,1,3,3,1,4,1,1,5,5,1,5,4,1,1,1,1,2,3,3,1,2,3,1,5,1,3,1,1,3,1,1,1,1,1,1,5,1,1,5,5,2,1,1,5,2,4,5,5,1,1,5,1,5,5,1,1,3,3,1,1,3,1';
const inputArr = input.split(/,/g).map(input => +input);
const inputObj = Array(9).fill(null, 0, 9).map((input, index) => inputArr.reduce((pv, cv) => (cv === index ? pv + 1 : pv), 0));

const result = (taskNumber) => {
    const days = taskNumber === 1 ? 80 : 256;
    let fish = inputObj;

    for (let i=0; i<days; i++) {
        let newFish = [];
        fish.forEach((input, index) => {
            if (index !== 0) {
                newFish[index - 1] = input;
            }
        });
        newFish[8] = fish[0];
        newFish[6] += fish[0];
        fish = newFish;
    }
    return fish.reduce((pv, cv) => pv + cv, 0);
}

const result1 = result(1);
const result2 = result(2);
