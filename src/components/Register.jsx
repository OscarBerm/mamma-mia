import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Toaster, toast } from 'sonner'


const Register = () => {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [ errors, setErrors] = useState([]);

    const validateForm = () =>{
        const errors = [];

        if(!email.trim()){ errors.push({ field: "email", message: "Debes proporcionar un email"})};
        if(!password.trim()){ errors.push({ field: "password", message: "Debes proporcionar una contraseña"})};
        if(!confirmPassword.trim()){ errors.push({ field: "confirmPassword", message: "Necesitas confirmar tu contraseña"})};
        if(password.trim().length < 6){ errors.push({ field: "password", message: "La contraseña debe tener un minimo de 6 caracteres"})};
        if( password.trim() !== confirmPassword.trim() ){ errors.push({ field: "confirmPassword", message: "Las contraseñas no coinciden"})};

        setErrors(errors);
        return errors.length === 0;
    }

        
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const isValid = validateForm();

        if (isValid) {
            toast.success("Registro completado con exito")

            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }
    }

    const getErrorMessage = (field)=> {
        for (let i = 0; i < errors.length; i++) {
            if(errors[i].field === field){
            return errors[i].message
        }
        }
        return null    
    }
    const handleChange = (e) => {
        const { id, value } = e.target;
    
        if (id === "email") setEmail(value);
        if (id === "password") setPassword(value);
        if (id === "confirmPassword") setConfirmPassword(value);
    
        setErrors(errors.filter(error => error.field !== id));
    }
    
    return (
        <div className="bg-orange-50 text-gray-900 flex flex-col justify-center items-center gap-4 p-20">
            <h1 className="text-2xl font-bold">Registrarse</h1>
            <Toaster position="top-center" expand={true} richColors />

            <form onSubmit={handleSubmit} action="" className="w-full md:w-[40vw] lg:max-w-lg flex flex-col gap-4">

                <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-gray-500 text-sm">Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    placeholder="name@example.com"
                    minLength={5}
                    maxLength={50}
                    className={`border-1 border-gray-500 rounded-lg shadow-md p-2 ${getErrorMessage("email") ? "is-invalid": ""}`}
                    value={email}
                    onChange={handleChange}
                />
                { getErrorMessage("email") && ( 
                    <div className="invalid-feedback"> {getErrorMessage("email")} </div>
                ) }
                </div>

                <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-gray-500 text-sm">Contraseña</label>
                <div className="relative w-full md:w-[40vw] lg:max-w-lg">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Contraseña"
                        className={`border-1 border-gray-500 rounded-lg shadow-md p-2 w-full pr-10 ${getErrorMessage("password") ? "is-invalid": ""}`}
                        value={password}
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        className="btn-password absolute inset-y-0 right-3 flex items-center"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                        ) : (
                            <Eye className="w-5 h-5" />
                        )}
                    </button>
                </div>
                    { getErrorMessage("password") && ( 
                        <div className="invalid-feedback"> {getErrorMessage("password")} </div>
                    ) }
                </div>
                
                <div className="flex flex-col gap-1">
                <label htmlFor="confirm-password" className="text-gray-500 text-sm">Confirmar contraseña</label>
                <div className="relative w-full md:w-[40vw] lg:max-w-lg">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmPassword"
                        placeholder="Confirmar contraseña"
                        className={`border-1 border-gray-500 rounded-lg shadow-md p-2 w-full pr-10 ${getErrorMessage("confirmPassword") ? "is-invalid": ""}`}
                        value={confirmPassword}
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        className="btn-password absolute inset-y-0 right-3 flex items-center"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? (
                            <EyeOff className="w-5 h-5" />
                        ) : (
                            <Eye className="w-5 h-5" />
                        )}
                    </button>
                </div>
                    { getErrorMessage("confirmPassword") && ( 
                        <div className="invalid-feedback"> {getErrorMessage("confirmPassword")} </div>
                    ) }
                </div>

                <button type="submit" className="btn-primary text-white py-2 my-4 rounded-lg">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;
