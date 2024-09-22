// import { Name } from "src/@core/common/domain/value-objects/name.vo";
import { Uuid } from "src/@core/common/domain/value-objects/uuid.vo";
import { AggregateRoot } from "../../../common/domain/aggregate-root";
import Cpf from "src/@core/common/domain/value-objects/cpf.vo";

export class CustomerId extends Uuid {}

export type CustomerConstructorProps = {
    id?: CustomerId | string;
    cpf: Cpf;
    name: string;
}

export class Customer extends AggregateRoot{
    id: CustomerId;
    cpf: Cpf;
    name: string;

    // O Construtor inicializa a entidade
    constructor(props: CustomerConstructorProps) {
        super();
        this.id = typeof props.id === 'string' ? new CustomerId(props.id) : props.id ?? new CustomerId();
        this.cpf = props.cpf;
        this.name = props.name;
    }

    // Este create objetiva realmente persistir os dados
    static create(command: {name: string; cpf: string}){
        return new Customer({
            name: command.name,
            cpf: new Cpf(command.cpf)
        });
    }


    // Esse método teria um objetivo semelhante com o toString, para conseguir fazer logs e etc
    toJSON() {
        return {
            id: this.id,
            cpf: this.cpf,
            name: this.name,
        }
    }


}

