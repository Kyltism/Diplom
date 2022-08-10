import './Registration.css';
import Header from '../MainPage/Header/Header';
import Footer from '../MainPage/Footer/Footer';
import Tabs from '../Tabs/Tabs';


export default function Registration() {
    return (
        <div className='wrapper'>
            <Header />
            <div className='Registration'>
                <div>
                    <Tabs />
                    <div className='formLogin'>
                    <form className='email'>
                        <label>Email </label>
                        <input className='forms' type="text" placeholder="Your email" />
                    </form>
                    <form className='formPassword'>
                        <label>Password </label>
                        <input className='forms' type="text" placeholder="Your password" />
                        <span className='login-form__pass-lost'>Forgot password?</span>
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