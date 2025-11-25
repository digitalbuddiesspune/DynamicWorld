import MBBSInBangladesh, {
  MBBSInGeorgia,
  MBBSInKazakhstanKyrgyzstan,
  MBBSInRussia,
  MBBSInUzbekistanPhilippines,
} from "../components/StudyAbroadCountriesList";

const StudyAbroad = () => {
  return (
    <div className="overflow-hidden text-xs bg-[#F8F3ED]">
      <MBBSInGeorgia />
      <MBBSInRussia />
      <MBBSInKazakhstanKyrgyzstan />
      <MBBSInUzbekistanPhilippines />
      <MBBSInBangladesh />
    </div>
  );
};

export default StudyAbroad;
