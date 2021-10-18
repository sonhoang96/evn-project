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

export const formatPrice = (value) => {
    let val = (value / 1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

export const getMonth = () => {
    let curDate = new Date();
    let curMonth = curDate.getMonth();

    return curMonth + 1;
}
