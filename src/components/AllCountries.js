import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1000,
        margin: '0 auto',
        marginTop: 50,
        marginBottom: 70,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
        color: '#4892A2',
        textTransform: 'uppercase',
    }
    
}));

export default function GlobalStats() {
    const [globalData, setGlobalData] = useState([{}]);

    useEffect(() => {
        async function getData() {
            const responce = await fetch("https://coronavirus-19-api.herokuapp.com/countries");
            let data = await responce.json();

            setGlobalData(Object.values(data));
            console.log(Object.values(data));
        }
        getData();
    }, [])

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <table>
                <tr>
                    <td><b>Country Name &nbsp;</b></td>
                    <td><b>Total Cases &nbsp;&nbsp;</b></td>
                    <td><b>Today Cases &nbsp;&nbsp;</b></td>
                    <td><b>Total Death &nbsp;&nbsp;</b></td>
                    <td><b>Today Deaths &nbsp;&nbsp;</b></td>
                    <td><b>Total Recovered &nbsp;&nbsp;</b></td>
                    <td><b>Active Casses &nbsp;&nbsp;</b></td>
                </tr>
                {globalData.map((key, ind) => {
                    return (
                        <tr>
                            <td>
                                {globalData[ind].country}
                            </td>
                            <td>
                                {globalData[ind].cases}

                            </td>
                            <td>
                                {globalData[ind].todayCases}
                            </td>
                            <td>
                                {globalData[ind].deaths}
                            </td>
                            <td>
                                {globalData[ind].todayDeaths}
                            </td>
                            <td>
                                {globalData[ind].recovered}
                            </td>
                            <td>
                                {globalData[ind].active}
                            </td>
                        </tr>

                    )
                })}
            </table>
        </div>
    );
}
