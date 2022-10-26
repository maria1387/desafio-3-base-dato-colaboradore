const Button = ({type, className, onClick, children}) => {
	return (
		<div className="containerButton">
			<button type={type} className={className} onClick={onClick}>{children}</button>
		</div>
	)
};

export default Button;
