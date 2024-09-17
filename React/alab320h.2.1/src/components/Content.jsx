import "../assets/Styles/Content.css";

function Content (props) {
    return <p className = "content-text" style = {{color:props.color}}>
    {props.text}</p>
}

export default Content;