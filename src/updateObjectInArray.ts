const updateObjectInArray = <ObjectShape>(
    initialArray: ObjectShape[], 
    key: keyof ObjectShape, 
    value: ObjectShape[keyof ObjectShape], 
    patch: Partial<ObjectShape>
    ): ObjectShape[] => {
    let newArray = [ ...initialArray ];

    newArray = newArray.map(obj => {
        if(obj[key] === value)
            return {
                ...obj,
                ...patch
            }
        else
            return obj;
    })

    return newArray;
}

export default updateObjectInArray;