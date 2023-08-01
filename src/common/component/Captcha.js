import 'common/css/captcha.css'

import React,{useState,useCallback,useEffect} from 'react'

const Captcha = ({onChanged,className})=> {
	const [codes, setCodes] = useState([])
	const [value, setValue] = useState('')
	const [bColor,setBColor] = useState('')
	const refreshCode = () => {
			let bRgb = [Math.round(Math.random() * 20)+220, Math.round(Math.random() * 20)+220, Math.round(Math.random() * 20)+220]
			setBColor(`rgb(${bRgb})`)
			let codeList = [],
					chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789'
      for (let i = 0; i < 4; i++) {
        let rgb = [Math.round(Math.random() * 220), Math.round(Math.random() * 240), Math.round(Math.random() * 200)]
        codeList.push({
          code: chars.charAt(Math.floor(Math.random() * chars.length)),
          color: `rgb(${rgb})`,
          fontSize: `1${Math.floor(Math.random() * 10)}px`,
          padding: `${Math.floor(Math.random() * 10)}px`,
          transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)`
        })
      }
			setCodes(codeList)
			const v = codeList.map((item,index)=>{
				return item.code
			}).join('')
			setValue(v)
			onChanged && onChanged(v)
		}
	const onChange = useCallback(
		refreshCode,
		[]
	)
	const styled = useCallback(
		(item) => {
			const {code,...style} = item
			return {
				style
			}
		},
		[]
	)
	useEffect(() => {
		refreshCode()
	}, [])

	return (<div className={`Captcha ${className}`} 
		onClick={ onChange } style={{backgroundColor:bColor}}>
		{
			codes.map((item,index)=>{
				return <span key={index} {...(styled(item))}>
					{item.code}
				</span> 
			})
		}
	</div>
	)
}
// export default React.memo(Captcha)
export default Captcha