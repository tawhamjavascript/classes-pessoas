class Pessoa {
    protected _nome: string;
    private _idade: number;
    private _dataNascimento: Date;

    constructor (nome: string, idade: number, dataNascimento: Date) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }
    get nome (): string {
        return this._nome;
    }
    set nome(newNome: string) {
        this._nome = newNome;
    }
    get idade(): number {
        return this._idade;
    }
    set idade(newIdade) {
        this._idade = newIdade;
    }
    get dataNascimento(): Date {
        return this._dataNascimento;
    }

    set dataNascimento(newDataNascimento: Date) {
        this._dataNascimento = newDataNascimento;
    }


}