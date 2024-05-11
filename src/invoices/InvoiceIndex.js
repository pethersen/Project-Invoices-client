import React, {useEffect, useState} from "react";

import {apiDelete, apiGet} from "../utils/api";

import InvoiceTable from "./InvoiceTable";
import InvoiceFilter from "./InvoiceFilter";

const InvoiceIndex = () => {
    const [invoices, setInvoices] = useState([]);
    const [persons, setPersons] = useState([]);
    const [filter, setFilter] = useState({
        minPrice: undefined,
        maxPrice: undefined,
        product: undefined,
        limit: undefined,
        buyer: {
            _id: undefined
        },
        seller: {
            _id: undefined
        }
        });
    const products = [];

    const deleteInvoice = async (id) => {
        try {
            await apiDelete("/api/invoices/" + id);
        } catch (error) {
            console.log(error.message);
            alert(error.message)
        }
        setInvoices(invoices.filter((item) => item._id !== id));
    };

    useEffect(() => {
        apiGet("/api/invoices").then((data) => setInvoices(data));
        apiGet("/api/persons").then((data) => setPersons(data));
    }, []);

    const handleChange = (e) => {
  
        if (e.target.value === "false" || e.target.value === "true" || e.target.value === '') {
            setFilter(prevState => {
                return {...prevState, [e.target.name]: undefined}
            });
        } else {
            setFilter(prevState => {
                return { ...prevState, [e.target.name]: e.target.value}
            });
        }
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        const params = filter;
      
        const data = await apiGet("/api/invoices", params);
        setInvoices(data);
      };

    return (
        <div>
            <h1>Seznam faktur</h1>
            <hr />
            <InvoiceFilter
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                persons={persons}
                filter={filter}
                confirm="Filtrovat faktury"
            />
      <hr />
            <InvoiceTable
                deleteInvoice={deleteInvoice}
                items={invoices}
                label="Počet faktur:"
            />
        </div>
    );
};
export default InvoiceIndex;