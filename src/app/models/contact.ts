import { Address } from "./address";
import { Country } from "./country";

export class Contact {
  constructor(
    public id?: string,
    public lastname?: string,
    public firstname?: string,
    public email?: string,
    public address?: Address,
    public gender?: string,
    public isMarried?: boolean,
    public country?: Country,
  ) {}
}
