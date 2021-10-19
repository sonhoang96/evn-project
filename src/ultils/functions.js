
export const createArray = (content, amount) => {
    let listData = [];
    for (let i = 1; i <= amount; i++) {
        let newData = `${content} ${i}`;
        //remove space from begin and end of string
        let trimNewData = newData.trim();
        listData.push(trimNewData);
    }
    return listData;
}

//Convert number - example result: 100000 -> 100.000
export const formatPrice = (value) => {
    let val = (value / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

//Take current month - result: current month
export const getMonth = () => {
    let curDate = new Date();
    let curMonth = curDate.getMonth();

    return curMonth + 1;
}

//Format hour to milliseconds - example result: 1h -> 3600000 milliseconds
export const hourToMs = (time) => {
    return Math.floor(time * 3600000); //1 hour = 3600000 millisecond
}

//Format milliseconds to hour
export const msToHour = (time) => {
    return Number((time / 3600000).toFixed(1)); //1 hour = 3600000 millisecond
}

//Set data to localStorage
export const setDataToLocalStorage = ([...arg1], [...arg2]) => {

    if (arg1.length === arg2.length) {
        for (let i = 0; i < arg1.length; i++) {
            localStorage.setItem(arg1[i], arg2[i]);
        }
        return;
    }
   throw new Error("Tham số truyền vào bị thiếu")
}

//Get data to localStorage
export const getDataFromLocalStorage = (...name) => {
    const arr = {};
    name.map(item =>
        arr[`${item}`] = Number(localStorage.getItem(item))
    );
    return arr
}

//Clear localStorage
export const clearCycles = (...func) => {
    return func.map(item => clearInterval(item));
}
