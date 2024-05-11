import React, {useEffect, useState} from "react";
import {apiGet} from "../utils/api";

const InvoiceStatistics = () => {

    const [invoice, setInvoice] = useState({});

    useEffect(() => {
        apiGet("/api/invoices/statistics").then((data) => setInvoice(data));
        
    }, []);

    return (
        <div>
            <h1>Statistika faktur</h1>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Bilance za aktuální rok</th>
                        <td>{invoice.currentYearSum}</td>
                    </tr>
                    <tr>
                        <th>Bilance za celé období</th>
                        <td>{invoice.allTimeSum}</td>
                    </tr>
                    <tr>
                        <th>Počet faktur</th>
                        <td>{invoice.invoicesCount}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default InvoiceStatistics;