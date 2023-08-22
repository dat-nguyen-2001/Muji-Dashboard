
interface ButtonProps {
    url?: string;
    content?: string
}

const Button = (props: ButtonProps) => {
    const { url, content } = props;
    return (
        <button className={`hover:bg-[#e8e8e8] ${content ? "w-16" : "w-16"} text-xs flex flex-col items-center justify-center`}>
            {url && <img alt='' src={url} />}
            {content && <p>{content}</p>}
        </button>
    );
};

export default Button;
