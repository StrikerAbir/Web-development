const getStoredData = (localKey) => {
    let data = {};
    const storedData = localStorage.getItem(localKey);
    if (storedData) {
        data=JSON.parse(storedData);
    }
    return data;
}

const addToDB = (idSport) => {
    const data = getStoredData('sports');
    const clickTimes = data[idSport];
    
    if (clickTimes) {
        data[idSport] += 1;
    } else {
        data[idSport] = 1;
    }
    localStorage.setItem('sports', JSON.stringify(data))
}

const addBreakToDb = (min) => {
    localStorage.setItem('break', JSON.stringify(min))
}

export { addToDB,getStoredData,addBreakToDb };