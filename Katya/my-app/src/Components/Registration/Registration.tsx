import './Registration.css';
import Header from '../MainPage/Header/Header';
import Footer from '../MainPage/Footer/Footer';
import { useRef } from "react";


export default function Registration() {

    const tabSignUp = useRef<HTMLDivElement>(null);
    const tabSignIn = useRef<HTMLDivElement>(null);


    const onClickSignUp = () => {
        if (tabSignUp.current && tabSignIn.current) {
            if (tabSignUp.current.classList.contains('close')) {
                tabSignUp.current.classList.remove('close')
                tabSignIn.current.classList.remove('open')

            } else {
                tabSignIn.current.classList.remove('open')
                tabSignUp.current.classList.remove('close')

            }
        }
    }

    const onClickSignIn = () => {
        if (tabSignUp.current && tabSignIn.current) {
            if (tabSignIn.current.classList.contains('open')) {
                tabSignIn.current.classList.add('open')
                tabSignUp.current.classList.add('close')

            } else {
                tabSignUp.current.classList.add('close')
                tabSignIn.current.classList.add('open')

            }
        }
    }

    return (
        <div className='wrapper'>
            <Header />
            <div className='Registration open' ref={tabSignIn}>
                <div className='Buttns'>
                    <div className="wrapperTabs">
                        <div className="tabs">
                            <div className="tab" onClick={onClickSignIn}>SIGN IN</div>
                            <div className="tab" onClick={onClickSignUp}>SIGN UP</div>
                        </div>
                    </div>
                    <div className='formLogin'>
                        <form className='email'>
                            <label>Email </label>
                            <input className='forms' type="text" placeholder="Your email" />
                        </form>
                        <form className='formPassword'>
                            <label>Password </label>
                            <input className='forms' type="text" placeholder="Your password" />

                        </form>
                        <form>
                            <button className='btnSignIn'>SIGN IN</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='RegistrationSignUp close' ref={tabSignUp}>
                <div className='Buttns'>
                <div className="wrapperTabs">
                        <div className="tabs">
                            <div className="tab" onClick={onClickSignIn}>SIGN IN</div>
                            <div className="tab" onClick={onClickSignUp}>SIGN UP</div>
                        </div>
                    </div>
                    <div className='formLogin'>
                        <form className='name'>
                            <label>Name </label>
                            <input className='forms' type="text" placeholder="Your email" />
                        </form>
                        <form className='email'>
                            <label>Email </label>
                            <input className='forms' type="text" placeholder="Your name" />
                        </form>
                        <form className='formPassword'>
                            <label>Password </label>
                            <input className='forms' type="text" placeholder="Your password" />
                        </form>
                        <form className='confirmPassword'>
                            <label>Confirm password </label>
                            <input className='forms' type="text" placeholder="Confirm your password" />
                        </form>
                        <form>
                            <button className='btnSignUp'>SIGN UP</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}


{/* <div>   
<form className="formPassword">  
  <label>Password</label> 
  <input type="text"placeholder="" />  
</form>  
</div>  

<div>   
<form>  
  <label>Email </label> 
  <p>Frame 631</p> 
  <input type="text" className={aaa}  placeholder="" />  
</form>  
</div>  */}



{/* <form className="login-form">
    <input title='Email' placeholder='Your email' type='email'></input>
    <input title='Password' placeholder='Your password' type='password'></input>
    <span className='login-form__pass-lost'>forgot password?</span>
    <button name='Sign In' type='submit' />
</form> */}