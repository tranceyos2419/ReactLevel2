import React, { Component } from 'react'
import { ApolloConsumer } from 'react-apollo';

// Changing local state
export default class EditMode extends Component {
    render() {
        const { isEditMode } = this.props;
        return (
            <div>
                <ApolloConsumer>
                    {client => (
                        <button
                            onClick={() => {
                                client.writeData({ data: { isEditMode: !isEditMode } })
                            }}
                        >Toggle Edit Mode</button>
                    )}
                </ApolloConsumer>
            </div>
        )
    }
}
