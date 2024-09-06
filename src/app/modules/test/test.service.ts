import { ITest } from "./test.interface";
import { Test } from "./test.model";

export const addTest = async (data: any) => {
    const result = await Test.create(data);

    return result;
}

export const getTest = async () => {
    const result = await Test.find();
    return result;
}


