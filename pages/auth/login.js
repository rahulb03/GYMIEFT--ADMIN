import React from "react";
import AuthLayout from "../../Layout/AuthLayout";
import FormComponent from "../../Components/Form/Form";
import HeadComponent from "../../Components/Head/Head";
import { useRouter } from "next/router";
import { BASE_URL } from "../../Config/config_c";

const Login = () => {
    const router = useRouter()

    return (
        <>
            <HeadComponent title='Login' />
            <div className="box-wrapper">
                <div className="log-in-box">
                    <div className="log-in-title">
                        <h3>Welcome To Fastkart</h3>
                        <h4>Log In Your Account</h4>
                    </div>
                    <div>
                        <FormComponent
                            isRedux={true}
                            stateName='Auth'
                            action={'login'}
                            fields={[
                                {
                                    label:'email',
                                    name:'email',
                                    required:true,
                                },
                                {
                                    type:'password',
                                    label:'password',
                                    name:'password',
                                    required:true,
                                },
                            ]}
                            button='sign in'
                            buttonClass='w-100'
                            hideReset={true}
                            onSubmit={(e) => {
                                if (e?.status == 200) {
                                    window.location = `${BASE_URL}dashboard`
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

Login.getLayout = (Login) => <AuthLayout>{Login}</AuthLayout>;
export default Login;
