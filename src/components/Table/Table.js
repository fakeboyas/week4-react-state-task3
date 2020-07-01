import React, { Component } from "react";

import TableHead from "../TableHead/TableHead";
import TableBody from "../TableBody/TableBody";

class Table extends Component {
    render() {
        let dataTable = this.props.students.map((data, index) => {
            return (
                <TableBody
                    key={index}
                    name={data.name}
                    age={data.age}
                    address={data.address}
                    sex={data.sex}
                />
            );
        });
        return (
            <div>
                <table>
                    <TableHead />
                    {dataTable}
                </table>
            </div>
        );
    }
}

export default Table;
