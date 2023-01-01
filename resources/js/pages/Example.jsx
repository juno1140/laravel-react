import React from 'react';
import {Link} from "react-router-dom";

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                        <Link className="btn btn-primary" to="/">Homeに遷移</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;