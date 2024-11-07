export interface ILoginRequest
{
    email: string;
    password: string;
}

export interface ILoginResponse
{
    AT: string
    RT:string
    data:string
}