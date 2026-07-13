export interface LoginResponseOwnerDto{

    owner: {
        id: number;
        email: string;
    }

    accessToken: string;

}