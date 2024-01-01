import OutButton from "./OutButton";
import ProfileNavBar from "@/src/components/ProfileNavBar";
const profile = () => {
  return (
    <>
      <ProfileNavBar name="logout" />
      <div className="flex h-96 w-full items-center justify-center">
        <OutButton />
      </div>
    </>
  );
};

export default profile;
