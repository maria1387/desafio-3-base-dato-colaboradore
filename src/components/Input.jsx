 const Input = ({type, placeholder, onChange, className,value, children}) => {
	return (
		<div>
			<input type={type} placeholder={placeholder} className ={className} onChange={onChange}value={value}/>
			{children}
		</div>
	)
};
export default 	Input;