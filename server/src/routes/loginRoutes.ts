import { Request, Response, Router, NextFunction } from 'express';

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined
  }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403).send('Unauthorized access.')
}

const router = Router();



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
      <a href="/login">Login</a>
    </div>
  `)
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user.');
});

export { router };
