import React, { useState, useEffect } from 'react';
import './chartStyle.css';
import { Table, Container } from 'reactstrap';

const ChartTable = (props) => {
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        let uri = props.uri + props.chartType;
        const resultSpan = document.getElementById('resultSpan');

        // get the data from the api, and store it in the dataList array of state.
        fetch(uri, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .then(data => setDataList(data)
            )
            .catch(error => resultSpan.innerText = error)
        console.log(uri);
    }, []);

    const charts = dataList.map(
        function (item) {

            let row = <tr><td><a className="chartName">{item.name}</a></td><td><img className="imgThumnail" src={item.imageUrl} alt={item.name} /></td></tr>;
            return row
        });

    return (
        <div>
            <Container fluid>
                <h1>{props.pageTitle}</h1>
            </Container>
            <Table hover responsive>
                <thead>
                    <tr>
                        <th class="tblHeaderName" scope="row">Name</th>
                        <th class="tblHeaderImg">Chart</th>
                    </tr>
                </thead>
                <tbody>
                    {charts}
                </tbody>
            </Table>
            <div id='resultSpan'>
            </div>
        </div>
    )
}
export default ChartTable;