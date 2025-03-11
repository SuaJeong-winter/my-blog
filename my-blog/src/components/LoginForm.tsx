import { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { app } from "../firebaseApp";
import {
  getAuth,
  getRedirectResult,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";

import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";

export default function LoginForm() {
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("로그인에 성공했습니다.");
      navigate("/");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    if (name === "email") {
      setEmail(value);
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      // 이메일주소의 유효성을 확인하는 패턴식

      if (!value?.match(validRegex)) {
        setError("이메일 형식이 올바르지 않습니다");
      } else {
        setError("");
      }
    }
    if (name === "password") {
      setPassword(value);

      if (value?.length < 8) {
        setError("비밀번호는 8자리 이상 입력해주세요");
      } else {
        setError("");
      }
    }
  };

  const loginSocial = async (socialProvider: string) => {
    const auth = getAuth();
    let provider: GoogleAuthProvider | GithubAuthProvider;
    if (socialProvider === "google") {
      provider = new GoogleAuthProvider();
    } else if (socialProvider === "github") {
      provider = new GithubAuthProvider();
    } else {
      toast.error("지원하지 않는 로그인 방식입니다.");
      return; // 잘못된 값 방지 처리
    }

    try {
      await signInWithPopup(auth, provider);
      toast.success(`${socialProvider} 계정으로 로그인했습니다.`);
      navigate("/");
    } catch (error: any) {
      toast.error(error?.code);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="form form--lg">
        <h1 className="form__title">로그인</h1>
        <div className="form__block">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={onChange}
            value={email}
          />
        </div>
        <div className="form__block">
          <label htmlFor="password">비밀번호 </label>
          <input
            type="password"
            name="password"
            id="password"
            required
            onChange={onChange}
            value={password}
          />
        </div>

        {error && error?.length > 0 && (
          <div className="form__block">
            <div className="form__error">{error}</div>
          </div>
        )}

        <div className="form__block">
          계정이 없으신가요?{" "}
          <Link to="/signup" className="form__link">
            회원가입하기
          </Link>
        </div>
        <div className="form__block">
          <input
            type="submit"
            value="로그인"
            className="form__btn--submit"
            disabled={error?.length > 0}
          />
        </div>
        <div className="form__simple">
          <div className="form__deco-line"></div>
          간편 로그인
          <div className="form__deco-line"></div>
        </div>

        <div className="form__simple">
          <FcGoogle
            className="form__btn-google"
            onClick={() => loginSocial("google")}
          />

          <IoLogoGithub
            className="form__btn-github"
            onClick={() => loginSocial("github")}
          />
        </div>
      </form>
    </>
  );
}
