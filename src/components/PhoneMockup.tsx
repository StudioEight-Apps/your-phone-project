import tripsAppScreenshot from "@/assets/trips-app-screenshot.png";

const PhoneMockup = () => {
  return (
    <div className="relative w-[280px] h-[570px] md:w-[320px] md:h-[650px] lg:w-[360px] lg:h-[730px]">
      {/* Phone frame - black titanium style */}
      <div className="absolute inset-0 rounded-[45px] md:rounded-[50px] lg:rounded-[55px] shadow-2xl"
        style={{
          background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 25%, #0d0d0d 50%, #1f1f1f 75%, #2d2d2d 100%)',
        }}
      >
        {/* Inner bezel */}
        <div 
          className="absolute inset-[2px] rounded-[43px] md:rounded-[48px] lg:rounded-[53px]"
          style={{
            background: 'linear-gradient(160deg, #252525 0%, #1a1a1a 50%, #0f0f0f 100%)',
          }}
        >
          {/* Screen area */}
          <div className="absolute inset-[8px] md:inset-[10px] bg-black rounded-[36px] md:rounded-[40px] lg:rounded-[44px] overflow-hidden">
            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] md:w-[100px] lg:w-[110px] h-[28px] md:h-[32px] lg:h-[34px] bg-black rounded-full z-10" />
            
            {/* App screenshot */}
            <img 
              src={tripsAppScreenshot} 
              alt="Trips App" 
              className="w-full h-full object-cover object-top"
            />
            
            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] md:w-[120px] lg:w-[130px] h-[4px] md:h-[5px] bg-white/40 rounded-full" />
          </div>
        </div>
      </div>
      
      {/* Side buttons - Volume (left) */}
      <div 
        className="absolute left-[-2px] top-[100px] md:top-[110px] lg:top-[120px] w-[3px] h-[25px] md:h-[28px] rounded-l-sm"
        style={{ background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)' }}
      />
      <div 
        className="absolute left-[-2px] top-[135px] md:top-[148px] lg:top-[160px] w-[3px] h-[45px] md:h-[50px] rounded-l-sm"
        style={{ background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)' }}
      />
      <div 
        className="absolute left-[-2px] top-[190px] md:top-[208px] lg:top-[220px] w-[3px] h-[45px] md:h-[50px] rounded-l-sm"
        style={{ background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)' }}
      />
      
      {/* Side button - Power (right) */}
      <div 
        className="absolute right-[-2px] top-[150px] md:top-[165px] lg:top-[180px] w-[3px] h-[65px] md:h-[75px] rounded-r-sm"
        style={{ background: 'linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%)' }}
      />
    </div>
  );
};

export default PhoneMockup;
