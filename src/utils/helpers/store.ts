import { type IStoreBaseData } from "@/interfaces/store";

export const getStoreBaseData = <T>(): IStoreBaseData<T> => ({
    isError: false,
    isLoading: false,
    data: undefined
})