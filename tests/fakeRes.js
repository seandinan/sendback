export default class FakeRes {
	constructor(){
		this.status;
	}

	status = (status) => {
		this.status = status;
		return this;
	}

	send = (data) => {
		return null;
	}
}
