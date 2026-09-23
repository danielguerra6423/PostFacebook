import imgPostre from "./../assets/postre-fresas.jpg";
import { useState } from "react";
import CommentForm from "./commentForm";

let Post = () => {
  // Manejo de estado de likes
  let [likes, setLikes] = useState(0);
  let updateLikes = () => setLikes(likes + 1);
  
  //Manejo del botón de comentarios
  let [btnComentarios, setBtnComentarios] = useState(false);
  let isShowComments = () => setBtnComentarios(!btnComentarios);
  // console.log(btnComentarios);
  return (
    <div className="card" style={{ width: '18rem' }}>
      {/* <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8qL1EoNsFu2OqdIZ0q1gi7Zoi8j85aDatMR301sx3g&s=10"} className="card-img-top" alt="..."/> */}

      <div className="card-body">
        <h5 classNameName="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        <img src={imgPostre} className="card-img-top" alt="..." />
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item d-flex justify-content-around">
          <span>❤😂👍 {likes}</span>
          <span>2 mil 💬</span>
        </li>
        <li className="list-group-item d-flex justify-content-around">
          <button className="btn btn-secondary"
            onClick={updateLikes}
          >👍 likes</button>
          <button className="btn btn-secondary" 
              onClick={isShowComments}>
            💬 Comments
          </button>
        </li>
      </ul>
      <div className="card-footer">
         { btnComentarios && <CommentForm /> }
      </div>
    </div>
  );
};
export default Post;
