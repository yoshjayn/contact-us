import styles from "./Nav.module.css";

const Nav = () => {
    console.log("YOSH",styles); 
return (
<nav className={`${styles.navigation} container`}>
    <div className="logo">
        <img src="/images/logo.png" />
    </div>
<ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
</ul>
</nav>
);
};

export default Nav;
