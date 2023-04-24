export interface IHandler {
    handle(): Promise<void>;
}