import { CommonPages } from "../shared/commonPages.enum";

function Banner() {
    return (
        <div className="flex flex-col text-sm md:text-base px-7 py-5 mx-5 md:mx-16 lg:mx-28 bg-[#f5f5f5]">
            <a className="hover:underline" href={CommonPages.NOTICE_PAGE}>・台風による配送遅延について</a>
            <a className="hover:underline" href={CommonPages.NEWS_PAGE}>・糖質10g以下のお菓子　パスタスナック　アレルギー物質混入による商品回収のお知らせ</a>
        </div>
    );
}

export default Banner;