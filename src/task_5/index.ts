/**
 * Задание 5 - Власть банков
 * В этой задаче вам нужно реализовать класс контроллер
 * 1. registerVault(): ISecureVaultRequisites - регистрирует хранилище в банке
 * 2. proceedContract(IContract): void - проводит договор между счетами
 * 3. Класс контроллера должен быть реализацией паттерна Singleton
 *
 * Хранилища должны быть сохранены в массив vaultStore: Vault[]
 */
import { IContract } from "../task_4";
import { ISecureVaultRequisites, Vault } from "../task_3";

export class BankController {
    private static _instance: BankController;
    private readonly _vaultStore: Vault[];
    private constructor(){
        this._vaultStore = [];
    }

    public static get Instance(): BankController {
        return this._instance || (this._instance = new BankController);
    }
    public registerVault(): ISecureVaultRequisites {
        const vault = new Vault();
        this._vaultStore.push(vault);

        return vault;
    }

    public proceedContract(contract: IContract) {
        contract.signAndTransfer();
    }
}
