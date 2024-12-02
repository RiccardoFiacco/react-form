import { Row, Container } from "react-bootstrap";
import style from "./Main.module.css";
import { posts } from "../../posts.js";
import { PostCard } from "./PostCard.jsx";
import { useState } from "react";
export function Main() {
  const [, ] = useState('')
  return (
    <div className={[style.bgcolor_lightGrey, style.flex_grow_1].join(" ")}>
      <Container>
        <form>
          <input onChange={(e)=>(e.target.value)} type="text" className="col-4" value={}></input>
          <input onChange={(e)=>(e.target.value)} type="text" className="col-4" value={}></input>
          <input onChange={(e)=>(e.target.value)} type="text" className="col-4" value={}></input>
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
