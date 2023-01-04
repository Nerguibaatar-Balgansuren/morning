export default function Header ({welcome, title, subtitle}) {
    return (
    <div>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>


    </div>
    );
}