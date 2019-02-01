# SendBack

A simple utility for formatting HTTP responses in an Express/Node application.

_Note: This project is under active development. The current version is intended to provide bare-bones functionality. Configuration, additional functionality, and more thorough documentation will follow._

## How to Use

```ecmascript 6
import sendback from 'sendback';

const SendBack = new sendback();

async function fetchUser(req, res){
	const user = await getUserByID(req.body.userID);
	SendBack.success(res, user);
}
```

## Methods
- `config(options)`
- `success(res, data)`
- `unauthorized(res, err, message, data)`
- `methodNotAllowed(res, err, message, data)`
- `invalidContent(res, err, message, data)`
- `unavailable(res, err, message, data)`
- `serverError(res, err, message, data)`
