import React,{useState,useEffect} from 'react';
import Modal from '../../modal'
import InputGroup from '../../form/InputGroup'; 
import CheckGroup from '../../form/CheckGroup'

function Login({type}) {
    const [open,setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    let cls = type === 'primary' ? "btn-outline btn-outline-primary" : "btn-outline btn-outline-white";
    return (
        <>
            <button 
                onClick={()=>onOpen()}
                className={cls} >
                    Log in
            </button>
            <Modal  
                open={open}
                onModalClose = {onClose}
                width={"400px"}
            >
                <LoginForm />
            </Modal>
        </>
    )
}

const LoginForm = ()=>{
    const [loginType,setLoginType] = useState('login');
    const changeLoginType = (type) => setLoginType(type)
    return(
        <div className="login">
            <div className="login-logo">
                <span className="icon-delivery-logo"></span>
            </div>
            {
                loginType === 'sign' ? 
                <SignInputs />
                : 
                loginType === 'password' ?
                <PasswordInputs />
                :
                <LoginInputs changeLoginType={changeLoginType} />
            }
            <div className="login-terms">
                {
                    loginType === 'sign' ?
                    <p>
                        Already have an account? 
                        <a 
                            onClick={()=>changeLoginType('login')}
                            className="link-text"> 
                                Log in here
                        </a> 
                    </p>
                    :
                    <p>
                        New to delivery.com? 
                        <a 
                            onClick={()=>changeLoginType('sign')}
                            className="link-text"> 
                                Signup here
                        </a> 
                    </p>
                }

            </div>
        </div>
    )
}

const PasswordInputs = () =>{
    const [email,setEmail] = useState('');
    const onChange = (e) =>{
        const {name,value} = e.target;
        if(name === 'email'){
            setEmail(value)
        }
    }
    return(
        <>
            <div className="login-title">
                <h3>Need to reset your password?</h3>
            </div>
            <div className="login-subtitle">
                <p>Enter your email address below</p>
            </div>
            <form className="login-form">
                <InputGroup 
                    name="email"
                    onChange={onChange}
                    value={email}
                    placeholder="Email Address"
                />
                <button className="btn btn-primary btn-block">
                    Submit
                </button>
                <button className="btn btn-white btn-block">
                    cancel
                </button>
            </form>
        </>
    )
}


const LoginInputs = ({changeLoginType}) =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [logged,setLogged] = useState(false);

    const onChange = (e) =>{
        const {name,value} = e.target;
        if(name === 'email'){
            setEmail(value)
        }
        if(name === 'password'){
            setPassword(value)
        }
        if(name === 'logged'){
            setLogged(value)
        }
    }
    return(
        <>
            <div className="login-title">
                <h3>Log in to your account</h3>
            </div>
            <form className="login-form">
                <InputGroup 
                    name="email"
                    onChange={onChange}
                    value={email}
                    placeholder="Email Address"
                />
                <InputGroup 
                    name="password"
                    onChange={onChange}
                    value={password}
                    placeholder="Password"
                />
                <button className="btn btn-primary btn-block">
                    Login
                </button>
                <div className="login-terms">
                    <p>
                        By clicking on "Log In" you agree to the 
                        <a className="link-text"> Terms of Use </a> 
                        and 
                        <a className="link-text"> Privacy Policy </a> 
                        of delivery.com
                    </p>
                </div>
                <div className="login-check">
                    <CheckGroup 
                        name="logged"
                        value={logged}
                        checked={logged}
                        label="Keep me logged in to my account"
                        labelPosition="right"
                        onChange={onChange}
                    />
                </div>
                <div className="login-forgot">
                    <a 
                        onClick={()=>changeLoginType('password')}
                        className="link-text">Forgot your password ? </a> 
                </div>
                <div className="login-or">
                    <span>or</span>
                </div>
                <button className="login-socials-button">
                    <div className="login-socials__icon">
                        <span class="iconify" data-icon="bx:bxl-facebook-circle" data-inline="false"></span>
                    </div>
                    <div className="login-socials__text">
                        Sign in with Facebook
                    </div>
                </button>
                <button className="login-socials-button">
                    <div className="login-socials__icon">
                        <span class="iconify" data-icon="ant-design:google-circle-filled" data-inline="false"></span>
                    </div>
                    <div className="login-socials__text">
                        Sign in with Google
                    </div>
                </button>
            </form>
        </>
    )
}


const SignInputs = () =>{
    const [first,setFirst] = useState('');
    const [last,setLast] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [logged,setLogged] = useState(false);

    const onChange = (e) =>{
        const {name,value} = e.target;
        if(name === 'email'){
            setEmail(value)
        }
        if(name === 'password'){
            setPassword(value)
        }
        if(name === 'logged'){
            setLogged(value)
        }
        if(name === 'first'){
            setFirst(value)
        }
        if(name === 'last'){
            setLast(value)
        }
    }
    return(
        <>
        <div className="login-title">
                <h3>Log in to your account</h3>
            </div>
            <form className="login-form">
                <InputGroup 
                    name="first"
                    onChange={onChange}
                    value={first}
                    placeholder="First Name"
                />
                <InputGroup 
                    name="last"
                    onChange={onChange}
                    value={last}
                    placeholder="Last Name"
                />
                <InputGroup 
                    name="email"
                    onChange={onChange}
                    value={email}
                    placeholder="Email Address"
                />
                <InputGroup 
                    name="password"
                    onChange={onChange}
                    value={password}
                    placeholder="Password"
                />
                <button className="btn btn-primary btn-block">
                    Login
                </button>
                <div className="login-terms">
                    <p>
                        By clicking on "Log In" you agree to the 
                        <a className="link-text"> Terms of Use </a> 
                        and 
                        <a className="link-text"> Privacy Policy </a> 
                        of delivery.com
                    </p>
                </div>
                <div className="login-check">
                    <CheckGroup 
                        name="logged"
                        value={logged}
                        checked={logged}
                        label="Keep me logged in to my account"
                        labelPosition="right"
                        onChange={onChange}
                    />
                </div>
                <div className="login-or">
                    <span>or</span>
                </div>
                <button className="login-socials-button">
                    <div className="login-socials__icon">
                        <span class="iconify" data-icon="bx:bxl-facebook-circle" data-inline="false"></span>
                    </div>
                    <div className="login-socials__text">
                        Sign in with Facebook
                    </div>
                </button>
                <button className="login-socials-button">
                    <div className="login-socials__icon">
                        <span class="iconify" data-icon="ant-design:google-circle-filled" data-inline="false"></span>
                    </div>
                    <div className="login-socials__text">
                        Sign in with Google
                    </div>
                </button>
            </form>
        </>
    )
}

export default Login
