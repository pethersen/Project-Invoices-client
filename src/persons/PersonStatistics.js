import React, {useEffect, useState} from "react";
import {apiGet} from "../utils/api";

const PersonStatistics = () => {

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        apiGet("/api/persons/statistics").then((data) => setPersons(data));
    }, []);

    return (
        <div>
            <h1>Statistika osob</h1>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Jméno</th>
                    <th>Obrat</th>
                </tr>
                </thead>
                <tbody>
                {persons.map((item, index) => (
                    <tr key={index + 1}>
                        <td>{index + 1}</td>
                        <td>{item.personName}</td>
                        <td>{item.revenue} CZK</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PersonStatistics;