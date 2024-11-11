import bgBanner from '../../assets/banner-bg.png'
import gamePad1 from  '../../assets/GamePad.png'
import gamePad2 from  '../../assets/GamePad Layer2.png'


function Hero() {
    return (
        <div className="relative w-full h-[956px] text-left font-IowanOldStyle text-[30px] text-white">
            <img className="absolute top-0 left-0 w-[1828px] h-[956px] object-cover" alt="" src={bgBanner}/>

            <div className="absolute top-[520px] left-[125px] inline-block w-[864px]">
        <span>
          {`Enjoy an ultimate gaming experience with hundreds of high-quality games, playing with friends on `}
        </span>
                <span className="text-[#e46767]">console, PC, and cloud</span>
                <span>
          . With new games launching constantly, there’s always something fresh to dive into from day one!
        </span>
            </div>
            <div
                className="absolute top-[288px] left-[66px] w-[962px] h-[227px] text-[#e46767] font-roboto text-[170px]">
                <div className="absolute top-[28px] left-[21px] font-extrabold blur-[20px] animate-slow-blink">
                    <span>Game</span>
                    <span className="text-white">Cloud.</span>
                </div>
                <div className="absolute top-0 left-0 font-extrabold ">
                    <span>Game</span>
                    <span className="text-white">Cloud.</span>
                </div>
            </div>
            <div className="absolute top-[420px] left-[943px] w-[818px] h-[474px]">
                <img
                    className="absolute top-[44px] left-0 w-[766px] h-[430px] object-cover opacity-70 blur-lg"
                    alt=""
                    src={gamePad1}
                />
                <img className="absolute top-0 left-[35px] w-[783px] h-[440px] object-cover" alt=""
                     src={gamePad2}/>
                <div
                    className="absolute top-[379px] left-[134px] blur-[50px] rounded-full bg-black w-[586px] h-[84px]"/>
            </div>
        </div>
    )
}

export default Hero;