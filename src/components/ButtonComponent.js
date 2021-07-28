import React, { Component }  from 'react';
import { Button } from 'reactstrap';

class ButtonComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            <Button color="primary">click here</Button>
        </div>
        );
    }
}

export default ButtonComponent;