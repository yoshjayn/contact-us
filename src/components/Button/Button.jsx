import {MdMessage} from "react-icons/md"; 
import styles from './Button.module.css';

const Button = ({isOutline, icon, text}) => {
return (

<button className={isOutline ? styles.outline_style : styles.primary_style}>
    {icon}
    {text}
</button>
);
};

export default Button;

{/* <button className={props.isOutline ? styles.outline_style : styles.primary_style}>
    {props.icon}
    {props.text} */}