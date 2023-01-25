import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import PostList from "./components/PostList";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis modi obcaecati odio porro quidem reprehenderit saepe ullam! Alias impedit incidunt repellendundis possimus quisquam libero minima natus necessitatibus numquam quidem unde voluptatibus? Asperiores blanditiis consequatur, corporis cumque dolor, doloremque ducimus eum eveniet harum hic inventore iste magnam modi numquam quasi quia rem rerum sapiente sequi tempore totam velit voluptates! Culpa, molestiae, vitae?'},
        {id: 2, title: 'Javascript 2', body: 'Lorem dignissimos dolor eligendi, eos excepturi hic in iusto libero minima natus necessitatibus numquam quidem unde voluptatibus? Asperiores blanditiis consequatur, corporis cumque dolor, doloremque ducimus eum eveniet harum hic inventore iste magnam modi numquam quasi quia rem rerum sapiente sequi tempore totam velit voluptates! Culpa, molestiae, vitae?'},
        {id: 3, title: 'Javascript 3', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis modi obcaecati odio porro quidem reprehenderit saepe ullam! Alias impedit incidunt repellendus rerum sint. At dolorum earum esse fugit hic minus molestias, sit soluta temporibus totam. Autem eius incidunt labore laboriosam nulla perferendis possimus quisquam quos, reiciendis repellat suscipit, voluptatum? A aliquid aspernatur autem'},
        {id: 4, title: 'Javascript 4', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis modi obcaecati odio porro quidem reprehenderit saepe ullam! Alias impedit incidunt repellee fugit hic minus molestias'},
        {id: 5, title: 'Javascript 5', body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur corporis modi obcaecati odio porro quidem reprehenderit saepe ullam! Alias impedit incidunt repellendus rerum sint. At dolorum earum esse fugit hic minus molestias'}
    ])

  return (
    <div className="App">
        <PostList posts={posts} />
    </div>
  );
}

export default App;
