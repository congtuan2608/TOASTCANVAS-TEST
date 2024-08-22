import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks";
import naver_icon from "../../assets/images/naver-icon.png";
import google_icon from "../../assets/images/google-icon.png";
import facebook_icon from "../../assets/images/facebook-icon.png";
import kakao_icon from "../../assets/images/kakao-icon.png";
const validation = {
  email: {
    required: true,
    type: "email",
  },
  password: {
    required: true,
    type: "password",
    min: 8,
    max: 50,
  },
};
const initialState = { email: "", password: "" };

export const LoginPage = () => {
  const navigate = useNavigate();
  const form = useForm(initialState, validation);

  const onLogin = (e) => {
    e.preventDefault();
    form.onSubmit((val) => {
      console.log(val);
    });
  };
  return (
    <main>
      <div className="flex justify-center items-center py-20">
        <div className="flex flex-col gap-10 w-1/4 min-w-80">
          <h1 className="text-[#0565bb] text-5xl font-bold text-center">
            Welcome!
          </h1>
          <form action="" onSubmit={onLogin} className="flex flex-col gap-5">
            <div className="border-t-2 border-[#222222] w-full"></div>
            <div>
              <input
                type="email"
                value={form.values.email}
                onChange={(e) => form.onChange("email", e.target.value)}
                onFocus={() => form.onFocus("email")}
                onBlur={() => form.onBlur("email")}
                placeholder="아이디 (이메일)"
                className="w-full border border-[#a1a1a1] p-2 focus-visible:outline-none focus-visible:border-stone-800 rounded-sm"
              />
              {form.errors?.email && (
                <span className="text-red-500 text-sm">
                  {form.errors.email}
                </span>
              )}
            </div>
            <div>
              <input
                type="password"
                placeholder="비밀번호"
                value={form.values.password}
                onFocus={() => form.onFocus("password")}
                onBlur={() => form.onBlur("password")}
                onChange={(e) => form.onChange("password", e.target.value)}
                className="w-full border border-[#a1a1a1] p-2 focus-visible:outline-none focus-visible:border-stone-800 rounded-sm"
              />
              {form.errors?.password && (
                <span className="text-red-500 text-sm">
                  {form.errors.password}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-[#0565bb] p-3 text-white hover:bg-[#0566bbdf] active:bg-[#0566bbb6]"
            >
              로그인하기
            </button>
          </form>
          <h1 className=" font-bold text-center">SNS 계정으로 로그인</h1>
          <div className="flex flex-row flex-1 justify-center gap-10">
            <img src={naver_icon} className="size-12" />
            <img src={kakao_icon} className="size-12" />
            <img src={facebook_icon} className="size-12" />
            <img src={google_icon} className="size-12" />
          </div>
          <div>
            <button
              onClick={() => navigate("/register")}
              className="bg-transparent p-3 border-2 border-black w-full rounded-sm hover:bg-slate-50 active:bg-slate-200"
            >
              계정이 없으신가요? 간편가입하기
            </button>
          </div>
          <div className="flex flex-row justify-center gap-10">
            <span className="text-sm text-[#1a58f2] cursor-pointer active:text-red-500">
              아이디(이메일)찾기
            </span>
            <span className="text-sm text-[#1a58f2] cursor-pointer active:text-red-500">
              비밀번호 찾기
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};
