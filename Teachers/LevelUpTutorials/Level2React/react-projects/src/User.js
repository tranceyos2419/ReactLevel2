import React from 'react';

import { UserContext } from 'Contexts';
import { Button } from 'Elements';

const User = () => (
    <UserContext.Consumer>
        {value => (
            <div>
                <h1>User Info</h1>
                <h3>{value.user.name}</h3>
                <Button onClick={value.logout}>Logout</Button>
                <Button onClick={value.login}>Login</Button>
            </div>
        )}
    </UserContext.Consumer>
);

export default User;
