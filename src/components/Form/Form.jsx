import Button from '../Button/Button';
import styles from './Form.module.css';
import {MdCall, MdMessage} from "react-icons/md";
import{ useState } from "react";

const Form = () => {
    const[name, setName]=useState("Anshu");
    const[email, setEmail]=useState("start@freelancing.com");
    const[text, setText]=useState("learn with kannu chinese");

    const onSubmit=(event) =>{
        event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    };
return (
<section className={styles.container}>
<div className={styles.form}>
    <div className={styles.top}>
    <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
    <Button text="VIA CALL" icon={<MdCall  fontSize="24px"/>}/>    
</div>
    <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdCall  fontSize="24px"/>}/>
<form onSubmit={onSubmit}>
    <div className={styles.form_control}>
        <label htmlFor='name'>Name</label>
        <input type="text" name="name" />
    </div>
    <div className={styles.form_control}>
        <label htmlFor='email'>E-Mail</label>
        <input type="text" name="email" />
    </div>
    <div className={styles.form_control}>
        <label htmlFor='text'>TEXT</label>
        <textarea name="text" rows="5" />
    </div>
    <div style={{display:"flex", justifyContent:"end"}}>
    <Button text="SUBMIT BUTTON" />
    </div>
    <div>{name + " " + email + " " + text}</div>
</form>
</div>
<div className={styles.image}>
    <img src="/images/hero-img.svg" />
</div>
</section>
)
}

export default Form;
