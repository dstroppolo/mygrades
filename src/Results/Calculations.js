export const getValuesByClass = classObject => {
    let assignmentNames = Object.keys(classObject);
    let totalWeight = 0;
    let weightedAverage = 0;
    assignmentNames.forEach( assg => {
        totalWeight += classObject[assg].weight;
        if(classObject[assg].grade){
            let grade = classObject[assg].grade || 0;
            let weight = (classObject[assg].weight)/100 || 0;
            console.log(grade, weight)
            weightedAverage += weight * grade;
        }
    });
    
    let maximum = (100-totalWeight)+weightedAverage;
    return [weightedAverage, totalWeight, maximum];
}

export const formatValuesByClass = valuesArray => {
    //0 is current average, 1 is total weight, 2 is current maximum
    let firstBar = valuesArray[0];
    let secondBar = valuesArray[1] - firstBar;
    let thirdBar = (valuesArray[2])-(secondBar+firstBar);
    return [firstBar, secondBar, thirdBar];
}

export const getGradeBars = dataObject => {

    let classNames = Object.keys(dataObject);
    let data1 = [];
    let data2 = [];
    let data3 = [];
    classNames.forEach( className => {
        let valuesArray = getValuesByClass(dataObject[className]);
        let valuesByClass = formatValuesByClass(valuesArray);
        data1.push((Math.round(valuesByClass[0]*2)/2).toFixed(1));
        data2.push((Math.round(valuesByClass[1]*2)/2).toFixed(1));
        data3.push((Math.round(valuesByClass[2]*2)/2).toFixed(1));
    });
    return [data1, data2, data3];
}