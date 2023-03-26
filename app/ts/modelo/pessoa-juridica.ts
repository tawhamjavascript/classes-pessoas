class PessoaJuridica extends Pessoa{
    private _cnpj: string;

    constructor(nome: string, idade: number, dataNascimento: Date, cnpj: string) {
        super("Jurídica- " + nome, idade, dataNascimento);
        this._cnpj = cnpj;
    }
    get cnpj(): string {
        return this._cnpj;
    }

}