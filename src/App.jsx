import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from './components/Post';

import "./global.css";
import styles from './App.module.css';
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Fulano"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eius consectetur, nobis repellat fugiat porro laborum ad reiciendis? 
            Voluptatum ipsum cum ipsam perferendis voluptatem labore perspiciatis 
            aliquam dolorum velit, illo exercitationem!"
          />
          <Post
            author="Fulano Two"
            content="Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Eius consectetur, nobis repellat 
            fugiat porro laborum ad reiciendis? Voluptatum ipsum cum ipsam 
            perferendis voluptatem labore perspiciatis aliquam dolorum velit, 
            illo exercitationem!"
          />
        </main>
      </div>
    </div>
  );
}
