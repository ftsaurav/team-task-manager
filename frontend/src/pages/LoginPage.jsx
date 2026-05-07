import './Login.css'
export default function LoginPage() {

  return (

    <div className="login-container">

      <div className="login-card">

        <h1>Team Task Manager</h1>

        <p>Login to continue</p>

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        <button>Login</button>

      </div>

    </div>
  )
}