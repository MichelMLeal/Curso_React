import React from 'react';

export class Lista extends React.Component {
    render() {
        return (
            <ul>
                <li>{this.props.informacao}</li>
            </ul>
        )
    }
}
