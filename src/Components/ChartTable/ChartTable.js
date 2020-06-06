import React, { useState, useEffect } from 'react';
import './bullishStyle.css';
import { Table, Container } from 'reactstrap';

const ChatTable = () => {
    const [dataList, setDataList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const chartType = 1;

    useEffect((props) => {
        let uri = 'http://10.211.55.4:8080/api/chart/getbytypeid?id=' + chartType;
        const resultSpan = document.getElementById('resultSpan');

        setIsLoading(true);

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
    }, []);

    const bullishCharts = dataList.map(
        function (item) {

            let row = <tr><td><a className="chartName">{item.name}</a></td><td><img className="imgThumnail" src={item.imageUrl} alt={item.name} /></td></tr>;
            return row
        });

    return (
        <div>
            <Container fluid>
                <h1>Bullish Charts</h1>
            </Container>
            <Table hover responsive>
                <thead>
                    <tr>
                        <th class="tblHeaderName" scope="row">Name</th>
                        <th class="tblHeaderImg">Chart</th>
                    </tr>
                </thead>
                <tbody>
                    {bullishCharts}
                </tbody>
            </Table>
            <div id='resultSpan'>
            </div>
        </div>
    )
}
export default Bullish;