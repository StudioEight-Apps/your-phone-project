import tripsAppScreenshot from "@/assets/trips-app-screenshot.png";

const PhoneMockup = () => {
  return (
    <div className="relative w-[320px] h-[650px] md:w-[380px] md:h-[770px]">
      {/* Phone frame */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-900 rounded-[50px] md:rounded-[60px] shadow-2xl">
        {/* Inner bezel */}
        <div className="absolute inset-[3px] bg-gradient-to-br from-zinc-600 to-zinc-800 rounded-[47px] md:rounded-[57px]">
          {/* Screen area */}
          <div className="absolute inset-[10px] md:inset-[12px] bg-black rounded-[38px] md:rounded-[46px] overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[100px] md:w-[120px] h-[30px] md:h-[35px] bg-black rounded-full z-10" />
            
            {/* App screenshot */}
            <img 
              src={tripsAppScreenshot} 
              alt="Trips App" 
              className="w-full h-full object-cover object-top"
            />
            
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] md:w-[140px] h-[5px] bg-white/50 rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Side buttons - Volume */}
      <div className="absolute left-[-2px] top-[120px] w-[3px] h-[30px] bg-zinc-700 rounded-l-sm" />
      <div className="absolute left-[-2px] top-[160px] w-[3px] h-[55px] bg-zinc-700 rounded-l-sm" />
      <div className="absolute left-[-2px] top-[225px] w-[3px] h-[55px] bg-zinc-700 rounded-l-sm" />
      
      {/* Side button - Power */}
      <div className="absolute right-[-2px] top-[180px] w-[3px] h-[80px] bg-zinc-700 rounded-r-sm" />
    </div>
  );
};

export default PhoneMockup;
