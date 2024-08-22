import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks";

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
  confirmPassword: {
    required: true,
    type: "compare",
    min: 8,
    max: 50,
    ref: "password",
  },
  address: {
    type: "string",
  },
  additionalAddress: {
    type: "string",
  },
  contact: {
    type: "string",
  },
  contact: {
    type: "string",
  },
  termsOfUse: {
    required: true,
  },
};
const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
  address: "",
  additionalAddress: "",
  contact: "",
  termsOfUse: false,
};
export const RegisterPage = () => {
  const navigate = useNavigate();
  const form = useForm(initialState, validation);

  console.log(form.errors);

  const onRegister = (e) => {
    e.preventDefault();
    form.onSubmit((val) => {
      console.log(val);
      form.reset();
    });
  };
  console.log(form.isValid);

  return (
    <main>
      <div className="flex justify-center items-center py-20">
        <div className="flex flex-col gap-10 w-1/4 min-w-80">
          <h1 className="text-[#0565bb] text-5xl font-bold text-center">
            Welcome!
          </h1>

          <form action="" onSubmit={onRegister} className="flex flex-col gap-5">
            <div className="border-t-2 border-[#222222] w-full"></div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold">아이디(이메일) *</span>
              <input
                type="email"
                value={form.values.email}
                onChange={(e) => form.onChange("email", e.target.value)}
                onFocus={() => form.onFocus("email")}
                onBlur={() => form.onBlur("email")}
                placeholder="example@email.com"
                className="w-full border border-[#a1a1a1] p-2 focus-visible:outline-none focus-visible:border-stone-800 rounded-sm"
              />
              {form.errors?.email && (
                <span className="text-red-500 text-sm">
                  {form.errors.email}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold">비밀번호 *</span>
              <input
                type="password"
                value={form.values.password}
                onChange={(e) => form.onChange("password", e.target.value)}
                onFocus={() => form.onFocus("password")}
                onBlur={() => form.onBlur("password")}
                placeholder="영문, 숫자, 특수문자를 포함한 8~12자리"
                className="w-full border border-[#a1a1a1] p-2 focus-visible:outline-none focus-visible:border-stone-800 rounded-sm"
              />
              {form.errors?.password && (
                <span className="text-red-500 text-sm">
                  {form.errors.password}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold">비밀번호 확인 *</span>
              <input
                type="password"
                value={form.values.confirmPassword}
                onChange={(e) =>
                  form.onChange("confirmPassword", e.target.value)
                }
                onFocus={() => form.onFocus("confirmPassword")}
                onBlur={() => form.onBlur("confirmPassword")}
                placeholder=""
                className="w-full border border-[#a1a1a1] p-2 focus-visible:outline-none focus-visible:border-stone-800 rounded-sm"
              />
              {form.errors?.confirmPassword && (
                <span className="text-red-500 text-sm">
                  {form.errors.confirmPassword}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold">주소</span>
              <div className="relative">
                <input
                  type="text"
                  value={form.values.address}
                  onChange={(e) => form.onChange("address", e.target.value)}
                  onFocus={() => form.onFocus("address")}
                  onBlur={() => form.onBlur("address")}
                  placeholder=""
                  className="w-full border border-[#a1a1a1] p-2 focus-visible:outline-none focus-visible:border-stone-800 rounded-sm"
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[#659bf5] font-semibold">
                  검색
                </span>
              </div>
              {form.errors?.address && (
                <span className="text-red-500 text-sm">
                  {form.errors.address}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="text"
                value={form.values.additionalAddress}
                onChange={(e) =>
                  form.onChange("additionalAddress", e.target.value)
                }
                onFocus={() => form.onFocus("additionalAddress")}
                onBlur={() => form.onBlur("additionalAddress")}
                placeholder="추가 주소"
                className="w-full border border-[#a1a1a1] p-2 focus-visible:outline-none focus-visible:border-stone-800 rounded-sm"
              />
              {form.errors?.additionalAddress && (
                <span className="text-red-500 text-sm">
                  {form.errors.additionalAddress}
                </span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold">연락처</span>
              <input
                type="text"
                value={form.values.contact}
                onChange={(e) => form.onChange("contact", e.target.value)}
                onFocus={() => form.onFocus("contact")}
                onBlur={() => form.onBlur("contact")}
                placeholder=""
                className="w-full border border-[#a1a1a1] p-2 focus-visible:outline-none focus-visible:border-stone-800 rounded-sm"
              />
              {form.errors?.contact && (
                <span className="text-red-500 text-sm">
                  {form.errors.contact}
                </span>
              )}
            </div>
            <div className="border-t-2 border-[#222222] w-full mt-5"></div>
            <div className="flex flex-col gap-2 mb-5">
              <div className="flex flex-row justify-end items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.values.termsOfUse}
                  onChange={(e) => {
                    form.onChange("termsOfUse", !form.values.termsOfUse);
                  }}
                  onBlur={() => form.onBlur("termsOfUse")}
                  onFocus={() => form.onFocus("termsOfUse")}
                />
                <p className="font-semibold text-sm">
                  <span className="text-[#659bf5]">이용약관</span> 및{" "}
                  <span className="text-[#659bf5]">개인정보 처리 방침</span>에
                  동의합니다. (필수)
                </p>
              </div>
              {form.errors?.termsOfUse && (
                <p className="text-red-500 text-sm text-end">
                  {form.errors.termsOfUse}
                </p>
              )}
              <div className="flex flex-row justify-end items-center gap-2">
                <input type="checkbox" />
                <span className="font-semibold text-sm">
                  광고 및 메일 수신에 동의합니다. (선택)
                </span>
              </div>
            </div>

            <button
              type="submit"
              disabled={form.isValid}
              className={`bg-[#0565bb] p-3 text-white hover:bg-[#0566bbdf] active:bg-[#0566bbb6] ${
                form.isValid
                  ? "bg-slate-400 hover:bg-slate-400 active:bg-slate-400"
                  : ""
              }`}
            >
              가입하기
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
