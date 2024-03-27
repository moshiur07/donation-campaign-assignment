import { useEffect } from 'react';
import { PieChart, Pie, Tooltip, Text } from 'recharts';

const Statistics = () => {
    const data01 = [
        { name: 'Group A', value: 12 },
        { name: 'Group B', value: 4 },
      ];
      
      const data02 = [];
      useEffect(() => {
        const getStoredItems = JSON.parse(localStorage.getItem('donation'))
        console.log(getStoredItems);
        if (getStoredItems) {
            getStoredItems.map(item => data02.push(item))
        }
    }, [])

    console.log(data02.id)
    return (
        <div className="flex justify-center items-center h-screen ">
          <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            data={data01}
            cx="50%"
            cy="50%"
            fill="#8884d8"
            label={<Text  x='66%' y='44% 'fill="white">5</Text>}
          />
          <Pie dataKey='id' data={data02} innerRadius={40} outerRadius={80} fill="#82ca9d" />
          <Tooltip />
        </PieChart>
        </div>
    );
};

export default Statistics;