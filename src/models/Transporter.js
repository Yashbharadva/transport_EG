export default class Transporter {
    constructor(transporter={}) {
        this.id = transporter.id || transporter.transporter_id;
        this.name=transporter.name || transporter.transporter_name;
        this.isSelected=transporter.isSelected;
        this.branchId = transporter.branch_id;
        this.isBids = transporter.is_bids;
        this.isPartial= transporter.is_partial;
        this.message= transporter.message;
        this.seenStatus= transporter.seen_status;
        this.branchName= transporter.branch_name;
        this.companyName = transporter.company_name;
        this.logInTime = transporter.log_in_time;
        this.logOutTime =transporter.log_out_time;
        this.is_active= transporter.hasOwnProperty('is_active') ? transporter.is_active : true;
    }
    setIsSelected = (isSelected)=> {
        this.isSelected = isSelected;
    }
    getApiData = ()=> {
        return {
            name: this.name,
            id: this.id,
            branch_name: this.branchName,
            branch_id: this.branchId,
            is_active : (this.is_active === undefined)? true : this.is_active
        }
    }
}