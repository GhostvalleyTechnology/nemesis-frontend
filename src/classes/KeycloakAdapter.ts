class KeycloakUser {
    name: string;
    userInfo: any;
    constructor(userInfo: any) {
        this.userInfo = userInfo;
        this.name = userInfo.preferred_username;
        if(userInfo.given_name) {
            this.name = userInfo.given_name;
        }
    }
}

export {}