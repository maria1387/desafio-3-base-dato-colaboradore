const Title = ({label, title, navTitle}) => {
	return (
		<><h1>{title}</h1>
			<h3>{navTitle}</h3>
		<h5>{label}</h5>
		</>
	)
};

export default Title;
