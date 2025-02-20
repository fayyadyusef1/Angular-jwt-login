export interface ApiResponse {

    code :string ;
    message : string;
    data:Map<string,any>;

}

 
export interface GenericApiResponse<T> {
    code :string ;
    message : string;
    // data:Map<string,any>;
    data:T;
}

