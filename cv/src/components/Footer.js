export default function Footer(props) {
    return (
        <footer>
            <p>Copyright {props.date.getFullYear()}</p>
        </footer>
    )
}