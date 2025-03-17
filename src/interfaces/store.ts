export interface IStoreBaseData<T> {
    isLoading: boolean
    isError: boolean
    data?: T
}