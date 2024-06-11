import { ITest } from "./test.interface";
import { Test } from "./test.model";

export const addTest = async (test: ITest) => {
 
    const result = await Test.create(test);

    return result;
}

export const getTest = async () => {
    const result = await Test.find();
    return result;
}


