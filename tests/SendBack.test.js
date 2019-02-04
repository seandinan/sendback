import sendback from './../src/SendBack';
import FakeRes from './fakeRes';

describe('SendBack', () => {
	const SendBack = new sendback();

	it('sends a success message', () => {
		const res = new FakeRes();
		try {
			SendBack.success(res, { data: true });
		} catch(err){ throw err }
	});

	it('allows for custom response definitions', () => {
		const res = new FakeRes();
		try {
			SendBack.defineResponse('locked', 423, 'LOCKED');
			SendBack.locked(res, { test: 'value' });
			console.log(SendBack);
			expect(SendBack.locked).toBeInstanceOf(Function);
		} catch(err){ throw err }
	})
});
