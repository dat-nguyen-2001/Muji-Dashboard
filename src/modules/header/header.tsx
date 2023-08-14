import React from 'react';

const Header: React.FC = () => {
    return (
        <nav className="px-10 no-underline border-t-2 border-b-2 border-[#f5f5f5] h-20 flex items-center justify-between">
            <a href="/" className="text-xl font-semibold">
                <img alt='Muji-logo' src='https://www.muji.com/jp/ja/store/static/1.5.2691/media/logo-muji.981d133f.svg' />
            </a>
            <div className="flex-grow px-4 ">
                <input
                    type="text"
                    placeholder="検索..."
                    className="w-full py-2 px-3 mx-auto focus:outline-none border-2 border-gray-300"
                />
            </div>
            <div className="flex h-full">
                <button className="px-4 hover:bg-[#e8e8e8] w-20 text-xs flex flex-col items-center justify-center">
                    <img alt='' src='https://www.muji.com/jp/ja/store/static/1.5.2691/media/icon_person.fdd6d5f4.svg' />
                    <p>ログイン</p>
                </button>
                <button className="px-2 hover:bg-[#e8e8e8] w-20 text-xs flex flex-col items-center justify-center">
                    <img alt='' src='https://www.muji.com/jp/ja/store/static/1.5.2691/media/icon_favorite.f2eab433.svg' />
                    <p>お気に入り</p>
                </button>
                <button className="px-4 hover:bg-[#e8e8e8] w-20 text-xs flex flex-col items-center justify-center">
                    <img alt='' src='https://www.muji.com/jp/ja/store/static/1.5.2691/media/icon_favorite.f2eab433.svg' />
                    <p>カート</p>
                </button>
                <button className="px-4 hover:bg-[#e8e8e8] w-20 text-xs flex flex-col items-center justify-center">
                    <img alt='' src='https://www.muji.com/jp/ja/store/static/1.5.2691/media/icon_support.06a7eed7.svg' />
                    <p>サポート</p>
                </button>
            </div>
        </nav>
    );
};

export default Header;
