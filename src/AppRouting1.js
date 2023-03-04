import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import About from "./pages/about-faqs/About";
import ProfilePage from "./pages/profile/ProfilePage";
import TaskPage from "./pages/tasks/TaskPage"
import TaskDetailPage from "./pages/tasks/TaskDetailPage";

function AppRouting1() {
  return (
    <Router>
        <aside>
          <Link to="/">|| HOME |</Link>
          <Link to="/about">| ABOUT |</Link>
          <Link to="/404">| 404 |</Link>
          <Link to="/faqs">| FAQs ||</Link>
        </aside>
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/(about|faqs)" component={About} />
            <Route path="/profile" component={ProfilePage} />
            <Route path='/tasks' component={TaskPage}/>
            <Route path='/task/:id' component={TaskDetailPage}/>





            {/* Éste debe estar siempre al final - Pagina no encontrada */}
            <Route component={NotFoundPage} />
          </Switch>
        </main>
    </Router>
  );
}

export default AppRouting1;
