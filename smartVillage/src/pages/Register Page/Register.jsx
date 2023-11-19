import './Register.css'
const Register = () => {
    return (
        <div className="body">
            <div className="wrapper-register">
                <form className="register-form" action="">
                    <h1>Register</h1>

                    {/* Nama Panjang */}
                    <div className="input-box">
                        <div className="input-field">
                            <input type="text" placeholder="Nama Panjang" required />
                        </div>

                        {/* Jenis kelamin */}
                        <div className="input-field">
                            <input type="text" placeholder="Jenis Kelamin" required />
                        </div>
                    </div>

                    {/* Alamat */}
                    <div className="input-box">
                        <div className="input-field">
                            <input type="text" placeholder="Alamat" required />
                        </div>

                        {/* Email */}
                        <div className="input-field">
                            <input type="email" placeholder="Email" required />
                        </div>
                    </div>

                    {/* Tanggal Lahir */}
                    <div className="input-box">
                        <div className="input-field">
                            <input type="date" placeholder="Tanggal Lahir" required />
                        </div>

                        {/* Nomor Telpon */}
                        <div className="input-field">
                            <input type="tel" placeholder="Nomor Telpon" required />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="input-box">
                        <div className="input-field">
                            <input type="password" placeholder="Password" required />
                        </div>

                        {/* Konfirmasi Password */}
                        <div className="input-field">
                            <input type="password" placeholder="Konfirmasi Password" required />
                        </div>
                    </div>

                    <label>
                        <input type="checkbox" />
                        Saya dengan ini menyatakan bahwa informasi yang diberikan di atas
                        adalah benar dan tepat
                    </label>

                    <button type="submit" className="btn">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}
export default Register;

// const Register = () => {
//     return (
//         <div className="body">

//             <div className="wrapper">
//                 <form action="">
//                     <h1>Register</h1>

//                     {/* Nama Panjang */}
//                     <div className="input-box">
//                         <div className="input-field">
//                             <input type="text" placeholder="Nama Panjang" required />
//                         </div>

//                         {/* Jenis kelamin */}
//                         <div className="input-field">
//                             <input type="text" placeholder="Jenis Kelamin" required />
//                         </div>
//                     </div>

//                     {/* Alamat */}
//                     <div className="input-box">
//                         <div className="input-field">
//                             <input type="text" placeholder="Alamat" required />
//                         </div>

//                         {/* Email */}
//                         <div className="input-field">
//                             <input type="email" placeholder="Email" required />
//                         </div>
//                     </div>

//                     {/* Tanggal Lahir */}
//                     <div className="input-box">
//                         <div className="input-field">
//                             <input type="date" placeholder="Tanggal Lahir" required />
//                         </div>

//                         {/* Nomor Telpon */}
//                         <div className="input-field">
//                             <input type="tel" placeholder="Nomor Telpon" required />
//                         </div>
//                     </div>

//                     {/* Password */}
//                     <div className="input-box">
//                         <div className="input-field">
//                             <input type="password" placeholder="Password" required />
//                         </div>

//                         {/* Konfirmasi Password */}
//                         <div className="input-field">
//                             <input type="password" placeholder="Konfirmasi Password" required />
//                         </div>
//                     </div>

//                     <label>
//                         <input type="checkbox" />
//                         Saya dengan ini menyatakan bahwa informasi yang diberikan di atas
//                         adalah benar dan tepat
//                     </label>

//                     <button type="submit" className="btn">
//                         Register
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Register;