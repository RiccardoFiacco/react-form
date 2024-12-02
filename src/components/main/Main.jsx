import { Row, Container } from "react-bootstrap";
import style from "./Main.module.css";
import { posts} from "../../posts.js";
import { PostCard } from "./PostCard.jsx";
import { useState } from "react";

 
export function Main() {
  const [title, SetTitle] = useState('')
  const [text, SetText] = useState('')


  function onSubmit(event){
    event.preventDefault();
    if(title === '' && text === ''){
      console.log('vuoto uno dei due')
      return
    }

  }

  return (
    <div className={[style.bgcolor_lightGrey, style.flex_grow_1].join(" ")}>
      <Container>
        <form onSubmit ={onSubmit} action="">
          <input onChange={(e)=>SetTitle((e.target.value).trim())} type="text" className="col-4" value={title} placeholder="inserisci titolo"></input>
          <input onChange={(e)=>SetText((e.target.value).trim())} type="text" className="col-4" value={text} placeholder="inserisci testo"></input>
          <input type="submit" className="col-4"></input>
        </form>
        <Row
          className={[
            style.justify_center,
            style.align_center,
            style.padding_top_50,
          ]}
        >
          {posts.map((el, i) => {
            return (
              el.published && (
                <PostCard
                  key={i}
                  id={el.id}
                  title={el.title}
                  image={el.image}
                  content={el.content}
                  tags={el.tags}
                  published={el.published}
                />
              )
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
