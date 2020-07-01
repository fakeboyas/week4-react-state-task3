import React from "react";

function TableBody(props) {
    return (
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.sex}</td>
                <td>{props.address}</td>
            </tr>
        </tbody>
    );
}

export default TableBody;
