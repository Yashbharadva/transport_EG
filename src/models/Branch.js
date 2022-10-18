export default class Branch {
    constructor(branch = {}) {
        this.branchId = branch.branch_id;
        this.branchName = branch.branch_name;
    }
    setBranch = (branch) => {
    	this.branchId = branch.branch_id,
    	this.branchName = branch.branch_name;
    };
    getApiData = () => {
        return {
            branch_id: this.branchId,
 			branch_name: this.branchName,
        }
    }
}