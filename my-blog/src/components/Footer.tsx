import { useContext } from "react";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";

export default function Footer() {
  const context = useContext(ThemeContext);
  console.log(context);
  return (
    <footer>
      <Link to="/posts/new">글쓰기</Link>
      <Link to="/posts">게시글</Link>
      <Link to="/profile">프로필</Link>

      <>
        {context.theme === "light" ? (
          <BsSun onClick={context.toggleMode} className="footer__theme-btn" />
        ) : (
          <BsMoonFill
            onClick={context.toggleMode}
            className="footer__theme-btn"
          />
        )}
      </>
    </footer>
  );
}
