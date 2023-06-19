import { useForm } from "react-hook-form"
// import "./index.css"
// eslint-disable-next-line no-unused-vars, react-refresh/only-export-components
function Login() {
  // eslint-disable-next-line no-unused-vars
  const { getValues, register, handleSubmit } = useForm()

  const onSubmit = data => {
    console.log(data)
  }
  return (
    //login page 
    <>
      <section className="h-full grid grid-cols-6 gap-4">
        <section className="lg:col-span-4 col-span-6 m-4 justify-center">
          <div className="flex flex-col justify-center my-4 items-center"> 
            <div className="text-center">
              <img
                className="max-w-xs max-h-32"
                src="https://bootcamp.sa/static/media/tuwaiq-logo-header.38424b35.svg"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-full flex flex-col p-3 rounded-md bg-white max-w-sm">
              <h1 className="w-full my-4 p-2 text-center font-bold text-xl">
                تسجيل الدخول
              </h1>
              <div>
                <form onSubmit={handleSubmit(onSubmit)} border>
                  <fieldset>
                    <label className="block font-bold" htmlFor="username">
                      اسم المستخدم أو البريد الإلكتروني
                    </label>
                  
                    <input
                      className="w-full my-4 p-2 border-2 rounded-md"
                      {...register("username")}
                      type="text"
                      id="username"
                      placeholder="username"
                      required
                    />
                  </fieldset>
                  <fieldset>
                    <label className="block font-bold" htmlFor="password">
                      كلمة المرور
                    </label>
                    <input
                      className="w-full my-4 p-2 border-2 rounded-md"
                      {...register("password")}
                      type="password"
                      id="password"
                      placeholder="password"
                      required
                    />
                  </fieldset>
                  <fieldset className="flex justify-between">
                    <label className="font-bold" htmlFor="remaber-me">
                      <input
                        className="ml-1.5"
                        type="checkbox"
                        id="remaber-me"
                      />
                      <span>تذكرني</span>
                    </label>
                    <a href="/forget-password">نسيت كلمة المرور؟</a>
                  </fieldset>
                  <button
                    className="w-full my-4 px-2 py-3  text-white rounded-md"
                    type="submit"
                    style={{backgroundColor:"#818EFF"}}
                  >
                    دخول
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-2 lg:block hidden">
          <img
            className="h-screen object-cover"
            src="https://c.top4top.io/p_2725gygyo1.png"

            
          />
        </section>
      </section>
    </>
  )
}

export default Login;