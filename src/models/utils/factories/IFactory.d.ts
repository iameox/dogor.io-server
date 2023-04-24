export interface IFactory<T1, T2> {
    create(type: T1): T2;
}