import { Header } from "./components/Header";
import { Post } from "./post";

import styles from './App.module.css';

import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <div>
      <Header />
      

      <div className={styles.wrapper}>
      <Sidebar/>

        <main>
          <Post
            author="Guilherme Oliveira"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime voluptas minima deserunt"
        />

          <Post
            author="Flavia Romero"
            content="Um novo post"
          />
        </main>
      </div>
    </div>
  )
}

