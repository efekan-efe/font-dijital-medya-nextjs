import { Phone } from "lucide-react";
import { CustomButton } from "./CustomButton";

const FaqCallUs = () => {
  return (
    <div className="max-w-7xl mx-auto w-full h-full flex flex-col gap-3 p-5 border border-primaryColor rounded-t-2xl">
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div className="flex flex-col text-primaryColor leading-7">
          <h3 className="text-xl font-semibold">Sorunuz mu var?</h3>
          <p className="text-primaryColor">Cevabını bulamadığınız sorularınız mı var? Lütfen yandaki butonu kullanarak bize ulaşın.</p>
        </div>

        <CustomButton className="max-w-[198px] w-full" variant="emptyButton" leftComponent={<Phone className="" />}>
          Hemen Görüş
        </CustomButton>
      </div>
    </div>
  );
};

export default FaqCallUs;
