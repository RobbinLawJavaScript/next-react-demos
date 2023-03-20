import {Fragment} from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { POPULAR_AUTHORS } from '../utils/constants/popular_authors';

export default function PopularAuthorsList(props) {
	return (
	<Box sx={{width: '100%'}}>
		<Typography
			component="h1"
			variant="h4"
			align="center"
			color="text.primary"
			gutterBottom
		>
			Popular Authors
		</Typography>
		<List sx={{width: '100%'}}>
			<Divider />
			{POPULAR_AUTHORS.map((author, index)=> {
			return (
			<Fragment key={index}>
				<ListItem
				secondaryAction={
					<Button
					onClick={()=> {props.setAuthorKey(author.key)}}
					>show</Button>
				}
				>
					<ListItemText primary={author.name}></ListItemText>
				</ListItem>
				<Divider />
			</Fragment>
			)
			})}
		</List>
	</Box>
	)
}