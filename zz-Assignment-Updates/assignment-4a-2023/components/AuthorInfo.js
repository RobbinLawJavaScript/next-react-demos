import Typography from "@mui/material/Typography"

export default function AuthorInfo(props) {
	return <>
		<Typography
			component="h1"
			variant="h4"
			align="center"
			color="text.primary"
			gutterBottom
		>
			{props.author.name}
		</Typography>
		<Typography  align="center" color="text.primary" paragraph>
			{props.author.birth_date} - {props.author.death_date ? props.author.death_date : "Present Day"}
		</Typography>
	</>
	
}