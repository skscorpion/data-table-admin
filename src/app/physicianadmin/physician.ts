/* Defines the product entity */
export interface IPhysician {
    npi: number;
    firstName: string;
    lastName: string;
    address: string;
    state: string;
    zipcode: string;
    isUpdated: boolean;
}
