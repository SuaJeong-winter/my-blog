import { useContext, useEffect, useState } from "react";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseApp";
import AuthContext from "../context/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { PostProps } from "./PostList";

export default function PostForm() {
  const params = useParams();
  const [post, setPost] = useState<PostProps | null>(null);
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // 포스트가 기존에 있을 경우
      if (post && post.id) {
        // fireStore로 데이터 수정
        const postRef = doc(db, "posts", post?.id);
        await updateDoc(postRef, {
          title: title,
          summary: summary,
          content: content,
          updatedAt: new Date()?.toLocaleDateString("ko", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }),
        });

        toast?.success("게시글을 수정했습니다");
        navigate(`/post/${post.id}`);
      } else {
        // 기존에 post 데이터가 없다면면
        // firestore데이터 생성
        await addDoc(collection(db, "posts"), {
          title: title,
          summary: summary,
          content: content,
          createAt: new Date()?.toLocaleDateString("ko", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          }), //생성 날짜
          email: user?.email,
          uid: user?.uid,
        });
        toast?.success("게시글을 생성했습니다. ");
        navigate("/");
      }
    } catch (e: any) {
      console.log(e);
      toast?.error(e?.code);
    }
  };

  const onchange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const {
      target: { name, value },
    } = e;

    if (name === "title") {
      setTitle(value);
    }
    if (name === "summary") {
      setSummary(value);
    }
    if (name === "content") {
      setContent(value);
    }
  };

  const getPost = async (id: string) => {
    if (id) {
      const docRef = doc(db, "posts", id);
      const docSnap = await getDoc(docRef);

      setPost({ id: docSnap.id, ...(docSnap.data() as PostProps) });
    }
  };

  useEffect(() => {
    if (params?.id) getPost(params?.id);
  }, [params?.id]);

  useEffect(() => {
    if (post) {
      setTitle(post?.title);
      setSummary(post?.summary);
      setContent(post?.content);
    }
  }, [post]);

  return (
    <>
      <form onSubmit={onSubmit} className="form">
        <div className="form__block">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            onChange={onchange}
            value={title}
          />
        </div>
        <div className="form__block">
          <label htmlFor="summary">요약</label>
          <input
            type="text"
            name="summary"
            id="summary"
            required
            onChange={onchange}
            value={summary}
          />
        </div>
        <div className="form__block">
          <label htmlFor="content">내용</label>
          <textarea
            name="content"
            id="content"
            required
            onChange={onchange}
            value={content}
          />
        </div>
        <div className="form__block">
          <input
            type="submit"
            value={post ? "수정" : "제출"}
            className="form__btn--submit"
          />
        </div>
      </form>
    </>
  );
}
