import React from 'react';
import InputField from "../components/InputField";
import InputSelect from "../components/InputSelect";

const InvoiceFilter = (props) => {

    const handleChange = (e) => {
        props.handleChange(e);
    };

    const handleSubmit = (e) => {
        props.handleSubmit(e);
    };

    const filter = props.filter;

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col">
                    <InputSelect
                        name="buyerId"
                        items={props.persons}
                        label="odběratel"
                        prompt="nevybrán"
                        value={filter.buyer.id}
                        handleChange={handleChange}
                    />
                </div>
                <div className="col">
                    <InputSelect
                        name="sellerId"
                        items={props.persons}
                        label="dodavatel"
                        prompt="nevybrán"
                        value={filter.seller.id}
                        handleChange={handleChange}
                    />
                </div>
                <div className="col">
                    <InputField
                        type="text"
                        name="product"
                        min="0"
                        label="produkt"
                        prompt="neuvedeno"
                        value={filter.product ? filter.product: ''}
                        handleChange={handleChange}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <InputField
                        type="number"
                        name="minPrice"
                        min="0"
                        label="minimální částka"
                        prompt="neuvedeno"
                        value={filter.minPrice ? filter.minPrice: ''}
                        handleChange={handleChange}
                    />
                </div>
                <div className="col">
                <InputField
                        type="number"
                        name="maxPrice"
                        min="0"
                        label="maximální částka"
                        prompt="neuvedeno"
                        value={filter.maxPrice ? filter.maxPrice: ''}
                        handleChange={handleChange}
                    />
                </div>
                <div className="col">
                <InputField
                    type="number"
                    name="limit"
                    min="1"
                    label="limit počtu fakur"
                    prompt="neuveden"
                    value={filter.limit ? filter.limit : ''}
                    handleChange={handleChange}
                />
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <input
                    type="submit"
                    className="btn btn-secondary float-right mt-2"
                    value={props.confirm}
                    />
                </div>
            </div>
        </form>
    );
}

export default InvoiceFilter;   