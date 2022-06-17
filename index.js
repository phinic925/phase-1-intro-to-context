// Your code here
function createEmployeeRecord(recordArr){
    return {
        firstName: recordArr[0],
        familyName: recordArr[1],
        title: recordArr[2],
        payPerHour: recordArr[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    
}

function createEmployeeRecords(recordArrOfArr){
    return recordArrOfArr.map(arr => createEmployeeRecord(arr))
    
}
function createTimeInEvent(recordArr, dateHour){
    const [date, hour] = dateHour.split(' ')

    const timeInObject = {
        type: 'TimeIn',
       hour: parseInt(hour),
        date: date,
    }
    recordArr.timeInEvents.push(timeInObject)
    return recordArr;


}

function createTimeOutEvent(recordArr,dateHour){
    const timeOutObject = {
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date,
    }
    recordArr.timeOutEvents.push(timeOutObject)
    return recordArr
}


function hoursWorkedOnDate(recordArr,dateHour){
    const timeIn = recordArr.timeInEvents.find
        (dateStamp => dateStamp.date === dateNoHour).hour
    
    const timeOut = recordArr.timeOutEvents.find
    (dateStamp => dateStamp.date === dateNoHour).hour
    const hoursWorked = (timeOut - timeIn)
    return hoursWorked / 100

}
function wagesEarnedOnDate(recordArr,dateHour){
    const hoursWorked = hoursWorkedOnDate(recordArr, dateNoHour)
    const ratePerHour = recordArr.payPerHour
    return (hoursWorked * ratePerHour)
}
    
    function allWagesFor(recordArr){
        const dateWorked = []
        recordArr.timeOutEvents.map
        (dateStamp => dateWorked.push(dateStamp.date))
        const wagesOnDate = dateWorked.map
        (dateStamp => wagesEarnedOnDate(recordArr, dateStamp))
        const payOwned = wagesOnDate.reduce
        ((previousValue, currentValue) => (previousValue + currentValue), 0)
        return payOwned


}
function calculatePayroll(recordArr){
    const totalWagesPerDay = []
    recordArrOfArr.map(arr => {
        allWagesFor(arr)
        const wagesOnDate = arr.timeOutEvents.map
        (dateStamp => wagesEarnedOnDate(arr, dateStamp.date))
        const employeesWages = wagesOnDate.reduce
        ((previousValue, currentValue) => (previousValue + currentValue), 0)
        totalWagesPerDay.push(employeesWages)
    })
    return totalWagesPerDay.reduce
    ((previousValue, currentValue) => (previousValue + currentValue), 0)



}

