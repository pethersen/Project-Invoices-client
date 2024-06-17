import React from "react";
import {Link} from "react-router-dom";

const PersonTable = ({label, items, deletePerson}) => {
    return (
        <div>
            <p>
                {label} {items.length}
            </p>

            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Firma</th>
                    <th>IČO</th>
                    <th>DIČ</th>
                    <th colSpan={3}>Akce</th>
                </tr>
                </thead>
                <tbody>
                {items.map((item, index) => (
                    <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.identificationNumber}</td>
                        <td>{item.taxNumber}</td>
                        <td>
                            <div className="btn-group">
                                <Link
                                    to={"/persons/show/" + item._id}
                                    className="btn btn-sm btn-info"
                                >
                                    Zobrazit
                                </Link>
                                <Link
                                    to={"/persons/edit/" + item._id}
                                    className="btn btn-sm btn-warning"
                                >
                                    Upravit
                                </Link>
                                <button
                                    onClick={() => deletePerson(item._id)}
                                    className="btn btn-sm btn-danger"
                                >
                                    Odstranit
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Link to={"/persons/create"} className="btn btn-success me-1">
                Nová firma
            </Link>
            <Link to={"/persons/statistics"} className="btn  btn-warning">
                Statistika firem
            </Link>
        </div>
    );
};

export default PersonTable;
