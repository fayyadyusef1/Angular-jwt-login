import { Permission } from "./permission";

export interface Role{

    id?: string;
    Role_Name?: string;
    permissions?:Permission []  ;
}