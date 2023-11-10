import { FileHandle } from "./file_handle.model";

export interface Product{
    // productId: number,
    productName:string,
    productDescription:string,
    productActualPrice:number,
    productDiscountedPrice:number,
    productImages:FileHandle[]
}