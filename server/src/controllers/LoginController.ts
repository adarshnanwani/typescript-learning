import { Request, Response } from 'express';
import { get, controller, bodyValidator, post } from './decorators';


@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div>
          <label>Email:</label>
          <input name="e"/>
        </div>
        <div>
          <label>Password:</label>
          <input name="password" type="password"/>
        </div>
        <button>Submit</button>
      </form>
    `)
  };

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;

    if (email == 'hi@hi.com' && password == '123456') {
      // mark this person as logged input
      req.session = { loggedIn: true };
      // redirect tem to the root route
      res.redirect('/');
    } else {
      res.send('You must provide an email!')
    }
  }

}



