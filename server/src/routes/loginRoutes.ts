import { Request, Response, Router } from 'express';

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined
  }
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email:</label>
        <input name="email"/>
      </div>
      <div>
        <label>Password:</label>
        <input name="password" type="password"/>
      </div>
      <button>Submit</button>
    </form>
  `)
});

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email == 'hi@hi.com' && password == '123456') {
    // mark this person as logged input
    req.session = { loggedIn: true };
    // redirect tem to the root route
    res.redirect('/');
  } else {
    res.send('You must provide an email!')
  }
});

router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `)
  } else {
    res.send(`
    <div>
      <div>You are not logged in</div>
      <a href="/logout">Login</a>
    </div>
  `)
  }
});

router.checkout('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
})

export { router };
