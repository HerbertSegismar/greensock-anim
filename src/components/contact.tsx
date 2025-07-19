import { SignupForm } from "./ui/signupForm";

const about = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-amber-300 text-5xl font-bold z-50">
      <div className="top-10">
        <SignupForm />
      </div>
    </div>
  );
};

export default about;
