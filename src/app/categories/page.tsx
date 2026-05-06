"use client";

import Image from "next/image";
import { DM_Sans, Inter } from "next/font/google";
import { useForm } from "react-hook-form";

type CategoryForm = {
  categories: string[];
};

const inter = Inter({
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
});

const CATEGORY_OPTIONS = [
  { id: "skincare", label: "Skincare" },
  { id: "makeup", label: "Makeup" },
  { id: "haircare", label: "Haircare" },
  { id: "fragrance", label: "Fragrance" },
];

export default function CategoriesPage() {
  const { register, handleSubmit } = useForm<CategoryForm>({
    defaultValues: {
      categories: [],
    },
  });

  const onSubmit = (data: CategoryForm) => {
    console.log("Selected Categories:", data);
  };

  return (
    <main className="flex min-h-screen flex-col bg-white md:h-screen md:flex-row md:overflow-hidden">
      <section className="relative w-full md:w-1/2 h-[40vh] md:h-screen">
        <Image
          src="/category/category-image.jpg" // verbatum reference
          alt="Product"
          fill
          priority
          className="object-contain md:object-cover"
          sizes="50vw"
        />
      </section>

      <section className="flex w-full flex-1 px-6 py-12 md:h-full md:justify-start md:px-0 md:py-0">
        <div className="w-full max-w-[410px] md:ml-[22px] md:mt-[157px]">
          <h1
            className={`${dmSans.className} mb-[13px] text-[20px] font-bold leading-[1.2] text-black`}
          >
            What categories are you interested in?
          </h1>
          <p
            className={`${dmSans.className} mb-[41px] max-w-[390px] text-[11px] leading-[1.35] text-black`}
          >
            Choose the types of beauty products you want to sell. You can select
            more than one.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-[23px]">
              {CATEGORY_OPTIONS.map((option) => (
                <label
                  key={option.id}
                  className="group flex cursor-pointer items-center gap-[11px]"
                >
                  <div className="relative flex items-center justify-center">
                    <input
                      type="checkbox"
                      value={option.id}
                      {...register("categories")}
                      className="peer h-[18px] w-[18px] cursor-pointer appearance-none rounded-full border border-[#a9a9a9] bg-white transition-colors checked:border-[#9f3a48] checked:bg-[#9f3a48] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9f3a48]"
                    />
                    <span className="pointer-events-none absolute h-[6px] w-[6px] rounded-full bg-white opacity-0 peer-checked:opacity-100" />
                  </div>
                  <span
                    className={`${dmSans.className} text-[11px] leading-none text-black transition-colors`}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>

            <div className="mt-[40px] flex items-center justify-end gap-[13px] md:mr-[1px]">
              <button
                type="button"
                onClick={() => window.history.back()}
                className={`${inter.className} h-[26px] min-w-[51px] rounded-[5px] border border-[#c7c7c7] bg-white px-[13px] text-[12px] font-semibold leading-none text-black transition-colors hover:bg-zinc-50`}
              >
                Back
              </button>
              <button
                type="submit"
                className={`${inter.className} h-[26px] min-w-[51px] rounded-[5px] bg-[#a83b4a] px-[13px] text-[12px] font-semibold leading-none text-white transition-colors hover:bg-[#922f3d]`}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
