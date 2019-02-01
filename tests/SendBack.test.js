import sendback from './../src/SendBack';
import FakeRes from './fakeRes';

describe('SendBack', () => {
	const SendBack = new sendback();

	it('sends a success message', () => {
		const res = {};
		try {
			SendBack.success(res, { data: true });
		} catch(err){ throw err }
	});
});
