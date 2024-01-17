import { Header } from "./components/Header";
import { Post } from "./post";
import './styles.css';

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Guilherme Oliveira"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime voluptas minima deserunt itaque numquam quo. Voluptates minima ea adipisci quae iusto a est"
      />

      <Post
        author="Flavia Romero"
        content="Um novo post"
      />
    </div>
  )
}

