import React from 'react';

import { UserContext } from 'Contexts';

const User = () => (
    <UserContext.Consumer>
        {value => (
            <div>
                <h1>User Info</h1>
                <h3>{value.user.name}</h3>
            </div>
        )}
    </UserContext.Consumer>
);

export default User;
