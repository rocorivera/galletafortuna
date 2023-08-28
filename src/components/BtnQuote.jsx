import getRandomElemArray from "../utils/getRandomElemArray"


const BtnQuote = ({setQuote,phrases,setNumberBg}) => {

    const handleRandomphrase=()=>{
        setQuote(getRandomElemArray(phrases))
        setNumberBg(getRandomElemArray([1,2,3,4]))
    }
  return (
    <button className="btn_gallet" onClick={handleRandomphrase}>destapa otra</button>
  )
}

export default BtnQuote