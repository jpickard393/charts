import React from 'react';
import ChartTable from '../ChartTable/ChartTable';

const Bullish = () => {
    const chartType = 1;
    const uri = 'http://10.211.55.4:8080/api/chart/getbytypeid?id=';

    return (
        <div>
            <ChartTable uri={uri} chartType={chartType} pageTitle="Bullish Charts"></ChartTable>
        </div >
    )
}

export default Bullish;