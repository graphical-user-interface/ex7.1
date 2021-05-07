import React, { useState } from "react"
import Box from "@material-ui/core/Box"
import TextField from "@material-ui/core/TextField"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import Slider from "@material-ui/core/Slider"
import { makeStyles } from "@material-ui/core/styles"
import { Pie, PieChart } from "recharts"

const useStyles = makeStyles({
	container: {},
	text: {
		paddingTop: 10,
		paddingBottom: 10,
	},
})

const App = () => {
	const classes = useStyles()
	const [name, setName] = useState("")
	const [value, setValue] = useState(1)
	const [data, setData] = useState([])

	const handleName = (e) => {
		setName(e.target.value)
	}
	const handleSlider = (e, newValue) => {
		setValue(newValue)
	}
	const handleData = () => {
		if (name !== "") {
			let newData = [...data]
			newData.push({ name: name, value: value })
			setData(newData)
		}
	}
	return (
		<Container maxWidth='sm' className={classes.container}>
			<Box>
				<Typography className={classes.text}>Value</Typography>
				<TextField onChange={handleName} variant='outlined' />
				<Typography className={classes.text}>Value</Typography>
				<Slider onChange={handleSlider} min={1} max={100} />
				<Button
					variant='contained'
					color='primary'
					onClick={handleData}>
					Add
				</Button>
			</Box>
			{data && (
				<Box width={400} height={300}>
					<PieChart width={400} height={300}>
						<Pie
							data={data}
							dataKey='value'
							nameKey='name'
							cx='50%'
							cy='50%'
							fill='#82ca9d'
							label={(entry) => entry.name}
						/>
					</PieChart>
				</Box>
			)}
		</Container>
	)
}

export default App
