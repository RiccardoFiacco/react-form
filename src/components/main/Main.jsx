import { Row, Container } from "react-bootstrap";
import style from "./Main.module.css";
import { posts } from "../../posts.js";
import { PostCard } from "./PostCard.jsx";
export function Main() {
  return (
    <div className={[style.bgcolor_lightGrey, style.flex_grow_1].join(" ")}>
      <Container>
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
