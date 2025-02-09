import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Toaster, toast } from 'sonner'

const Login = () => {

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [ errores, setErrores] = useState([])

    const validarForm = () =>{
        const errores = [];

        if(!email.trim()){ errores.push({ campo: "email", mensaje: "Debes proporcionar un email"})};
        if(!password.trim()){ errores.push({ campo: "password", mensaje: "Debes proporcionar una contraseña"})};
        if(password.trim().length < 6){ errores.push({ campo: "password", mensaje: "La contraseña debe tener un minimo de 6 caracteres"})};

        setErrores(errores);
        return errores.length === 0;
    }

        
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const esValido = validarForm();

        if (esValido) {
            toast.success("Inicio de sesión completado con exito")

            setEmail("");
            setPassword("");
        }

    }

    const obtenerMensajeError = (campo)=> {
        for (let i = 0; i < errores.length; i++) {
            if(errores[i].campo === campo){
            return errores[i].mensaje
        }
        }
        return null    
    }
    const handleChange = (e) => {
        const { id, value } = e.target;
    
        if (id === "email") setEmail(value);
        if (id === "password") setPassword(value);
    
        setErrores(errores.filter(error => error.campo !== id));
    };
    

    return (
        <div className="bg-orange-50 text-gray-900 flex flex-col justify-center items-center gap-4 p-20">
            <h1 className="text-2xl font-bold">Iniciar sesión</h1>
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
                    className={`border-1 border-gray-500 rounded-lg shadow-md p-2 ${obtenerMensajeError("email") ? "is-invalid": ""}`}
                    value={email}
                    onChange={handleChange}
                />
                { obtenerMensajeError("email") && ( 
                    <div className="invalid-feedback"> {obtenerMensajeError("email")} </div>
                ) }
                </div>

                <div className="flex flex-col gap-1">
                <label htmlFor="password" className="text-gray-500 text-sm">Contraseña</label>
                <div className="relative w-full md:w-[40vw] lg:max-w-lg">
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Contraseña"
                        className={`border-1 border-gray-500 rounded-lg shadow-md p-2 w-full pr-10 ${obtenerMensajeError("password") ? "is-invalid": ""}`}
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
                    { obtenerMensajeError("password") && ( 
                        <div className="invalid-feedback"> {obtenerMensajeError("password")} </div>
                    ) }
                </div>
                
                <button type="submit" className="btn-primary text-white py-2 my-4 rounded-lg">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default Login;
