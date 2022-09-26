import './App.css';
import {Link, Routes, Route} from "react-router-dom";
import Todos from "./components/todos/Todos";
import Albums from "./components/albums/Albums";
import Comments from "./components/comments/Comments";
import Posts from "./components/posts/Posts";
/*реалізувати 3 маршрути

    todos - при переході на який тягнуться всі з https://jsonplaceholder.typicode.com/todos

    albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums

    comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
    при натисканні на комментар тягнеться пост, до якого належіить цей коментар всі його пости. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
    id поста взяти з коментаря (postId)

відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.*/

function App() {
  return (
    <div className="App">
      <h3><Link to={'/todos'}>Todos page</Link></h3>
      <h3><Link to={'/albums'}>Albums page</Link></h3>
      <h3><Link to={'/comments'}>Comments page</Link></h3>

        <Routes>
            <Route path={'todos'} element={<Todos/>}/>
            <Route path={'albums'} element={<Albums/>}/>
            <Route path={'comments'} element={<Comments/>}/>
            <Route path={'posts/:postId'} element={<Posts/>}/>
        </Routes>
    </div>
  );
}

export default App;
