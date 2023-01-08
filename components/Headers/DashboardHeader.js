const DashboardHeader = ({ children }) => {
  return (
    <>
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">{children}</div>
      </div>
    </>
  );
};

export default DashboardHeader;
