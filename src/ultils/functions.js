//Create list Tháng - result: array
export const createListMonth = (amount) => {
    let listData = [];
    for (let i = 1; i <= amount; i++) {
        listData.push(`Tháng ${i}`)
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

//Format hour to milliseconds - example result: 1h -> 216000
export const hourToMs = (time) => {
    return Math.floor(time * 216000); //1 hour = 216000 millisecond
}

//Format milliseconds to hour
export const msToHour = (time) => {
    return Number((time / 216000).toFixed(1)); //1 hour = 216000 millisecond
}

//Set data to localStorage
export const setDataToLocalStorage = ([...arg1], [...arg2], flag) => {
    //flag is thing to determine exist data in localStorage
    if(flag) {
        console.log(flag)
        window.localStorage.setItem('flag', flag)
    }

    if(arg1[0] === 0 && arg2[0] === 0) return;
    console.log(22323)
    if (arg1.length === arg2.length) {
        for (let i = 0; i < arg1.length; i++) {
            localStorage.setItem(arg1[i], arg2[i]);
        }
        return;
    }
   throw new Error("Tham số truyền vào bị thiếu")
}

//Get data to localStorage
export const getDataToLocalStorage = (...name) => {
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
