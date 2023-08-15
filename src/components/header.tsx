import React from 'react';
import Button from './button';
import { HeaderIcons, MUJI_LOGO } from '../shared/images.enum';

const Header: React.FC = () => {
    return (
        <nav className="px-10 no-underline border-t-2 border-b-2 border-[#f5f5f5] h-16 md:h-20 flex items-center justify-between">
            <a href="/" className="text-xl font-semibold">
                <img alt='Muji-logo' src={MUJI_LOGO} />
            </a>
            <div className="flex-grow px-4 hidden md:inline">
                <input
                    type="text"
                    placeholder="検索..."
                    className="w-full py-2 px-3 mx-auto focus:outline-none border-2 border-gray-300"
                />
            </div>
            <div className="h-full hidden md:flex">
                <Button url={HeaderIcons.LOGIN} content='ログイン' />
                <Button url={HeaderIcons.FAVORITE} content='お気に入り' />
                <Button url={HeaderIcons.CART} content='カート' />
                <Button url={HeaderIcons.INFO} content='サポート' />
            </div>
            {/* For small devices */}
            <div className="h-full flex md:hidden">
                <Button url={HeaderIcons.LOGIN}/>
                <Button url={HeaderIcons.FAVORITE}/>
                <Button url={HeaderIcons.CART}/>
            </div>
        </nav>
    );
};

export default Header;
