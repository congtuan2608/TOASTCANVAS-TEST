import facebook_icon from "../../assets/images/facebook-icon.png";
import snsicon_03 from "../../assets/images/snsicon-03.png";
import naver_icon from "../../assets/images/naver-icon.png";
export const Footer = () => {
  return (
    <footer className="max-w-12xl m-auto">
      <div className="flex flex-row max-md:flex-col w-full justify-between p-10 border-t border-[#f4f4f4] gap-20 max-sm:gap-5 max-lg:gap-10 max-lg:flex-wrap">
        <div className="flex-1">
          <h1 className="py-5">
            <b className="text-lg">what happened</b>
          </h1>
          <ul>
            <li>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
            <li>[공지] 29CM 강남 스토어 영업 종료</li>
            <li>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
            <li>[공지] iOS 10 이하 버전 지원 중단 안내</li>
            <li>[공지] 개인 정보 처리 방침 변경 사전 안내</li>
          </ul>
        </div>
        <div>
          <h1 className="py-5">
            <b className="text-lg">about us</b>
          </h1>
          <ul>
            <li>회사 소개</li>
            <li>인재 채용</li>
            <li>상시 할인 혜택</li>
          </ul>
        </div>
        <div>
          <h1 className="py-5">
            <b className="text-lg">my order</b>
          </h1>
          <ul>
            <li>내 주문</li>
            <li>주문 배송</li>
            <li>취소 / 교환 / 반품 내역</li>
            <li>상품 리뷰 내역</li>
            <li>증빙 서류 발급</li>
          </ul>
        </div>
        <div>
          <h1 className="py-5">
            <b className="text-lg">my account</b>
          </h1>
          <ul>
            <li>회원 정보 수정</li>
            <li>회원 등급</li>
            <li>마일리지 현황</li>
            <li>쿠폰</li>
          </ul>
        </div>
        <div>
          <h1 className="py-5">
            <b className="text-lg">help</b>
          </h1>
          <ul>
            <li>1 : 1 상담 내역</li>
            <li>상품 Q & A 내역</li>
            <li>공지 사항</li>
            <li>자주하는 질문</li>
            <li>고객의 소리</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between p-10 border-t border-[#f4f4f4] max-md:flex-col gap-y-4">
        <div className="flex flex-col max-sm:gap-2">
          <p className="text-[#a9a9a9] text-sm">
            © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
            사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
          </p>
          <p className="text-[#a9a9a9] text-sm">
            서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
            이용약관 l 개인정보처리방침
          </p>
        </div>
        <div className="flex flex-row flex-1 justify-end gap-10 max-md:justify-center">
          <img src={naver_icon} className="size-8" />
          <img src={facebook_icon} className="size-8" />
          <img src={snsicon_03} className="size-8" />
        </div>
      </div>
    </footer>
  );
};
