import Image from "next/image";
import { redirect } from "next/navigation";

import RegisterForm from "@/components/forms/RegisterForm";
import { getPatient, getUser } from "@/lib/actions/patient.actions";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);
  const patient = await getPatient(userId);

  if (patient) redirect(`/patients/${userId}/new-appointment`);

  return (
    <div className="flex h-screen">
      <section className="remove-scrollbar container h-full flex-1">
        <div className="sub-container max-w-[860px] flex flex-col py-10 h-full">
          <Image
            src="/assets/icons/logo-full.png"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-14 w-fit"
          />

          <RegisterForm user={user} />

          <p className="copyright py-12 mt-auto">© 2024 Health.io</p>
        </div>
      </section>

      <div className="max-w-[390px] h-full">
        <Image
          src="/assets/images/register-img.png"
          height={1000}
          width={1000}
          alt="patient"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
