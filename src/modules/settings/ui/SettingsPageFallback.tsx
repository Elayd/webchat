import { Skeleton } from "@/common/ui/Skeleton/Skeleton.tsx";

const SettingsPageFallback = () => {
  return (
    <div className="h-full w-full bg-gray-800 flex justify-center py-8 px-4">
      <Skeleton className="absolute top-4 left-4 px-4 py-2 h-10 w-[72px] bg-gray-600" />

      <div className="max-w-md w-full">
        <div className="flex justify-center mb-6">
          <Skeleton className="h-[96px] w-[96px] rounded-full bg-gray-700" />
        </div>

        <div className="flex justify-center items-center py-4">
          <Skeleton className="w-full max-w-md p-6  rounded-3xl bg-gray-700">
            <Skeleton className="rounded-xl bg-gray-600 mb-6 w-full h-[32px]" />
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col mb-4">
                <Skeleton className="rounded-xl w-full h-[64px] bg-gray-600 mb-4  p-2" />
                <Skeleton className="rounded-xl w-full h-[64px] bg-gray-600 mb-4 p-2" />
                <Skeleton className="h-11 rounded-xl px-8 bg-gray-600 w-full mt-4" />
                <Skeleton className="h-11 rounded-xl px-8 bg-gray-600 w-full mt-4" />
              </div>
            </div>
          </Skeleton>
        </div>

        <div className="mt-6 flex justify-center">
          <Skeleton className="h-9 rounded-md px-3 bg-gray-600 w-[219px]" />
        </div>
      </div>
    </div>
  );
};

export default SettingsPageFallback;
