export const createListMonth = (amount) => {
    let listData = [];
    for (let i = 1; i <= amount; i++) {
        listData.push(`Tháng ${i}`)
    }
    return listData;
}

export const formatPrice = (value) => {
    let val = (value / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

export const getMonth = () => {
    let curDate = new Date();
    let curMonth = curDate.getMonth();

    return curMonth + 1;
}

export const hourToMs = (time) => {
    return Math.floor(time * 216000); //1 hour = 216000 millisecond
}

export const msToHour = (time) => {
    return Number((time / 216000).toFixed(1)); //1 hour = 216000 millisecond
}
