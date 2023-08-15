
interface ButtonProps {
    url?: string;
    content?: string
}

const Button = (props: ButtonProps) => {
    const { url, content } = props;
    return (
        <button className={`px-4 hover:bg-[#e8e8e8] ${content ? "w-[92px]" : "w-16"} text-xs flex flex-col items-center justify-center`}>
            {url && <img alt='' src={url} />}
            {content && <p>{content}</p>}
        </button>
    );
};

export default Button;
