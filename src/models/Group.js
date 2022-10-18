import Transporter from 'Models/Transporter';
export default class Group {
    constructor(group={}) {
        this.id = group.id;
        this.name=group.name;
        this.branch_Id=group.branch_id;
        this.transporters = (group.transporters || []).map((transporter)=> {
            return new Transporter(transporter);
        });
        this.selectedTransporters = group.selectedTransporters || []
    }
    setSelectedTransporters = (transporters)=> {
        this.selectedTransporters = transporters;
    };
    getApiData = (group={})=> {
        const computedTransporters = (group && Object.keys(group).length > 0) ? group.transporters : this.transporters;
        return {
            id: this.id,
            name: this.name,
            branch_Id: this.branch_Id,
            transporters: computedTransporters.map((transporter)=> {
                return {
                    id: transporter.id,
                    name:  transporter.name,
                    branch_name: transporter.branchName,
                    branch_id: transporter.branchId
                }
            })
        }
    }
}