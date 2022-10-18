export default class Bid {
   constructor(bid = {}) {
      this.id = bid.trip_id + bid.order + bid.rfq_id;
      this.rfqId = bid.rfq_id;
      this.tripId = bid.trip_id;
      this.transporterId = bid.transporter_id;
      this.transporterName = bid.transporter_name;
      this.price = bid.price;
      this.priceINR = bid.price_inr;
      this.priceUSD = bid.price_usd;
      this.priceSecondary = bid.price_secondary;
      this.transporterVol = bid.transporter_business_vol || '';
      this.allowBusinessVolume = bid.allowBusinessVolume || false;
      this.showTat = bid.showTat || false;
      this.qbrShowRate = bid.qbrShowRate || false;
      this.originalPrice = bid.original_price || bid.price;
      this.firstBidPrice = bid.first_bid_price || '';
      this.lastBidPrice = bid.last_bid_price || '';
      this.tat = (bid.tat || {}).value + ' ' + (bid.tat || {}).name;
      this.maxTat = bid.max_tat;
      this.weightedAverage = bid.weighted_average;
      this.serviceAvailability = bid.service_availability;
      this.tatObj = bid.tat;
      this.count = bid.count;
      this.colorCode = bid.color_code;
      this.orderText = bid.order_text;
      this.key = bid.key;
      this.challengePrice = bid.challenge_price;
      this.challengePriceINR = bid.challenge_price_inr;
      this.challengePriceUSD = bid.challenge_price_usd;
      this.challengePriceSecondary = bid.challenge_price_secondary;
      this.isCounter = bid.is_counter;
      this.pricingBasis = bid.pricing_basis;
      this.cpState = bid.cp_state;
      this.counterPrice = bid.counter_price;
      this.counterStatus = bid.counter_status;
      this.business_allocation = bid.business_allocation || 0;

      this.isLoiSent = bid.is_loi_sent;
      this.isLoiWithCPSent = bid.is_loi_with_cp_sent;
      this.isAccept = bid.is_accept;

      this.previous = bid.previous;
      this.current = bid.current;
      this.challengePriceDifference = bid.cp_differ || bid.price_differ ;

      this.created = bid.created;

      this.seekerRemarks = bid.seeker_remarks;
      this.providerRemarks = bid.provider_remarks;

      this.seekerInstructions = bid.seeker_instruction;

      this.tripBidEnd = bid.trip_bid_end || 0;
      this.tripCost = bid.trip_cost;
		this.tripCostUsd = bid.trip_cost_usd;
		this.tripCostInr = bid.trip_cost_inr;
      this.tripCostSecondary = bid.trip_cost_secondary;

      this.loiAcceptValidFrom = bid.loi_accept_valid_from;
      this.loiAcceptValidTo = bid.loi_accept_valid_to;

      this.isSentLoiApprover = bid.is_loi_sent_approver;
      this.isLoiApproved = bid.is_loi_sent_approve;

      this.routeCode = bid.routeCode;
      this.transporterCode = bid.transporterCode;

      this.tkResponse = bid.tk_response;
      this.multiModeHeadingCharges = bid.multi_mode_heading_charges || [];
      this.secondarySlabs = bid.slabs || [];
      this.pointOfLoading = bid.point_of_loading;
      this.pointOfDestination = bid.point_of_destination;
      this.estimatedTimeOfDepartureDate = bid.estimated_time_of_departure_date;
      this.estimatedTimeOfArrivalDate = bid.estimated_time_of_arrival_date;
      this.containerFreeDay = bid.container_free_day;
      this.containerDaysHours = bid.container_days_hours;
      this.shippingLineName = bid.shipping_line_name;
      this.bidHistoryStatus = bid.bid_history_status;
      this.remarks = bid.remarks;
      this.providerType = bid.provider_type;
      this.previousMonthProviderName = bid.previous_month_provider;
      this.previousMonthTaskAllocation = bid.previous_month_task_allocation;
      this.slabCost = bid.slab_cost;
      this.slabOrderText = bid.slab_order_text;
      this.slabColorCode = bid.slab_color_code;
      this.baseOrderText = bid.base_order_text;
      this.bid_remarks = bid.bid_remarks;
      // this.productCategoryType = (bid.product_category || {}).product_category_type;
      // this.productCategoryTypeName = (bid.product_category || {}).product_category_type_name;
      this.showCeilingPriceBeforeBidStart = bid.showCeilingPriceBeforeBidStart || false;
      this.bidPriceReduction= bid.bid_price_reduction;
      this.bidReductionDiff=bid.bid_reduction_diff;
      this.isLOICancelled = bid.is_loi_cancelled;
      this.cancelLoiEnableorDisable= bid.cancel_loi_enable_or_disable || false;
      this.minimumCountSendToCancelLoi = bid.minimum_count_send_to_cancel_loi;
      this.cancelLoiSendCount= bid.cancel_loi_send_count || 0;
      this.loiCancelRemark = bid.loi_cancel_remark;
      this.samePriceOrderText = bid.same_price_order_text;
      this.extraCostPerKmPrice = bid.extra_cost_per_km_price;
      this.extra_cost_cp_state = bid.extra_cost_cp_state;
      this.extra_cost_per_km_cp = bid.extra_cost_per_km_cp;
      this.freight_rate_order_text = bid.freight_rate_order_text;
      this.freight_rate_order = bid.freight_rate_order;
      this.sales_volume_price = bid.sales_volume_price;
      this.sumOfProductPrice = bid.sum_of_product_price || '';
      this.bid_approved_emails = bid.bid_approved_emails || [];
      this.bid_approver_emails = bid.bid_approver_emails || [];
      this.approval_matrix = bid.approval_matrix || [];
      this.bid_approved_status = bid.bid_approved_status || [];
      this.ipColorCode = bid.ip_color_code;
      this.ipAddress = bid.ip_address;
      this.isWithDrawBid=bid.is_withdraw_bid;
      this.isAccessBidWithdrawn = bid.is_access_bid_withdrawn;
      this.zone = bid.zone;
      this.depo_name = bid.depo_name;
      this.total_price = bid.total_price;
      this.lot_trip_parent_id = bid.lot_trip_parent_id;
      this.sum_order_text = bid.sum_order_text;
      this.sum_order = bid.sum_order;
      this.product_volume_price = bid.product_volume_price;
      this.liner_id = bid.liner_id;
   }
}
