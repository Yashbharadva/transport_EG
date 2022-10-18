import RFQ from '../models/RFQ/index';

export const transformRfq = (rfq) => {
    let newRfqObj = {...rfq};
    newRfqObj.rfq_type = rfq.rfq_type;
    newRfqObj.rfq_number = rfq.rfq_number;
    newRfqObj.trip_details = {
        trips: rfq.list && [...rfq.list, ...rfq.additionalZones] || []
    };
    newRfqObj.rfq_id = rfq.rfq_id;
    newRfqObj.rfq_details = {
        rfq_name: rfq.rfq_name,
        trips_count: rfq.trips_count,
        contract_tenure: {
            from: rfq.contract_tenure_from,
            to: rfq.contract_tenure_to
        },
        service_type: rfq.service_type,
        service_type_name: rfq.service_type_name,
        service_modes: (rfq.service_mode || []).map((mode)=> {return mode.id}),
        insurance_by: rfq.insurance_by,
        bid_complete_count:rfq.bid_complete_count,
        bid_pending_count :rfq.bid_pending_count,
        all_bids_completed :rfq.all_bids_completed,
        bidding_details: {
            is_allow_bidding: rfq.is_allow_bidding,
            is_accept_partial_solution: rfq.is_accept_partial_solution
        },
        bidding_start: rfq.bidding_start,
        bidding_end: rfq.bidding_end,
        floated: rfq.floated,
        floated_by: rfq.floated_by,
        courier_document_details: {
            courier_document_type: rfq.courier_document_type || 2,
            courier_document_name: rfq.courier_document_name || 'Non Document'
        },
        trips_type: rfq.trips_type,
        contract_note: rfq.contract_note,
		courier_bid_status: rfq.courier_bid_status,
        service_category_type: rfq.service_category_type,
        service_category_type_name: rfq.service_category_type_name,
        fuel_type: rfq.fuel_type,
        fuel_name: rfq.fuel_name,
        spot_contract_reason: rfq.spot_contract_reason,
        spot_contract_reason_id: rfq.spot_contract_reason_id

//{
//			  courier_count_of_failed: rfq && rfq.courier_bid_status && ((rfq.courier_bid_status || []).map((count) => { return count.countOfFailed })),
//			  courier_count_of_success: rfq && rfq.courier_bid_status && ((rfq.courier_bid_status || []).map((count) => { return count.countOfSuccess })),
//			  courier_total_count: rfq && rfq.courier_bid_status && ((rfq.courier_bid_status || []).map((count) => { return count.totalCount })),
//			  transporter_id: rfq && rfq.courier_bid_status && ((rfq.courier_bid_status || []).map((count) => { return count.transporter_id })),
//			  courier_bid_message: rfq && rfq.courier_bid_status && ((rfq.courier_bid_status || []).map((count) => { return count.courier_bid_message })),
//        }
    };

    newRfqObj.cargo_info = {
        cargo_details: (rfq.cargo_details || []).map((cargoDetail)=> {return cargoDetail.id}),
        cargo_description: rfq.cargo_description,
        packing_type: rfq.packing_type,
        handling_instructions: rfq.handling_instructions,
        temperature_sensitive: {
            min: rfq.temp_min,
            max: rfq.temp_max,
            unit: rfq.temp_unit,
            name: rfq.temp_name
        },
        product_category: rfq.product_category,
        product_category_name: rfq.product_category_name,
        product_density: rfq.product_density,
        cargo_type: rfq.cargo_type,
        cargo_type_name: rfq.cargo_type_name
    };
    newRfqObj.bidding_and_payments ={
        bidding_span: {
            from: rfq.bidding_start, 
            to: rfq.bidding_end, 
        },

		pricing_basis: rfq.pricing_basis,
		pricing_basis_name: rfq.pricing_basis_name,

		payment_terms: rfq.payment_terms,
        payment_terms_name: rfq.payment_terms_name,

		payment_cycle: rfq.payment_cycle,
		payment_cycle_name: rfq.payment_cycle_name,
        inco_terms: rfq.inco_terms
	};
    newRfqObj.docs_and_transporters = {
        transporters: {
            is_all_transporters: (rfq.transporters || {}).is_all_transporters,
            transporter_details: (rfq.transporters || {}).transporter_details || [],
            groups: (rfq.transporters || {}).groups || []
        },
        docs: rfq.docs
    };
    newRfqObj.activity = rfq.activity;
    newRfqObj.hits = rfq.hits;
    newRfqObj.bids = rfq.bids;
    newRfqObj.vehicleType = rfq.vehicle_type;
    newRfqObj.vehicleTypeName = rfq.vehicle_type_name;
    newRfqObj.courier_common_charges = rfq.otherCharges;
    const rfqNew = new RFQ(newRfqObj);
    return rfqNew;
}

export const formatToINR = (n, decimal = true) => {
    n = n < 0 ? n * -1: n;
    if(typeof n == 'undefined' || n == null) {
        n = 0;
    }
    n = n.toLocaleString(
        'en-IN', {
            maximumFractionDigits: 2,
            style: 'currency',
            currency: 'INR'
        }
    )
    if(!decimal) { // this flag is false if we should not show the decimal points
        n = n.slice(0, -3);
    }
    return n;
};
