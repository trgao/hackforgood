import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const FilterForm = ({ data }) => {
    const [filter, setFilter] = useState("")
    useEffect(() => {
        console.log(data)
    }, [data])

    function handleFilterChange(e) {
        setFilter(e.target.value);
    }

    return (
    <div id="cards">
        <h4>Find a buddy!</h4>
        <TextField
            label="Find by type of disability"
            value={filter}
            onChange={handleFilterChange}
            style={{ minWidth: '350px', width: '600px' }}
        />

        {data && data.filter(el => el.disability.includes(filter)).map((element, index) => {
            return (
            <Card 
                key = {index} 
                sx={{ minWidth: '350px', width: '600px' }}
                variant="outlined"
            >
            <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                {element.name}
                </Typography>
                <Typography variant="h5" component="div">
                {element.disability}
                </Typography>
                <Typography variant="h5" component="div">
                {element.neighbourhood}
                </Typography>
                <Typography variant="h5" component="div">
                {element.type}
                </Typography>
                <Typography variant="p" component="div">
                Description: {element.description}
                </Typography>
            </CardContent>
            </Card>
            )
        // }    
        })}
        </div>
    )
}

export default FilterForm;