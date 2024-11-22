import { Skeleton } from "@/common/ui/Skeleton/Skeleton";

const SignInPageFallback = () => {
  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <div className="w-full bg-gray-800 flex justify-center items-center">
        <Skeleton className="w-2/6  min-w-[300px]  rounded-3xl flex flex-col p-6 bg-gray-700">
          <Skeleton className="bg-gray-600 text-center mb-6 h-[57px]" />
          <div className="flex flex-col">
            <Skeleton className="rounded-xl w-full h-[64px] bg-gray-600 mb-4  p-2" />
            <Skeleton className="rounded-xl w-full h-[64px] bg-gray-600 mb-4 p-2" />
            <Skeleton className="h-11 rounded-xl px-8 bg-gray-600 w-full mt-4" />
          </div>
          <Skeleton className="text-gray-300 mt-6 h-[48px] bg-gray-600" />
        </Skeleton>
      </div>
      <div className="flex items-center justify-center">
        <Skeleton className="mt-4 rounded-xl w-[193px] h-11 bg-gray-600" />
      </div>
    </div>
  );
};

export default SignInPageFallback;
